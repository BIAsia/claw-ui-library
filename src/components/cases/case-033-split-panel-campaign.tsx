const stats = [
  { value: "240K", label: "Attendees" },
  { value: "3", label: "Days" },
  { value: "180+", label: "Speakers" },
  { value: "62", label: "Countries" },
] as const;

const agenda = [
  { time: "09:00", title: "Opening Ceremony", speaker: "Main Stage" },
  { time: "10:30", title: "The Future of Human Interfaces", speaker: "Dr. A. Reeves" },
  { time: "13:00", title: "Design at Scale", speaker: "Studio Meridian" },
  { time: "15:30", title: "Panel: Ethics in AI", speaker: "Various" },
  { time: "18:00", title: "Closing Keynote", speaker: "W. Tanaka" },
] as const;

export function Case033SplitPanelCampaign() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — bold identity panel */}
        <section className="relative flex flex-col justify-between overflow-hidden bg-[#e8ff47] px-8 py-10 text-[#0f0f0f] sm:px-12">
          {/* Noise overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg viewBox%3D%220 0 200 200%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter id%3D%22n%22%3E%3CfeTurbulence type%3D%22fractalNoise%22 baseFrequency%3D%220.9%22 numOctaves%3D%224%22 stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect width%3D%22100%25%22 height%3D%22100%25%22 filter%3D%22url(%23n)%22/%3E%3C/svg%3E')]" />

          <header className="flex items-start justify-between">
            <div className="text-[0.68rem] font-black uppercase tracking-[0.22em]">
              Design&nbsp;Summit
            </div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] opacity-50">
              Vol. VI · 2024
            </div>
          </header>

          <div className="py-12">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] opacity-50">
              June 14–16 · Berlin
            </p>
            <h1 className="mt-3 text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.05em]">
              Make
              <br />
              Things
              <br />
              <span className="opacity-30">Matter.</span>
            </h1>
            <p className="mt-8 max-w-[28ch] text-[0.88rem] leading-[1.65] opacity-60">
              Three days of talks, workshops, and conversations that push the boundaries of what design can be.
            </p>
            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0f0f0f] px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#e8ff47]">
              Register Now
              <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-4 gap-2 border-t-2 border-[#0f0f0f]/15 pt-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-[clamp(1.4rem,2.5vw,2rem)] font-black leading-none tracking-[-0.05em]">
                  {value}
                </p>
                <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] opacity-50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Right — dark programme panel */}
        <section className="flex flex-col px-8 py-10 sm:px-12">
          <header className="flex items-center justify-between border-b border-white/10 pb-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/40">
              Programme
            </p>
            <div className="flex gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/30">
              <span>Day 1</span>
              <span className="text-white/70">Day 2</span>
              <span>Day 3</span>
            </div>
          </header>

          <div className="mt-6 flex flex-1 flex-col justify-between gap-3">
            {agenda.map(({ time, title, speaker }) => (
              <div
                key={time}
                className="group flex items-start gap-5 rounded-[0.9rem] border border-white/6 bg-white/[0.03] px-5 py-4 transition-colors hover:bg-white/[0.06]"
              >
                <span className="mt-0.5 w-14 shrink-0 font-mono text-[0.72rem] text-white/30">
                  {time}
                </span>
                <div className="flex-1">
                  <p className="text-[0.88rem] font-semibold leading-tight tracking-[-0.02em] text-white/90">
                    {title}
                  </p>
                  <p className="mt-1 text-[0.72rem] text-white/35">{speaker}</p>
                </div>
                <span className="mt-0.5 text-white/20 transition-colors group-hover:text-white/50">→</span>
              </div>
            ))}
          </div>

          <footer className="mt-8 border-t border-white/10 pt-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/25">
              Venue · Tempodrom, Berlin
            </p>
            <p className="mt-1 text-[0.78rem] text-white/40">
              All sessions available on livestream for remote attendees.
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}
