const editions = [
  {
    name: "Crystal Original",
    note: "clear grain / cold mineral finish / first-pour precision",
    tone: "bg-[#7fd0ff] text-[#06233d]",
    dominant: "Clean",
    ritual: "Ice shot",
    drop: "08 Apr",
    number: "01",
  },
  {
    name: "Citrus Lift",
    note: "lemon peel / tart sugar / bright late-afternoon snap",
    tone: "bg-[#ffd94a] text-[#3c2400]",
    dominant: "Zest",
    ritual: "Tall glass",
    drop: "22 Apr",
    number: "02",
  },
  {
    name: "Peach Glow",
    note: "soft stone fruit / syrup edge / sunset sweetness",
    tone: "bg-[#ff9a59] text-[#401607]",
    dominant: "Fruit",
    ritual: "Shared pour",
    drop: "06 May",
    number: "03",
  },
  {
    name: "House Clear",
    note: "rice spirit / cream label / steady familiar finish",
    tone: "bg-[#f8f1dc] text-[#3a2818]",
    dominant: "Classic",
    ritual: "Table round",
    drop: "20 May",
    number: "04",
  },
] as const;

export default function FlavorJourneyPage() {
  return (
    <main className="min-h-screen bg-[#f8f1dc] text-[#2d2017]">
      <section className="border-b-4 border-[#2d2017] bg-[#0e2d5c] px-5 py-16 text-[#f4fbff] sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#b9e8ff]">won soju bands / flavour line-up / spring edit</p>
          <h1 className="mt-4 max-w-[8ch] text-[clamp(3.6rem,8vw,7.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.1em]">Flavor Journey</h1>
          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <p className="max-w-[42rem] text-base leading-8 text-[#d5f0ff] md:text-lg">A banded campaign built like labeled bottle stripes: each flavour gets its own colour field, pace, ritual cue, and typographic attitude.</p>
            <div className="grid grid-cols-2 gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d5f0ff] sm:grid-cols-4">
              {editions.map((edition) => (
                <span key={edition.name} className="border border-white/24 bg-white/10 px-3 py-2 text-center">
                  {edition.number} / {edition.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-[#2d2017] bg-[#f8f1dc] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#6d5845]">campaign logic</p>
            <h2 className="mt-3 text-[clamp(2.4rem,5vw,4.8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.09em] text-[#241810]">Four labels. Four moods. One horizontal pour story.</h2>
          </div>
          <p className="max-w-[42rem] text-sm leading-7 text-[#5e4b39] md:text-base">The structure stays banded, but each stripe now behaves like a branded flavour panel with stronger contrast, bigger section titles, and cleaner product-memory cues.</p>
        </div>
      </section>

      {editions.map((edition) => (
        <section key={edition.name} className={`border-b-4 border-[#2d2017] px-5 py-12 sm:px-8 lg:px-12 lg:py-16 ${edition.tone}`}>
          <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] opacity-60">edition {edition.number}</p>
              <h2 className="mt-3 text-[clamp(3rem,6vw,5.8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.1em]">{edition.name}</h2>
              <p className="mt-4 max-w-[24rem] text-[1.02rem] leading-7 opacity-82 md:text-[1.1rem]">{edition.note}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="border-2 border-current/25 bg-white/10 p-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] opacity-58">dominant note</p>
                <p className="mt-3 text-[clamp(2rem,3vw,3rem)] font-semibold uppercase leading-none tracking-[-0.08em]">{edition.dominant}</p>
              </div>
              <div className="border-2 border-current/25 bg-white/10 p-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] opacity-58">ritual cue</p>
                <p className="mt-3 text-[clamp(2rem,3vw,3rem)] font-semibold uppercase leading-none tracking-[-0.08em]">{edition.ritual}</p>
              </div>
              <div className="border-2 border-current/25 bg-white/10 p-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] opacity-58">drop date</p>
                <p className="mt-3 text-[clamp(2rem,3vw,3rem)] font-semibold uppercase leading-none tracking-[-0.08em]">{edition.drop}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#1a120f] px-5 py-14 text-[#fff0d7] sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#d9c4a5]">release band</p>
            <h2 className="mt-4 text-[clamp(2.3rem,4vw,4.2rem)] font-semibold uppercase leading-[0.86] tracking-[-0.08em]">Colour carries the flavour memory before the bottle copy does.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex border-2 border-[#fff0d7] bg-[#fff0d7] px-5 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-[#1a120f]">Join drop list</span>
            <span className="inline-flex border-2 border-[#fff0d7]/30 px-5 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-[#fff0d7]">Read tasting notes</span>
          </div>
        </div>
      </section>
    </main>
  );
}
