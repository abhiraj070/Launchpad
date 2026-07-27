import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import { getCategoryMeta, getAccent } from "@/lib/design";

// Compact product row for the personalized workspace sections. Deliberately
// smaller and quieter than the main mosaic card so these sections stay minimal.
export default function CompactProductCard({ product, favorite = false }) {
  const meta = getCategoryMeta(product.category);
  const color = getAccent(product);
  const Icon = meta.icon;

  return (
    <Link
      href={`/project/${product.slug}`}
      className="group flex items-center gap-3 rounded-xl border border-hairline bg-surface p-2.5 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-hairline-strong hover:bg-surface-hover active:translate-y-0 active:scale-[0.99] active:duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
        style={{ color, backgroundColor: `${color}14`, borderColor: `${color}2e` }}
      >
        <Icon size={16} />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-sm font-medium text-fg">{product.name}</span>
          {favorite ? (
            <Star size={11} className="shrink-0 text-accent" fill="currentColor" />
          ) : null}
        </div>
        <span className="text-[11px] uppercase tracking-wide text-fg-faint">
          {product.category}
        </span>
      </div>

      <StatusBadge status={product.status} />
      <ArrowUpRight
        size={15}
        className="shrink-0 text-fg-faint transition-all duration-300 ease-premium group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
