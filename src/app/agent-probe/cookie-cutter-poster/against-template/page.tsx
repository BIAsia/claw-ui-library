import Link from "next/link";

const repeatedWords = ["same", "same", "same", "same", "same", "same", "same", "same", "rupture"] as const;
const bulletins = [
  "A design symposium for people tired of interfaces generated from the same four prompts.",
  "One room, five provocations: craft, authorship, visual risk, editorial texture, and anti-default working methods.",
  "Bring examples, failures, and screenshots that all somehow look identical — then break the pattern in public.",
] as const;

export default function CookieCutterPosterAgainstTemplatePage() {
  return (
    <main className="min-h-screen bg-[#f3ebdd] px-3 py-3 text-[#1d140e] sm:px-5 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[920px] items-center justify-center">
        <article className="group relative aspect-[0.73] w-full overflow-hidden rounded-[28px] border border-[#1d140e]/12 bg-[#efe5d2] shadow-[0_36px_110px_rgba(40,22,10,0.18)]">
          <div className="absolute inset-y-0 left-[11%] w-[9%] bg-[#0f0f0f]" />
          <div className="absolute right-0 top-0 h-full w-[18%] border-l border-[#1d140e]/10 bg-[#df5830]" />
          <div className="absolute inset-x-0 top-[14.5%] h-px bg-[#1d140e]/12" />
          <div className="absolute inset-x-0 bottom-[16%] h-px bg-[#1d140e]/12" />
          <div className="absolute inset-y-0 left-[50%] w-px bg-[#1d140e]/10" />
          <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(29,20,14,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(29,20,14,0.2)_1px,transparent_1px)] [background-size:100%_6.5rem,6.5rem_100%]" />

          <div className="relative z-10 flex h-full flex-col px-[5.5%] py-[5.4%]">
            <header className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[#1d140e]/55">Counter cookie-cutter / public manifesto print</p>
                <p className="mt-2 text-[0.84rem] uppercase tracking-[0.18em] text-[#1d140e]/42">Against Template Thinking / October 2026 / Hall B / 18:00–22:00</p>
              </div>
              <Link href="/agent-probe" className="text-[0.72rem] uppercase tracking-[0.26em] text-[#1d140e]/52 transition hover:text-[#1d140e]">
                agent probe ↗
              </Link>
            </header>

            <div className="mt-[4%] grid flex-1 grid-cols-[1.3fr_0.8fr] gap-7">
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-[0.7rem] uppercase tracking-[0.32em] text-[#1d140e]/38">
                  {repeatedWords.map((word, index) => (
                    <span
                      key={`${word}-${index}`}
                      className={word === "rupture" ? "bg-[#df5830] px-2 py-1 text-[#f8efe4]" : index === 3 ? "bg-[#1d140e] px-2 py-1 text-[#efe5d2]" : undefined}
                    >
                      {word}
                    </span>
                  ))}
                </div>

                <h1 className="mt-[3.2%] max-w-[8ch] text-[clamp(4.6rem,9.6vw,8.7rem)] font-semibold uppercase leading-[0.83] tracking-[-0.09em] text-[#17100c]">
                  Against
                  <br />
                  Template
                  <br />
                  Thinking
                </h1>

                <p className="mt-[3.4%] max-w-[34ch] text-[clamp(1rem,1.35vw,1.14rem)] leading-7 text-[#2f2018]/82">
                  If every launch looks borrowed, the medium stops carrying thought. This poster is a call for sharper form, authored rhythm, and work that refuses prefab calm.
                </p>

                <div className="mt-[5.5%] grid grid-cols-2 gap-4 border-t border-[#1d140e]/12 pt-5 text-sm leading-6 text-[#2b1d16]/82">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#1d140e]/42">Speakers</p>
                    <p className="mt-2">Mira Sung · Osei Hart · Lina Fabbri · Theo Duran</p>
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#1d140e]/42">Issue line</p>
                    <p className="mt-2">How do we build tools that make room for judgment instead of smoothing everything into one aesthetic mush?</p>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-[7%]">
                  <Link href="/agent-probe/cookie-cutter-poster" className="inline-flex items-center border border-[#17100c] bg-[#17100c] px-4 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-[#efe5d2] transition hover:-translate-y-0.5">
                    Read programme
                  </Link>
                  <a href="#premise" className="inline-flex items-center border border-[#17100c]/22 px-4 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-[#1d140e]/72 transition hover:border-[#17100c]/52 hover:text-[#17100c]">
                    Thesis notes
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-4 border border-[#1d140e]/12 bg-[#f7f0e4] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#1d140e]/42">Poster premise</p>
                  <div id="premise" className="space-y-4 text-sm leading-6 text-[#2b1d16]/82">
                    {bulletins.map((item, index) => (
                      <div key={item} className="border-t border-[#1d140e]/10 pt-4 first:border-t-0 first:pt-0">
                        <p className="text-[0.66rem] uppercase tracking-[0.3em] text-[#1d140e]/36">0{index + 1}</p>
                        <p className="mt-2">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden border border-[#1d140e]/15 bg-[#16120f] p-5 text-[#f8efe4] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:-translate-y-1">
                  <div className="absolute inset-y-0 right-0 w-[34%] bg-[#df5830]" />
                  <div className="relative">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#f8efe4]/58">Pattern / rupture</p>
                    <p className="mt-3 max-w-[10ch] text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.08em]">
                      Repeat
                      <br />
                      less.
                      <br />
                      Decide
                      <br />
                      more.
                    </p>
                  </div>
                </div>

                <footer className="border-t border-[#1d140e]/12 pt-4 text-[0.72rem] uppercase tracking-[0.24em] text-[#1d140e]/48">
                  Public argument for authored form, not platform-flavored sameness.
                </footer>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
