export const case013StyleFamily = {
  slug: "swagworks-hero",
  name: "Swagworks Hero Card",
  tagline: "A single-offer launch grammar where one oversized card carries the entire pitch with assertive brand posture.",
  summary:
    "Case 013 works best as a hero-object launch surface: one oversized, packaged card that owns the screen and communicates the offer almost entirely on its own. The family should preserve a sharp hierarchy, strong framing, and branded attitude without drifting into a full landing page system.",
  positioning:
    "Case 013 is best used for single-offer launches, drops, creator products, and membership intros where one memorable card does the persuasion instead of a long multi-section site.",
  fixedConstraints: [
    "One oversized hero card must dominate the frame; everything else is supporting context only.",
    "Hierarchy inside the card must stay sharp: product name, one-line pitch, and a few support signals are enough.",
    "Brand voice should feel stylized and confident rather than neutral SaaS.",
    "Peripheral UI outside the card must remain minimal so the experience stays tightly scoped.",
    "The card should feel packaged through framing, segmentation, borders, or deliberate depth.",
  ],
  desiredSignals: [
    "The page reads as a single-offer spotlight, not a general marketing site.",
    "One object carries the experience and is understandable without scrolling.",
    "The offer feels bold, branded, and easy to share as a launch artifact.",
  ],
} as const;

export const case013StyleFamilyRoutes = [
  {
    concept: "Drop Card",
    slug: "drop-card",
    route: "/agent-probe/swagworks-hero/drop-card",
    title: "Swagworks Hero Card / Drop Card",
    frame: "single-offer hero card launch surface",
  },
] as const;
