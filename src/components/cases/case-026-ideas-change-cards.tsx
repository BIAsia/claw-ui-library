const cards = [
  {
    top: "#b7d2f3",
    bottom: "#ef59a7",
    sticky: "#ff3b30",
    rotate: -11,
    title: "Driven Ideas",
  },
  {
    top: "#a8be1f",
    bottom: "#f9ba06",
    sticky: "#ffee00",
    rotate: -10,
    title: "Brilliant",
  },
  {
    top: "#ffb007",
    bottom: "#f0a11e",
    sticky: "#ffd21a",
    rotate: 7,
    title: "Intelligent",
  },
  {
    top: "#efe6eb",
    bottom: "#98ad18",
    sticky: "#ff3a31",
    rotate: -13,
    title: "Solvent",
  },
] as const;

export function Case026IdeasChangeCards() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] px-4 py-12 text-black sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1160px] items-center justify-center">
        <div className="grid w-full max-w-[980px] gap-6 md:grid-cols-4">
          {cards.map((card, index) => (
            <article key={index} className="group relative mx-auto flex aspect-[0.68] w-full max-w-[175px] flex-col overflow-hidden bg-white shadow-[0_14px_28px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-[0_20px_34px_rgba(0,0,0,0.14)]">
              <div className="relative h-[38%] px-4 pt-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-y-[-2px]" style={{ background: card.top }}>
                <div className="flex items-start justify-between">
                  <h2 className="max-w-[7ch] text-[clamp(1.15rem,1.6vw,1.35rem)] leading-[0.9] font-black tracking-[-0.08em]">
                    Ideas
                    <br />
                    that
                    <br />
                    change
                    <br />
                    the
                    <br />
                    world.
                  </h2>
                  <span className="text-[2rem] leading-none font-black tracking-[-0.12em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:rotate-[6deg]">9</span>
                </div>
              </div>
              <div className="flex-1 bg-[#f6f3ee]" />
              <div className="relative flex h-[27%] flex-col justify-end px-4 py-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-y-[2px]" style={{ background: card.bottom }}>
                <p className="text-[0.3rem] font-semibold uppercase tracking-[0.04em]">March 9</p>
                <p className="mt-1 text-[clamp(1.8rem,2.5vw,2.3rem)] leading-none [font-family:cursive] tracking-[-0.08em]">{card.title}</p>
              </div>
              <div
                className="absolute left-5 top-[20%] h-[45%] w-[72%] shadow-[0_8px_14px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-y-[-6px] motion-safe:group-hover:rotate-[2deg]"
                style={{ background: card.sticky, transform: `rotate(${card.rotate}deg)` }}
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
