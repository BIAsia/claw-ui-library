export const uiKitProbe = {
  slug: "ui-kit",
  name: "UI Kit",
  tagline: "A modular product surface for collecting, staging, and publishing interface building blocks.",
  summary:
    "UI Kit turns component parts, tokens, layout recipes, and release notes into a shared design inventory. Across the three probes, the same product shifts between campaign entry, asset browser, and editorial publication without collapsing into one generic app shell.",
  fixedConstraints: [
    "Single product concept shared across all three probes.",
    "003 stays a front-door poster, not a dashboard.",
    "004 stays a dense browsing/catalog layer with cover-like demo objects.",
    "005 stays an editorial/publication surface rather than a management tool.",
    "Preserve each reference demo mode instead of normalizing everything into one system UI.",
  ],
  desiredSignals: [
    "The product should feel like a real UI Kit workflow rather than a style transplant.",
    "The three routes should clearly divide entry, browsing, and publication roles.",
    "003 and 004 should still feel visibly anchored to their source demos.",
  ],
} as const;

export const uiKitProbeRoutes = [
  {
    style: "003",
    slug: "003-julie-doucet",
    route: "/agent-probe/ui-kit/003",
    title: "UI Kit / style 003",
    frame: "campaign entry poster",
  },
  {
    style: "004",
    slug: "004-boookin-shop",
    route: "/agent-probe/ui-kit/004",
    title: "UI Kit / style 004",
    frame: "asset browser",
  },
  {
    style: "005",
    slug: "005-self-esteem-editorial",
    route: "/agent-probe/ui-kit/005",
    title: "UI Kit / style 005",
    frame: "publication desk",
  },
] as const;
