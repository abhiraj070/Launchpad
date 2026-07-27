import { ImageResponse } from "next/og";
import { products, getProductBySlug } from "@/data/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Pre-generate an OG image per product from the centralized data.
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function OpengraphImage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const accent = product?.accentColor || "#ff6b35";

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
          backgroundImage: `radial-gradient(60% 60% at 50% 0%, ${accent}33, transparent 70%)`,
          color: "#f4f4f5",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              height: "44px",
              width: "44px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              background: "#ff6b35",
              color: "#0a0a0b",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            ↑
          </div>
          <div style={{ fontSize: "26px", fontWeight: 600, color: "#a1a1aa" }}>
            Launchpad
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: accent,
            }}
          >
            {product?.category || "Product"}
          </div>
          <div style={{ fontSize: "76px", fontWeight: 700, lineHeight: 1.02 }}>
            {product?.name || "Launchpad"}
          </div>
          <div style={{ fontSize: "32px", color: "#a1a1aa", maxWidth: "900px" }}>
            {product?.tagline || ""}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
