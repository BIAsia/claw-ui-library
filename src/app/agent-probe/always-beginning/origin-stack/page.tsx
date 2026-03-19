const archiveMarks = [
  "origin stack",
  "collection 05",
  "field copies / annotated",
  "new intake / march 2026",
] as const;

const witnesses = [
  "First border crossed — Laila Darwish, Gaza to Alexandria, 1949",
  "First leaflet printed — Nermin Qasim, Haifa workers circle, 1968",
  "First rented room — Samir H. family ledger, Amman, 1982",
] as const;

export default function OriginStackPage() {
  return (
    <main className="min-h-screen bg-[#0d0b08] px-4 py-4 text-[#f4ede1] sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[760px] items-center justify-center">
        <article className="relative aspect-[0.72] w-full overflow-hidden border border-white/10 bg-[#17120d] px-[8%] py-[7%] shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:100%_11.5rem,11.5rem_100%]" />
          <div className="absolute inset-y-[6%] left-[7%] w-px bg-white/12" />
          <div className="absolute inset-y-[6%] right-[7%] w-px bg-white/12" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <header className="flex items-start justify-between gap-6 text-[0.7rem] uppercase tracking-[0.24em] text-[#d5c8b3]/65">
              <div className="space-y-2">
                {archiveMarks.slice(0, 2).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="space-y-2 text-right">
                {archiveMarks.slice(2).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </header>

            <section className="py-[6%]">
              <p className="mb-6 text-[0.8rem] uppercase tracking-[0.22em] text-[#d5c8b3]/55">commemorative archive opener</p>
              <h1 className="max-w-[7.5ch] text-[clamp(3.8rem,9vw,7rem)] font-semibold leading-[0.86] tracking-[-0.09em] text-[#f6efe3]">
                Always
                <br />
                remember
                <br />
                the beginning.
              </h1>
            </section>

            <section className="grid gap-8 border-t border-white/12 py-[5.5%] md:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#d5c8b3]/56">date span</p>
                <p className="mt-3 text-2xl leading-none tracking-[-0.07em] text-[#f4ede1]">1948–2026</p>
                <p className="mt-8 text-[0.72rem] uppercase tracking-[0.2em] text-[#d5c8b3]/56">archive note</p>
                <p className="mt-3 max-w-[18ch] text-sm leading-6 text-[#e4d6c2]/78">
                  A new release of first acts: first departures, first rooms, first banners, first names spoken aloud.
                </p>
              </div>
              <div className="space-y-4">
                {witnesses.map((item) => (
                  <p key={item} className="border-b border-white/8 pb-4 text-sm leading-6 text-[#efe3cf]/82">
                    {item}
                  </p>
                ))}
              </div>
            </section>

            <footer className="flex items-end justify-between gap-8 border-t border-white/12 pt-[5.5%] text-[0.72rem] uppercase tracking-[0.22em] text-[#d5c8b3]/60">
              <p>oral-history registry / opening sheet</p>
              <p className="text-right leading-5">curated by the migration memory office<br/>issue 05 / public release</p>
            </footer>
          </div>
        </article>
      </section>
    </main>
  );
}
