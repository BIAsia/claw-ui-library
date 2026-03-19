import Link from "next/link";
import { notFound } from "next/navigation";
import { getAgentStyleSpec, getAgentStyleSpecs } from "@/lib/agent-style-specs";

export function generateStaticParams() {
  return getAgentStyleSpecs().map((item) => ({ slug: item.slug }));
}

function RuleList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border border-white/10 bg-white/[0.025] p-5">
      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">{title}</p>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function AgentStyleSpecPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spec = getAgentStyleSpec(slug);

  if (!spec) notFound();

  return (
    <main className="min-h-screen bg-[#090909] px-4 py-6 text-white md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8">
        <header className="border-b border-white/10 pb-6">
          <Link href="/agent-lab" className="text-[0.68rem] uppercase tracking-[0.24em] text-white/46 transition hover:text-white/74">
            agent lab
          </Link>
          <div className="mt-4 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-4xl">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/42">style {spec.code}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{spec.name}</h1>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/68 md:text-[15px]">{spec.intent}</p>
            </div>
            <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/72 xl:max-w-md">
              <div className="text-[0.68rem] uppercase tracking-[0.22em] text-white/44">fit for agents</div>
              <p className="mt-2">{spec.fitForAgents}</p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-4">
            <section className="border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">locked mode</p>
              <p className="mt-4 text-sm leading-7 text-white/88">{spec.lockedMode}</p>
            </section>
            <RuleList title="non-negotiables" items={spec.nonNegotiables} />
            <RuleList title="visual rules" items={spec.visualRules} />
            <RuleList title="component rules" items={spec.componentRules} />
            <RuleList title="page constraints" items={spec.pageConstraints} />
            <RuleList title="avoid" items={spec.avoid} />
          </div>

          <div className="flex flex-col gap-4">
            <section className="border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">prompt seed</p>
                <Link href={`/ui/${spec.caseSlug}`} className="text-[0.68rem] uppercase tracking-[0.22em] text-white/52 transition hover:text-white/78">
                  open source case ↗
                </Link>
              </div>
              <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-white/82">{spec.promptSeed}</p>
            </section>

            <section className="border border-white/10 bg-white/[0.025] p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">shared evaluation task</p>
              <p className="mt-4 text-sm leading-7 text-white/82">{spec.evalTask}</p>
            </section>

            <section className="border border-white/10 bg-black p-3">
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/10 px-2 pb-3">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">reference preview</p>
                  <p className="mt-1 text-sm text-white/62">Current reconstruction kept intact as source material.</p>
                </div>
                <Link href={`/ui/${spec.caseSlug}`} className="border border-white/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-white/64 transition hover:border-white/24 hover:bg-white/[0.04] hover:text-white/88">
                  full page
                </Link>
              </div>
              <div className="overflow-hidden border border-white/10 bg-white">
                <iframe
                  title={`${spec.name} preview`}
                  src={`/ui/${spec.caseSlug}`}
                  className="h-[840px] w-full bg-white"
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
