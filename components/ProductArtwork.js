import { getCategoryIcon, warmTints } from "@/lib/design";

// Deterministic placeholder artwork — the top of each card's visual hierarchy.
// A dark panel with a soft warm glow (position + tint vary per card for an
// organic feel) and the category icon. No real imagery yet.
export default function ProductArtwork({ project, index = 0 }) {
  const Icon = getCategoryIcon(project.category);
  const tint = warmTints[index % warmTints.length];
  const glowX = index % 2 === 0 ? "28%" : "72%";

  return (
    <div className="relative min-h-[124px] flex-1 overflow-hidden rounded-xl border border-hairline bg-surface-2">
      {/* warm glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(90% 90% at ${glowX} 15%, ${tint}30, transparent 62%)`,
        }}
      />
      {/* faint dot texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      {/* category icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline-strong bg-canvas/40 text-fg backdrop-blur-sm"
          style={{ color: tint }}
        >
          <Icon size={20} />
        </span>
      </div>
    </div>
  );
}
