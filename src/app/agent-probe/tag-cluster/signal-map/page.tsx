const clusters = [
  {
    name: "audience hooks",
    tone: "bg-[#efe5c5] border-[#a36d2e]/20 text-[#54331a]",
    items: ["feel capable fast", "ditch blank-page panic", "ship with less committee", "show progress visually"],
  },
  {
    name: "credibility claims",
    tone: "bg-[#d9e6cf] border-[#4f7450]/20 text-[#214029]",
    items: ["real launch assets", "used by studio teams", "templates with voice", "not another prompt pack"],
  },
  {
    name: "emotional framings",
    tone: "bg-[#dce0f2] border-[#5b5f96]/20 text-[#2a2d55]",
    items: ["look prepared", "earn the room", "make the drop feel expensive", "confidence as a tool"],
  },
  {
    name: "offer shapes",
    tone: "bg-[#f0d6d2] border-[#90564d]/20 text-[#5b2b25]",
    items: ["member pass", "season drop", "launch starter vault", "creative ops booster"],
  },
] as const;

export default function SignalMapPage() {
  return (
    <main className="min-h-screen bg-[#f4ecdf] px-4 py-4 text-[#211914] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1320px] rounded-[2rem] border border-[#211914]/10 bg-[#fbf7f0] p-5 shadow-[0_32px_90px_rgba(59,43,30,0.12)] sm:p-8">
        <header className="grid gap-4 border-b border-[#211914]/10 pb-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#7a6759]">Signal Map / campaign language board</p>
            <h1 className="mt-3 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.08em]">Map the phrases before you map the funnel.</h1>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#5f4f43] sm:text-base">
            This board clusters how the offer should sound across segments, moods, and proof cues. The point is overlap: what language keeps recurring, where it bends, and which phrases deserve the headline slot.
          </p>
        </header>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="space-y-4">
            <div className="rounded-[1.4rem] border border-[#211914]/10 bg-white/70 p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#7a6759]">active lens</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "creator tools",
                  "low-lift confidence",
                  "premium energy",
                  "launch readiness",
                  "team use",
                  "anti-generic",
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-[#211914]/10 bg-[#fbf7f0] px-3 py-1.5 text-[0.75rem] tracking-[-0.02em] text-[#4f4035]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-[#211914]/10 bg-[#211914] p-5 text-[#f8f1e7]">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#d6bea8]">reading cue</p>
              <p className="mt-4 text-base leading-7 text-[#efe1d2]">
                If a chip could sit in both “credibility” and “emotion,” that is probably headline material. If it only fits one small cluster, it belongs in support copy.
              </p>
            </div>
          </aside>

          <div className="grid gap-5 md:grid-cols-2">
            {clusters.map((cluster) => (
              <article key={cluster.name} className={`rounded-[1.6rem] border p-5 ${cluster.tone}`}>
                <p className="text-[0.68rem] uppercase tracking-[0.24em] opacity-55">cluster</p>
                <h2 className="mt-2 text-2xl font-medium tracking-[-0.05em]">{cluster.name}</h2>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {cluster.items.map((item) => (
                    <span key={item} className="rounded-full border border-current/10 bg-white/50 px-3 py-2 text-sm tracking-[-0.02em] shadow-[0_2px_0_rgba(0,0,0,0.03)]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
