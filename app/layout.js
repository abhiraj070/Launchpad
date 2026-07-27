import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandProvider from "@/components/command/CommandProvider";
import CollectionsProvider from "@/components/collections/CollectionsProvider";
import { siteConfig, siteUrl } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  keywords: [
    "Launchpad",
    "products",
    "portfolio",
    "software",
    "projects",
    siteConfig.author,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen font-sans text-fg antialiased">
        <a
          href="#main"
          className="sr-only z-[200] rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#0a0a0b] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {/* Layered depth: a single contained warm glow, not a full-page wash. */}
        <div
          aria-hidden="true"
          className="ambient-glow pointer-events-none fixed inset-x-0 top-0 z-0 h-[540px]"
        />
        <CommandProvider>
          <CollectionsProvider>
            <div className="relative z-10">
              <Navbar />
              <main id="main">{children}</main>
              <Footer />
            </div>
          </CollectionsProvider>
        </CommandProvider>
      </body>
    </html>
  );
}
