import Link from "next/link";
import {
  traditionalAgentConcept,
  traditionalAgentProbeRoutes,
} from "@/lib/traditional-agent-concept-probe";

export default function TraditionalAgentProbePage() {
  return (
    <main className="min-h-screen bg-[#070707] px-4 py-6 text-white md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-8">
        <header className="border-b border-white/10 pb-6">
          <Link
            href="/agent-probe"
            className="text-[0.68rem] uppercase tracking-[0.24em] text-white/46 transition hover:text-white/76"
          >
            agent concept probe
          </Link>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            {traditionalAgentConcept.name}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/66 md:text-[15px]">
            {traditionalAgentConcept.summary}
          </p>
        </header>

        <section className="grid gap-4 xl:grid-cols-3">
          {traditionalAgentProbeRoutes.map((item) => (
            <article key={item.route} className="overflow-hidden border border-white/10 bg-white/[0.02]">
              <div className="border-b border-white/10 p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">style {item.style}</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">{item.frame}</h2>
                <Link
                  href={item.route}
                  className="mt-6 inline-flex border border-white/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-white/60 transition hover:border-white/24 hover:text-white/84"
                >
                  open full page
                </Link>
              </div>
              <iframe title={item.title} src={item.route} className="h-[760px] w-full bg-white" />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
