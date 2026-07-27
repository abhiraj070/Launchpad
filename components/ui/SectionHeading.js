// Consistent section header: small eyebrow + title + optional subtitle.
// The eyebrow is brand-orange by default; pass `accent` (a color string) to
// tint it with a product's own accent on detail pages.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent,
  className = "",
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p
          className="text-xs font-semibold uppercase tracking-[0.14em] text-accent"
          style={accent ? { color: accent } : undefined}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-[28px]">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="mt-2 max-w-xl text-sm text-fg-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
