import Link from "next/link";
import { conceptProbe } from "@/lib/agent-concept-probe";
import { traditionalAgentConcept } from "@/lib/traditional-agent-concept-probe";
import { case029StyleFamily } from "@/lib/case-029-style-family";
import { case019StyleFamily } from "@/lib/case-019-style-family";
import { case020StyleFamily } from "@/lib/case-020-style-family";
import { case021StyleFamily } from "@/lib/case-021-style-family";
import { case024StyleFamily } from "@/lib/case-024-style-family";
import { case027StyleFamily } from "@/lib/case-027-style-family";
import { case028StyleFamily } from "@/lib/case-028-style-family";
import { case001StyleFamily } from "@/lib/case-001-style-family";
import { case002StyleFamily } from "@/lib/case-002-style-family";
import { case006StyleFamily } from "@/lib/case-006-style-family";
import { case009StyleFamily } from "@/lib/case-009-style-family";
import { case010StyleFamily } from "@/lib/case-010-style-family";
import { case011StyleFamily } from "@/lib/case-011-style-family";
import { case012StyleFamily } from "@/lib/case-012-style-family";
import { case013StyleFamily } from "@/lib/case-013-style-family";
import { case014StyleFamily } from "@/lib/case-014-style-family";
import { case015StyleFamily } from "@/lib/case-015-style-family";
import { case016StyleFamily } from "@/lib/case-016-style-family";
import { case017StyleFamily } from "@/lib/case-017-style-family";
import { case018StyleFamily } from "@/lib/case-018-style-family";
import { case022StyleFamily } from "@/lib/case-022-style-family";
import { case023StyleFamily } from "@/lib/case-023-style-family";
import { case025StyleFamily } from "@/lib/case-025-style-family";
import { case026StyleFamily } from "@/lib/case-026-style-family";

const concepts = [
  {
    route: "/agent-probe/signal-cabinet",
    name: conceptProbe.name,
    tagline: conceptProbe.tagline,
    summary: conceptProbe.summary,
    fixedConstraints: conceptProbe.fixedConstraints,
    desiredSignals: conceptProbe.desiredSignals,
  },
  {
    route: "/agent-probe/traditional-agent",
    name: traditionalAgentConcept.name,
    tagline: traditionalAgentConcept.tagline,
    summary: traditionalAgentConcept.summary,
    fixedConstraints: traditionalAgentConcept.fixedConstraints,
    desiredSignals: traditionalAgentConcept.desiredSignals,
  },
  {
    route: "/agent-probe/zina-gallery-poster",
    name: case029StyleFamily.name,
    tagline: case029StyleFamily.tagline,
    summary: case029StyleFamily.summary,
    fixedConstraints: case029StyleFamily.fixedConstraints,
    desiredSignals: case029StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/bbbank-finance-cockpit",
    name: case019StyleFamily.name,
    tagline: case019StyleFamily.tagline,
    summary: case019StyleFamily.summary,
    fixedConstraints: case019StyleFamily.fixedConstraints,
    desiredSignals: case019StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/radinal-pixel-font",
    name: case020StyleFamily.name,
    tagline: case020StyleFamily.tagline,
    summary: case020StyleFamily.summary,
    fixedConstraints: case020StyleFamily.fixedConstraints,
    desiredSignals: case020StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/mercat-error-404",
    name: case022StyleFamily.name,
    tagline: case022StyleFamily.tagline,
    summary: case022StyleFamily.summary,
    fixedConstraints: case022StyleFamily.fixedConstraints,
    desiredSignals: case022StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/cookie-cutter-poster",
    name: case023StyleFamily.name,
    tagline: case023StyleFamily.tagline,
    summary: case023StyleFamily.summary,
    fixedConstraints: case023StyleFamily.fixedConstraints,
    desiredSignals: case023StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/dad-festival-tabs",
    name: case025StyleFamily.name,
    tagline: case025StyleFamily.tagline,
    summary: case025StyleFamily.summary,
    fixedConstraints: case025StyleFamily.fixedConstraints,
    desiredSignals: case025StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/ideas-change-cards",
    name: case026StyleFamily.name,
    tagline: case026StyleFamily.tagline,
    summary: case026StyleFamily.summary,
    fixedConstraints: case026StyleFamily.fixedConstraints,
    desiredSignals: case026StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/cygnito-mono-poster",
    name: case021StyleFamily.name,
    tagline: case021StyleFamily.tagline,
    summary: case021StyleFamily.summary,
    fixedConstraints: case021StyleFamily.fixedConstraints,
    desiredSignals: case021StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/radiiio-station-table",
    name: case024StyleFamily.name,
    tagline: case024StyleFamily.tagline,
    summary: case024StyleFamily.summary,
    fixedConstraints: case024StyleFamily.fixedConstraints,
    desiredSignals: case024StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/gdansk-literature-system",
    name: case027StyleFamily.name,
    tagline: case027StyleFamily.tagline,
    summary: case027StyleFamily.summary,
    fixedConstraints: case027StyleFamily.fixedConstraints,
    desiredSignals: case027StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/ukrainian-power-hero",
    name: case028StyleFamily.name,
    tagline: case028StyleFamily.tagline,
    summary: case028StyleFamily.summary,
    fixedConstraints: case028StyleFamily.fixedConstraints,
    desiredSignals: case028StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/always-beginning",
    name: case001StyleFamily.name,
    tagline: case001StyleFamily.tagline,
    summary: case001StyleFamily.summary,
    fixedConstraints: case001StyleFamily.fixedConstraints,
    desiredSignals: case001StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/with-palestine",
    name: case002StyleFamily.name,
    tagline: case002StyleFamily.tagline,
    summary: case002StyleFamily.summary,
    fixedConstraints: case002StyleFamily.fixedConstraints,
    desiredSignals: case002StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/de-school-grid",
    name: case006StyleFamily.name,
    tagline: case006StyleFamily.tagline,
    summary: case006StyleFamily.summary,
    fixedConstraints: case006StyleFamily.fixedConstraints,
    desiredSignals: case006StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/project-timeline",
    name: case009StyleFamily.name,
    tagline: case009StyleFamily.tagline,
    summary: case009StyleFamily.summary,
    fixedConstraints: case009StyleFamily.fixedConstraints,
    desiredSignals: case009StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/dev-agency-hero",
    name: case010StyleFamily.name,
    tagline: case010StyleFamily.tagline,
    summary: case010StyleFamily.summary,
    fixedConstraints: case010StyleFamily.fixedConstraints,
    desiredSignals: case010StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/won-soju-bands",
    name: case011StyleFamily.name,
    tagline: case011StyleFamily.tagline,
    summary: case011StyleFamily.summary,
    fixedConstraints: case011StyleFamily.fixedConstraints,
    desiredSignals: case011StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/worth-saving-chips",
    name: case012StyleFamily.name,
    tagline: case012StyleFamily.tagline,
    summary: case012StyleFamily.summary,
    fixedConstraints: case012StyleFamily.fixedConstraints,
    desiredSignals: case012StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/swagworks-hero",
    name: case013StyleFamily.name,
    tagline: case013StyleFamily.tagline,
    summary: case013StyleFamily.summary,
    fixedConstraints: case013StyleFamily.fixedConstraints,
    desiredSignals: case013StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/tag-cluster",
    name: case014StyleFamily.name,
    tagline: case014StyleFamily.tagline,
    summary: case014StyleFamily.summary,
    fixedConstraints: case014StyleFamily.fixedConstraints,
    desiredSignals: case014StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/impact-card",
    name: case015StyleFamily.name,
    tagline: case015StyleFamily.tagline,
    summary: case015StyleFamily.summary,
    fixedConstraints: case015StyleFamily.fixedConstraints,
    desiredSignals: case015StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/adoption-dots",
    name: case016StyleFamily.name,
    tagline: case016StyleFamily.tagline,
    summary: case016StyleFamily.summary,
    fixedConstraints: case016StyleFamily.fixedConstraints,
    desiredSignals: case016StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/circuit-identity",
    name: case017StyleFamily.name,
    tagline: case017StyleFamily.tagline,
    summary: case017StyleFamily.summary,
    fixedConstraints: case017StyleFamily.fixedConstraints,
    desiredSignals: case017StyleFamily.desiredSignals,
  },
  {
    route: "/agent-probe/mux-signal-grid",
    name: case018StyleFamily.name,
    tagline: case018StyleFamily.tagline,
    summary: case018StyleFamily.summary,
    fixedConstraints: case018StyleFamily.fixedConstraints,
    desiredSignals: case018StyleFamily.desiredSignals,
  },
] as const;

export default function AgentProbeIndexPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-4 py-6 text-white md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-8">
        <header className="border-b border-white/10 pb-6">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">agent concept probe</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Product concept families</h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-white/72">
            Same three reference styles, different product ideas. Judge how well each concept preserves the original demo mode while dividing work across 003 entrance, 004 browser, and 005 publication.
          </p>
        </header>

        <section className="grid gap-5 xl:grid-cols-2">
          {concepts.map((concept) => (
            <article key={concept.route} className="border border-white/10 bg-white/[0.02] p-5">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">concept family</p>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-white">{concept.name}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/68">{concept.tagline}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/76">{concept.summary}</p>
                </div>
                <div>
                  <Link
                    href={concept.route}
                    className="inline-flex border border-white/12 px-3 py-2 text-[0.72rem] uppercase tracking-[0.2em] text-white/68 transition hover:border-white/24 hover:text-white/86"
                  >
                    open concept ↗
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 pt-5 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">fixed constraints</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
                    {concept.fixedConstraints.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">what to judge</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
                    {concept.desiredSignals.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
