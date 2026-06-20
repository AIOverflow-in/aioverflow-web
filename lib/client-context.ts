// Collected on the client at form-submit time and posted as JSON in a hidden
// "context" field. The server action merges this with IP/geo/UA data.

import { getEngagement } from "@/lib/engagement";

export type ClientContext = {
  // Device & browser
  userAgent: string;
  language: string;
  languages: string[];
  screen: { width: number; height: number; dpr: number };
  viewport: { width: number; height: number };
  prefersDark: boolean;
  doNotTrack: boolean | null;
  timezone: string;
  // Connection
  connection: {
    effectiveType: string | null;
    type: string | null;
    downlink: number | null;
    rtt: number | null;
    saveData: boolean | null;
  };
  // Engagement (from session)
  engagement: {
    timeOnPageSeconds: number;
    scrollDepth: number; // 0..100
    sections: string[];
    visitNumber: number;
  };
  // Attribution
  pageUrl: string;
  referrer: string;
  utm: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    term: string | null;
    content: string | null;
  };
};

function dntValue(): boolean | null {
  if (typeof navigator === "undefined") return null;
  // navigator.doNotTrack is "0" | "1" | "unspecified" | null
  // window.doNotTrack exists on some older Safari builds
  const raw =
    navigator.doNotTrack ??
    (typeof window !== "undefined"
      ? (window as unknown as { doNotTrack?: string }).doNotTrack
      : null);
  if (raw === "1" || raw === "yes") return true;
  if (raw === "0" || raw === "no") return false;
  return null;
}

interface NavigatorConnection {
  effectiveType?: string;
  type?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

// Returned when the visitor has Do Not Track enabled: we record only what we
// strictly need to follow up (the page they were on + any campaign tags), and
// drop the device/connection/engagement fingerprint entirely.
function minimalContext(): ClientContext {
  const params = new URLSearchParams(window.location.search);
  return {
    userAgent: "",
    language: "",
    languages: [],
    screen: { width: 0, height: 0, dpr: 0 },
    viewport: { width: 0, height: 0 },
    prefersDark: false,
    doNotTrack: true,
    timezone: "",
    connection: { effectiveType: null, type: null, downlink: null, rtt: null, saveData: null },
    engagement: { timeOnPageSeconds: 0, scrollDepth: 0, sections: [], visitNumber: 1 },
    pageUrl: window.location.href,
    referrer: "",
    utm: {
      source: params.get("utm_source"),
      medium: params.get("utm_medium"),
      campaign: params.get("utm_campaign"),
      term: params.get("utm_term"),
      content: params.get("utm_content"),
    },
  };
}

export function collectClientContext(): ClientContext {
  // Honor Do Not Track: if the visitor asked not to be tracked, respect it.
  if (dntValue() === true) return minimalContext();

  const engagement = getEngagement();
  const params = new URLSearchParams(window.location.search);
  const conn =
    (
      navigator as Navigator & {
        connection?: NavigatorConnection;
        mozConnection?: NavigatorConnection;
        webkitConnection?: NavigatorConnection;
      }
    ).connection ??
    (navigator as Navigator & { mozConnection?: NavigatorConnection })
      .mozConnection ??
    (navigator as Navigator & { webkitConnection?: NavigatorConnection })
      .webkitConnection;

  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: Array.from(navigator.languages ?? []),
    screen: {
      width: window.screen.width,
      height: window.screen.height,
      dpr: window.devicePixelRatio,
    },
    viewport: { width: window.innerWidth, height: window.innerHeight },
    prefersDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
    doNotTrack: dntValue(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    connection: {
      effectiveType: conn?.effectiveType ?? null,
      type: conn?.type ?? null,
      downlink: typeof conn?.downlink === "number" ? conn.downlink : null,
      rtt: typeof conn?.rtt === "number" ? conn.rtt : null,
      saveData: typeof conn?.saveData === "boolean" ? conn.saveData : null,
    },
    engagement: {
      timeOnPageSeconds: engagement
        ? Math.round((Date.now() - engagement.startedAt) / 1000)
        : 0,
      scrollDepth: engagement ? Math.round(engagement.maxScroll * 100) : 0,
      sections: engagement?.sections ?? [],
      visitNumber: engagement?.visitNumber ?? 1,
    },
    pageUrl: window.location.href,
    referrer: document.referrer,
    utm: {
      source: params.get("utm_source"),
      medium: params.get("utm_medium"),
      campaign: params.get("utm_campaign"),
      term: params.get("utm_term"),
      content: params.get("utm_content"),
    },
  };
}
