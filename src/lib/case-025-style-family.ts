export const case025StyleFamily = {
  slug: "dad-festival-tabs",
  name: "D&AD Festival Tabs",
  tagline: "A design-forward programme hub where tabs are the primary way to navigate a live festival week.",
  summary:
    "Case 025 should behave like a festival programme index: a branded event surface where sectional tabs carry the browsing logic for talks, workshops, screenings, venues, and tickets. The family works when users can switch slices of one live programme without losing orientation, and when the tab strip feels like the unmistakable grammar of the page rather than a generic component-library afterthought.",
  positioning:
    "Case 025 is best used as a tab-driven programme hub for festivals, conferences, or award-week schedules—not as a poster, dashboard, or settings-like app shell.",
  fixedConstraints: [
    "Tabs must be visually and functionally central to the page.",
    "Each tab should reveal a distinct but structurally related programme slice, such as tracks, dates, or venues.",
    "The page should feel like a live event hub with actionable schedule information.",
    "Brand identity must survive tab switching; the experience cannot collapse into generic tabs UI.",
    "Content inside tabs must remain structured, concise, and scan-friendly.",
  ],
  desiredSignals: [
    "The page reads immediately as a festival or programme hub.",
    "Tabs clearly organize a complex multi-track event without losing context.",
    "Switching sections feels branded, coherent, and useful rather than ornamental.",
  ],
} as const;

export const case025StyleFamilyRoutes = [
  {
    concept: "Festival Hub",
    slug: "festival-hub",
    route: "/agent-probe/dad-festival-tabs/festival-hub",
    title: "D&AD Festival Tabs / Festival Hub",
    frame: "tab-driven programme guide",
  },
] as const;
