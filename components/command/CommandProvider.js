"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CommandContext } from "@/components/command/CommandContext";
import CommandPalette from "@/components/command/CommandPalette";

// Owns palette open state, registers the global Cmd/Ctrl+K shortcut, and exposes
// open/toggle to descendants via context. Wraps the app in the root layout.
export default function CommandProvider({ children }) {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    const onKeyDown = (e) => {
      // Cmd+K (macOS) / Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggle]);

  const value = useMemo(() => ({ open, setOpen, toggle }), [open, toggle]);

  return (
    <CommandContext.Provider value={value}>
      {children}
      <CommandPalette open={open} setOpen={setOpen} />
    </CommandContext.Provider>
  );
}
