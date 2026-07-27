import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import ProductArtwork from "@/components/ProductArtwork";
import FavoriteButton from "@/components/FavoriteButton";
import { getCategoryMeta, getAccent } from "@/lib/design";

// The heart of Launchpad — an *application* card, not a portfolio tile.
// The card container carries the visual + hover/press; the Link is the click
// target; the FavoriteButton overlays on top (a sibling of the Link, never
// nested inside it) so favoriting never triggers navigation.
//
// Hierarchy: artwork → [app icon] name → one-line problem → status · Open.
export default function ProductCard({ product, index = 0, className = "" }) {
  const meta = getCategoryMeta(product.category);
  const color = getAccent(product);
  const Icon = meta.icon;

  return (
    <div
      style={{
        "--cat": color,
        "--glow": `${color}38`,
        animationDelay: `${Math.min(index, 8) * 55}ms`,
      }}
      className={
        "group relative flex animate-fade-up flex-col rounded-2xl border border-hairline bg-surface p-3 shadow-raised " +
        "transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-hairline-strong " +
        "hover:bg-surface-hover hover:shadow-[0_24px_50px_-20px_var(--glow)] " +
        "active:translate-y-0 active:scale-[0.99] active:duration-100 " +
        `${className}`
      }
    >
      <FavoriteButton slug={product.slug} className="absolute right-4 top-4 z-20" />

      <Link
        href={`/project/${product.slug}`}
        className="flex flex-1 flex-col rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        <ProductArtwork product={product} index={index} />

        <div className="flex flex-1 flex-col px-1.5 pb-1 pt-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 ease-premium group-hover:scale-105"
              style={{
                color,
                backgroundColor: `${color}14`,
                borderColor: `${color}2e`,
              }}
            >
              <Icon size={17} />
            </span>
            <h3 className="min-w-0 flex-1 truncate text-base font-semibold text-fg">
              {product.name}
            </h3>
            <span
              className="text-[11px] font-medium uppercase tracking-wide"
              style={{ color, opacity: 0.8 }}
            >
              {product.category}
            </span>
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
            {product.shortDescription}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3 pt-1">
            <StatusBadge status={product.status} />
            <span className="inline-flex items-center gap-1 rounded-lg border border-hairline px-2.5 py-1 text-sm font-medium text-fg-muted transition-all duration-300 ease-premium group-hover:border-accent/40 group-hover:bg-accent-soft group-hover:text-accent">
              Open
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
