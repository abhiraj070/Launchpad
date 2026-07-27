import {
  Sparkles,
  Compass,
  Landmark,
  NotebookPen,
  Terminal,
  Gamepad2,
  Boxes,
} from "lucide-react";

// --- Category identity ---------------------------------------------------
// Each category maps to an icon and an abstract artwork motif. The *color* now
// comes from each product's own `accentColor`; the category only decides the
// icon and the motif's visual grammar. Orange remains the single brand accent.
const categoryMeta = {
  AI: { icon: Sparkles, motif: "ai" },
  Travel: { icon: Compass, motif: "travel" },
  Politics: { icon: Landmark, motif: "politics" },
  Productivity: { icon: NotebookPen, motif: "utilities" },
  "Developer Tools": { icon: Terminal, motif: "code" },
  Games: { icon: Gamepad2, motif: "draw" },
};

const fallbackMeta = { icon: Boxes, motif: "orbit" };

export function getCategoryMeta(category) {
  return categoryMeta[category] || fallbackMeta;
}

// The color a product uses across its card, artwork, and detail page.
export function getAccent(product) {
  return product.accentColor || "#fb923c";
}
