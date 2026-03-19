export const case006StyleFamily = {
  slug: "de-school-grid",
  name: "De School Grid Poster",
  tagline: "A rigid public timetable poster where the grid itself carries the programme identity.",
  summary:
    "Case 006 should remain a schedule-first poster board: one tall sheet organized by literal grid lines, dense programme entries, and strong scanning logic across days, rooms, and slots. The family should feel printable and public, using compressed schedule text under large headers rather than loosening into stacked web sections.",
  positioning:
    "Case 006 is strongest as a public programme timetable for venues, festivals, workshops, and cultural listings rather than a narrative landing page.",
  fixedConstraints: [
    "The grid must be literal and structurally necessary, with clear horizontal and vertical divisions.",
    "Time or sequence must organize the entire page so scanning logic is obvious at a glance.",
    "Maintain poster height and useful compression—this should feel pinned-up, not app-like.",
    "Alternate large anchors with compact operational schedule text while keeping imagery secondary to the timetable structure.",
  ],
  desiredSignals: [
    "The page reads immediately as a public schedule board.",
    "Users can infer how to scan across days, rooms, or slots without instructions.",
    "The design identity comes primarily from the timetable grid itself.",
  ],
} as const;

export const case006StyleFamilyRoutes = [
  {
    concept: "Season Grid",
    slug: "season-grid",
    route: "/agent-probe/de-school-grid/season-grid",
    title: "De School Grid Poster / Season Grid",
    frame: "programme timetable poster",
  },
] as const;
