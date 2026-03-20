const strips = [
  {
    shelf: "board 01 / launch evidence",
    code: "S-14",
    chips: [
      "pdf / substrate notes / 04.22",
      "jpg / kiosk lane blur / 03.11",
      "quote / friction is a memory leak",
      "fig / handoff shelf / rev-b",
      "png / museum label seam",
      "txt / keep owner metadata tiny",
    ],
  },
  {
    shelf: "board 02 / texture pulls",
    code: "S-21",
    chips: [
      "gif / wave tap loop / 08s",
      "pdf / transit color audit / marked",
      "web / station tags / archive",
      "mov / queue glow / clipped",
      "img / foam-board labels / grain",
      "font / grotesk alt / narrow",
      "note / receipts feel too sterile",
    ],
  },
  {
    shelf: "board 03 / client keeps",
    code: "S-27",
    chips: [
      "msg / keep it collectible",
      "csv / lane adoption sample",
      "fig / shelf microcopy / v2",
      "pdf / service pacing / print",
      "img / tab shadow tear",
      "note / no soft rounded UI",
    ],
  },
  {
    shelf: "board 04 / resurfacing queue",
    code: "S-33",
    chips: [
      "clip / venue sign crop",
      "pdf / archive tape study",
      "img / receipt edges / bent",
      "quote / recognition beats preview",
      "wav / queue chime / mono",
      "fig / saveboard map / pinned",
    ],
  },
] as const;

const filters = ["all fragments", "quotes", "screens", "pdf", "marked", "resurface", "owner:kira"] as const;

export default function SaveboardPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-3 py-3 text-[#f3ecd8] sm:px-4 lg:px-6">
      <section className="mx-auto max-w-[1380px] border border-[#f3ecd8]/20 bg-[#090909] shadow-[0_28px_120px_rgba(0,0,0,0.55)]">
        <header className="border-b border-[#f3ecd8]/14 px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[0.64rem] uppercase tracking-[0.34em] text-[#f3ecd8]/54">Worth saving / clipping board / archival strips</p>
              <h1 className="mt-3 max-w-[12ch] text-[clamp(2.7rem,6vw,6.5rem)] font-semibold uppercase leading-[0.84] tracking-[-0.1em] text-[#f3ecd8]">
                Keep only what still sticks after the cut.
              </h1>
            </div>
            <div className="space-y-4">
              <p className="max-w-[34rem] text-sm leading-6 text-[#d1c8b0] sm:text-[15px]">
                A compressed save surface for scraps, pulls, proofs, and recurring references. Nothing expands into cards. Everything behaves like a strip clipped from somewhere else.
              </p>
              <div className="flex flex-wrap gap-2">
                {filters.map((item, index) => (
                  <span
                    key={item}
                    className={`border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.22em] ${
                      index === 0 ? "border-[#f3ecd8] bg-[#f3ecd8] text-[#070707]" : "border-[#f3ecd8]/18 bg-[#111111] text-[#f3ecd8]/62"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-0 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="border-r border-[#f3ecd8]/12">
            {strips.map((strip, stripIndex) => (
              <article
                key={strip.shelf}
                className="relative border-b border-[#f3ecd8]/12 bg-[linear-gradient(180deg,#111_0%,#0b0b0b_58%,#070707_100%)] px-4 py-4 sm:px-6 lg:px-8"
              >
                <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(243,236,216,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(243,236,216,0.22)_1px,transparent_1px)] [background-size:100%_3.4rem,3.4rem_100%]" />
                <div className="absolute left-0 top-0 h-full w-2 bg-[#f3ecd8]/10" />
                <div className="absolute left-5 top-0 h-full w-px bg-[#f3ecd8]/12 sm:left-8" />
                <div className="absolute inset-x-0 top-2 h-px bg-[#f3ecd8]/10" />
                <div className="absolute inset-x-0 bottom-2 h-px bg-[#f3ecd8]/8" />

                <div className="relative z-10 grid gap-4 lg:grid-cols-[220px_1fr] lg:items-start">
                  <div className="border border-[#f3ecd8]/16 bg-[#050505] p-3 text-[#f3ecd8]">
                    <p className="text-[0.58rem] uppercase tracking-[0.3em] text-[#f3ecd8]/44">strip {stripIndex + 1}</p>
                    <h2 className="mt-2 text-[1.1rem] font-semibold uppercase tracking-[-0.05em]">{strip.shelf}</h2>
                    <div className="mt-4 border-t border-[#f3ecd8]/12 pt-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#c7bda3]">
                      <p>code {strip.code}</p>
                      <p className="mt-1">{strip.chips.length} kept fragments</p>
                      <p className="mt-1">board condition / dense</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {strip.chips.map((chip, index) => (
                      <span
                        key={chip}
                        className={`inline-flex min-h-[3.2rem] items-center border px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#f1ead7] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] ${
                          index % 4 === 0
                            ? "rotate-[-1.4deg] border-[#f3ecd8]/24 bg-[#141414]"
                            : index % 4 === 1
                              ? "rotate-[0.9deg] border-[#b7b0a1]/24 bg-[#101010]"
                              : index % 4 === 2
                                ? "rotate-[-0.4deg] border-[#8d8576]/24 bg-[#171717]"
                                : "rotate-[1.2deg] border-[#f3ecd8]/18 bg-[#0d0d0d]"
                        }`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="bg-[#0b0b0b] px-4 py-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <div className="border border-[#f3ecd8]/14 bg-[#111111] p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#f3ecd8]/48">resurface next</p>
                <div className="mt-4 space-y-2">
                  {[
                    "quote / recognition beats preview / 18m",
                    "pdf / archive tape study / yesterday",
                    "img / museum label seam / 2d",
                    "fig / saveboard map / 5d",
                  ].map((item) => (
                    <div key={item} className="border border-[#f3ecd8]/12 bg-[#060606] px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#ddd3bd]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#f3ecd8]/14 bg-[#050505] p-4 text-[#e2dac6]">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#f3ecd8]/48">why this reads like an archive</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#c9bfa8]">
                  <li>— strips stay flat and compressed, like marked negatives or taped proof bands.</li>
                  <li>— metadata remains tiny so quantity feels intentional instead of bureaucratic.</li>
                  <li>— rotation and seam lines keep every chip object-like, not software-like.</li>
                </ul>
              </div>

              <div className="border border-[#f3ecd8]/14 bg-[#f3ecd8] p-4 text-[#080808]">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#080808]/52">salvage rule</p>
                <p className="mt-3 text-[1.4rem] font-semibold uppercase leading-[0.96] tracking-[-0.08em]">
                  Save fragments.
                  <br />
                  Skip folders.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
