// Square icon-only button for toolbar chrome (theme, GitHub, menu…).
export default function IconButton({ label, className = "", children, ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={
        "inline-flex h-9 w-9 items-center justify-center rounded-lg text-fg-muted " +
        "transition-all duration-200 ease-premium hover:bg-surface-2 hover:text-fg " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 " +
        `focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${className}`
      }
      {...props}
    >
      {children}
    </button>
  );
}
