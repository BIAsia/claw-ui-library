export const case027StyleFamily = {
  slug: "gdansk-literature-system",
  name: "Gdansk Literature System",
  tagline: "A civic-editorial programme language for author nights, municipal reading seasons, and city-linked literary editions.",
  summary:
    "Case 027 is strongest as a structured literary programme system: a civic-cultural surface where typographic order, restrained institutional tone, and repeatable event modules present authors, venues, and editions with dignity. The family should feel extensible across a whole reading season, keeping editorial seriousness and public usability ahead of trendy product theatrics.",
  positioning:
    "Case 027 works best as a civic-literary system: a city-backed cultural programme framework for readings, workshops, and publication releases rather than a startup campaign or playful event microsite.",
  fixedConstraints: [
    "Typographic order must anchor the page, with formal treatment for titles, authors, dates, venues, and programme labels.",
    "City or institutional identity should be visible but restrained, supporting the programme rather than acting like tourism branding.",
    "The layout must feel repeatable across multiple editions, events, or seasonal pages.",
    "The tone must remain literary and editorial, with cultural dignity instead of promotional hype.",
  ],
  desiredSignals: [
    "The page reads as a cultural literature system, not a generic event site.",
    "Typography does most of the identity work and supports clear programme scanning.",
    "A reviewer could imagine an entire city reading season built from the same design framework.",
  ],
} as const;

export const case027StyleFamilyRoutes = [
  {
    concept: "Civic Pages",
    slug: "civic-pages",
    route: "/agent-probe/gdansk-literature-system/civic-pages",
    title: "Gdansk Literature System / Civic Pages",
    frame: "civic-literary programme",
  },
] as const;
