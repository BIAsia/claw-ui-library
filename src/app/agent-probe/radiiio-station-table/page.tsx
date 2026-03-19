import Link from "next/link";
import { case024StyleFamily, case024StyleFamilyRoutes } from "@/lib/case-024-style-family";

export default function RadiiioStationTableProbePage() {
  return (
    <main className="min-h-screen bg-[#f4f2eb] px-4 py-6 text-[#141414] md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-8">
        <header className="border-b border-black/10 pb-6">
          <Link href="/agent-probe" className="text-[0.68rem] uppercase tracking-[0.24em] text-black/46 transition hover:text-black/76">
            agent concept probe
          </Link>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{case024StyleFamily.name}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-black/66 md:text-[15px]">{case024StyleFamily.summary}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-black/76">
            <span className="font-medium text-black/92">Mode lock:</span> {case024StyleFamily.positioning}
          </p>
        </header>

        <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <article className="border border-black/10 bg-white/70 p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-black/42">fixed constraints</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-black/78">
              {case024StyleFamily.fixedConstraints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="border border-black/10 bg-white/70 p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-black/42">what to judge</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-black/78">
              {case024StyleFamily.desiredSignals.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-4 xl:grid-cols-2">
          {case024StyleFamilyRoutes.map((item) => (
            <article key={item.route} className="overflow-hidden border border-black/10 bg-white/70">
              <div className="border-b border-black/10 p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-black/42">product concept</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-black">{item.concept}</h2>
                <p className="mt-2 text-sm leading-6 text-black/66">Frame: {item.frame}</p>
                <Link href={item.route} className="mt-6 inline-flex border border-black/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-black/60 transition hover:border-black/24 hover:text-black/84">
                  open full page
                </Link>
              </div>
              <iframe title={item.title} src={item.route} className="h-[900px] w-full bg-[#f5f3ec]" />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
