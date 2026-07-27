import { Lock, ArrowUpRight } from "lucide-react";
import { Motif } from "@/components/ProductArtwork";
import { getCategoryMeta, getAccent } from "@/lib/design";

// A branded "app window" preview. Rather than a raster screenshot, this is a
// representative visual: a real browser frame (with the product's live URL)
// wrapping the product's own accent color, logo, tagline, and motif — so it
// reads as the application without shipping heavy image assets.
function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

export default function ProductShowcase({ product }) {
  const color = getAccent(product);
  const meta = getCategoryMeta(product.category);
  const Icon = meta.icon;

  return (
    <a
      href={product.live}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-hairline bg-surface shadow-elevated transition-colors duration-300 hover:border-hairline-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      {/* browser chrome */}
      <div className="flex items-center gap-3 border-b border-hairline bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
        </div>
        <div className="mx-auto flex max-w-full items-center gap-1.5 truncate rounded-md border border-hairline bg-canvas px-3 py-1 text-xs text-fg-faint">
          <Lock size={11} />
          <span className="truncate">{hostOf(product.live)}</span>
        </div>
        <ArrowUpRight
          size={15}
          className="text-fg-faint transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
        />
      </div>

      {/* viewport */}
      <div
        className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[340px]"
        style={{ color }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(70% 60% at 50% 0%, ${color}26, transparent 65%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* large motif backdrop */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.22]">
          <div className="h-[70%] w-[70%]">
            <Motif category={product.category} />
          </div>
        </div>

        {/* branded content */}
        <div className="relative flex flex-col items-center px-6 text-center">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-2xl border"
            style={{
              color,
              backgroundColor: `${color}18`,
              borderColor: `${color}33`,
            }}
          >
            <Icon size={22} />
          </span>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-fg">
            {product.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-fg-muted">{product.tagline}</p>
        </div>
      </div>
    </a>
  );
}
