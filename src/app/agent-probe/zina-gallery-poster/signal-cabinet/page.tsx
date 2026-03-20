const metaRows = [
  "Signal Cabinet\nSeason 04 / Bulletin 01",
  "Nora Velescu\nIlya Marin\nTara Dumitrescu",
  "Opening:\n24.04.2026\n7PM–11PM",
  "signalcabinet.world\nCluj-Napoca / Online\nPublic programme",
] as const;

function MetaRow() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-[clamp(0.7rem,1.1vw,1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-white/96 md:grid-cols-4">
      {metaRows.map((item) => (
        <p key={item} className="whitespace-pre-line">
          {item}
        </p>
      ))}
    </div>
  );
}

export default function ZinaGalleryPosterSignalCabinetPage() {
  return (
    <main className="min-h-screen bg-[#0a160b] px-3 py-3 text-white sm:px-5 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[860px] items-center justify-center">
        <article className="group relative aspect-[0.712] w-full overflow-hidden bg-[#1f9b43] px-[4.3%] py-[3.2%] shadow-[0_32px_80px_rgba(0,0,0,0.36)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_40px_96px_rgba(0,0,0,0.42)]">
          <div className="absolute inset-0 opacity-[0.12] mix-blend-screen transition-opacity duration-700 motion-safe:group-hover:opacity-[0.18] [background-image:radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.65),transparent_18%),radial-gradient(circle_at_80%_22%,rgba(255,255,255,0.25),transparent_26%),radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.18),transparent_22%)]" />
          <div className="absolute inset-0 opacity-[0.15] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-y-[-2px] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:100%_24.8%,50%_100%]" />
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/55" />
          <div className="absolute inset-x-0 top-[24.8%] h-px bg-white/55" />
          <div className="absolute inset-x-0 top-[49.6%] h-px bg-white/55" />
          <div className="absolute inset-x-0 top-[74.4%] h-px bg-white/55" />

          <div className="relative z-10 flex h-full flex-col">
            <MetaRow />
            <div className="mt-[3.8%] border-t border-white/80 pt-[2.2%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-y-[2px]">
              <h1 className="max-w-[9ch] text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.9] font-semibold tracking-[-0.09em] text-white">
                Signal Cabinet
                <br />
                Season 04 bulletin
                <br />
                Cluj-Napoca / Online
              </h1>
            </div>

            <div className="mt-[8.6%] border-t border-white/55 pt-[5.8%]">
              <MetaRow />
            </div>

            <div className="mt-[0.8%] grid flex-1 grid-cols-2 gap-x-6">
              <div />
              <div className="pt-[2.4%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-[6px]">
                <h2 className="max-w-[7ch] text-[clamp(2.5rem,5.4vw,4.7rem)] leading-[0.9] font-semibold tracking-[-0.09em] text-white">
                  Cabinet Season
                  <br />
                  Field Notes
                  <br />
                  24.04–21.06.2026
                </h2>
                <div className="mt-[8.6%] max-w-[7ch] text-[clamp(2.2rem,4.7vw,4.2rem)] leading-[0.9] font-semibold tracking-[-0.09em] text-white">
                  Nora Velescu
                  <br />
                  Ilya Marin
                  <br />
                  Tara Dumitrescu
                </div>
              </div>
            </div>

            <div className="border-t border-white/55 pt-[4.2%]">
              <MetaRow />
            </div>

            <div className="mt-[0.8%] grid grid-cols-2 gap-x-6">
              <div className="border-t-[8px] border-white pt-[4.6%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-y-[-2px]">
                <h2 className="max-w-[6ch] text-[clamp(2.8rem,5.9vw,5rem)] leading-[0.9] font-semibold tracking-[-0.1em] text-white">
                  Opening:
                  <br />
                  24.04.2026
                  <br />
                  7PM-11PM
                </h2>
              </div>
              <div />
            </div>

            <div className="mt-auto border-t border-white/55 pt-[3.8%]">
              <MetaRow />
            </div>

            <footer className="mt-auto flex items-end justify-between pt-[7.8%] text-[clamp(0.72rem,1vw,0.9rem)] font-semibold tracking-[-0.04em] text-white/95">
              <div>
                <div className="text-[clamp(2rem,2.6vw,2.5rem)] tracking-[-0.09em]">Signal Cabinet</div>
                <p className="mt-1 max-w-[18ch] text-white/80">Public issue sheet for a new archive season: fragments, contributors, and programme dates.</p>
              </div>
              <p className="max-w-[18ch] text-right text-white/80">Agent-probe concept translation of case-029 as a season bulletin rather than a browser.</p>
            </footer>
          </div>
        </article>
      </section>
    </main>
  );
}
