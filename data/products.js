// -----------------------------------------------------------------------------
// Launchpad — centralized product data (single source of truth).
//
// Both the homepage and the product detail pages render entirely from this
// file. Adding a new product should only require appending an entry here.
//
// Content is sourced from each project's README, live deployment, and GitHub
// repository homepage. Where a live product's copy differs from its README,
// the live product wins. `accentColor` mirrors each product's real brand.
//
// Field shape:
//   id, slug, featured, name, tagline, shortDescription, category, status,
//   accentColor, tags[], year, relatedProducts[]?, problem, solution,
//   features[{title, description}], technologies[], github, live, statusNote,
//   roadmap[], screenshots[]
//
// `tags` and `year` power dynamic collections and discovery; `relatedProducts`
// (optional slugs) lets a product pin its own related picks. All collection and
// recommendation logic derives from these fields — nothing is hardcoded.
//
// `featured: true` products lead the homepage's curated first screen; every
// product (featured or not) appears in the complete-workspace section below it.
// -----------------------------------------------------------------------------

export const products = [
  {
    id: 1,
    slug: "code-arena",
    featured: false,
    name: "CodeArena",
    tagline: "Where developers compete, collaborate, and build in real time.",
    shortDescription:
      "Head-to-head coding battles with live execution and multiplayer rooms.",
    category: "Developer Tools",
    status: "Experiment",
    accentColor: "#22c55e",
    tags: ["real-time", "multiplayer", "competitive", "websockets", "open-source"],
    year: 2026,
    relatedProducts: ["skribbl"],
    problem:
      "Practicing algorithms alone is quiet and unmotivating. Most judges are solitary — you grind problems in isolation with no opponent, no clock, and no reason to come back tomorrow. The competitive energy that makes coding stick is missing from everyday practice.",
    solution:
      "CodeArena turns problem-solving into a live match. Create or join a room, get paired with an opponent, and race to solve the same problem while your code runs in real time on both sides. WebSocket sync keeps every submission and result instant, so practice feels like a game instead of homework.",
    features: [
      {
        title: "Real-time battles",
        description:
          "Compete head-to-head in live rooms where both players' progress syncs instantly over WebSockets.",
      },
      {
        title: "Online code execution",
        description:
          "Run and test solutions right in the browser across multiple languages, with immediate feedback.",
      },
      {
        title: "Smart matchmaking",
        description:
          "Jump in and get paired with an opponent in seconds — no scheduling, no waiting around.",
      },
      {
        title: "Secure rooms",
        description:
          "Authenticated sessions keep every match and the people in it protected.",
      },
      {
        title: "Built to scale",
        description:
          "A microservices backend separates API, sockets, and execution so matches stay fast under load.",
      },
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Socket.IO",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    github: "https://github.com/abhiraj070/CodeArena",
    live: "https://code-arena-six-theta.vercel.app/",
    statusNote:
      "Deployed and playable — frontend on Vercel, services on Render. Core battles work end to end while ranked play and leaderboards are actively being built.",
    roadmap: [
      "Ranked matchmaking with ELO ratings",
      "Global leaderboards",
      "Match replays",
      "Contest mode and team battles",
      "AI-assisted problem recommendations",
    ],
    screenshots: [],
  },
  {
    id: 2,
    slug: "hidden-gems",
    featured: true,
    name: "Hidden Gems",
    tagline: "Uncover the unseen — the places maps don't show you.",
    shortDescription:
      "A community map of underrated local spots, reviewed by people who've been there.",
    category: "Travel",
    status: "Live",
    accentColor: "#2dd4bf",
    tags: ["community", "maps", "social", "location"],
    year: 2025,
    problem:
      "The best places rarely make it onto mainstream maps. Popular apps funnel everyone toward the same crowded, highly-rated spots, while the quiet corners locals actually love stay invisible to visitors.",
    solution:
      "Hidden Gems is a community-run map of the overlooked. Explorers pin lesser-known places around them, leave honest reviews and comments, and follow each other to discover spots through people they trust — travel guided by real experience, not an algorithm.",
    features: [
      {
        title: "Community-pinned spots",
        description:
          "Discover hidden places near you, marked by travelers who have actually been there.",
      },
      {
        title: "Reviews & comments",
        description:
          "Read and leave honest first-hand notes on every location.",
      },
      {
        title: "Follow explorers",
        description:
          "Build a network of travelers and find gems through the people you trust.",
      },
      {
        title: "Beyond the map",
        description:
          "Go past the usual tourist trail to the corners locals keep to themselves.",
      },
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Geolocation", "Vercel"],
    github: "https://github.com/abhiraj070/HiddenGems",
    live: "https://hidden-gems-859h.vercel.app/",
    statusNote:
      "Live and open to explorers — you can browse pinned spots, sign in, and start contributing your own discoveries.",
    roadmap: [
      "Curated collections you can save and share",
      "Richer maps with search and filters",
      "A companion mobile experience",
    ],
    screenshots: [],
  },
  {
    id: 3,
    slug: "noteai",
    featured: true,
    name: "NoteAI",
    tagline: "Notes that think with you.",
    shortDescription:
      "A clean note-taking app that titles and summarizes your writing for you.",
    category: "Productivity",
    status: "Live",
    accentColor: "#f5b60a",
    tags: ["ai-powered", "writing", "open-source", "self-hostable"],
    year: 2024,
    problem:
      "Note apps either get in your way with clutter or leave all the organizing to you. You jot a quick thought, then spend energy naming it, tagging it, and later scrolling endlessly to find it again.",
    solution:
      "NoteAI keeps the editor distraction-free and lets AI handle the busywork. It suggests a title when you finish writing, generates a short summary for previews, and organizes everything with color-coded tags — without ever overwriting the edits you make yourself.",
    features: [
      {
        title: "AI titles",
        description:
          "Finish a note and NoteAI suggests a fitting title — and never overrides one you've set.",
      },
      {
        title: "Instant summaries",
        description:
          "Every note gets a two-to-three sentence summary so your dashboard stays skimmable.",
      },
      {
        title: "Distraction-free editor",
        description:
          "A clean writing surface with debounced auto-save you never have to think about.",
      },
      {
        title: "Tag organization",
        description:
          "Color-coded tags and filtering keep every note findable.",
      },
      {
        title: "Secure by default",
        description:
          "JWT sessions in HTTP-only cookies, hardened with Helmet and CORS.",
      },
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Gemini",
      "JWT",
    ],
    github: "https://github.com/abhiraj070/NoteAi",
    live: "https://note-ai-eta.vercel.app/",
    statusNote:
      "Deployed and usable end to end — authentication, the AI editor, summaries, and tagging all work today.",
    roadmap: [
      "Full-text search across notes",
      "Shared and collaborative notes",
      "A native mobile app",
    ],
    screenshots: [],
  },
  {
    id: 4,
    slug: "skribbl",
    featured: false,
    name: "Skribbl.io",
    tagline: "Draw it. Guess it. Win it.",
    shortDescription:
      "A real-time multiplayer draw-and-guess party game you host with a room code.",
    category: "Games",
    status: "Live",
    accentColor: "#7c6cff",
    tags: ["real-time", "multiplayer", "canvas", "social", "party"],
    year: 2024,
    relatedProducts: ["code-arena"],
    problem:
      "Playing games with friends online usually means downloads, accounts on someone else's platform, or ads between every round. A quick, shared drawing game should be as simple as sending a room code.",
    solution:
      "Skribbl is a self-hosted take on the classic draw-and-guess game. Create a room, share the code, and play together on a live collaborative canvas. Everyone draws and guesses in real time, rounds and scoring run themselves, and the whole thing sits on your own stack.",
    features: [
      {
        title: "Live canvas",
        description:
          "A shared whiteboard with brushes, colors, undo, and clear — synced to everyone instantly.",
      },
      {
        title: "Rooms & codes",
        description:
          "Spin up a room, set the round count, and invite friends with a single code.",
      },
      {
        title: "Real-time rounds",
        description:
          "Word selection, drawing, guessing, and results flow automatically across five phases.",
      },
      {
        title: "Scoring & rotation",
        description:
          "Points for correct guesses and drawer bonuses, with automatic turn rotation.",
      },
      {
        title: "Late-join sync",
        description:
          "Players who join mid-game receive the full canvas state — no refresh needed.",
      },
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Fabric.js",
      "Socket.IO",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/abhiraj070/Skribbl.io",
    live: "https://skribbl-io-nine.vercel.app/",
    statusNote:
      "Deployed and playable — rooms, live drawing, guessing, and scoring are all functional.",
    roadmap: [
      "Public rooms and quick matchmaking",
      "Custom word packs",
      "Spectator mode",
    ],
    screenshots: [],
  },
  {
    id: 5,
    slug: "myneta",
    featured: true,
    name: "myNeta",
    tagline: "Who represents you — and what do you actually think of them?",
    shortDescription:
      "Find your leaders by location and register a public verdict: rose or slap.",
    category: "Politics",
    status: "Building",
    accentColor: "#fb7185",
    tags: ["civic-tech", "maps", "social", "india"],
    year: 2025,
    problem:
      "Most people can't name the leaders who represent them, let alone recall what those leaders promised. Civic feedback is scattered across news and social media, with no simple, immediate way to say 'I approve' or 'I don't.'",
    solution:
      "myNeta uses your location to surface the leaders who represent you, shows their party and commitments, and lets anyone register a one-tap public verdict — a rose for approval or a slap for disapproval, no login required. Live leaderboards turn that collective sentiment into something you can actually see.",
    features: [
      {
        title: "Find your leaders",
        description:
          "Geolocation resolves your state and surfaces your sitting Chief Minister instantly.",
      },
      {
        title: "Rose or slap",
        description:
          "Register approval or disapproval in a single tap — no account needed.",
      },
      {
        title: "Live leaderboards",
        description:
          "Watch the most-rosed and most-slapped leaders update in real time.",
      },
      {
        title: "Minister directory",
        description:
          "Search Union Ministers by name, party, or ministry.",
      },
      {
        title: "Daily highlights",
        description:
          "Fresh highlight tiles each day, resetting at local midnight.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "FastAPI",
      "Python",
      "PostgreSQL + PostGIS",
    ],
    github: "https://github.com/abhiraj070/myNeta",
    live: null,
    statusNote:
      "Functional and actively developed, focused on Chief Ministers and Union Ministers. Not yet publicly deployed.",
    roadmap: [
      "Expand to MPs and local representatives",
      "Track promises and commitments over time",
      "Regional language support",
    ],
    screenshots: [],
  },
  {
    id: 6,
    slug: "aaraam-calling-agent",
    featured: true,
    name: "Aaraam Calling Agent",
    tagline: "Say it once — Aaraam makes the calls for you.",
    shortDescription:
      "An AI agent that turns one instruction into real phone calls to the right people.",
    category: "AI",
    status: "Building",
    accentColor: "#38bdf8",
    tags: ["ai-powered", "voice", "automation", "telephony"],
    year: 2026,
    problem:
      "Running a household means making the same calls over and over — one person about groceries, another about a pickup, a third in their own language. It's repetitive, easy to forget, and every call has to be placed by hand.",
    solution:
      "Aaraam listens to a single request — typed or spoken — works out who in your household it concerns, and places real phone calls that deliver the right message to each person in their preferred language. It records what they say back, transcribes it, and keeps a running history, so one sentence from you becomes several completed calls.",
    features: [
      {
        title: "Text or voice input",
        description:
          "Describe what you need in plain language — type it or record a quick voice note.",
      },
      {
        title: "Role-aware routing",
        description:
          "The agent decides who to call and tailors the message for each household member.",
      },
      {
        title: "Natural voice calls",
        description:
          "Messages are spoken on a real phone call using lifelike text-to-speech.",
      },
      {
        title: "Replies, recorded",
        description:
          "Responses are recorded, transcribed, and saved to a searchable history.",
      },
      {
        title: "Speaks their language",
        description:
          "Each person hears the message in the language they're most comfortable with.",
      },
      {
        title: "Live call status",
        description:
          "Watch calls progress in real time, streamed back to the app.",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Pydantic AI",
      "OpenAI",
      "ElevenLabs",
      "Twilio",
      "Flutter",
      "PostgreSQL",
    ],
    github: "https://github.com/abhiraj070/Aaraam-CallingAgent",
    live: null,
    statusNote:
      "Fully implemented across an AI backend, a Flutter mobile app, and a web prototype. Runs against live Twilio, OpenAI, and ElevenLabs services, and is not yet publicly deployed.",
    roadmap: [
      "Public beta of the mobile app",
      "Scheduled and recurring calls",
      "Two-way conversational follow-ups",
    ],
    screenshots: [],
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

// The curated first screen — order preserved from the data.
export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

// Category list derived from the data — so a new category appears automatically.
export function getCategories() {
  return ["All", ...Array.from(new Set(products.map((p) => p.category)))];
}
