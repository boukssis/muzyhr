import { ImageResponse } from "next/og";

export const alt = "muzyhr — HR infrastructure and people operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F4F0",
          color: "#2A2624",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#6E625A",
          }}
        >
          muzyhr · Montréal
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 68,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            fontWeight: 600,
            maxWidth: 920,
          }}
        >
          <span>Your business is growing.</span>
          <span style={{ color: "#6E625A", marginTop: 12 }}>
            Your HR should grow with it.
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#5C534E" }}>
          HR infrastructure and people operations
        </div>
      </div>
    ),
    size,
  );
}
