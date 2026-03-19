const cells = [
  { label: "MUX-01", state: "healthy", note: "record + uplink", tone: "bg-[#78f0a7]/90 text-[#02160c] animate-pulse" },
  { label: "MUX-02", state: "healthy", note: "clean feed", tone: "bg-[#7dd9ff]/90 text-[#03131b]" },
  { label: "MUX-03", state: "degraded", note: "jitter 18ms", tone: "bg-[#ffd970]/90 text-[#1b1300]" },
  { label: "MUX-04", state: "healthy", note: "record armed", tone: "bg-[#9ad6ff]/90 text-[#071520]" },
  { label: "MUX-05", state: "idle", note: "standby route", tone: "bg-[#29354f] text-[#d6e1ff]" },
  { label: "MUX-06", state: "healthy", note: "remote stage", tone: "bg-[#85f5c6]/90 text-[#03160f] animate-pulse" },
  { label: "MUX-07", state: "interrupted", note: "audio drop", tone: "bg-[#ff8d86]/92 text-[#220706] animate-pulse" },
  { label: "MUX-08", state: "healthy", note: "backup iso", tone: "bg-[#83d0ff]/90 text-[#041520]" },
  { label: "MUX-09", state: "idle", note: "ready", tone: "bg-[#2c3752] text-[#d6e1ff]" },
  { label: "MUX-10", state: "degraded", note: "packet loss 2.1%", tone: "bg-[#f7ba61]/90 text-[#211000]" },
  { label: "MUX-11", state: "healthy", note: "low latency", tone: "bg-[#8ce8b6]/90 text-[#03140d]" },
  { label: "MUX-12", state: "healthy", note: "archive write", tone: "bg-[#8bc7ff]/90 text-[#04131f] animate-pulse" },
  { label: "MUX-13", state: "interrupted", note: "black frame", tone: "bg-[#ff7d92]/90 text-[#26060d]" },
  { label: "MUX-14", state: "healthy", note: "venue B", tone: "bg-[#7de7cb]/90 text-[#05160f]" },
  { label: "MUX-15", state: "degraded", note: "clock drift", tone: "bg-[#ffc86e]/90 text-[#271400]" },
  { label: "MUX-16", state: "healthy", note: "clean return", tone: "bg-[#9bd4ff]/90 text-[#05131d] animate-pulse" },
] as const;

export default function RelayMatrixPage() {
  return (
    <main className="min-h-screen bg-[#05070b] px-4 py-4 text-[#d8e2ff] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1380px] rounded-[2rem] border border-white/10 bg-[#0a0f16] p-5 shadow-[0_34px_120px_rgba(0,0,0,0.52)] sm:p-8">
        <header className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#7e95c8]">Relay Matrix / live signal wall</p>
            <h1 className="mt-3 text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-[#eef3ff]">Sixteen channels. Failures visible before the phone rings.</h1>
          </div>
          <div className="max-w-md text-sm leading-7 text-[#9cb0dd]">
            Active cells flicker with presence. Idle lanes dim. Degraded and interrupted routes break color immediately so ops can scan the wall before drilling into logs.
          </div>
        </header>

        <div className="mb-5 grid gap-3 sm:grid-cols-4">
          {[
            ["healthy", "09"],
            ["degraded", "03"],
            ["interrupted", "02"],
            ["recording", "06"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#7e95c8]">{label}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-[#eef3ff]">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {cells.map((cell) => (
            <article key={cell.label} className={`relative min-h-[10.5rem] overflow-hidden rounded-[1.4rem] border border-white/10 p-4 ${cell.tone}`}>
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:100%_2.6rem,2.6rem_100%]" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-[0.66rem] uppercase tracking-[0.24em] opacity-60">channel</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em]">{cell.label}</h2>
                </div>
                <div>
                  <p className="text-[0.66rem] uppercase tracking-[0.24em] opacity-60">{cell.state}</p>
                  <p className="mt-2 text-sm leading-6 opacity-90">{cell.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
