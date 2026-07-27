"use client";

import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { CollectionsContext } from "@/components/collections/CollectionsContext";

// The browser (Radix Dialog) is code-split and only loaded once opened.
const CollectionsBrowser = dynamic(
  () => import("@/components/collections/CollectionsBrowser"),
  { ssr: false }
);

// Owns the collections-browser open state and the collection it should open to.
// Wraps the app in the root layout so any page can trigger it.
export default function CollectionsProvider({ children }) {
  const [open, setOpenState] = useState(false);
  const [initialId, setInitialId] = useState(null);
  const [ready, setReady] = useState(false);

  const setOpen = useCallback((value) => {
    if (value) setReady(true);
    setOpenState(value);
  }, []);

  const openCollections = useCallback((id = null) => {
    setInitialId(id);
    setReady(true);
    setOpenState(true);
  }, []);

  const value = useMemo(
    () => ({ open, initialId, openCollections, setOpen }),
    [open, initialId, openCollections, setOpen]
  );

  return (
    <CollectionsContext.Provider value={value}>
      {children}
      {ready ? (
        <CollectionsBrowser open={open} onOpenChange={setOpen} initialId={initialId} />
      ) : null}
    </CollectionsContext.Provider>
  );
}
