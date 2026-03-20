export const case024StyleFamily = {
  slug: "radiiio-station-table",
  name: "Radiiio Station Table",
  tagline: "An on-air schedule system where rows, slots, and hosts become the primary station identity.",
  summary:
    "Case 024 performs best as a broadcast timetable: a station-centric table where live status, host names, duration, channel bands, and programme sequence are the main visual experience. The family should preserve strong row-and-column semantics while adding enough broadcast character that the page feels on-air, cultural, and usable—not like office admin UI.",
  positioning:
    "Case 024 works best as a broadcast schedule board: a public-facing radio or stream programming table for scanning current and upcoming shows rather than a gallery, dashboard, or general media homepage.",
  fixedConstraints: [
    "A true table structure must define the experience, with columns carrying real semantic meaning.",
    "Show name, host, time slot, duration, and status must align predictably for fast scanning.",
    "The page should feel on-air and alive through current-slot emphasis, station markers, and subtle cadence rather than decorative imagery.",
    "Imagery must remain secondary to schedule readability so the interface never collapses into cards.",
  ],
  desiredSignals: [
    "The first read is broadcast schedule table.",
    "The table itself carries the visual identity and could be used to follow real programming.",
    "The atmosphere still feels like a cultural station surface rather than office software.",
  ],
} as const;

export const case024StyleFamilyRoutes = [
  {
    concept: "Night Frequency Table",
    slug: "night-frequency-table",
    route: "/agent-probe/radiiio-station-table/night-frequency-table",
    title: "Radiiio Station Table / Night Frequency Table",
    frame: "broadcast schedule",
  },
] as const;
