export const case029StyleFamily = {
  slug: "zina-gallery-poster",
  name: "Zina Poster Grid",
  tagline: "A folded exhibition-poster grammar for public programme bulletin surfaces.",
  summary:
    "Case 029 works best as a public-facing bulletin surface: duplicated metadata, hard grid seams, and oversized typographic blocks turn a single poster into a structured programme announcement rather than a browser or dashboard. The style family should preserve the original green poster cadence while letting product concepts publish dates, contributors, and edition framing through the same rigid poster field.",
  positioning:
    "Case 029 is best used as a public programme bulletin: a campaign-grade publication poster that announces an issue, season, or drop rather than serving as a dense browser or operations console.",
  fixedConstraints: [
    "Preserve the original case-029 poster grammar: duplicated metadata rows, central vertical seam, four horizontal bands, and oversized left/right typographic blocks.",
    "The page must still read as one poster sheet in a room, not as a dashboard or app shell.",
    "Interaction stays additive and restrained—small hover drift and light shimmer are acceptable, but the poster must remain essentially static.",
    "Any product concept using this style must behave like a public bulletin, launch broadside, season announcement, or programme sheet.",
  ],
  desiredSignals: [
    "The first impression is poster/publication, not browser/product UI.",
    "Duplicated metadata should feel functional and intentional, like programme information repeated around a printed grid.",
    "The concept should feel plausible for a real product while staying visually anchored to the source demo.",
  ],
} as const;

export const case029StyleFamilyRoutes = [
  {
    concept: "Signal Cabinet",
    slug: "signal-cabinet",
    route: "/agent-probe/zina-gallery-poster/signal-cabinet",
    title: "Zina Poster Grid / Signal Cabinet",
    frame: "season bulletin",
  },
] as const;
