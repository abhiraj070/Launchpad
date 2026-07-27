"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, LayoutGrid, Sun, Github, Menu, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import IconButton from "@/components/ui/IconButton";

// Floating glass toolbar. Stays fixed and visible; shrinks slightly once the
// page is scrolled so it reads like an OS toolbar. Buttons are placeholders.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-3 z-50 sm:top-4">
      <Container>
        <nav
          className={
            "glass flex items-center justify-between gap-3 rounded-2xl shadow-glass " +
            "transition-all duration-300 ease-premium " +
            (scrolled ? "px-3 py-1.5 sm:px-4" : "px-4 py-2.5 sm:px-5")
          }
        >
          {/* Left: logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-fg"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-[#0a0a0b]">
              <Rocket size={16} />
            </span>
            <span className="text-[15px]">Launchpad</span>
          </Link>

          {/* Center: Search + Categories */}
          <div className="hidden items-center gap-1 md:flex">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-fg-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg"
            >
              <Search size={15} />
              <span>Search</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-fg-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg"
            >
              <LayoutGrid size={15} />
              <span>Categories</span>
            </button>
          </div>

          {/* Right: Theme + GitHub + Menu */}
          <div className="flex items-center gap-1">
            <IconButton label="Toggle theme">
              <Sun size={16} />
            </IconButton>
            <IconButton label="GitHub" className="hidden sm:inline-flex">
              <Github size={16} />
            </IconButton>
            <IconButton label="Menu">
              <Menu size={16} />
            </IconButton>
          </div>
        </nav>
      </Container>
    </div>
  );
}
