"use client";

import { useEffect, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Star, Clock, Hash, X, ArrowLeft, ChevronRight, LayoutGrid } from "lucide-react";
import CompactProductCard from "@/components/workspace/CompactProductCard";
import { getCollections } from "@/lib/collections";
import { getCategoryMeta } from "@/lib/design";

function collectionIcon(collection) {
  if (collection.kind === "featured") return Star;
  if (collection.kind === "recent") return Clock;
  if (collection.kind === "category") return getCategoryMeta(collection.title).icon;
  return Hash;
}

// Groups the flat collection list by its `group`, preserving order.
function groupCollections(collections) {
  const groups = [];
  const index = new Map();
  for (const collection of collections) {
    if (!index.has(collection.group)) {
      index.set(collection.group, groups.length);
      groups.push({ heading: collection.group, items: [] });
    }
    groups[index.get(collection.group)].items.push(collection);
  }
  return groups;
}

export default function CollectionsBrowser({ open, onOpenChange, initialId }) {
  const collections = useMemo(() => getCollections(), []);
  const groups = useMemo(() => groupCollections(collections), [collections]);
  const [activeId, setActiveId] = useState(null);

  // Open to the requested collection (or the root list) each time it opens.
  useEffect(() => {
    if (open) setActiveId(initialId ?? null);
  }, [open, initialId]);

  const active = activeId ? collections.find((c) => c.id === activeId) : null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="lp-overlay" />
        <Dialog.Content
          aria-describedby={undefined}
          className="lp-panel glass flex flex-col overflow-hidden rounded-2xl border border-hairline-strong text-fg shadow-elevated"
        >
          {/* header */}
          <div className="flex items-center gap-3 border-b border-hairline px-5 py-3.5">
            {active ? (
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Back to all collections"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-fg-muted transition-all duration-200 ease-premium hover:bg-surface-2 hover:text-fg active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                <ArrowLeft size={16} />
              </button>
            ) : (
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <LayoutGrid size={16} />
              </span>
            )}
            <div className="min-w-0 flex-1">
              <Dialog.Title className="truncate text-[15px] font-semibold text-fg">
                {active ? active.title : "Collections"}
              </Dialog.Title>
              <p className="truncate text-xs text-fg-muted">
                {active
                  ? `${active.products.length} ${active.products.length === 1 ? "product" : "products"}`
                  : "Browse by collection, category, or theme"}
              </p>
            </div>
            <Dialog.Close
              aria-label="Close"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-fg-muted transition-all duration-200 ease-premium hover:bg-surface-2 hover:text-fg active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            >
              <X size={16} />
            </Dialog.Close>
          </div>

          {/* body */}
          <div className="overflow-y-auto overscroll-contain p-4">
            {active ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.products.map((product) => (
                  <div key={product.id} onClick={() => onOpenChange(false)}>
                    <CompactProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {groups.map((group) => (
                  <div key={group.heading}>
                    <p className="mb-2.5 px-1 text-xs font-semibold uppercase tracking-[0.14em] text-fg-faint">
                      {group.heading}
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {group.items.map((collection) => {
                        const Icon = collectionIcon(collection);
                        return (
                          <button
                            key={collection.id}
                            type="button"
                            onClick={() => setActiveId(collection.id)}
                            className="group flex items-center gap-3 rounded-xl border border-hairline bg-surface p-3 text-left transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-hairline-strong hover:bg-surface-hover active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-fg-muted transition-colors duration-200 group-hover:text-accent">
                              <Icon size={16} />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-fg">
                                {collection.title}
                              </p>
                              <p className="text-xs text-fg-faint">
                                {collection.products.length}{" "}
                                {collection.products.length === 1 ? "product" : "products"}
                              </p>
                            </div>
                            <ChevronRight
                              size={16}
                              className="shrink-0 text-fg-faint transition-transform duration-200 ease-premium group-hover:translate-x-0.5 group-hover:text-fg-muted"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
