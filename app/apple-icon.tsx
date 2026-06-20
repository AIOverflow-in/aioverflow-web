import { ImageResponse } from "next/og";

// Home-screen / iOS icon — same "AI" mark, larger, with breathing room.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
            width: 132,
            height: 132,
            border: "11px solid #ffffff",
            color: "#ffffff",
            fontSize: 70,
            fontWeight: 700,
            letterSpacing: -5,
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
