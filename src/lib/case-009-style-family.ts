export const case009StyleFamily = {
  slug: "project-timeline",
  name: "Design Project Timeline Tablet",
  tagline: "A contained chronology board for phases, milestones, and team pacing across a fixed launch window.",
  summary:
    "Case 009 works best as a tablet-like chronology workspace where time progression, phase bands, and major milestones dominate the composition. The family should feel self-contained and operational, helping a team understand sequencing and dependencies at a glance rather than turning into a KPI dashboard or sprawling app shell.",
  positioning:
    "Case 009 is strongest as a project chronology workspace for design, editorial, or exhibition planning rather than a generic analytics board.",
  fixedConstraints: [
    "A horizontal or staged time axis must anchor the page and make progression immediate.",
    "Major milestones must stand apart from background tasks using contrast, shape, or scale.",
    "Keep the board self-contained and tablet-like, avoiding sidebar-heavy workspace chrome.",
    "Phase segmentation and concise operational copy should support scan-first review behavior.",
  ],
  desiredSignals: [
    "The first read is timeline and project sequencing, not metrics.",
    "A reviewer can point to phases and milestones instantly.",
    "The board feels like a real creative-project review surface.",
  ],
} as const;

export const case009StyleFamilyRoutes = [
  {
    concept: "Build Chronicle",
    slug: "build-chronicle",
    route: "/agent-probe/project-timeline/build-chronicle",
    title: "Design Project Timeline Tablet / Build Chronicle",
    frame: "project chronology workspace",
  },
] as const;
