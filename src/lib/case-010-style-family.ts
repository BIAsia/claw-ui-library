export const case010StyleFamily = {
  slug: "dev-agency-hero",
  name: "Dev Agency Hero Layout",
  tagline: "A credibility-first studio front that leads with technical expertise and compact proof.",
  summary:
    "Case 010 should become a sharp studio introduction: one strong expertise claim, disciplined spacing, compact evidence fragments, and sparse calls to action. The family should feel premium and technically literate—more like a specialist engineering practice introducing itself than a startup homepage stuffed with vague slogans.",
  positioning:
    "Case 010 is strongest as a front page for a specialist technical studio, consultancy, or product-engineering practice rather than a marketplace or application shell.",
  fixedConstraints: [
    "A single precise hero statement must clearly state the studio's expertise.",
    "Proof should appear in compact fragments—client names, service tags, delivery stats, or project snippets.",
    "Spacing, alignment, and rhythm must feel intentional and premium rather than busy.",
    "Limit calls to action to one primary path and one secondary path while keeping the visual language technical, not whimsical.",
  ],
  desiredSignals: [
    "The page reads as a specialist studio front within seconds.",
    "Proof fragments reinforce credibility without overpowering the hero claim.",
    "The overall impression is competent, deliberate, and modern without trend-chasing fluff.",
  ],
} as const;

export const case010StyleFamilyRoutes = [
  {
    concept: "Studio Signal",
    slug: "studio-signal",
    route: "/agent-probe/dev-agency-hero/studio-signal",
    title: "Dev Agency Hero Layout / Studio Signal",
    frame: "credibility-first technical studio",
  },
] as const;
