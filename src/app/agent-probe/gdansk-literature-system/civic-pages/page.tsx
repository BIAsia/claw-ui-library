const programme = [
  ["12 Apr", "Author Night", "Marta Sęk", "Old Town Hall Reading Room"],
  ["18 Apr", "Translation Studio", "Baltic Languages Circle", "City Library Annex"],
  ["02 May", "Edition Launch", "Civic Pages Vol. 04", "Granary Island Forum"],
  ["11 May", "Public Seminar", "Ports, Poems, and Archives", "Maritime Institute Hall"],
] as const;

const tracks = ["readings", "translation", "youth workshops", "publication desk", "city walks"] as const;

export default function GdanskLiteratureSystemCivicPagesPage() {
  return (
    <main className="min-h-screen bg-[#ece5d8] px-3 py-3 text-[#1f1912] sm:px-5 lg:px-8">
      <section className="mx-auto max-w-[1220px]">
        <article className="overflow-hidden border border-[#2a2118]/15 bg-[#f7f2e9] shadow-[0_24px_70px_rgba(74,55,29,0.12)]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.45fr]">
            <div className="border-b border-[#2a2118]/12 bg-[#e1d3c0] p-6 lg:border-b-0 lg:border-r lg:p-8">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#6e5e4f]">Gdańsk literature system / season programme</p>
              <h1 className="mt-5 max-w-[8ch] text-[clamp(2.6rem,5vw,4.9rem)] leading-[0.92] tracking-[-0.08em] text-[#1c150f]">
                Civic Pages
              </h1>
              <p className="mt-5 max-w-[30ch] text-[1.02rem] leading-7 text-[#5f5244]">
                A city-backed literary season linking author nights, translation workshops, and publication releases through one civic-editorial programme surface.
              </p>
              <div className="mt-8 border-t border-[#2a2118]/12 pt-5 text-sm leading-7 text-[#44382d]">
                <p><span className="font-medium text-[#1c150f]">Edition:</span> Spring / Summer 2026</p>
                <p><span className="font-medium text-[#1c150f]">Convened by:</span> Gdańsk Reading Office + Municipal Library</p>
                <p><span className="font-medium text-[#1c150f]">Public note:</span> Programme entries are designed for print, web, and venue boards.</p>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <div className="flex flex-col gap-6 border-b border-[#2a2118]/12 pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#6e5e4f]">Civic Pages / programme index</p>
                  <p className="mt-3 max-w-[48ch] text-sm leading-7 text-[#605345]">
                    Built for repeatability: each programme block carries date, format, lead author or desk, and venue with the same civic cadence. The tone stays public, literary, and usable.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#3e3329] sm:grid-cols-3">
                  {tracks.map((track) => (
                    <span key={track} className="border border-[#2a2118]/12 bg-white/70 px-3 py-2 text-center">
                      {track}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="grid grid-cols-[0.6fr_1fr_0.9fr_1fr] border-y border-[#2a2118]/14 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#736354]">
                    <p>date</p>
                    <p>format</p>
                    <p>lead</p>
                    <p>venue</p>
                  </div>
                  <div className="divide-y divide-[#2a2118]/10">
                    {programme.map(([date, format, lead, venue]) => (
                      <div key={`${date}-${lead}`} className="grid grid-cols-1 gap-3 py-5 text-sm leading-6 text-[#241c15] md:grid-cols-[0.6fr_1fr_0.9fr_1fr]">
                        <p className="font-medium tracking-[-0.03em]">{date}</p>
                        <p className="tracking-[-0.03em]">{format}</p>
                        <p className="text-[#5b4e41]">{lead}</p>
                        <p className="text-[#5b4e41]">{venue}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-[#2a2118]/12 bg-white/65 p-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#6e5e4f]">season editorial</p>
                    <p className="mt-4 text-[1.18rem] leading-8 tracking-[-0.04em] text-[#1c150f]">
                      This season asks how a port city reads itself: through migration, translation, dockside memory, and new public language.
                    </p>
                  </div>
                  <div className="border border-[#2a2118]/12 bg-[#1f1912] p-5 text-[#f2eadf]">
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#bcae9d]">institution note</p>
                    <p className="mt-4 text-sm leading-7 text-[#e4dbcf]">
                      Partner venues include the municipal library, neighbourhood reading rooms, and maritime heritage spaces. All sessions include Polish / English programme notes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 border-t border-[#2a2118]/12 pt-6 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#6e5e4f]">programme logic</p>
                  <p className="mt-3 max-w-[60ch] text-sm leading-7 text-[#605345]">
                    Each entry belongs to a repeatable system: season title, civic department, literary format, and place-specific venue details remain ordered enough to scale into author pages, issue sheets, and neighborhood posters.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#44382d]">
                  <div className="border border-[#2a2118]/12 bg-white/70 p-3">
                    <p className="text-[#7a6a5a]">next release</p>
                    <p className="mt-3 text-sm tracking-[-0.03em] text-[#1c150f]">City Essays / Jun 2026</p>
                  </div>
                  <div className="border border-[#2a2118]/12 bg-white/70 p-3">
                    <p className="text-[#7a6a5a]">public access</p>
                    <p className="mt-3 text-sm tracking-[-0.03em] text-[#1c150f]">free registration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
