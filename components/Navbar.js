"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Sun, Moon, Github, Rocket, User, FolderGit2 } from "lucide-react";
import Container from "@/components/ui/Container";
import IconButton from "@/components/ui/IconButton";
import { useCommandPalette } from "@/components/command/CommandContext";

// Floating glass toolbar. Fixed and always visible; shrinks slightly once the
// page is scrolled so it reads like an OS toolbar rather than a website header.
// The search affordance opens the command palette (Cmd/Ctrl+K).
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modKey, setModKey] = useState("⌘");
  const [theme, setTheme] = useState("dark");
  const { setOpen } = useCommandPalette();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const isMac = /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent);
    if (!isMac) setModKey("Ctrl");
  }, []);

  // Initialize and synchronize theme state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        const initial = document.documentElement.getAttribute("data-theme") || "dark";
        setTheme(initial);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore
    }
  };

  const openPalette = () => setOpen(true);

  return (
    <div className="fixed inset-x-0 top-3 z-50 sm:top-4">
      <Container>
        <nav
          className={
            "glass flex items-center justify-between gap-3 rounded-2xl " +
            "transition-all duration-300 ease-premium " +
            (scrolled
              ? "px-2.5 py-1.5 shadow-elevated sm:px-3"
              : "px-3 py-2 shadow-glass sm:px-4")
          }
        >
          {/* Left: logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-fg"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-[#0a0a0b] shadow-accent-glow">
              <Rocket size={15} />
            </span>
            <span className="text-[15px]">Launchpad</span>
          </Link>

          {/* Center: search affordance + about me + projects */}
          <div className="hidden items-center gap-1.5 md:flex">
            <button
              type="button"
              onClick={openPalette}
              aria-label="Search products"
              aria-keyshortcuts="Meta+K Control+K"
              className="inline-flex min-w-[180px] lg:min-w-[220px] cursor-pointer items-center gap-2 rounded-lg border border-hairline bg-surface/60 py-1.5 pl-3 pr-2 text-sm text-fg-faint transition-all duration-200 ease-premium hover:border-hairline-strong hover:text-fg-muted active:scale-[0.98] active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <Search size={15} />
              <span className="flex-1 text-left">Search products</span>
              <kbd
                suppressHydrationWarning
                className="rounded border border-hairline bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-fg-faint"
              >
                {modKey}K
              </kbd>
            </button>
            <Link
              href="/#about"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-fg-muted transition-all duration-200 ease-premium hover:bg-surface-2 hover:text-fg active:scale-[0.98] active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <User size={15} />
              <span>About Me</span>
            </Link>
            <Link
              href="/#projects"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-fg-muted transition-all duration-200 ease-premium hover:bg-surface-2 hover:text-fg active:scale-[0.98] active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <FolderGit2 size={15} />
              <span>Projects</span>
            </Link>
          </div>

          {/* Right: search + about me (mobile) + projects (mobile) + theme + github */}
          <div className="flex items-center gap-1">
            <IconButton label="Search products" onClick={openPalette} className="md:hidden">
              <Search size={16} />
            </IconButton>
            <Link
              href="/#about"
              aria-label="About Me"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-fg-muted cursor-pointer transition-all duration-200 ease-premium hover:bg-surface-2 hover:text-fg active:scale-90 active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:hidden"
            >
              <User size={16} />
            </Link>
            <Link
              href="/#projects"
              aria-label="Projects"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-fg-muted cursor-pointer transition-all duration-200 ease-premium hover:bg-surface-2 hover:text-fg active:scale-90 active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:hidden"
            >
              <FolderGit2 size={16} />
            </Link>
            <span className="mr-1 hidden h-5 w-px bg-hairline sm:block" />
            <IconButton
              suppressHydrationWarning
              label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </IconButton>
            <a
              href="https://github.com/abhiraj070"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg text-fg-muted cursor-pointer transition-all duration-200 ease-premium hover:bg-surface-2 hover:text-fg active:scale-90 active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <Github size={16} />
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
}
