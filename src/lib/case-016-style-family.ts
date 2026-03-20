export const case016StyleFamily = {
  slug: "adoption-dots",
  name: "Cashless Adoption Dots",
  tagline: "A clean adoption-explainer system where dot fields reveal spread, coverage, and participation patterns at a glance.",
  summary:
    "Case 016 should become a pattern-and-coverage explainer: a public-facing information surface where repeated micro-units communicate how something spreads across neighborhoods, categories, or time. The family must stay infographic-clean so the macro pattern teaches before exact numbers do.",
  positioning:
    "Case 016 is best used for adoption and rollout explainers—payments, transit, access, service uptake, or participation growth—where dot distributions do the primary storytelling instead of dashboard widgets.",
  fixedConstraints: [
    "Dots or repeated micro-units must remain the dominant visual language.",
    "The pattern must encode meaning through quantity, cluster, color, or motion rather than act as decoration.",
    "A concise narrative frame should explain what is spreading and why it matters.",
    "The composition needs to stay infographic-clean with minimal chrome.",
    "Macro insight should beat precision: the overall shape of change must read first.",
  ],
  desiredSignals: [
    "The page reads as a public adoption explainer, not a conventional product dashboard.",
    "Dot repetition communicates measurable spread clearly.",
    "A viewer understands the rollout pattern before reading fine-grain detail.",
  ],
} as const;

export const case016StyleFamilyRoutes = [
  {
    concept: "Tap Shift Map",
    slug: "tap-shift-map",
    route: "/agent-probe/adoption-dots/tap-shift-map",
    title: "Cashless Adoption Dots / Tap Shift Map",
    frame: "cashless adoption pattern explainer",
  },
] as const;
