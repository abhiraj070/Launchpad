// Central site config used by metadata, sitemap, and robots.
// Set NEXT_PUBLIC_SITE_URL in the deploy environment to the real origin.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://launchpad.vercel.app"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Launchpad",
  title: "Launchpad — Discover & launch products",
  description:
    "The single home for everything I've built. Discover, explore, and launch every product from one place.",
  author: "Abhiraj Sharma",
  twitter: "@abhiraj070",
  url: siteUrl,
};

export const absoluteUrl = (path = "") => `${siteUrl}${path}`;
