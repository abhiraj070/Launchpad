/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // --- Color tokens (resolve to CSS variables defined in globals.css) ---
      colors: {
        canvas: "var(--canvas)",
        "canvas-subtle": "var(--canvas-subtle)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "surface-hover": "var(--surface-hover)",
        hairline: "var(--hairline)",
        "hairline-strong": "var(--hairline-strong)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        "fg-faint": "var(--fg-faint)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)",
        },
        // Semantic status colors — used only on status badges.
        live: "var(--live)",
        building: "var(--building)",
        experiment: "var(--experiment)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      // --- Corner radius scale ---
      borderRadius: {
        lg: "0.625rem",
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
      },
      // --- Elevation / shadow scale ---
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.3), 0 1px 1px rgba(0,0,0,0.2)",
        raised:
          "0 4px 12px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.3)",
        elevated:
          "0 12px 32px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.35)",
        glass:
          "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        "accent-glow": "0 6px 24px -6px rgba(255,107,53,0.5)",
      },
      // --- Motion ---
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.4s ease both",
      },
    },
  },
  plugins: [],
};
