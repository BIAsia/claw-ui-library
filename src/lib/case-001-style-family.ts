export const case001StyleFamily = {
  slug: "always-beginning",
  name: "Always Remember the Beginning",
  tagline: "A commemorative archive opener built as a solemn portrait sheet of memory, dates, and first acts.",
  summary:
    "Case 001 works best as a commemorative archive landing: a vertical opening sheet where one line of remembrance dominates and everything else behaves like ceremonial metadata. The family should preserve poster-like dignity, emotional restraint, and large-scale typographic gravity rather than drifting into a normal homepage or archive browser.",
  positioning:
    "Case 001 is strongest as a memorial archive opener: a public-facing dedication page for oral history, anniversary collections, and commemorative releases rather than a feature-rich landing page.",
  fixedConstraints: [
    "Preserve a portrait-poster feeling with one dominant thesis line that governs the entire hierarchy.",
    "Keep supporting metadata sparse and ceremonial—dates, archive numbers, geographies, and dedication notes should stay fragmentary.",
    "Let negative space do real compositional work; avoid utility chrome, card grids, and dense explanatory sections.",
    "Typography must carry the emotional weight through scale, spacing, and restraint rather than decorative widgets.",
  ],
  desiredSignals: [
    "The page reads immediately as a dedication or memorial opener, not as a generic product hero.",
    "One line can be understood from a distance before any supporting copy is read.",
    "The composition feels sparse on purpose—ceremonial, calm, and emotionally deliberate.",
  ],
} as const;

export const case001StyleFamilyRoutes = [
  {
    concept: "Origin Stack",
    slug: "origin-stack",
    route: "/agent-probe/always-beginning/origin-stack",
    title: "Always Remember the Beginning / Origin Stack",
    frame: "commemorative archive landing",
  },
] as const;
