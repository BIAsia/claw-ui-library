export const traditionalAgentConcept = {
  slug: "traditional-agent",
  name: "Traditional Agent",
  tagline: "A dependable AI operator for intake, execution, routing, and publication across a real working team.",
  summary:
    "Traditional Agent is less about collecting atmosphere and more about making work move. It receives requests, turns them into explicit jobs, keeps runs and files organized, and publishes outcomes back to humans in legible formats. The concept should feel procedural, trustworthy, and operational without collapsing into generic SaaS chrome.",
  fixedConstraints: [
    "Single product concept shared across all three probes.",
    "003 remains a marketing / entry expression layer, not an app shell.",
    "004 remains a browse-first management surface with the original dense demo rhythm.",
    "005 remains publication-led and editorial, even when the subject is operational work.",
  ],
  desiredSignals: [
    "The concept should feel like a real product someone could buy or adopt.",
    "The three probes should divide labor clearly rather than restyling the same exact page.",
    "The product should feel more classical and procedural than the Signal Cabinet concept while preserving the source demo modes.",
  ],
} as const;

export const traditionalAgentProbeRoutes = [
  {
    style: "003",
    slug: "003-julie-doucet",
    route: "/agent-probe/traditional-agent/003",
    title: "Traditional Agent / style 003",
    frame: "operator entrance poster",
  },
  {
    style: "004",
    slug: "004-boookin-shop",
    route: "/agent-probe/traditional-agent/004",
    title: "Traditional Agent / style 004",
    frame: "run browser / resource shelf",
  },
  {
    style: "005",
    slug: "005-self-esteem-editorial",
    route: "/agent-probe/traditional-agent/005",
    title: "Traditional Agent / style 005",
    frame: "dispatch journal",
  },
] as const;
