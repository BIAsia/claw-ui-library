export const case018StyleFamily = {
  slug: "mux-signal-grid",
  name: "Mux Signal Grid",
  tagline: "A live signal matrix for media channels, feed health, and channel presence where active cells do the talking.",
  summary:
    "Case 018 is best translated into a live media monitoring wall: a repeated signal grid with visible state changes, channel identifiers, and infrastructural atmosphere. The family should feel engineered and alive, making presence, failure, and degradation legible before any detailed text is read.",
  positioning:
    "Case 018 works best for broadcast routing walls, stream health surfaces, and multi-feed review boards where simultaneous channel awareness matters more than deep analytics or gallery presentation.",
  fixedConstraints: [
    "A repeated signal grid must dominate the interface and read as active channels.",
    "Motion or state change should communicate liveness, not gimmick.",
    "Status coding must be legible at a glance for healthy, degraded, idle, or interrupted states.",
    "Text should remain secondary to signal presence and grid behavior.",
    "The mood needs to stay infrastructural and technical rather than consumer-friendly.",
  ],
  desiredSignals: [
    "The page reads as a live signal overview for media operations.",
    "Grid behavior communicates state before labels are read.",
    "The whole surface feels like a technical monitoring system rather than a dashboard card layout.",
  ],
} as const;

export const case018StyleFamilyRoutes = [
  {
    concept: "Relay Matrix",
    slug: "relay-matrix",
    route: "/agent-probe/mux-signal-grid/relay-matrix",
    title: "Mux Signal Grid / Relay Matrix",
    frame: "live media monitoring signal wall",
  },
] as const;
