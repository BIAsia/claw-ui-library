export const case022StyleFamily = {
  slug: "mercat-error-404",
  name: "Mercat Error Poster",
  tagline: "A branded missing-state broadside for sold-out editions, closed routes, and unavailable archive stalls.",
  summary:
    "Case 022 is strongest when used as a high-character exception poster: an unavailable-state surface that treats absence as a public sign. Rather than defaulting to a framework 404 template, the family should preserve poster confidence through oversized failure language, sparse recovery actions, and deliberately interrupted space that makes the missing route feel intentional.",
  positioning:
    "Case 022 works best as a branded exception poster for closed stalls, expired drops, unavailable archives, or maintenance states—not as a normal content page or generic support flow.",
  fixedConstraints: [
    "Preserve poster logic: the page must feel like one designed placard or broadside rather than a utility app screen.",
    "The missing-state declaration must dominate immediately—404, unavailable, closed, or lost should be unmissable.",
    "Recovery paths stay sparse and clear, ideally one or two actions only.",
    "Empty or interrupted space should reinforce absence instead of feeling unfinished.",
    "Tone may be clever and branded, but comprehension cannot be sacrificed.",
  ],
  desiredSignals: [
    "The first impression is a deliberate error / unavailable poster rather than a default 404 template.",
    "The problem and next action are instantly legible despite the expressive styling.",
    "Brand character survives the failure state and makes the missing page memorable.",
  ],
} as const;

export const case022StyleFamilyRoutes = [
  {
    concept: "Lost Signal",
    slug: "lost-signal",
    route: "/agent-probe/mercat-error-404/lost-signal",
    title: "Mercat Error Poster / Lost Signal",
    frame: "closed archive stall notice",
  },
] as const;
