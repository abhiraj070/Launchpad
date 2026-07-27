import Link from "next/link";
import { Search, LayoutGrid, Sun, Github, Menu } from "lucide-react";

// Sticky floating navigation. Buttons are placeholders — no functionality yet.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Left: temporary text logo */}
        <div className="flex items-center">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Product Hub
          </Link>
        </div>

        {/* Center: Search + Categories */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600"
          >
            <Search size={16} />
            <span>Search</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600"
          >
            <LayoutGrid size={16} />
            <span>Categories</span>
          </button>
        </div>

        {/* Right: Theme + GitHub + Menu */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            className="rounded-lg border border-neutral-200 p-1.5 text-neutral-600"
          >
            <Sun size={16} />
          </button>
          <button
            type="button"
            aria-label="GitHub"
            className="rounded-lg border border-neutral-200 p-1.5 text-neutral-600"
          >
            <Github size={16} />
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="rounded-lg border border-neutral-200 p-1.5 text-neutral-600"
          >
            <Menu size={16} />
          </button>
        </div>
      </nav>
    </header>
  );
}
