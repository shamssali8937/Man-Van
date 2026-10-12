import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0B2152",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 64,
          fontWeight: "bold",
          color: "#F6F3EE",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#C9A36B",
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        House Removals • Man & Van • Furniture Transport
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E10A0A",
          color: "#ffffff",
          fontSize: 32,
          fontWeight: "bold",
          padding: "12px 32px",
          borderRadius: "8px",
        }}
      >
        Call: {siteConfig.telephone}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
