"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { CommandContext } from "@/components/command/CommandContext";

// The palette (cmdk + Radix Dialog) is code-split and only loaded once the user
// actually opens it — keeping it out of the initial bundle.
const CommandPalette = dynamic(
  () => import("@/components/command/CommandPalette"),
  { ssr: false }
);

// Owns palette open state, registers the global Cmd/Ctrl+K shortcut, and exposes
// open/toggle to descendants via context. Wraps the app in the root layout.
export default function CommandProvider({ children }) {
  const [open, setOpenState] = useState(false);
  const [ready, setReady] = useState(false); // becomes true on first open

  const setOpen = useCallback((value) => {
    if (value) setReady(true);
    setOpenState(value);
  }, []);

  const toggle = useCallback(() => {
    setReady(true);
    setOpenState((v) => !v);
  }, []);

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

  const value = useMemo(() => ({ open, setOpen, toggle }), [open, setOpen, toggle]);

  return (
    <CommandContext.Provider value={value}>
      {children}
      {ready ? <CommandPalette open={open} setOpen={setOpen} /> : null}
    </CommandContext.Provider>
  );
}
