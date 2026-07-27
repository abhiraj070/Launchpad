import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Launchpad — Discover & launch products",
  description:
    "The single home for all of my products. Discover, explore, and launch everything from one place.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen font-sans text-fg antialiased">
        {/* Layered depth: a single contained warm glow, not a full-page wash. */}
        <div
          aria-hidden="true"
          className="ambient-glow pointer-events-none fixed inset-x-0 top-0 z-0 h-[540px]"
        />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
