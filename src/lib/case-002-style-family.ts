export const case002StyleFamily = {
  slug: "with-palestine",
  name: "I'm With Palestine",
  tagline: "A solidarity broadside that turns a public stance into a bold, shareable campaign surface.",
  summary:
    "Case 002 is best translated as a solidarity campaign broadside: a poster-grade public statement with uncompromising hierarchy, compact action utilities, and the moral seriousness of an advocacy object. The family should feel urgent, declarative, and sharable rather than polished into a soft corporate campaign page.",
  positioning:
    "Case 002 works as a cause-led public statement surface for advocacy coalitions, fundraiser amplification, and solidarity publishing rather than a neutral brand homepage.",
  fixedConstraints: [
    "Keep one slogan as the unmistakable center of gravity, readable at poster distance.",
    "Preserve protest-poster energy through hard contrast, bold type, and singular public-facing composition.",
    "Supporting content must stay action-shaped—donate, share, attend, read—rather than becoming long descriptive storytelling.",
    "Avoid dashboard chrome, startup-homepage tropes, or decorative softness that dilutes conviction.",
  ],
  desiredSignals: [
    "The page reads first as a solidarity statement, not ordinary brand marketing.",
    "Supporting actions feel like campaign utilities rather than growth hacks.",
    "The whole surface looks plausible as a screenshot-ready advocacy broadside.",
  ],
} as const;

export const case002StyleFamilyRoutes = [
  {
    concept: "Solidarity Broadside",
    slug: "solidarity-broadside",
    route: "/agent-probe/with-palestine/solidarity-broadside",
    title: "I'm With Palestine / Solidarity Broadside",
    frame: "solidarity campaign surface",
  },
] as const;
