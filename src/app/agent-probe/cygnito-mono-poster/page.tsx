import Link from "next/link";
import { case021StyleFamily, case021StyleFamilyRoutes } from "@/lib/case-021-style-family";

export default function CygnitoMonoPosterProbePage() {
  return (
    <main className="min-h-screen bg-[#080808] px-4 py-6 text-white md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-8">
        <header className="border-b border-white/10 pb-6">
          <Link href="/agent-probe" className="text-[0.68rem] uppercase tracking-[0.24em] text-white/46 transition hover:text-white/76">
            agent concept probe
          </Link>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{case021StyleFamily.name}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/66 md:text-[15px]">{case021StyleFamily.summary}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/76">
            <span className="font-medium text-white/92">Mode lock:</span> {case021StyleFamily.positioning}
          </p>
        </header>

        <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <article className="border border-white/10 bg-white/[0.02] p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">fixed constraints</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
              {case021StyleFamily.fixedConstraints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="border border-white/10 bg-white/[0.02] p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">what to judge</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
              {case021StyleFamily.desiredSignals.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-4 xl:grid-cols-2">
          {case021StyleFamilyRoutes.map((item) => (
            <article key={item.route} className="overflow-hidden border border-white/10 bg-white/[0.02]">
              <div className="border-b border-white/10 p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">product concept</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">{item.concept}</h2>
                <p className="mt-2 text-sm leading-6 text-white/66">Frame: {item.frame}</p>
                <Link href={item.route} className="mt-6 inline-flex border border-white/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-white/60 transition hover:border-white/24 hover:text-white/84">
                  open full page
                </Link>
              </div>
              <iframe title={item.title} src={item.route} className="h-[860px] w-full bg-[#050505]" />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
