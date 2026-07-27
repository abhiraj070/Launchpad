"use client";

import { createContext, useContext } from "react";

// Lets any client component (e.g. the navbar trigger) open/close the palette.
export const CommandContext = createContext({
  open: false,
  setOpen: () => {},
  toggle: () => {},
});

export function useCommandPalette() {
  return useContext(CommandContext);
}
