const metrics = [
  ["18+", "Reputable\nAgencies"],
  ["448+", "Creatives\nCollectively"],
  ["275+", "Total Awards\nEarned"],
] as const;

export function Case028UkrainianPowerHero() {
  return (
    <main className="min-h-screen bg-[#f3f2ef] px-3 py-3 text-black sm:px-5 lg:px-8">
      <section className="group mx-auto min-h-[calc(100vh-1.5rem)] max-w-[1240px] overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.035),transparent_26%),radial-gradient(circle_at_75%_35%,rgba(0,0,0,0.04),transparent_22%),#f3f2ef] px-4 py-4 shadow-[0_24px_54px_rgba(0,0,0,0.12)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_32px_74px_rgba(0,0,0,0.16)] sm:px-6 sm:py-5">
        <header className="flex items-start justify-between gap-4 text-[0.72rem] uppercase tracking-[0.04em] sm:text-[0.85rem]">
          <div className="flex items-center gap-2 font-semibold leading-none">
            <div className="relative h-4 w-8">
              <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rotate-[25deg] bg-black" />
              <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rotate-[-25deg] bg-black" />
            </div>
            <div>
              <p>Ukrainian</p>
              <p>Power</p>
            </div>
          </div>
          <nav className="flex items-center gap-5 sm:gap-10">
            <span>All teams</span>
            <span className="flex items-center gap-2"><span className="text-[#13fb23]">✳</span>About</span>
            <span>FAQ</span>
          </nav>
        </header>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.66fr_1.34fr] xl:items-start">
          <aside className="max-w-[16rem] text-[clamp(1.3rem,2.2vw,2rem)] leading-[0.88] font-semibold uppercase tracking-[-0.08em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-1">
            &amp;UP is a showcase
            <br />
            of Ukrainian creative
            <br />
            agencies of various
            <br />
            specializations
          </aside>

          <div className="space-y-2 text-[clamp(2.4rem,5.7vw,6.3rem)] leading-[0.86] font-light uppercase tracking-[-0.085em] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-2">
            <div className="flex flex-wrap items-end gap-x-5 gap-y-1">
              <span>Quickly</span>
              <span>Find</span>
              <span>Your</span>
              <span>Ideal</span>
            </div>
            <div className="flex flex-wrap items-end gap-x-5 gap-y-1">
              <span>Professional</span>
              <span>Among</span>
              <span>The</span>
            </div>
            <div className="flex flex-wrap items-end gap-x-5 gap-y-1">
              <span>Ukrainian</span>
              <span className="mb-[0.18em] inline-block h-px w-[10rem] bg-black/60 sm:w-[12rem]" />
              <span>Creatives</span>
            </div>
            <div className="flex flex-wrap items-end gap-x-5 gap-y-1">
              <span>Who Will Blend In,</span>
              <span>Share</span>
              <span>Your Values</span>
            </div>
            <div className="flex flex-wrap items-end gap-x-5 gap-y-1">
              <span>And Perform At</span>
              <span className="mb-[0.18em] inline-flex items-center gap-2"><span className="inline-block h-px w-[7rem] bg-black/60 sm:w-[10rem]" />→</span>
              <span>The Highest Level</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {metrics.map(([value, label], index) => (
            <article key={value} className="relative overflow-hidden rounded-[2.5rem] bg-black px-4 py-5 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 sm:px-6 sm:py-6">
              <p className="text-[clamp(4rem,8vw,8rem)] leading-[0.82] font-light tracking-[-0.14em]">{value}</p>
              <p className="mt-2 whitespace-pre-line text-[clamp(1.55rem,2.5vw,2.4rem)] leading-[0.9] uppercase tracking-[-0.07em] text-white/95">{label}</p>
              {index === 2 ? <div className="absolute bottom-6 right-7 text-[2rem] text-[#12f51e]">❋</div> : null}
            </article>
          ))}
        </div>

        <button className="mt-3 flex w-full items-center justify-center gap-5 rounded-[2rem] bg-[#18ff17] px-6 py-5 text-[clamp(1.55rem,2vw,2.1rem)] uppercase tracking-[-0.06em] text-black transition duration-300 ease-out hover:brightness-95 motion-safe:hover:scale-[1.01]">
          <span>↗</span>
          <span>View all agencies</span>
          <span>↗</span>
        </button>
      </section>
    </main>
  );
}
