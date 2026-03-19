import Link from "next/link";
import { case016StyleFamily, case016StyleFamilyRoutes } from "@/lib/case-016-style-family";

export default function AdoptionDotsProbePage() {
  return (
    <main className="min-h-screen bg-[#f4f0e8] px-4 py-6 text-[#15202b] md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-8">
        <header className="border-b border-[#15202b]/10 pb-6">
          <Link href="/agent-probe" className="text-[0.68rem] uppercase tracking-[0.24em] text-[#15202b]/46 transition hover:text-[#15202b]/76">
            agent concept probe
          </Link>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{case016StyleFamily.name}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#15202b]/66 md:text-[15px]">{case016StyleFamily.summary}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#15202b]/76">
            <span className="font-medium text-[#15202b]/92">Mode lock:</span> {case016StyleFamily.positioning}
          </p>
        </header>

        <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <article className="border border-[#15202b]/10 bg-white/40 p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#15202b]/42">fixed constraints</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#15202b]/78">
              {case016StyleFamily.fixedConstraints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="border border-[#15202b]/10 bg-white/30 p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#15202b]/42">what to judge</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#15202b]/78">
              {case016StyleFamily.desiredSignals.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-4 xl:grid-cols-2">
          {case016StyleFamilyRoutes.map((item) => (
            <article key={item.route} className="overflow-hidden border border-[#15202b]/10 bg-white/35">
              <div className="border-b border-[#15202b]/10 p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#15202b]/42">product concept</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#15202b]">{item.concept}</h2>
                <p className="mt-2 text-sm leading-6 text-[#15202b]/66">Frame: {item.frame}</p>
                <Link href={item.route} className="mt-6 inline-flex border border-[#15202b]/12 px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-[#15202b]/60 transition hover:border-[#15202b]/24 hover:text-[#15202b]/84">
                  open full page
                </Link>
              </div>
              <iframe title={item.title} src={item.route} className="h-[820px] w-full bg-[#f4f0e8]" />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
