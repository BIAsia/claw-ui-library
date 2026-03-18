const topMeta = [
  "Sidequests\n02.10–15.11.2020",
  "Maria Balea\nGeorge Crîngașu\nAdrian Ganea",
  "Vernisaj:\n02.10.2020\n6PM–12AM",
  "Zina Gallery\nstr. Axente Sever 14 A\nCluj-Napoca, România",
] as const;

function MetaRow() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-[clamp(0.7rem,1.1vw,1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-white/96 md:grid-cols-4">
      {topMeta.map((item) => (
        <p key={item} className="whitespace-pre-line">
          {item}
        </p>
      ))}
    </div>
  );
}

export function Case029ZinaGalleryPoster() {
  return (
    <main className="min-h-screen bg-[#0a160b] px-3 py-3 text-white sm:px-5 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[860px] items-center justify-center">
        <article className="relative aspect-[0.712] w-full overflow-hidden bg-[#1f9b43] px-[4.3%] py-[3.2%] shadow-[0_32px_80px_rgba(0,0,0,0.36)]">
          <div className="absolute inset-0 opacity-[0.12] mix-blend-screen [background-image:radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.65),transparent_18%),radial-gradient(circle_at_80%_22%,rgba(255,255,255,0.25),transparent_26%),radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.18),transparent_22%)]" />
          <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:100%_24.8%,50%_100%]" />
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/55" />
          <div className="absolute inset-x-0 top-[24.8%] h-px bg-white/55" />
          <div className="absolute inset-x-0 top-[49.6%] h-px bg-white/55" />
          <div className="absolute inset-x-0 top-[74.4%] h-px bg-white/55" />

          <div className="relative z-10 flex h-full flex-col">
            <MetaRow />
            <div className="mt-[3.8%] border-t border-white/80 pt-[2.2%]">
              <h1 className="max-w-[9ch] text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.9] font-semibold tracking-[-0.09em] text-white">
                Zina Gallery
                <br />
                str. Axente Sever 14 A
                <br />
                Cluj-Napoca, România
              </h1>
            </div>

            <div className="mt-[8.6%] border-t border-white/55 pt-[5.8%]">
              <MetaRow />
            </div>

            <div className="mt-[0.8%] grid flex-1 grid-cols-2 gap-x-6">
              <div />
              <div className="pt-[2.4%]">
                <h2 className="max-w-[7ch] text-[clamp(2.5rem,5.4vw,4.7rem)] leading-[0.9] font-semibold tracking-[-0.09em] text-white">
                  Sidequests
                  <br />
                  02.10–15.11.2020
                </h2>
                <div className="mt-[8.6%] max-w-[7ch] text-[clamp(2.2rem,4.7vw,4.2rem)] leading-[0.9] font-semibold tracking-[-0.09em] text-white">
                  Maria Balea
                  <br />
                  George Crîngașu
                  <br />
                  Adrian Ganea
                </div>
              </div>
            </div>

            <div className="border-t border-white/55 pt-[4.2%]">
              <MetaRow />
            </div>

            <div className="mt-[0.8%] grid grid-cols-2 gap-x-6">
              <div className="border-t-[8px] border-white pt-[4.6%]">
                <h2 className="max-w-[6ch] text-[clamp(2.8rem,5.9vw,5rem)] leading-[0.9] font-semibold tracking-[-0.1em] text-white">
                  Vernisaj:
                  <br />
                  02.10.2020
                  <br />
                  6PM-12AM
                </h2>
              </div>
              <div />
            </div>

            <div className="mt-auto border-t border-white/55 pt-[3.8%]">
              <MetaRow />
            </div>

            <footer className="mt-auto flex items-end justify-between pt-[7.8%] text-[clamp(0.72rem,1vw,0.9rem)] font-semibold tracking-[-0.04em] text-white/95">
              <div>
                <div className="text-[clamp(2rem,2.6vw,2.5rem)] tracking-[-0.09em]">Zina Gallery</div>
                <p className="mt-1 max-w-[16ch] text-white/80">Expoziție de grup · Cluj-Napoca · 2020 archive print</p>
              </div>
              <p className="max-w-[16ch] text-right text-white/80">Expo poster with folded-grid cadence and duplicated event metadata.</p>
            </footer>
          </div>
        </article>
      </section>
    </main>
  );
}
