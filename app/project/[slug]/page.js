import { notFound } from "next/navigation";
import TrackRecent from "@/components/workspace/TrackRecent";
import ProductHero from "@/components/product/ProductHero";
import DetailSection from "@/components/product/DetailSection";
import Capabilities from "@/components/product/Capabilities";
import ProductShowcase from "@/components/product/ProductShowcase";
import TechStack from "@/components/product/TechStack";
import StatusPanel from "@/components/product/StatusPanel";
import Roadmap from "@/components/product/Roadmap";
import RelatedProducts from "@/components/product/RelatedProducts";
import { products, getProductBySlug } from "@/data/products";

// Pre-render a page for each known product slug.
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Launchpad`,
    description: product.tagline,
  };
}

export default async function ProjectPage({ params }) {
  // Next 15+ delivers route params asynchronously.
  const { slug } = await params;
  const index = products.findIndex((item) => item.slug === slug);
  const product = index >= 0 ? products[index] : null;

  if (!product) {
    notFound();
  }

  const accent = product.accentColor;

  return (
    <article className="pb-20">
      <TrackRecent slug={product.slug} />
      <ProductHero product={product} index={index} />

      <DetailSection eyebrow="The Problem" accent={accent}>
        <p className="max-w-2xl text-lg leading-relaxed text-fg-muted">
          {product.problem}
        </p>
      </DetailSection>

      <DetailSection eyebrow="The Solution" accent={accent}>
        <p
          className="max-w-2xl border-l-2 pl-5 text-lg leading-relaxed text-fg"
          style={{ borderColor: accent }}
        >
          {product.solution}
        </p>
      </DetailSection>

      <DetailSection eyebrow="Capabilities" title="Key capabilities" accent={accent}>
        <Capabilities features={product.features} accent={accent} />
      </DetailSection>

      {product.live ? (
        <DetailSection eyebrow="Showcase" title="See it in action" accent={accent}>
          <ProductShowcase product={product} />
        </DetailSection>
      ) : null}

      <DetailSection eyebrow="Under the hood" title="Technology" accent={accent}>
        <TechStack technologies={product.technologies} />
      </DetailSection>

      <DetailSection eyebrow="Maturity" title="Current status" accent={accent}>
        <StatusPanel status={product.status} note={product.statusNote} />
      </DetailSection>

      {product.roadmap?.length ? (
        <DetailSection eyebrow="What's next" title="Roadmap" accent={accent}>
          <Roadmap items={product.roadmap} accent={accent} />
        </DetailSection>
      ) : null}

      <DetailSection eyebrow="The Ecosystem" title="Related products" accent={accent}>
        <RelatedProducts current={product} />
      </DetailSection>
    </article>
  );
}
