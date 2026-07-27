import {
  Sparkles,
  Compass,
  Landmark,
  Wrench,
  Terminal,
  FlaskConical,
  Boxes,
} from "lucide-react";

// A cohesive warm palette (all orange-adjacent) used to tint product artwork.
// Variety keeps the mosaic organic without straying from the brand accent.
export const warmTints = ["#ff6b35", "#f59e0b", "#fb7185", "#f4a15d", "#ff8c42"];

// Each category maps to an icon so product artwork reads at a glance.
const categoryIcons = {
  AI: Sparkles,
  Travel: Compass,
  Politics: Landmark,
  Utilities: Wrench,
  "Developer Tools": Terminal,
  Experiments: FlaskConical,
};

export function getCategoryIcon(category) {
  return categoryIcons[category] || Boxes;
}
