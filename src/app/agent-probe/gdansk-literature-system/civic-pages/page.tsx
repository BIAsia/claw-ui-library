const programme = [
  ["12 Apr", "Author Night", "Marta Sęk", "Old Town Hall Reading Room", "#ffd14b", "#3a2700"],
  ["18 Apr", "Translation Studio", "Baltic Languages Circle", "City Library Annex", "#6ad9ff", "#05263b"],
  ["02 May", "Edition Launch", "Civic Pages Vol. 04", "Granary Island Forum", "#ff8b61", "#401405"],
  ["11 May", "Public Seminar", "Ports, Poems, and Archives", "Maritime Institute Hall", "#c6a7ff", "#241244"],
] as const;

const tracks = [
  { name: "readings", tone: "bg-[#ffd14b] text-[#3a2700]" },
  { name: "translation", tone: "bg-[#6ad9ff] text-[#05263b]" },
  { name: "youth workshops", tone: "bg-[#9de87c] text-[#17340a]" },
  { name: "publication desk", tone: "bg-[#ff8b61] text-[#401405]" },
  { name: "city walks", tone: "bg-[#c6a7ff] text-[#241244]" },
] as const;

export default function GdanskLiteratureSystemCivicPagesPage() {
  return (
    <main className="min-h-screen bg-[#f2ecdf] px-3 py-3 text-[#1b150f] sm:px-4 lg:px-6">
      <section className="mx-auto max-w-[1240px]">
        <article className="overflow-hidden border-[3px] border-[#1b150f] bg-[#fff8ec] shadow-[0_24px_80px_rgba(74,55,29,0.16)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.48fr]">
            <div className="border-b-[3px] border-[#1b150f] bg-[#ff8b61] p-6 text-[#2b1008] lg:border-b-0 lg:border-r-[3px] lg:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#2b1008]/60">Gdańsk literature system / season programme</p>
              <h1 className="mt-5 max-w-[8ch] text-[clamp(2.8rem,5vw,5.2rem)] font-semibold uppercase leading-[0.86] tracking-[-0.09em] text-[#1c0f0a]">
                Civic Pages
              </h1>
              <p className="mt-5 max-w-[30ch] text-[1.02rem] leading-7 text-[#44231a]">
                A city-backed literary season linking author nights, translation workshops, and publication releases through a colourful modular identity system.
              </p>
              <div className="mt-8 grid gap-3">
                <div className="border-2 border-[#1b150f] bg-[#fff8ec] p-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#775344]">Edition</p>
                  <p className="mt-2 text-xl font-semibold uppercase tracking-[-0.04em]">Spring / Summer 2026</p>
                </div>
                <div className="border-2 border-[#1b150f] bg-[#ffd14b] p-4 text-[#3a2700]">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#3a2700]/58">Convened by</p>
                  <p className="mt-2 text-sm leading-6">Gdańsk Reading Office + Municipal Library</p>
                </div>
                <div className="border-2 border-[#1b150f] bg-[#c6a7ff] p-4 text-[#241244]">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#241244]/58">Public note</p>
                  <p className="mt-2 text-sm leading-6">Programme entries are designed for print, web, and venue boards.</p>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <div className="flex flex-col gap-6 border-b-[3px] border-[#1b150f] pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#6c5a4d]">Civic Pages / programme index</p>
                  <p className="mt-3 max-w-[48ch] text-sm leading-7 text-[#5a493d]">
                    The typography stays editorial, but each module now carries a strong colour identity so the season reads as a public system instead of one long neutral sheet.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] sm:grid-cols-3">
                  {tracks.map((track) => (
                    <span key={track.name} className={`border-2 border-[#1b150f] px-3 py-2 text-center ${track.tone}`}>
                      {track.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
                <div>
                  <div className="grid grid-cols-[0.6fr_1fr_0.9fr_1fr] border-y-2 border-[#1b150f] py-3 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#6c5a4d]">
                    <p>date</p>
                    <p>format</p>
                    <p>lead</p>
                    <p>venue</p>
                  </div>
                  <div className="space-y-3 pt-3">
                    {programme.map(([date, format, lead, venue, bg, fg]) => (
                      <div key={`${date}-${lead}`} className="grid grid-cols-1 gap-3 border-2 border-[#1b150f] p-4 text-sm leading-6 md:grid-cols-[0.6fr_1fr_0.9fr_1fr]" style={{ backgroundColor: bg, color: fg }}>
                        <p className="font-semibold uppercase tracking-[-0.03em]">{date}</p>
                        <p className="font-semibold tracking-[-0.03em]">{format}</p>
                        <p>{lead}</p>
                        <p>{venue}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-[#1b150f] bg-[#6ad9ff] p-5 text-[#05263b]">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#05263b]/58">season editorial</p>
                    <p className="mt-4 text-[1.16rem] leading-8 tracking-[-0.04em]">
                      This season asks how a port city reads itself: through migration, translation, dockside memory, and new public language.
                    </p>
                  </div>
                  <div className="border-2 border-[#1b150f] bg-[#1b150f] p-5 text-[#f4ecdf]">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#d4c7b6]">institution note</p>
                    <p className="mt-4 text-sm leading-7 text-[#efe5d8]">
                      Partner venues include the municipal library, neighbourhood reading rooms, and maritime heritage spaces. All sessions include Polish / English programme notes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 border-t-[3px] border-[#1b150f] pt-6 md:grid-cols-[1.1fr_0.9fr]">
                <div className="border-2 border-[#1b150f] bg-[#fff8ec] p-5">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#6c5a4d]">programme logic</p>
                  <p className="mt-3 max-w-[60ch] text-sm leading-7 text-[#5a493d]">
                    Each entry belongs to a repeatable identity kit: civic title, literary format, lead name, venue, and a colour-coded track that can scale into author pages, issue sheets, and neighbourhood posters.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.18em]">
                  <div className="border-2 border-[#1b150f] bg-[#9de87c] p-3 text-[#17340a]">
                    <p className="text-[#17340a]/56">next release</p>
                    <p className="mt-3 text-sm tracking-[-0.03em]">City Essays / Jun 2026</p>
                  </div>
                  <div className="border-2 border-[#1b150f] bg-[#ffd14b] p-3 text-[#3a2700]">
                    <p className="text-[#3a2700]/56">public access</p>
                    <p className="mt-3 text-sm tracking-[-0.03em]">free registration</p>
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
