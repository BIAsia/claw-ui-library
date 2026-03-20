export const case014StyleFamily = {
  slug: "tag-cluster",
  name: "Marketing Tag Cluster",
  tagline: "A message-architecture wall built from compact tag clusters, semantic neighborhoods, and campaign language fragments.",
  summary:
    "Case 014 is strongest as a messaging board: a strategy surface where compact labels, hooks, claims, and audience phrases form visible clusters instead of long planning documents or analytics panels. The family should feel exploratory, spatial, and semantically ordered.",
  positioning:
    "Case 014 works best as a message-mapping surface for positioning themes, audience hooks, campaign framings, and content angles where relatedness is more important than numeric reporting.",
  fixedConstraints: [
    "Tag or chip clusters must carry the composition rather than large cards or prose blocks.",
    "Grouping needs to be legible spatially through proximity, containers, or color coding.",
    "The experience should feel exploratory but still usable for real strategy work.",
    "Labels must stay short, slogan-like, and quick to compare.",
    "Metrics and analytics should stay secondary or disappear entirely.",
  ],
  desiredSignals: [
    "The page reads as a working strategy wall for language architecture.",
    "Clusters communicate overlap, hierarchy, and message families at a glance.",
    "Density feels intentional and useful rather than chaotic.",
  ],
} as const;

export const case014StyleFamilyRoutes = [
  {
    concept: "Signal Map",
    slug: "signal-map",
    route: "/agent-probe/tag-cluster/signal-map",
    title: "Marketing Tag Cluster / Signal Map",
    frame: "message-mapping tag-cluster strategy board",
  },
] as const;
