import Link from "next/link";
import { getAgentStyleSpecs } from "@/lib/agent-style-specs";

export default function AgentEvalPage() {
  const specs = getAgentStyleSpecs();
  const sharedTask =
    "Create a reusable AI-agent-facing style selection surface where the same underlying task can be rendered through clearly different visual grammars without changing the product logic.";

  return (
    <main className="min-h-screen bg-[#080808] px-4 py-6 text-white md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8">
        <header className="border-b border-white/10 pb-6">
          <Link href="/agent-lab" className="text-[0.68rem] uppercase tracking-[0.24em] text-white/46 transition hover:text-white/72">
            agent lab
          </Link>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Shared eval board</h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-white/68 md:text-[15px]">
            One task, three style specs. This page is the lightweight validation surface for checking whether the style definitions feel distinct enough for agent selection and stable enough for reuse.
          </p>
        </header>

        <section className="border border-white/10 bg-white/[0.025] p-5">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">shared task</p>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-white/84">{sharedTask}</p>
        </section>

        <section className="grid gap-4 xl:grid-cols-3">
          {specs.map((spec) => (
            <article key={spec.slug} className="flex flex-col border border-white/10 bg-white/[0.02]">
              <div className="border-b border-white/10 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">style {spec.code}</p>
                    <h2 className="mt-2 text-xl font-medium tracking-[-0.03em] text-white">{spec.name}</h2>
                  </div>
                  <Link href={`/agent-lab/${spec.slug}`} className="border border-white/10 px-3 py-2 text-[0.64rem] uppercase tracking-[0.2em] text-white/56 transition hover:border-white/24 hover:text-white/80">
                    spec
                  </Link>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/58">{spec.category}</p>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">agent read</p>
                  <p className="mt-3 text-sm leading-6 text-white/80">{spec.fitForAgents}</p>
                </div>

                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">prompt seed</p>
                  <p className="mt-3 text-sm leading-6 text-white/76">{spec.promptSeed}</p>
                </div>

                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">expected difference</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/74">
                    <li>• Selection reason should be obvious from the spec name and intent.</li>
                    <li>• Output should stay recognizably in this grammar across repeated runs.</li>
                    <li>• Product logic may stay the same, but visual hierarchy should clearly diverge.</li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-3">
          {specs.map((spec) => (
            <article key={`${spec.slug}-preview`} className="overflow-hidden border border-white/10 bg-black">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">reference preview</p>
                  <h2 className="mt-1 text-sm font-medium text-white/86">{spec.name}</h2>
                </div>
                <Link href={`/ui/${spec.caseSlug}`} className="text-[0.64rem] uppercase tracking-[0.2em] text-white/54 transition hover:text-white/82">
                  full page ↗
                </Link>
              </div>
              <iframe title={`${spec.name} reference`} src={`/ui/${spec.caseSlug}`} className="h-[640px] w-full bg-white" />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
