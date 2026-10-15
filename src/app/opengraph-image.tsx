import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} – UK Removals & Logistics`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#03234C",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        fontFamily: "sans-serif",
        border: "12px solid #021630",
        position: "relative",
      }}
    >
      {/* Top Header Badge Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#DC0109",
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: "0.1em",
              padding: "6px 14px",
              borderRadius: "4px",
              textTransform: "uppercase",
            }}
          >
            THE ROUTE
          </div>
          <span
            style={{
              color: "#DA985B",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Nationwide UK Removals & Logistics
          </span>
        </div>

        <div
          style={{
            display: "flex",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#F6F4EE",
            fontSize: 15,
            fontWeight: 700,
            padding: "6px 16px",
            borderRadius: "4px",
          }}
        >
          3.5T Luton Box Van • 500kg Tail Lift
        </div>
      </div>

      {/* Center Hero Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "16px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 900,
            color: "#F6F4EE",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#E6ECF5",
            lineHeight: 1.4,
            maxWidth: "960px",
          }}
        >
          House Removals • Man &amp; Van Services • Furniture Collection •
          Commercial Moves
        </div>
      </div>

      {/* Bottom Dispatch Info Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "2px solid rgba(255, 255, 255, 0.15)",
          paddingTop: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: "#DA985B",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Direct Dispatch Line
          </span>
          <span
            style={{
              fontSize: 28,
              color: "#FFFFFF",
              fontWeight: 900,
              letterSpacing: "0.02em",
            }}
          >
            {siteConfig.telephone}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#DC0109",
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: 800,
              padding: "14px 28px",
              borderRadius: "6px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Get a Free Quote
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
