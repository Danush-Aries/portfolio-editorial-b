import { ImageResponse } from "next/og";

export const alt = "Dhanush Shankar — Full-stack agent engineer. Swiss Grid.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static OG image — big Inter Tight numeric marker "01" on paper stock,
// oxide-orange span on the last line, key/value chrome around it.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fafaf7",
          color: "#0d0d0d",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          fontFamily: "Inter Tight, Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* chrome bar */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            fontSize: 20,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "#5a5a5a",
            paddingBottom: 22,
            borderBottom: "1px solid #d8d3c6",
          }}
        >
          <span style={{ color: "#0d0d0d", fontWeight: 600 }}>
            Dhanush Shankar
          </span>
          <span>Full-stack agent engineer · Bangalore</span>
          <span>2026 · v1</span>
        </div>

        {/* main hero row */}
        <div
          style={{
            marginTop: 60,
            display: "flex",
            alignItems: "flex-end",
            gap: 40,
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 260,
              fontWeight: 800,
              lineHeight: 0.82,
              letterSpacing: "-0.06em",
              color: "#0d0d0d",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            01
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              paddingBottom: 20,
            }}
          >
            <div
              style={{
                fontSize: 78,
                fontWeight: 500,
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                color: "#0d0d0d",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span>I build the AI.</span>
              <span>I break the AI.</span>
              <span style={{ color: "#b45f00" }}>I ship with the AI.</span>
            </div>
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "#5a5a5a",
            paddingTop: 22,
            borderTop: "1px solid #d8d3c6",
          }}
        >
          <span>dhanush-shankar.dev</span>
          <span>Swiss Grid · variant B</span>
        </div>
      </div>
    ),
    size,
  );
}
