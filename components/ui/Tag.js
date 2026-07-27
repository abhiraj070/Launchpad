// Pill tag — used for categories and small labels. `active` reserved for the
// future filtering phase; no logic wired yet.
export default function Tag({ active = false, className = "", children, ...props }) {
  return (
    <button
      type="button"
      className={
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-premium " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 " +
        "focus-visible:ring-offset-2 focus-visible:ring-offset-canvas " +
        (active
          ? "border-accent/40 bg-accent-soft text-accent"
          : "border-hairline bg-surface text-fg-muted hover:border-hairline-strong hover:text-fg") +
        ` ${className}`
      }
      {...props}
    >
      {children}
    </button>
  );
}
