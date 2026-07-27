import Link from "next/link";

// Reusable button. Renders a Link when `href` is passed, otherwise a <button>.
// Variants and sizes come from the token-driven maps below — never styled ad hoc.
const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap " +
  "transition-all duration-200 ease-premium active:scale-[0.98] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-accent text-[#0a0a0b] hover:bg-accent-hover shadow-accent-glow",
  secondary:
    "bg-surface-2 text-fg border border-hairline hover:bg-surface-hover hover:border-hairline-strong",
  ghost: "text-fg-muted hover:text-fg hover:bg-surface-2",
};

const sizes = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
