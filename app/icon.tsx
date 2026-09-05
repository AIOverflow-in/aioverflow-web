import { ImageResponse } from "next/og";

// Tab favicon — the shared AIoverflow loop mark.
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
          background: "#fffaf2",
        }}
      >
        <svg width="58" height="58" viewBox="0 0 64 64" fill="none">
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
      </div>
    ),
    { ...size }
  );
}
