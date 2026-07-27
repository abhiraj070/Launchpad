import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,107,53,0.22), transparent 70%)",
          color: "#f4f4f5",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              height: "56px",
              width: "56px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              background: "#ff6b35",
              color: "#0a0a0b",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            ↑
          </div>
          <div style={{ fontSize: "30px", fontWeight: 600 }}>Launchpad</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "68px", fontWeight: 700, lineHeight: 1.05 }}>
            Everything I&apos;ve built, in one place.
          </div>
          <div style={{ fontSize: "30px", color: "#a1a1aa" }}>
            Discover, explore, and launch every product.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
