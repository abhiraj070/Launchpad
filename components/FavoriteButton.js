"use client";

import { Star } from "lucide-react";
import { useWorkspace } from "@/lib/useWorkspace";

// Subtle star toggle. Favorited → filled accent star, always visible. Not
// favorited → outline star that reveals on card hover / focus. Used as an
// overlay (never nested inside the card's link) so it toggles without
// navigating. `variant="inline"` is for always-visible contexts (detail hero).
const sizes = {
  sm: "h-8 w-8",
  lg: "h-11 w-11",
};

export default function FavoriteButton({
  slug,
  variant = "overlay",
  size = "sm",
  className = "",
}) {
  const { isFavorite, toggleFavorite } = useWorkspace();
  const active = isFavorite(slug);

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(slug);
  };

  const visibility =
    variant === "inline" || active
      ? "opacity-100"
      : "opacity-0 group-hover:opacity-100 focus-visible:opacity-100";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      className={
        `inline-flex ${sizes[size]} items-center justify-center rounded-lg border transition-all duration-200 ease-premium ` +
        "cursor-pointer active:scale-90 active:duration-75 " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas " +
        (active
          ? "border-accent/40 bg-accent-soft text-accent"
          : "border-hairline bg-canvas/70 text-fg-muted backdrop-blur-sm hover:border-hairline-strong hover:text-fg ") +
        visibility +
        ` ${className}`
      }
    >
      <Star size={size === "lg" ? 18 : 15} fill={active ? "currentColor" : "none"} />
    </button>
  );
}
