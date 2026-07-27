// Consistent section header: small orange eyebrow + title + optional subtitle.
export default function SectionHeading({ eyebrow, title, subtitle, className = "" }) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-[28px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-xl text-sm text-fg-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
