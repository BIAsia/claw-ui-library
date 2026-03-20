import Link from "next/link";

const cards: ReadonlyArray<{
  eyebrow: string;
  title: string;
  copy: string;
  tone: string;
  span?: string;
}> = [
  {
    eyebrow: "Thesis",
    title: "Public tools should work like civic furniture.",
    copy: "When a service is used by everyone, reliability and clarity become public design obligations rather than product nice-to-haves.",
    tone: "bg-[#173026] text-[#edf4e7]",
    span: "lg:col-span-2",
  },
  {
    eyebrow: "Proof",
    title: "Trust is built in repeat encounters, not launch week.",
    copy: "Good public software earns belief through stable forms, understandable language, and interfaces that do not punish low confidence.",
    tone: "bg-[#dfe7d2] text-[#142018]",
  },
  {
    eyebrow: "Pressure point",
    title: "Private shortcuts create public confusion.",
    copy: "Patchwork procurement and fragmented vendors often leak complexity to the citizen standing at the screen.",
    tone: "bg-[#f1b06b] text-[#23140c]",
  },
  {
    eyebrow: "Example",
    title: "A permit page can lower anxiety before it saves time.",
    copy: "Sequence, naming, and progress cues help people arrive with the right documents and leave with fewer repeat visits.",
    tone: "bg-[#1b2125] text-[#eff3ea]",
  },
  {
    eyebrow: "Principle",
    title: "Design for continuity across years, not campaign cycles.",
    copy: "A public interface should survive leadership changes because the underlying need remains.",
    tone: "bg-[#c8d7c0] text-[#162118]",
  },
  {
    eyebrow: "Action",
    title: "Fund maintenance as visibly as new features.",
    copy: "The most trustworthy civic products are usually the ones that keep being cared for after the headline fades.",
    tone: "bg-[#28483c] text-[#eef4ea]",
    span: "lg:col-span-2",
  },
] as const;

export default function IdeasChangeCardsArgumentDeckPage() {
  return (
    <main className="min-h-screen bg-[#d7e0d0] px-3 py-3 text-[#172018] sm:px-5 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1180px] items-center justify-center">
        <article className="relative w-full overflow-hidden rounded-[34px] border border-[#172018]/10 bg-[#e7ecdf] shadow-[0_36px_110px_rgba(22,32,24,0.18)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(23,48,38,0.12),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(241,176,107,0.18),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(23,32,24,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(23,32,24,0.16)_1px,transparent_1px)] [background-size:100%_6.8rem,6.8rem_100%]" />

          <div className="relative z-10 px-5 py-5 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
            <header className="grid gap-6 border-b border-[#172018]/10 pb-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[#172018]/46">Argument deck / civic software advocacy / concise proposition system</p>
                <h1 className="mt-3 max-w-[12ch] text-[clamp(3rem,6vw,5.4rem)] font-semibold uppercase leading-[0.86] tracking-[-0.08em] text-[#172018]">
                  Why public tools matter
                </h1>
                <p className="mt-4 max-w-[42rem] text-sm leading-7 text-[#172018]/72 sm:text-[15px]">
                  This page argues in cards instead of essays. Each unit carries one claim: enough to scan quickly, but distinct enough to build a position with momentum.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[26px] border border-[#172018]/10 bg-white/50 p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#172018]/42">Core brief</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#172018]">Argument Deck</p>
                  <p className="mt-2 text-sm leading-6 text-[#172018]/66">A persuasive sequence for access, trust, maintenance, and long-term civic value.</p>
                </div>
                <div className="rounded-[26px] border border-[#172018]/10 bg-[#173026] p-5 text-[#eef4ea]">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#eef4ea]/48">Use case</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.06em]">Public-interest funding</p>
                  <p className="mt-2 text-sm leading-6 text-[#eef4ea]/72">Deck-friendly reasoning for teams asking institutions to invest beyond launch theatre.</p>
                </div>
              </div>
            </header>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className={`rounded-[28px] border border-[#172018]/10 p-5 sm:p-6 ${card.tone} ${card.span ?? ""}`}
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] opacity-60">{card.eyebrow}</p>
                  <h2 className="mt-3 max-w-[16ch] text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[0.92] tracking-[-0.07em]">{card.title}</h2>
                  <p className="mt-4 max-w-[38ch] text-sm leading-7 opacity-80 sm:text-[15px]">{card.copy}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 border-t border-[#172018]/10 pt-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-[#172018]/10 bg-white/50 p-5 sm:p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#172018]/42">Deck arc</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-4">
                  {[
                    ["01", "State the public stake"],
                    ["02", "Show where trust is won or lost"],
                    ["03", "Make hidden failure visible"],
                    ["04", "End with a funding and care posture"],
                  ].map(([number, text]) => (
                    <div key={number} className="border-t border-[#172018]/10 pt-3">
                      <p className="text-[0.66rem] uppercase tracking-[0.28em] text-[#172018]/38">{number}</p>
                      <p className="mt-2 text-sm leading-6 text-[#172018]/72">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 self-start lg:justify-end">
                <Link href="/agent-probe/ideas-change-cards" className="inline-flex items-center rounded-full border border-[#172018]/18 bg-[#172018] px-4 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-[#edf4e7] transition hover:-translate-y-0.5">
                  Open family page
                </Link>
                <Link href="/agent-probe" className="inline-flex items-center rounded-full border border-[#172018]/14 px-4 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-[#172018]/72 transition hover:border-[#172018]/40 hover:text-[#172018]">
                  Back to index
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
