export const conceptProbe = {
  slug: "signal-cabinet",
  name: "Signal Cabinet",
  tagline: "An AI-assisted website for collecting, annotating, and resurfacing cultural fragments.",
  summary:
    "Signal Cabinet helps a small creative team save images, notes, references, and stray links, then reshapes them into curated thematic collections. The product sits somewhere between a research archive, an editorial tool, and a living notebook.",
  fixedConstraints: [
    "Single product concept shared across all three probes.",
    "Do not force the same page structure across styles.",
    "The difference should come from information architecture, tone, and visual grammar.",
    "Each result should still feel like a plausible public-facing website for the same product.",
  ],
  desiredSignals: [
    "The website should make the product feel real, not like a style exercise.",
    "The home page can choose a different first impression depending on the style.",
    "The product should feel useful for humans, but expressive enough to show strong stylistic divergence.",
  ],
} as const;

export const conceptProbeRoutes = [
  {
    style: "003",
    slug: "003-julie-doucet",
    route: "/agent-probe/signal-cabinet/003",
    title: "Signal Cabinet / style 003",
    frame: "authorial entrance",
  },
  {
    style: "004",
    slug: "004-boookin-shop",
    route: "/agent-probe/signal-cabinet/004",
    title: "Signal Cabinet / style 004",
    frame: "browseable archive",
  },
  {
    style: "005",
    slug: "005-self-esteem-editorial",
    route: "/agent-probe/signal-cabinet/005",
    title: "Signal Cabinet / style 005",
    frame: "editorial feature",
  },
] as const;
