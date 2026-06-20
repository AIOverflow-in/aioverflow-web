// Server-side enrichment for contact submissions: client IP, Vercel geo,
// optional ISP / proxy lookup via ipapi.co, and user-agent parsing.

import { headers } from "next/headers";

export type ServerContext = {
  ip: string | null;
  geo: {
    city: string | null;
    region: string | null;
    country: string | null; // human-readable name when available
    countryCode: string | null;
    timezone: string | null;
    latitude: string | null;
    longitude: string | null;
    org: string | null; // ISP / organization
    asn: string | null;
    proxy: boolean | null;
  };
  ua: {
    raw: string | null;
    device: "Desktop" | "Mobile" | "Tablet" | "Bot" | "Unknown";
    os: string;
    browser: string;
  };
};

function decode(value: string | null): string | null {
  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function parseUA(ua: string | null) {
  const result = {
    raw: ua,
    device: "Unknown" as ServerContext["ua"]["device"],
    os: "Unknown",
    browser: "Unknown",
  };
  if (!ua) return result;

  if (/bot|crawler|spider|crawling/i.test(ua)) {
    result.device = "Bot";
  } else if (/iPad|Tablet|(android(?!.*mobile))/i.test(ua)) {
    result.device = "Tablet";
  } else if (/Mobi|iPhone|iPod|Android.*Mobile/i.test(ua)) {
    result.device = "Mobile";
  } else {
    result.device = "Desktop";
  }

  if (/Windows NT/i.test(ua)) result.os = "Windows";
  else if (/Mac OS X/i.test(ua) && !/iPhone|iPad|iPod/i.test(ua)) result.os = "macOS";
  else if (/iPhone|iPad|iPod/i.test(ua)) result.os = "iOS";
  else if (/Android/i.test(ua)) result.os = "Android";
  else if (/CrOS/i.test(ua)) result.os = "ChromeOS";
  else if (/Linux/i.test(ua)) result.os = "Linux";

  if (/Edg\//i.test(ua)) result.browser = "Edge";
  else if (/OPR\/|Opera/i.test(ua)) result.browser = "Opera";
  else if (/Firefox\//i.test(ua)) result.browser = "Firefox";
  else if (/Chrome\//i.test(ua)) result.browser = "Chrome";
  else if (/Safari\//i.test(ua)) result.browser = "Safari";

  return result;
}

async function lookupIpapi(
  ip: string,
  timeoutMs = 2500
): Promise<{
  org: string | null;
  asn: string | null;
  city: string | null;
  region: string | null;
  country_name: string | null;
  country: string | null;
  timezone: string | null;
  latitude: number | null;
  longitude: number | null;
  proxy?: boolean;
} | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      headers: { "User-Agent": "aioverflow-web/contact-form" },
      signal: ctrl.signal,
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as Awaited<ReturnType<typeof lookupIpapi>>;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function getServerContext(): Promise<ServerContext> {
  const h = await headers();

  const xff = h.get("x-forwarded-for");
  const ip =
    xff?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    h.get("cf-connecting-ip") ||
    null;

  // Vercel edge geo headers (free, set automatically when deployed on Vercel)
  const vercelCity = decode(h.get("x-vercel-ip-city"));
  const vercelRegion = decode(h.get("x-vercel-ip-country-region"));
  const vercelCountry = h.get("x-vercel-ip-country");
  const vercelTimezone = h.get("x-vercel-ip-timezone");
  const vercelLat = h.get("x-vercel-ip-latitude");
  const vercelLng = h.get("x-vercel-ip-longitude");

  const ua = parseUA(h.get("user-agent"));

  // Optional ISP / org lookup via the third-party ipapi.co service. Off by
  // default — sending a visitor's IP to a third party should be a deliberate,
  // disclosed choice. Enable with ENABLE_IP_ENRICHMENT=true. Vercel's own geo
  // headers (no third party) are always used regardless.
  const enrichmentEnabled = process.env.ENABLE_IP_ENRICHMENT === "true";
  const isLocal =
    !ip ||
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip.startsWith("172.16.");
  const ipapi = enrichmentEnabled && !isLocal ? await lookupIpapi(ip) : null;

  return {
    ip,
    geo: {
      city: vercelCity ?? ipapi?.city ?? null,
      region: vercelRegion ?? ipapi?.region ?? null,
      country: ipapi?.country_name ?? vercelCountry ?? null,
      countryCode: vercelCountry ?? ipapi?.country ?? null,
      timezone: vercelTimezone ?? ipapi?.timezone ?? null,
      latitude:
        vercelLat ??
        (typeof ipapi?.latitude === "number" ? String(ipapi.latitude) : null),
      longitude:
        vercelLng ??
        (typeof ipapi?.longitude === "number" ? String(ipapi.longitude) : null),
      org: ipapi?.org ?? null,
      asn: ipapi?.asn ?? null,
      proxy: typeof ipapi?.proxy === "boolean" ? ipapi.proxy : null,
    },
    ua,
  };
}

export function locationLabel(geo: ServerContext["geo"]): string {
  const parts = [geo.city, geo.region, geo.country].filter(Boolean);
  return parts.length ? parts.join(", ") : "Unknown location";
}
