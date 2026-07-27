"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Search,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  Star,
  Command as CommandIcon,
} from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import { getCategoryMeta, getAccent } from "@/lib/design";
import { toProductCommand } from "@/lib/commands";
import { products } from "@/data/products";
import { useWorkspace } from "@/lib/useWorkspace";

// A single command row. Product commands get their accent + category icon and a
// favorite star; other kinds fall back to a neutral treatment (future-proof).
function CommandRow({ command, favorite }) {
  if (command.kind === "product") {
    const product = command.data;
    const meta = getCategoryMeta(product.category);
    const Icon = meta.icon;
    const color = getAccent(product);
    return (
      <div className="flex w-full items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
          style={{ color, backgroundColor: `${color}14`, borderColor: `${color}2e` }}
        >
          <Icon size={16} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-sm font-medium text-fg">{command.title}</span>
            <span
              className="shrink-0 text-[10px] font-medium uppercase tracking-wide"
              style={{ color, opacity: 0.85 }}
            >
              {product.category}
            </span>
            {favorite ? (
              <Star size={11} className="shrink-0 text-accent" fill="currentColor" />
            ) : null}
          </div>
          <p className="truncate text-xs text-fg-muted">{command.subtitle}</p>
        </div>
        <StatusBadge status={product.status} />
        <CornerDownLeft size={14} className="cmd-enter shrink-0 text-fg-faint opacity-0" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="flex w-full items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-fg-muted">
        <CommandIcon size={15} />
      </span>
      <div className="min-w-0 flex-1">
        <span className="truncate text-sm font-medium text-fg">{command.title}</span>
        {command.subtitle ? (
          <p className="truncate text-xs text-fg-muted">{command.subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

export default function CommandPalette({ open, setOpen }) {
  const router = useRouter();
  const { favorites, recents, isFavorite } = useWorkspace();
  const [search, setSearch] = useState("");

  // Fresh query each time the palette opens.
  useEffect(() => {
    if (open) setSearch("");
  }, [open]);

  // Empty query → grouped suggestions (Recently opened, Favorites, then the
  // rest), each product shown once. Typing → a single flat, filterable catalog.
  const groups = useMemo(() => {
    if (search.trim()) {
      return [{ key: "all", heading: "Products", items: products }];
    }
    const shown = new Set();
    const take = (list) => {
      const picked = list.filter((p) => !shown.has(p.slug));
      picked.forEach((p) => shown.add(p.slug));
      return picked;
    };
    const favoriteItems = take(favorites);
    const recentItems = take(recents);
    const restItems = take(products);
    const personalized = favoriteItems.length || recentItems.length;
    return [
      favoriteItems.length && { key: "favorites", heading: "Favorites", items: favoriteItems },
      recentItems.length && { key: "recent", heading: "Recently opened", items: recentItems },
      restItems.length && {
        key: "all",
        heading: personalized ? "All products" : "Products",
        items: restItems,
      },
    ].filter(Boolean);
  }, [search, favorites, recents]);

  const run = (command) => {
    setOpen(false);
    command.perform({ router });
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command menu"
      loop
      overlayClassName="lp-overlay"
      contentClassName="lp-content"
      className="lp-palette glass flex flex-col overflow-hidden rounded-2xl border border-hairline-strong text-fg shadow-elevated"
    >
      <div className="flex items-center gap-3 border-b border-hairline px-4">
        <Search size={17} className="shrink-0 text-fg-faint" aria-hidden="true" />
        <Command.Input
          value={search}
          onValueChange={setSearch}
          placeholder="Search products…"
          className="h-12 w-full bg-transparent text-[15px] text-fg outline-none placeholder:text-fg-faint"
        />
        <kbd className="shrink-0 rounded border border-hairline bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-fg-faint">
          ESC
        </kbd>
      </div>

      <Command.List className="max-h-[min(60vh,420px)] overflow-y-auto overscroll-contain p-2">
        <Command.Empty className="flex flex-col items-center gap-1 px-4 py-12 text-center">
          <p className="text-sm font-medium text-fg">No results found</p>
          <p className="text-xs text-fg-muted">
            Try a product name, category, or what it does.
          </p>
        </Command.Empty>

        {groups.map((group) => (
          <Command.Group key={group.key} heading={group.heading} className="mb-1">
            {group.items.map((product) => {
              const command = toProductCommand(product);
              return (
                <Command.Item
                  key={command.id}
                  value={command.title}
                  keywords={command.keywords}
                  onSelect={() => run(command)}
                  className="flex cursor-pointer items-center rounded-lg px-2.5 py-2 text-fg-muted aria-selected:bg-surface-2 aria-selected:text-fg"
                >
                  <CommandRow command={command} favorite={isFavorite(product.slug)} />
                </Command.Item>
              );
            })}
          </Command.Group>
        ))}
      </Command.List>

      <div className="flex items-center justify-between gap-3 border-t border-hairline px-4 py-2.5 text-fg-faint">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[11px]">
            <kbd className="flex h-5 w-5 items-center justify-center rounded border border-hairline bg-surface-2">
              <ArrowUp size={11} />
            </kbd>
            <kbd className="flex h-5 w-5 items-center justify-center rounded border border-hairline bg-surface-2">
              <ArrowDown size={11} />
            </kbd>
            <span>Navigate</span>
          </span>
          <span className="flex items-center gap-1 text-[11px]">
            <kbd className="flex h-5 items-center justify-center rounded border border-hairline bg-surface-2 px-1">
              <CornerDownLeft size={11} />
            </kbd>
            <span>Open</span>
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Launchpad
        </span>
      </div>
    </Command.Dialog>
  );
}
