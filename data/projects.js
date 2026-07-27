// Local placeholder data for Phase 1.
// No backend, no API, no database — this is the single source of truth for now.

export const projects = [
  {
    id: 1,
    slug: "hidden-gems",
    title: "Hidden Gems",
    description: "Discover underrated travel destinations off the beaten path.",
    category: "Travel",
    status: "Live",
  },
  {
    id: 2,
    slug: "slap-your-leader",
    title: "Slap Your Leader",
    description: "A satirical take on holding public figures accountable.",
    category: "Politics",
    status: "Live",
  },
  {
    id: 3,
    slug: "voice-agent",
    title: "Voice Agent",
    description: "Conversational AI assistant that responds to natural speech.",
    category: "AI",
    status: "Building",
  },
  {
    id: 4,
    slug: "news-graph",
    title: "News Graph",
    description: "Visualize how news stories connect across the web.",
    category: "AI",
    status: "Building",
  },
  {
    id: 5,
    slug: "election-dashboard",
    title: "Election Dashboard",
    description: "Track live election results in a clean, readable interface.",
    category: "Politics",
    status: "Live",
  },
  {
    id: 6,
    slug: "weather-ai",
    title: "Weather AI",
    description: "Natural-language weather forecasts powered by AI.",
    category: "AI",
    status: "Experiment",
  },
  {
    id: 7,
    slug: "expense-tracker",
    title: "Expense Tracker",
    description: "Simple, no-frills tracking for everyday spending.",
    category: "Utilities",
    status: "Live",
  },
  {
    id: 8,
    slug: "portfolio-api",
    title: "Portfolio API",
    description: "A developer-friendly API to serve portfolio content.",
    category: "Developer Tools",
    status: "Experiment",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
