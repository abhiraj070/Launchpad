import Link from "next/link";
import { Loader2 } from "lucide-react";

// Reusable button. Renders a Link when `href` is passed, otherwise a <button>.
// Variants and sizes come from the token-driven maps below — never styled ad hoc.
//
// Feedback is layered: hover shifts color and lifts slightly, press settles it
// back down (translate + scale), and focus-visible shows a ring for keyboards.
// `loading` swaps the leading content for a subtle spinner and blocks input.
const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap cursor-pointer select-none " +
  "transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-premium " +
  "hover:-translate-y-px active:translate-y-0 active:scale-[0.98] active:duration-75 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-canvas " +
  "disabled:pointer-events-none disabled:opacity-50 disabled:translate-y-0";

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
  loading = false,
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {loading ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : null}
      {children}
    </>
  );

  if (href && !loading) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={loading || props.disabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {content}
    </button>
  );
}
