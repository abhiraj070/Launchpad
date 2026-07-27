"use client";

import { useEffect, useRef, useState } from "react";

// Subtle scroll-in for long pages. Designed to degrade gracefully:
//   • No JS / no IntersectionObserver → content renders visible (never hidden).
//   • prefers-reduced-motion → visible immediately, no transform.
//   • Already in view on mount → shown at once, so above-the-fold never flashes.
// Only genuinely below-the-fold content animates as it scrolls into view.
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false); // opt into hidden→shown at all
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // If it's already on screen, reveal immediately without a hide flash.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setAnimate(true);
      setShown(true);
      return;
    }

    setAnimate(true);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const state = !animate
    ? ""
    : shown
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-2";

  return (
    <div
      ref={ref}
      className={`transition-all duration-[600ms] ease-premium ${state} ${className}`}
    >
      {children}
    </div>
  );
}
