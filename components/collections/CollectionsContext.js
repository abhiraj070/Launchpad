"use client";

import { createContext, useContext } from "react";

// Lets any client component (navbar, category pills, product pages) open the
// collections browser — optionally straight to a specific collection.
export const CollectionsContext = createContext({
  open: false,
  initialId: null,
  openCollections: () => {},
  setOpen: () => {},
});

export function useCollections() {
  return useContext(CollectionsContext);
}
