import Link from "next/link";
import { Home, Search } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-28 sm:pt-32">
      <Container className="text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          This page couldn&apos;t be found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-fg-muted">
          The product or page you&apos;re looking for doesn&apos;t exist or may
          have moved. Head back and explore what&apos;s here.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" size="lg">
            <Home size={16} />
            Back to Launchpad
          </Button>
          <Button href="/#products" variant="secondary" size="lg">
            <Search size={16} />
            Browse products
          </Button>
        </div>
      </Container>
    </section>
  );
}
