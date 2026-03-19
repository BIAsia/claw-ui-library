export const case019StyleFamily = {
  slug: "bbbank-finance-cockpit",
  name: "BBBank Finance Cockpit",
  tagline: "A dense personal-finance command surface for daily money decisions, limits, and account posture.",
  summary:
    "Case 019 is strongest when treated as a financial utility cockpit: a tightly packed mobile-dashboard field where calendar, cash position, statements, limits, savings, actions, and brand voice coexist in one deliberate surface. The family should keep the original black-ground, high-contrast card mosaic and use it for finance products that need situational awareness rather than marketing storytelling or generic app-shell navigation.",
  positioning:
    "Case 019 works best as a personal finance cockpit: a high-density mobile dashboard for balances, limits, schedules, and account actions rather than a generic banking shell or broad SaaS admin UI.",
  fixedConstraints: [
    "Preserve the original case-019 composition: three narrow dashboard columns, stacked rounded modules, and one phone-like command surface rather than a full desktop shell.",
    "Keep information density high—calendar, balances, statements, debit obligations, savings progress, quick actions, and account typography should all remain visible together.",
    "Maintain the product/dashboard mood: dark field, acidic yellow, orange, lilac, olive, and pale neutral panels with strong typographic compression.",
    "Interactions stay additive and restrained. Number animation, slider motion, and subtle hover lift are acceptable; the page should still read as a composed dashboard snapshot first.",
  ],
  desiredSignals: [
    "The page reads immediately as a money-management cockpit, not as a marketing homepage.",
    "Each panel feels operational and useful even when stylized—nothing should become decorative filler.",
    "The concept remains recognizably descended from case-019 through card rhythm, palette, and dense mobile-dashboard composition.",
  ],
} as const;

export const case019StyleFamilyRoutes = [
  {
    concept: "Household Treasury",
    slug: "household-treasury",
    route: "/agent-probe/bbbank-finance-cockpit/household-treasury",
    title: "BBBank Finance Cockpit / Household Treasury",
    frame: "shared-home finance cockpit",
  },
] as const;
