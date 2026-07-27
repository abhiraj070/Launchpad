import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import StatusBadge from "@/components/StatusBadge";
import ProductArtwork from "@/components/ProductArtwork";
import FavoriteButton from "@/components/FavoriteButton";
import { getCategoryMeta, getAccent } from "@/lib/design";

// Opening screen of a product "application". Answers what it is, its category
// and status, and its one-line value proposition — with launch + source CTAs.
export default function ProductHero({ product, index = 0 }) {
  const meta = getCategoryMeta(product.category);
  const Icon = meta.icon;
  const color = getAccent(product);

  return (
    <section className="pt-28 sm:pt-32">
      <Container>
        <Link
          href="/#products"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
        >
          <ArrowLeft size={15} />
          All products
        </Link>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium"
                style={{
                  color,
                  backgroundColor: `${color}14`,
                  borderColor: `${color}2e`,
                }}
              >
                <Icon size={13} />
                {product.category}
              </span>
              <StatusBadge status={product.status} />
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-fg-muted">
              {product.tagline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {product.live ? (
                <>
                  <Button href={product.live} size="lg" target="_blank" rel="noopener noreferrer">
                    Launch product
                    <ExternalLink size={16} />
                  </Button>
                  <Button
                    href={product.github}
                    variant="secondary"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    View source
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    href={product.github}
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    View source
                  </Button>
                  <span className="text-sm text-fg-faint">
                    No public demo yet
                  </span>
                </>
              )}
              <FavoriteButton slug={product.slug} variant="inline" size="lg" />
            </div>
          </div>

          <div className="group flex min-h-[220px] lg:min-h-[260px]">
            <ProductArtwork product={product} index={index} />
          </div>
        </div>
      </Container>
    </section>
  );
}
