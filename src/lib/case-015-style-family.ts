export const case015StyleFamily = {
  slug: "impact-card",
  name: "Impact Campaign Card",
  tagline: "A concentrated public-interest conversion card that holds message, proof, and action in one emotional focal object.",
  summary:
    "Case 015 is most convincing as a mission campaign card: a self-contained, shareable object that concentrates urgency, one impact proof point, and one direct action path. The family should feel earnest, persuasive, and focused rather than like a normal nonprofit microsite.",
  positioning:
    "Case 015 works best for donation appeals, cause spotlights, emergency response campaigns, and advocacy pushes where a single focal card must convert attention into action quickly.",
  fixedConstraints: [
    "One campaign card must dominate the experience and hold message, proof, and action together.",
    "The primary action should be immediate and unmistakable without scrolling.",
    "Proof remains concise—one stat, one outcome line, or one context block is enough.",
    "The tone must feel earnest and serious rather than startup-polished.",
    "Peripheral content stays minimal so the card does the heavy lifting.",
  ],
  desiredSignals: [
    "The page reads as a mission campaign conversion artifact, not a general landing page.",
    "Need, impact, and action are understandable within seconds.",
    "The focal card feels self-contained enough to imagine as a real shared appeal.",
  ],
} as const;

export const case015StyleFamilyRoutes = [
  {
    concept: "Mission Focal",
    slug: "mission-focal",
    route: "/agent-probe/impact-card/mission-focal",
    title: "Impact Campaign Card / Mission Focal",
    frame: "mission campaign focal card",
  },
] as const;
