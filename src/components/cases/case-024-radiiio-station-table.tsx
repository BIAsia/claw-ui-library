const rows = [
  ["96.1", "Dawn FM"],
  ["96.5", "Blue Wave FM"],
  ["97.1", "Pulse Radio"],
  ["97.8", "Starmachine FM"],
  ["98.4", "Echo Waves Radio"],
] as const;

export function Case024RadiiioStationTable() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 py-10 text-[#111] sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1300px] items-center justify-center">
        <article className="w-full max-w-[1040px] overflow-hidden border border-[#121212] shadow-[0_28px_48px_rgba(0,0,0,0.28)]">
          <header className="bg-[#ff5a21] px-5 py-4 sm:px-8 sm:py-5">
            <div className="flex items-start justify-between gap-4 text-[0.95rem] sm:text-[1.1rem]">
              <p className="text-[clamp(2rem,3.4vw,3rem)] leading-none font-[700] tracking-[-0.08em]">radiiio<span className="text-[0.48em] align-top">®</span></p>
              <p>Menu</p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-[1fr_1.4fr]">
              <ul className="space-y-1 text-[0.98rem] leading-[1.1] font-[600] tracking-[-0.04em]">
                <li>● Top Stations</li>
                <li>Featured Shows</li>
                <li>Genres</li>
              </ul>
              <div>
                <p className="text-[clamp(1.1rem,2vw,1.5rem)] tracking-[-0.05em]">Find Your Favorite Stations, Shows, Or Genres</p>
                <div className="mt-3 h-px bg-black/30" />
              </div>
            </div>
          </header>

          <div className="bg-[#ecf8fb] px-5 pt-4 sm:px-8">
            <div className="grid grid-cols-[0.7fr_1.3fr] gap-4 border-b border-black/10 pb-3 text-[1rem] tracking-[-0.04em] sm:text-[1.15rem]">
              <span>Frequency ↓</span>
              <span>Name ↓</span>
            </div>

            {rows.map(([freq, name]) => (
              <div key={freq} className="grid grid-cols-[0.7fr_1.3fr] gap-4 border-b border-black/10 py-3 sm:py-4">
                <span className="text-[clamp(3.1rem,8vw,5.3rem)] leading-none tracking-[-0.1em]">{freq}</span>
                <span className="text-[clamp(3rem,7vw,5.15rem)] leading-none font-[600] tracking-[-0.1em]">{name}</span>
              </div>
            ))}

            <footer className="flex flex-wrap items-center justify-between gap-4 py-4 text-[0.95rem] tracking-[-0.04em] sm:text-[1.08rem]">
              <div className="flex gap-4">
                <span>▮▮ 108.2</span>
                <span>Echo Waves Radio</span>
              </div>
              <div className="flex gap-4">
                <span>David Bowie</span>
                <span>Dancing In The Street</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Live</span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff4923]" />
              </div>
            </footer>
          </div>
        </article>
      </section>
    </main>
  );
}
