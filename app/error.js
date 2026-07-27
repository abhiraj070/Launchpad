"use client";

import { useEffect } from "react";
import { RotateCcw, Home } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// Route-level error boundary — a graceful, on-brand fallback with recovery.
export default function Error({ error, reset }) {
  useEffect(() => {
    // In production this is where you'd report to your error service.
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center pt-28 sm:pt-32">
      <Container className="text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          Something went wrong
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          This part hit a snag
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-fg-muted">
          An unexpected error occurred. You can try again, or head back to the
          homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={reset} size="lg">
            <RotateCcw size={16} />
            Try again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            <Home size={16} />
            Back to Launchpad
          </Button>
        </div>
      </Container>
    </section>
  );
}
