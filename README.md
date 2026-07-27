# 🚀 Launchpad

**The single home for everything I've built — discover, explore, and launch every product from one place.**

Launchpad is a personal product launcher, not a portfolio. It's designed to feel like opening an operating system full of applications: a curated first screen of featured products, a complete workspace of every project, fast keyboard-first navigation, and lightweight personalization — all rendered from one centralized data file.

<p align="left">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?logo=javascript&logoColor=black">
</p>

---

## ✨ Features

- **OS-style dark UI** — glass floating navbar, layered depth, an orange accent used meaningfully, and per-product category identities.
- **Curated homepage** — a focused **Featured** screen that flows into the **Complete Workspace** with every project.
- **Rich product pages** — problem → solution → capabilities → showcase → technology → status → roadmap → related products, generated from data.
- **⌘K Command Palette** — fuzzy, keyboard-first search across every product ([cmdk](https://cmdk.paco.me/)).
- **Collections & discovery** — browse by curated collections, categories, and cross-cutting themes (tags), plus relatedness by shared tech/tags/category.
- **Personal workspace** — favorites, recently opened, and "you may also like", persisted in `localStorage` (no backend, no accounts).
- **Production-ready** — full SEO (metadata, Open Graph, dynamic OG images, `robots.txt`, `sitemap.xml`), accessibility (keyboard nav, focus management, WCAG-AA contrast, reduced-motion), graceful error/404 states, and code-split overlays.

---

## 🧱 Tech Stack

| Area          | Choice                                                        |
| ------------- | ------------------------------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org/) (App Router), JavaScript (no TypeScript) |
| UI runtime    | React 18                                                      |
| Styling       | [Tailwind CSS](https://tailwindcss.com/) with a token-driven design system |
| Typography    | [Geist](https://vercel.com/font) (self-hosted via `geist`)    |
| Icons         | [lucide-react](https://lucide.dev/)                           |
| Command menu  | [cmdk](https://cmdk.paco.me/)                                 |
| Overlays      | [@radix-ui/react-dialog](https://www.radix-ui.com/) (accessible dialogs) |
| Motion        | CSS transitions + keyframes (Framer Motion installed, mostly unused) |

No backend, no database, no external APIs — everything is static and client-side.

---

## 🚀 Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm run dev

# production build + run
npm run build
npm run start
```

---

## 📁 Project Structure

```
launchpad/
├── app/
│   ├── layout.js               # root layout, global metadata, providers
│   ├── page.js                 # homepage (featured → complete workspace)
│   ├── about/page.js
│   ├── project/[slug]/
│   │   ├── page.js             # dynamic product detail page
│   │   ├── loading.js          # skeleton
│   │   └── opengraph-image.js  # per-product OG image
│   ├── opengraph-image.js      # site OG image
│   ├── robots.js · sitemap.js  # SEO routes (data-driven)
│   ├── not-found.js · error.js # graceful fallbacks
│   └── globals.css             # design tokens + base styles
├── components/
│   ├── command/                # Command Palette (⌘K)
│   ├── collections/            # Collections browser
│   ├── workspace/              # favorites / recent / recommendations
│   ├── product/                # detail-page sections
│   └── ui/                     # Button, Tag, Container, Reveal, …
├── lib/
│   ├── site.js                 # site config (name, url, author)
│   ├── design.js               # category → icon / accent
│   ├── collections.js          # dynamic collections from data
│   ├── discovery.js            # related-products scoring
│   ├── workspace.js            # localStorage layer (single source)
│   └── useWorkspace.js         # reactive React binding
└── data/
    └── products.js             # ⭐ single source of truth for all products
```

---

## 🗂️ Adding a Product

Everything is driven by **`data/products.js`** — the homepage, detail pages, command palette, collections, sitemap, and OG images all derive from it. Adding a product is a single append:

```js
{
  id: 7,
  slug: "my-product",
  featured: false,               // leads the curated first screen when true
  name: "My Product",
  tagline: "A one-line value proposition.",
  shortDescription: "The card one-liner.",
  category: "Developer Tools",   // groups it into a category collection
  status: "Live",                // Live | Building | Experiment
  accentColor: "#22c55e",        // the product's brand color
  tags: ["real-time", "open-source"],  // powers themes + recommendations
  year: 2026,                    // powers the "Recently Built" collection
  relatedProducts: ["some-slug"],// optional explicit picks
  problem: "…",
  solution: "…",
  features: [{ title: "…", description: "…" }],
  technologies: ["React", "Node.js"],
  github: "https://github.com/…",
  live: "https://…",             // null if no public demo
  statusNote: "…",
  roadmap: ["…"],
  screenshots: [],
}
```

Collections, categories, themes, sitemap entries, and OG images update automatically.

---

## ⌨️ Keyboard Shortcuts

| Shortcut          | Action                          |
| ----------------- | ------------------------------- |
| `⌘ K` / `Ctrl K`  | Open the Command Palette        |
| `↑` `↓`           | Navigate results                |
| `↵`               | Open the selected product       |
| `Esc`             | Close any overlay               |

---

## 🌐 Deployment

Optimized for [Vercel](https://vercel.com/) (or any Node host). Before deploying, set the production origin so canonical URLs, Open Graph tags, the sitemap, and `robots.txt` resolve correctly:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If unset, it defaults to a placeholder.

---

## 📦 The Products

| Product | Category | Status | Links |
| ------- | -------- | ------ | ----- |
| **Hidden Gems** ⭐ | Travel | Live | [demo](https://hidden-gems-859h.vercel.app/) · [source](https://github.com/abhiraj070/HiddenGems) |
| **NoteAI** ⭐ | Productivity | Live | [demo](https://note-ai-eta.vercel.app/) · [source](https://github.com/abhiraj070/NoteAi) |
| **myNeta** ⭐ | Politics | Building | [source](https://github.com/abhiraj070/myNeta) |
| **Aaraam Calling Agent** ⭐ | AI | Building | [source](https://github.com/abhiraj070/Aaraam-CallingAgent) |
| **CodeArena** | Developer Tools | Experiment | [demo](https://code-arena-six-theta.vercel.app/) · [source](https://github.com/abhiraj070/CodeArena) |
| **Skribbl.io** | Games | Live | [demo](https://skribbl-io-nine.vercel.app/) · [source](https://github.com/abhiraj070/Skribbl.io) |

⭐ = featured on the landing screen.

---

## 👤 Author

Built by **Abhiraj Sharma** — [@abhiraj070](https://github.com/abhiraj070)

---

<p align="center"><sub>Launchpad — an operating system for discovering products, not a portfolio.</sub></p>
