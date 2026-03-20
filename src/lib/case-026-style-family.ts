export const case026StyleFamily = {
  slug: "ideas-change-cards",
  name: "Ideas Change Cards",
  tagline: "A persuasive card sequence for advocacy, thought leadership, and idea-led public positioning.",
  summary:
    "Case 026 is strongest as an argument-through-cards surface: a page where repeated cards carry a thesis in concise, modular steps instead of one long essay. The family should preserve momentum across the set, give each card a distinct rhetorical role, and balance scan-ability with conviction so the interface reads like a designed position rather than a content dump.",
  positioning:
    "Case 026 works best as an advocacy or thought-leadership proposition system built from sequential cards—not as a dashboard, article archive, or singular poster.",
  fixedConstraints: [
    "Repeated cards must structure the argument and each card should hold one idea.",
    "Cards should feel related but not identical in purpose—thesis, proof, example, and action need distinct roles.",
    "Copy must stay concise, memorable, and idea-led rather than essay-like.",
    "The layout should preserve sequence and momentum across the set.",
    "The visual tone must feel purposeful enough to carry a real position.",
  ],
  desiredSignals: [
    "The page reads as a sequence of persuasive idea cards rather than a generic blog summary.",
    "Several distinct claims remain memorable after a quick scan.",
    "The overall experience feels like a designed argument with conviction and direction.",
  ],
} as const;

export const case026StyleFamilyRoutes = [
  {
    concept: "Argument Deck",
    slug: "argument-deck",
    route: "/agent-probe/ideas-change-cards/argument-deck",
    title: "Ideas Change Cards / Argument Deck",
    frame: "civic-advocacy proposition deck",
  },
] as const;
