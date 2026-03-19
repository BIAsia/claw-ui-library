import Link from "next/link";
import { conceptProbe } from "@/lib/agent-concept-probe";
import { traditionalAgentConcept } from "@/lib/traditional-agent-concept-probe";

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
