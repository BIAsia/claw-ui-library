const editions = [
  { name: "Pear Blossom", note: "cold fruit / white flowers / mineral finish", tone: "bg-[#f3dfcf] text-[#372822]" },
  { name: "Roasted Rice", note: "warm grain / toasted sugar / cedar steam", tone: "bg-[#d8c09f] text-[#2d241a]" },
  { name: "Night Plum", note: "dark stone fruit / smoke / velvet spice", tone: "bg-[#6f4257] text-[#f8e6da]" },
] as const;

export default function FlavorJourneyPage() {
  return (
    <main className="min-h-screen bg-[#eee1d1] text-[#2c1f1a]">
      <section className="border-b border-[#2c1f1a]/10 bg-[#f4e7d8] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[0.74rem] uppercase tracking-[0.28em] text-[#2c1f1a]/46">night pour editions / launch sequence</p>
          <h1 className="mt-4 max-w-[8ch] text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.09em]">Flavor Journey</h1>
          <p className="mt-6 max-w-[34rem] text-base leading-8 text-[#2c1f1a]/72 md:text-lg">A banded campaign for limited pours: origin, note, ritual, and drop timing told as slow horizontal chapters.</p>
        </div>
      </section>

      <section className="border-b border-[#2c1f1a]/10 bg-[#dcbca0] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#2c1f1a]/46">origin band</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.8rem)] font-semibold tracking-[-0.08em]">From rice spirit to evening ritual.</h2>
          </div>
          <p className="max-w-[38rem] text-sm leading-7 text-[#2c1f1a]/74 md:text-base">Each edition is built as a mood chapter: grain, fruit, steam, and the social pacing of a late shared pour rather than a retail shelf grid.</p>
        </div>
      </section>

      {editions.map((edition, index) => (
        <section key={edition.name} className={`border-b border-[#2c1f1a]/10 px-5 py-14 sm:px-8 lg:px-12 lg:py-16 ${edition.tone}`}>
          <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.24em] opacity-60">edition 0{index + 1}</p>
              <h2 className="mt-4 text-[clamp(2.6rem,5vw,4.8rem)] font-semibold tracking-[-0.08em]">{edition.name}</h2>
              <p className="mt-4 max-w-[24rem] text-base leading-8 opacity-78">{edition.note}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] opacity-60">dominant note</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.06em]">{index === 0 ? "Lifted" : index === 1 ? "Toasted" : "Velvet"}</p>
              </div>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] opacity-60">ritual</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.06em]">{index === 0 ? "Chilled" : index === 1 ? "Warm cup" : "Late pour"}</p>
              </div>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] opacity-60">drop cue</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.06em]">{index === 0 ? "08 Apr" : index === 1 ? "22 Apr" : "06 May"}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#241816] px-5 py-14 text-[#f6e4d6] sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/46">release band</p>
            <h2 className="mt-4 text-[clamp(2.2rem,4vw,3.8rem)] font-semibold tracking-[-0.08em]">Limited pour nights. Three edits. One slow descent into taste.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-flex rounded-full bg-[#f6e4d6] px-5 py-3 text-[0.74rem] uppercase tracking-[0.2em] text-[#241816]">Join drop list</a>
            <a href="#" className="inline-flex rounded-full border border-white/16 px-5 py-3 text-[0.74rem] uppercase tracking-[0.2em] text-white/72">Read tasting notes</a>
          </div>
        </div>
      </section>
    </main>
  );
}
