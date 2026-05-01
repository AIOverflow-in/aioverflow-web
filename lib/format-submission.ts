// Renders the contact submission as a structured plain-text email body
// (and a slightly richer HTML version) to match the format used elsewhere
// in the AI Overflow stack.

import type { ClientContext } from "@/lib/client-context";
import type { ServerContext } from "@/lib/server-context";

const EM_DASH = "—";

export type Submission = {
  id: string;
  submittedAt: string; // ISO
  lead: { name: string; email: string; company: string; message: string };
  client: ClientContext | null;
  server: ServerContext;
};

function val(v: string | number | null | undefined): string {
  if (v === null || v === undefined || v === "") return EM_DASH;
  return String(v);
}

function yn(v: boolean | null | undefined): string {
  if (v === true) return "Yes";
  if (v === false) return "No";
  return EM_DASH;
}

function fmtDuration(seconds: number): string {
  if (!seconds || seconds < 1) return "<1s";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function fmtScreen(s: ClientContext["screen"] | undefined): string {
  if (!s) return EM_DASH;
  return `${s.width}×${s.height} @ ${s.dpr}x`;
}

function fmtNetworkType(type: string | null | undefined): string {
  if (!type) return EM_DASH;
  const map: Record<string, string> = {
    wifi: "WiFi",
    cellular: "Mobile data",
    ethernet: "Ethernet",
    bluetooth: "Bluetooth",
    wimax: "WiMAX",
    none: "None",
    other: "Other",
    unknown: "Unknown",
    mixed: "Mixed",
  };
  return map[type] ?? type;
}

function fmtDevice(s: ServerContext["ua"]): string {
  return `${s.device} · ${s.os}`;
}

function fmtBrowser(s: ServerContext["ua"]): string {
  return s.browser;
}

function rowsForText(rows: [string, string][]) {
  const labelWidth = Math.max(...rows.map(([k]) => k.length)) + 2;
  return rows
    .map(([k, v]) => `  ${k.padEnd(labelWidth, " ")}${v}`)
    .join("\n");
}

export function renderText(s: Submission): string {
  const c = s.client;
  const g = s.server.geo;
  const ua = s.server.ua;

  const lead: [string, string][] = [
    ["Name", val(s.lead.name)],
    ["Email", val(s.lead.email)],
    ["Company", val(s.lead.company)],
    ["Message", val(s.lead.message)],
  ];

  const network: [string, string][] = [
    ["Location", [g.city, g.region, g.country].filter(Boolean).join(", ") || EM_DASH],
    ["ISP / Org", val(g.org)],
    ["Timezone", val(c?.timezone ?? g.timezone)],
    ["Network type", fmtNetworkType(c?.connection.type)],
    ["VPN / Proxy", yn(g.proxy)],
    ["IP", val(s.server.ip)],
  ];

  const device: [string, string][] = [
    ["Device", fmtDevice(ua)],
    ["Browser", fmtBrowser(ua)],
    ["Screen", fmtScreen(c?.screen)],
    ["Connection", val(c?.connection.effectiveType)],
    ["Browser language", val(c?.language)],
    ["Dark mode", yn(c?.prefersDark ?? null)],
    ["Do Not Track", yn(c?.doNotTrack ?? null)],
  ];

  const engagement: [string, string][] = [
    [
      "Time on page",
      c ? fmtDuration(c.engagement.timeOnPageSeconds) : EM_DASH,
    ],
    [
      "Scroll depth",
      c ? `${c.engagement.scrollDepth}%` : EM_DASH,
    ],
    [
      "Sections viewed",
      c?.engagement.sections.length
        ? c.engagement.sections.join(", ")
        : EM_DASH,
    ],
    [
      "Visit number",
      c
        ? `${c.engagement.visitNumber}${ordinalSuffix(c.engagement.visitNumber)} visit`
        : EM_DASH,
    ],
    ["Page URL", val(c?.pageUrl)],
  ];

  const attribution: [string, string][] = [
    ["HTTP Referrer", val(c?.referrer || EM_DASH)],
    ["UTM Source", val(c?.utm.source)],
    ["UTM Medium", val(c?.utm.medium)],
    ["UTM Campaign", val(c?.utm.campaign)],
    ["UTM Term", val(c?.utm.term)],
    ["UTM Content", val(c?.utm.content)],
  ];

  const meta: [string, string][] = [
    ["Submitted", s.submittedAt],
    ["Submission ID", s.id],
  ];

  return [
    "New Demo Request",
    "",
    "Lead",
    rowsForText(lead),
    "",
    "Location & Network",
    rowsForText(network),
    "",
    "Device & Browser",
    rowsForText(device),
    "",
    "Engagement",
    rowsForText(engagement),
    "",
    "Attribution",
    rowsForText(attribution),
    "",
    "Meta",
    rowsForText(meta),
  ].join("\n");
}

function ordinalSuffix(n: number): string {
  const v = n % 100;
  if (v >= 11 && v <= 13) return "th";
  switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function htmlSection(title: string, rows: [string, string][]): string {
  const trs = rows
    .map(
      ([k, v]) => `
    <tr>
      <td style="padding:6px 16px 6px 0;color:#666;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(k)}</td>
      <td style="padding:6px 0;color:#000;font-size:14px;vertical-align:top">${escapeHtml(v)}</td>
    </tr>`
    )
    .join("");
  return `
  <h3 style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#888;margin:24px 0 8px;border-top:1px solid #eee;padding-top:16px">${escapeHtml(title)}</h3>
  <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;font-family:ui-sans-serif,system-ui,sans-serif">
    <tbody>${trs}
    </tbody>
  </table>`;
}

export function renderHtml(s: Submission): string {
  const c = s.client;
  const g = s.server.geo;
  const ua = s.server.ua;

  const sections = [
    htmlSection("Lead", [
      ["Name", val(s.lead.name)],
      ["Email", val(s.lead.email)],
      ["Company", val(s.lead.company)],
      ["Message", val(s.lead.message)],
    ]),
    htmlSection("Location & Network", [
      [
        "Location",
        [g.city, g.region, g.country].filter(Boolean).join(", ") || EM_DASH,
      ],
      ["ISP / Org", val(g.org)],
      ["Timezone", val(c?.timezone ?? g.timezone)],
      ["Network type", fmtNetworkType(c?.connection.type)],
      ["VPN / Proxy", yn(g.proxy)],
      ["IP", val(s.server.ip)],
    ]),
    htmlSection("Device & Browser", [
      ["Device", fmtDevice(ua)],
      ["Browser", fmtBrowser(ua)],
      ["Screen", fmtScreen(c?.screen)],
      ["Connection", val(c?.connection.effectiveType)],
      ["Browser language", val(c?.language)],
      ["Dark mode", yn(c?.prefersDark ?? null)],
      ["Do Not Track", yn(c?.doNotTrack ?? null)],
    ]),
    htmlSection("Engagement", [
      [
        "Time on page",
        c ? fmtDuration(c.engagement.timeOnPageSeconds) : EM_DASH,
      ],
      ["Scroll depth", c ? `${c.engagement.scrollDepth}%` : EM_DASH],
      [
        "Sections viewed",
        c?.engagement.sections.length
          ? c.engagement.sections.join(", ")
          : EM_DASH,
      ],
      [
        "Visit number",
        c
          ? `${c.engagement.visitNumber}${ordinalSuffix(c.engagement.visitNumber)} visit`
          : EM_DASH,
      ],
      ["Page URL", val(c?.pageUrl)],
    ]),
    htmlSection("Attribution", [
      ["HTTP Referrer", val(c?.referrer)],
      ["UTM Source", val(c?.utm.source)],
      ["UTM Medium", val(c?.utm.medium)],
      ["UTM Campaign", val(c?.utm.campaign)],
      ["UTM Term", val(c?.utm.term)],
      ["UTM Content", val(c?.utm.content)],
    ]),
    htmlSection("Meta", [
      ["Submitted", s.submittedAt],
      ["Submission ID", s.id],
    ]),
  ].join("");

  return `<!doctype html>
<html><body style="background:#fff;color:#000;font-family:ui-sans-serif,system-ui,sans-serif;padding:24px">
  <div style="max-width:640px;margin:0 auto">
    <h1 style="font-size:22px;font-weight:600;margin:0 0 4px">New Demo Request</h1>
    <p style="color:#666;font-size:13px;margin:0">${escapeHtml(s.lead.name)} · ${escapeHtml([g.city, g.region, g.country].filter(Boolean).join(", ") || EM_DASH)}</p>
    ${sections}
  </div>
</body></html>`;
}

export function buildSubject(s: Submission): string {
  const loc = [s.server.geo.city, s.server.geo.region, s.server.geo.country]
    .filter(Boolean)
    .join(", ");
  const who = s.lead.name || s.lead.email || "anonymous";
  return loc
    ? `New demo request from ${who} · ${loc}`
    : `New demo request from ${who}`;
}
