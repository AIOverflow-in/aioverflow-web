import { ImageResponse } from "next/og";

// Tab favicon — the navbar "AI" mark (bordered box, white on black).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 54,
            height: 54,
            border: "5px solid #ffffff",
            color: "#ffffff",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: -2,
            fontFamily: "sans-serif",
          }}
        >
          AI
        </div>
      </div>
    ),
    { ...size }
  );
}
