export const case023StyleFamily = {
  slug: "cookie-cutter-poster",
  name: "Counter Cookie-Cutter Poster",
  tagline: "A manifesto-poster system for public arguments against templated digital sameness.",
  summary:
    "Case 023 performs best as a polemical poster object: a public-facing critique surface for originality campaigns, design-symposium announcements, and studio manifestos. The family should keep a sharp thesis at the center, dramatize repetition versus rupture through pattern and interruption, and resist smoothing into tasteful generic minimalism.",
  positioning:
    "Case 023 is an argumentative poster family for anti-template campaigns, design critique events, and originality manifestos—not a neutral information page or transactional interface.",
  fixedConstraints: [
    "A critical thesis must dominate the page and read like a public argument, not a descriptive heading.",
    "Visible repetition versus disruption is mandatory, whether through layout, motion, or patterned copy.",
    "Poster boldness must remain intact with public readability, compressed copy, and decisive contrast.",
    "Copy should stay sharp and brief: slogan, premise, event facts, and one or two supporting lines.",
    "The visual language must resist generic trend polish—the whole point is anti-cookie-cutter stance.",
  ],
  desiredSignals: [
    "The page feels like a manifesto poster with real opinion and edge.",
    "A viewer can sense tension between sameness and rupture almost immediately.",
    "The design itself models the originality it argues for.",
  ],
} as const;

export const case023StyleFamilyRoutes = [
  {
    concept: "Against Template",
    slug: "against-template",
    route: "/agent-probe/cookie-cutter-poster/against-template",
    title: "Counter Cookie-Cutter Poster / Against Template",
    frame: "design-symposium manifesto broadside",
  },
] as const;
