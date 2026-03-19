export const case021StyleFamily = {
  slug: "cygnito-mono-poster",
  name: "Cygnito Mono Poster",
  tagline: "A severe monochrome bulletin system for protocol readings, software salons, and machine-literature announcements.",
  summary:
    "Case 021 is most convincing as a disciplined mono broadside: an austere public notice where monospaced rhythm, serial metadata, fixed bands, and near-black contrast produce a coded cultural atmosphere. The family should retain the formal control of the source while supporting technical-culture announcements that feel exact, public-facing, and uncompromising.",
  positioning:
    "Case 021 works best as a monochrome systems bulletin: a rigid, type-led poster for protocol gatherings, machine-writing issues, and software release notices rather than a warm editorial page.",
  fixedConstraints: [
    "Monospaced typographic discipline must shape the whole page identity and hierarchy.",
    "Keep the palette tightly restrained: black, white, and minor grayscale modulation only.",
    "Poster structure should remain visible through bands, compartments, rule lines, and serialized metadata blocks.",
    "The tone must stay severe and formal—no warmth, gradients, or soft lifestyle styling.",
  ],
  desiredSignals: [
    "The page reads immediately as a strict typographic bulletin.",
    "Metadata feels coded through timestamps, issue numbers, coordinates, or protocol-like lines.",
    "The overall mood is austere, exact, and plausible for a technical-cultural audience.",
  ],
} as const;

export const case021StyleFamilyRoutes = [
  {
    concept: "Protocol Reading No. 7",
    slug: "protocol-reading-no-7",
    route: "/agent-probe/cygnito-mono-poster/protocol-reading-no-7",
    title: "Cygnito Mono Poster / Protocol Reading No. 7",
    frame: "monochrome systems bulletin",
  },
] as const;
