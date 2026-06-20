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
          background: "#0a0a0a",
          color: "#fafafa",
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                border: "2px solid #fafafa",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: -1,
              }}
            >
              AI
            </div>
            <div style={{ fontSize: 34, fontWeight: 600 }}>Overflow</div>
          </div>
          <div style={{ fontSize: 22, color: "#8a8a8a", letterSpacing: 2 }}>
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
          <div style={{ fontSize: 30, color: "#b3b3b3", maxWidth: 900 }}>
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
            color: "#8a8a8a",
            borderTop: "1px solid #2a2a2a",
            paddingTop: 28,
          }}
        >
          <span>AI fit &amp; discovery</span>
          <span>·</span>
          <span>Agentic automation</span>
          <span>·</span>
          <span>ScribeDesk</span>
          <span>·</span>
          <span>RetailOS</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
