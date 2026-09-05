import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const alt = `${company.name} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fffaf2",
          color: "#172554",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: wordmark + year */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="26" cy="33" r="18.5" stroke="#6d28d9" strokeWidth="7" />
              <path
                d="M44.5 51.5V13.5H53.5"
                stroke="#6d28d9"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="58" cy="13.5" r="4.5" fill="#f97316" />
            </svg>
            <div style={{ fontSize: 34, fontWeight: 600 }}>AIoverflow</div>
          </div>
          <div style={{ fontSize: 22, color: "#6d28d9", letterSpacing: 2 }}>
            AI · OVERFLOW
          </div>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            We build AI that works.
          </div>
          <div style={{ fontSize: 30, color: "#475569", maxWidth: 900 }}>
            Custom AI solutions, agentic automation, and our own products —
            built and run in production.
          </div>
        </div>

        {/* Bottom: pillars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#4338ca",
            borderTop: "1px solid rgba(79,70,229,.22)",
            paddingTop: 28,
          }}
        >
          <span>AI fit &amp; discovery</span>
          <span>·</span>
          <span>Agentic automation</span>
          <span>·</span>
          <span>ScribeDesk</span>
          <span>·</span>
          <span>Sell OS</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
