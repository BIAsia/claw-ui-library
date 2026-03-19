const shelves = [
  {
    label: "launch refs",
    tone: "bg-[#f2efe6] text-[#233127] border-[#233127]/10",
    chips: [
      "pdf · substrate-notes.pdf",
      "fig · onboarding-shelf-v4",
      "img · ticket-lane-example",
      "quote · friction is a memory leak",
      "link · kiosk pacing study",
      "clip · wave tap animation",
    ],
  },
  {
    label: "textures worth reusing",
    tone: "bg-[#dcead8] text-[#183329] border-[#183329]/10",
    chips: [
      "png · mint-dot-grid",
      "mov · queue-glow-loop",
      "font · editorial grotesk alt",
      "note · receipts feel too sterile",
      "web · museum wayfinding tags",
      "jpg · foam-board labels",
      "pdf · transit color audit",
    ],
  },
  {
    label: "client pulls",
    tone: "bg-[#fae6c8] text-[#3f2916] border-[#3f2916]/10",
    chips: [
      "msg · keep it collectible",
      "brief · playful not childish",
      "csv · lane adoption sample",
      "fig · shelf microcopy",
      "img · tab shadows",
      "note · keep owner metadata tiny",
    ],
  },
] as const;

const filters = ["everything", "saved today", "quotes", "screens", "pdf", "hand-off", "owner: kira"] as const;

export default function SaveboardPage() {
  return (
    <main className="min-h-screen bg-[#eff1e8] px-4 py-4 text-[#16211b] sm:px-5 lg:px-8">
      <section className="mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] border border-[#16211b]/10 bg-[#f7f7f1] shadow-[0_36px_90px_rgba(29,39,31,0.16)]">
        <div className="border-b border-[#16211b]/10 bg-[#e1eadf] px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#506154]">Saveboard / worth keeping</p>
              <h1 className="mt-2 text-[clamp(2.4rem,5vw,4.8rem)] font-semibold tracking-[-0.08em] text-[#16211b]">Project fragments that keep surviving the cut.</h1>
            </div>
            <div className="max-w-sm text-sm leading-6 text-[#445347]">
              Curated chips, not folders. Everything here is small enough to skim, strong enough to resurface, and grouped by why it matters.
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {filters.map((item, index) => (
              <span
                key={item}
                className={`rounded-full border px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.18em] ${
                  index === 0 ? "border-[#16211b] bg-[#16211b] text-[#f7f7f1]" : "border-[#16211b]/10 bg-white/70 text-[#506154]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-0 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="border-r border-[#16211b]/10 px-5 py-5 sm:px-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              {shelves.map((shelf) => (
                <article key={shelf.label} className={`rounded-[1.4rem] border p-4 ${shelf.tone}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] opacity-55">shelf</p>
                      <h2 className="mt-1 text-xl font-medium tracking-[-0.04em]">{shelf.label}</h2>
                    </div>
                    <p className="text-[0.72rem] uppercase tracking-[0.18em] opacity-55">{shelf.chips.length} kept</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {shelf.chips.map((chip) => (
                      <span key={chip} className="rounded-full border border-current/10 bg-white/70 px-3 py-2 text-[0.76rem] tracking-[-0.02em] shadow-[0_2px_0_rgba(0,0,0,0.04)]">
                        {chip}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="bg-[#f3f1ea] px-5 py-5 sm:px-8">
            <div className="rounded-[1.5rem] border border-[#16211b]/10 bg-white/75 p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#506154]">resurface queue</p>
              <div className="mt-4 space-y-3">
                {[
                  ["quote", "friction is a memory leak", "saved 18m ago"],
                  ["fig", "shelf microcopy v2", "saved yesterday"],
                  ["pdf", "Transit tap-off audit", "saved 2d ago"],
                  ["img", "museum label hierarchy", "saved 5d ago"],
                ].map(([type, name, meta]) => (
                  <div key={name} className="rounded-2xl border border-[#16211b]/8 bg-[#f7f7f1] p-3">
                    <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#6f7d71]">{type}</p>
                    <p className="mt-1 text-sm font-medium text-[#16211b]">{name}</p>
                    <p className="mt-1 text-xs text-[#6f7d71]">{meta}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-[#16211b]/10 bg-[#16211b] p-5 text-[#eef4ee]">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#b3c2b5]">why this stays light</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#dce6dc]">
                <li>• Big previews are gone; chips keep attention on recognition rather than inspection.</li>
                <li>• Group labels answer “why did I save this?” before “where did it come from?”</li>
                <li>• Tiny metadata lets quantity feel calm instead of bureaucratic.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
