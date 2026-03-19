import Link from "next/link";
import { getAgentStyleSpecs } from "@/lib/agent-style-specs";

export default function AgentLabPage() {
  const specs = getAgentStyleSpecs();

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-6 text-white md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
        <header className="border-b border-white/10 pb-6">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/42">agent lab</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Agent-usable style specs
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/62 md:text-[15px]">
            Parallel experimental layer for turning reconstruction cases into stable style specs that an AI agent can read, choose, and reuse.
          </p>
        </header>

        <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/46">current approach</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/76">
              <li>• Keep this fully outside the current main workflow.</li>
              <li>• Start from case 003 / 004 / 005 instead of inventing new categories first.</li>
              <li>• Convert each case into an executable style spec before doing library packaging.</li>
              <li>• Validate through one shared evaluation task and side-by-side outputs.</li>
            </ul>
          </div>

          <div className="border border-white/10 bg-white/[0.02] p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/46">routes</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/78">
              <Link href="/agent-eval" className="border border-white/10 px-4 py-3 transition hover:border-white/25 hover:bg-white/[0.04]">
                Open comparison eval
              </Link>
              {specs.map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/agent-lab/${spec.slug}`}
                  className="border border-white/10 px-4 py-3 transition hover:border-white/25 hover:bg-white/[0.04]"
                >
                  Open {spec.code} spec
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {specs.map((spec) => (
            <Link
              key={spec.slug}
              href={`/agent-lab/${spec.slug}`}
              className="group border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/25 hover:bg-white/[0.045]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/46">style {spec.code}</p>
                  <h2 className="mt-2 text-xl font-medium tracking-[-0.03em] text-white">{spec.name}</h2>
                </div>
                <span className="border border-white/10 px-2 py-1 text-[0.64rem] uppercase tracking-[0.2em] text-white/60">
                  draft
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/58">{spec.category}</p>
              <p className="mt-5 text-sm leading-6 text-white/78">{spec.intent}</p>
              <div className="mt-6 flex items-center justify-between text-[0.72rem] uppercase tracking-[0.18em] text-white/44">
                <span>Case {spec.code}</span>
                <span className="transition group-hover:text-white/70">Open spec</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
