import Link from "next/link";

const repeatedWords = ["same", "same", "same", "same", "same", "break", "same", "same"] as const;

const premises = [
  "If every launch inherits the same spacing, gradient, and moodboard, the work stops carrying authorship.",
  "This symposium is a public refusal of prefab calm: more argument, more friction, more formal decision-making.",
  "Bring screenshots that all look interchangeable. We will cross them out, dissect them, and design past them.",
] as const;

export default function CookieCutterPosterAgainstTemplatePage() {
  return (
    <main className="min-h-screen bg-[#efe6d6] px-2 py-2 text-[#18110d] sm:px-3 lg:px-4">
      <section className="mx-auto flex min-h-[calc(100vh-1rem)] max-w-[980px] items-center justify-center">
        <article className="relative aspect-[0.72] w-full overflow-hidden border-[3px] border-[#1a120d] bg-[#f4ebdb] shadow-[0_30px_120px_rgba(39,21,10,0.22)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_78%,rgba(26,18,13,0.08)_78%,rgba(26,18,13,0.08)_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(26,18,13,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,18,13,0.24)_1px,transparent_1px)] [background-size:100%_5.4rem,5.4rem_100%]" />
          <div className="absolute left-0 top-0 h-full w-[18%] bg-[#ff5500]" />
          <div className="absolute right-0 top-0 h-[18%] w-[27%] bg-[#ff5500]" />
          <div className="absolute bottom-[16%] left-0 h-[11px] w-full bg-[#1a120d]" />
          <div className="absolute left-[18%] top-0 h-full w-[3px] bg-[#1a120d]" />
          <div className="absolute left-[56%] top-0 h-full w-[3px] bg-[#1a120d]" />
          <div className="absolute left-[11%] top-[21%] h-[3px] w-[48%] rotate-[-13deg] bg-[#1a120d]" />
          <div className="absolute left-[12%] top-[22.6%] h-[3px] w-[48%] rotate-[-13deg] bg-[#1a120d]" />
          <div className="absolute right-[7%] top-[61%] h-[3px] w-[31%] rotate-[12deg] bg-[#1a120d]" />
          <div className="absolute right-[7%] top-[62.8%] h-[3px] w-[31%] rotate-[12deg] bg-[#1a120d]" />

          <div className="relative z-10 flex h-full flex-col px-[4.8%] py-[4.8%]">
            <header className="flex items-start justify-between gap-4 text-[0.66rem] uppercase tracking-[0.28em] text-[#1a120d]/66">
              <div>
                <p>Counter cookie-cutter / design symposium / 14 OCT 2026</p>
                <p className="mt-2">Hall B / 18:00–22:00 / public session</p>
              </div>
              <Link href="/agent-probe" className="border border-[#1a120d] bg-[#f4ebdb] px-2 py-1 transition hover:bg-[#1a120d] hover:text-[#f4ebdb]">
                agent probe ↗
              </Link>
            </header>

            <div className="mt-[3.5%] flex flex-wrap gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#1a120d]">
              {repeatedWords.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className={`border-2 border-[#1a120d] px-2 py-1 ${word === "break" ? "bg-[#1a120d] text-[#f4ebdb]" : index % 2 === 0 ? "bg-[#ff5500] text-[#fff1de]" : "bg-[#f4ebdb]"}`}
                >
                  {word}
                </span>
              ))}
            </div>

            <div className="mt-[3.5%] grid flex-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="flex flex-col">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-[#1a120d]/54">Against template thinking</p>
                <h1 className="mt-3 max-w-[7ch] text-[clamp(4.8rem,11vw,9.6rem)] font-semibold uppercase leading-[0.8] tracking-[-0.1em] text-[#120d0a]">
                  Don’t
                  <br />
                  ship
                  <br />
                  the
                  <br />
                  default.
                </h1>

                <div className="mt-4 max-w-[28rem] border-y-[3px] border-[#1a120d] bg-[#ff5500] px-4 py-4 text-[#fff1de]">
                  <p className="text-[1rem] leading-6 tracking-[-0.03em] sm:text-[1.12rem]">
                    A confrontational poster-session for designers, toolmakers, and art directors tired of polished sameness dressed up as taste.
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-[0.74rem] uppercase tracking-[0.2em] text-[#1a120d] sm:max-w-[33rem]">
                  <div className="border-2 border-[#1a120d] bg-[#f4ebdb] p-3">
                    <p className="text-[#1a120d]/54">Speakers</p>
                    <p className="mt-3 text-sm font-semibold tracking-[-0.03em]">Mira Sung / Osei Hart / Lina Fabbri / Theo Duran</p>
                  </div>
                  <div className="border-2 border-[#1a120d] bg-[#f4ebdb] p-3">
                    <p className="text-[#1a120d]/54">Issue line</p>
                    <p className="mt-3 text-sm font-semibold tracking-[-0.03em]">Repetition is easy. Judgment is work.</p>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <Link href="/agent-probe/cookie-cutter-poster" className="border-2 border-[#1a120d] bg-[#1a120d] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#fff1de] transition hover:bg-[#ff5500] hover:text-[#fff1de]">
                    Read programme
                  </Link>
                  <span className="border-2 border-[#1a120d] bg-[#f4ebdb] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#1a120d]">
                    Poster / public argument
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="border-[3px] border-[#1a120d] bg-[#f4ebdb] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#1a120d]/54">Premise</p>
                  <div className="mt-4 space-y-4">
                    {premises.map((item, index) => (
                      <div key={item} className="border-t-2 border-[#1a120d] pt-3 first:border-t-0 first:pt-0">
                        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#1a120d]/52">0{index + 1}</p>
                        <p className="mt-2 text-[0.98rem] leading-6 tracking-[-0.03em] text-[#1a120d]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-[3px] border-[#1a120d] bg-[#1a120d] p-4 text-[#fff1de]">
                  <p className="text-[0.66rem] uppercase tracking-[0.28em] text-[#fff1de]/52">Cross-out rule</p>
                  <p className="mt-3 text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[0.82] tracking-[-0.08em]">
                    Repeat less.
                    <br />
                    Decide more.
                  </p>
                </div>

                <div className="border-[3px] border-[#1a120d] bg-[#ff5500] p-4 text-[#fff1de]">
                  <p className="text-[0.66rem] uppercase tracking-[0.28em] text-[#fff1de]/64">Bring to the room</p>
                  <p className="mt-3 text-xl font-semibold uppercase leading-[0.9] tracking-[-0.06em]">Screenshots, failed drafts, hard opinions, and one thing you refuse to template.</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
