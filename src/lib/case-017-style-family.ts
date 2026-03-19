export const case017StyleFamily = {
  slug: "circuit-identity",
  name: "Circuit Identity Cards",
  tagline: "A technical registry deck where repeated identity cards, trace lines, and compact fields form one engineered brand system.",
  summary:
    "Case 017 is strongest as an identity-system deck: consistent cards for people, devices, or credentials, each shaped by circuit-like structure and compact classified fields. The family should feel collectible, technical, and branded rather than like a casual team directory.",
  positioning:
    "Case 017 works best for participant registries, device passports, access badges, and speaker systems where repeated identity modules need to feel coherent, machine-classified, and extendable beyond the screen.",
  fixedConstraints: [
    "Repeated cards must form the system backbone with a strict shared anatomy.",
    "Circuit-like structure should influence layout meaningfully through lines, traces, or routing cues.",
    "Identity fields stay compact and standardized for quick comparison.",
    "The cards should feel collectible and machine-classified instead of social-profile casual.",
    "The page needs strong technical brand coherence across the entire deck.",
  ],
  desiredSignals: [
    "The page reads as a technical identity system, not a normal profile grid.",
    "Each card feels like a credential object with comparable fields.",
    "Circuit motifs feel structural and systemic rather than pasted-on decoration.",
  ],
} as const;

export const case017StyleFamilyRoutes = [
  {
    concept: "Registry Cards",
    slug: "registry-cards",
    route: "/agent-probe/circuit-identity/registry-cards",
    title: "Circuit Identity Cards / Registry Cards",
    frame: "technical identity card deck",
  },
] as const;
