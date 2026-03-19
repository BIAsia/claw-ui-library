import Link from "next/link";
import { conceptProbe, conceptProbeRoutes } from "@/lib/agent-concept-probe";

export default function AgentProbeIndexPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-4 py-6 text-white md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-8">
        <header className="border-b border-white/10 pb-6">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">agent concept probe</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            {conceptProbe.name}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/66 md:text-[15px]">
            {conceptProbe.tagline}
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/76">{conceptProbe.summary}</p>
        </header>

        <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">fixed constraints</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
              {conceptProbe.fixedConstraints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-white/10 bg-white/[0.02] p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">what to judge</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
              {conceptProbe.desiredSignals.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-3">
          {conceptProbeRoutes.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className="group border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/24 hover:bg-white/[0.04]"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">style {item.style}</p>
              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">{item.frame}</h2>
              <p className="mt-4 text-sm leading-6 text-white/68">{item.title}</p>
              <p className="mt-8 text-[0.72rem] uppercase tracking-[0.2em] text-white/46 transition group-hover:text-white/74">
                open probe ↗
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
