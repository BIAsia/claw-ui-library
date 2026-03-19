export const case011StyleFamily = {
  slug: "won-soju-bands",
  name: "Won Soju Section Bands",
  tagline: "A sensorial campaign page built from horizontal chapter bands, tonal shifts, and flavor-led pacing.",
  summary:
    "Case 011 works best as a flavor-story campaign surface where horizontal bands create cadence across origin, tasting note, ritual, and release timing. The family should feel atmospheric and premium, with each band carrying one dominant message and commerce kept secondary to the branded sequence.",
  positioning:
    "Case 011 is strongest as a narrative launch page for beverage, capsule, or sensory brand campaigns rather than a standard ecommerce catalog.",
  fixedConstraints: [
    "Horizontal section bands must be the governing compositional rule.",
    "Color and tonal shifts between bands should create real narrative cadence.",
    "Each band should carry one dominant message—flavor note, ingredient, ritual, or drop cue.",
    "Imagery and typography must feel sensorial and premium while keeping commerce utility secondary.",
  ],
  desiredSignals: [
    "The page reads as a branded campaign sequence, not a catalog.",
    "Each band has a focused content role and creates paced progression.",
    "The mood feels tactile, atmospheric, and plausible for a beverage launch.",
  ],
} as const;

export const case011StyleFamilyRoutes = [
  {
    concept: "Flavor Journey",
    slug: "flavor-journey",
    route: "/agent-probe/won-soju-bands/flavor-journey",
    title: "Won Soju Section Bands / Flavor Journey",
    frame: "flavor-story branded campaign",
  },
] as const;
