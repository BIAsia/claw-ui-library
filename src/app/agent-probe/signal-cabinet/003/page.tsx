import Link from "next/link";

const fragments = [
  "street-corner argument / saved 02:13",
  "type specimen from a closed print shop",
  "blue tarp folded like a wave / bus depot",
  "voice note: don't let the good images harden",
];

const tags = ["mess", "memory", "margins", "public notes", "imperfect finds"];

export default function SignalCabinet003Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5efe8] text-[#7f131d]">
      <section className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-5 py-6 md:px-10 lg:px-14">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-[38%_62%_52%_48%/47%_37%_63%_53%] border-2 border-[#e0a7c1] bg-[#efbfd6] opacity-90" />
        <div className="pointer-events-none absolute right-[-3rem] top-[18rem] h-80 w-80 rounded-[53%_47%_69%_31%/38%_42%_58%_62%] border-2 border-[#d78aa8] bg-[#efbfd6]" />
        <div className="pointer-events-none absolute bottom-[-4rem] left-[34%] h-72 w-96 rotate-[-10deg] rounded-[59%_41%_44%_56%/51%_41%_59%_49%] border-2 border-[#d28ca7] bg-[#f0b7d4]" />

        <header className="relative z-10 flex items-start justify-between gap-4 border-b-2 border-[#cf2934] pb-5">
          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-[#a75d63]">agent probe / style 003</p>
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3.7rem,10vw,8.8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              Signal Cabinet
            </h1>
          </div>
          <div className="max-w-xs text-right text-[0.8rem] font-semibold uppercase leading-5 tracking-[0.16em] text-[#a35d5f]">
            <p>An unstable entrance for keeping fragments alive.</p>
            <Link href="/agent-probe/signal-cabinet" className="mt-4 inline-block border-2 border-[#cf2934] px-3 py-2 text-[#cf2934] transition hover:bg-[#cf2934] hover:text-[#f5efe8]">
              compare all
            </Link>
          </div>
        </header>

        <section className="relative z-10 grid flex-1 gap-8 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-10">
          <div className="flex flex-col justify-between gap-8">
            <div className="max-w-4xl">
              <p className="max-w-[14ch] text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.06em]">
                A cabinet for the things that should not become folders too early.
              </p>
              <p className="mt-6 max-w-xl text-[1rem] leading-7 text-[#8e4c50]">
                Signal Cabinet is an AI-assisted website for collecting images, notes, scraps, overheard phrases, and visual evidence before they flatten into a neat system. It stores fragments, cross-links them, and later turns them into strange, human-readable constellations.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {fragments.map((item, index) => (
                <article
                  key={item}
                  className={`border-2 border-[#cf2934] bg-[#f7f1eb] p-4 ${index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[1.5deg]"}`}
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#a15b61]">fragment {index + 1}</p>
                  <p className="mt-3 text-lg font-bold uppercase leading-6 tracking-[-0.03em]">{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-12">
            <section className="border-2 border-[#cf2934] bg-[#fff7f2] p-5">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#a15b61]">how it behaves</p>
              <ul className="mt-4 space-y-3 text-[0.95rem] leading-7 text-[#8f474c]">
                <li>• saves the raw fragment before the summary</li>
                <li>• asks the user what feeling or tension the fragment carries</li>
                <li>• groups by resonance, not by file type</li>
                <li>• generates issue drafts only when enough pressure accumulates</li>
              </ul>
            </section>

            <section className="border-2 border-dashed border-[#cf2934] bg-[#f1d6e4] p-5">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#9b5258]">public language</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="border border-[#cf2934] px-3 py-2 text-[0.75rem] font-bold uppercase tracking-[0.18em]">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="rotate-[-2deg] border-2 border-[#cf2934] bg-[#f8f1eb] p-5">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#a15b61]">entry action</p>
              <p className="mt-3 text-[1.55rem] font-black uppercase leading-[1.02] tracking-[-0.04em]">
                Open the cabinet and let the AI name what keeps repeating.
              </p>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
