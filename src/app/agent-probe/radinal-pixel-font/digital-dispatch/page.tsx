const ledger = [
  ["build", "01"],
  ["doors", "19:30"],
  ["play", "20:00"],
  ["drop", "22:45"],
] as const;

const modules = ["patch-poems", "micro-arcade", "shader scraps", "tool demos", "glitch recital", "tiny binaries"] as const;

export default function RadinalPixelFontDigitalDispatchPage() {
  return (
    <main className="min-h-screen bg-[#060606] px-3 py-3 text-[#f5f3ce] sm:px-5 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[860px] items-center justify-center">
        <article className="relative aspect-[0.73] w-full overflow-hidden border-[6px] border-[#f5f3ce] bg-[#111111] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.58)] sm:p-6">
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,244,135,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,244,135,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="absolute inset-0 opacity-[0.24] [background-image:radial-gradient(circle_at_14%_12%,rgba(255,119,0,0.38),transparent_18%),radial-gradient(circle_at_84%_20%,rgba(93,254,255,0.28),transparent_16%),radial-gradient(circle_at_78%_86%,rgba(255,223,43,0.24),transparent_18%)]" />

          <div className="relative z-10 flex h-full flex-col border-[3px] border-[#f5f3ce] bg-[#0d0d0d]/90 p-3 sm:p-4">
            <div className="grid grid-cols-[1fr_auto] gap-4 border-[3px] border-[#f5f3ce] bg-[#151515] p-3 text-[10px] uppercase leading-none tracking-[0.25em] text-[#f5f3ce] sm:p-4 sm:text-xs">
              <div>
                <p className="font-mono text-[#82f7ff]">DIGITAL DISPATCH // ISSUE 01</p>
                <p className="mt-2 font-mono text-[#f5f3ce]">PIXEL TYPOGRAPHY BULLETIN / LIVE SOFTWARE EDITION</p>
              </div>
              <div className="text-right font-mono text-[#ffdc4a]">
                <p>19 JUN 2026</p>
                <p className="mt-2 text-[#f5f3ce]">NODE HALL 03 / ONLINE RELAY</p>
              </div>
            </div>

            <div className="mt-4 grid flex-1 gap-4 lg:grid-cols-[1.45fr_0.7fr]">
              <div className="flex flex-col gap-4">
                <div className="border-[3px] border-[#f5f3ce] bg-[#ff5c22] px-3 py-4 text-[#111111] sm:px-5 sm:py-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em]">PUBLIC CODE-ART POSTER</p>
                  <h1 className="mt-4 font-mono text-[clamp(2.5rem,8vw,5.8rem)] uppercase leading-[0.82] tracking-[-0.14em] text-[#111111] [text-shadow:3px_3px_0_rgba(245,243,206,0.8)] sm:[text-shadow:5px_5px_0_rgba(245,243,206,0.8)]">
                    DIGITAL
                    <br />
                    DISPATCH
                  </h1>
                  <p className="mt-4 max-w-[34ch] font-mono text-[0.8rem] uppercase leading-5 tracking-[0.14em] text-[#111111]/88 sm:text-sm">
                    Patch Notes Live 01 gathers tiny engines, playable poems, shader fragments, and hot-swapped tools for one bitmap night release.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr]">
                  <div className="border-[3px] border-[#f5f3ce] bg-[#1b1b1b] p-3 sm:p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#82f7ff]">lineup modules</p>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[0.78rem] font-mono uppercase leading-4 tracking-[0.12em] text-[#f5f3ce]">
                      {modules.map((module, index) => (
                        <div key={module} className="border-2 border-[#f5f3ce] bg-[#111111] px-2 py-3">
                          <span className="text-[#ffdc4a]">0{index + 1}</span>
                          <p className="mt-2">{module}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-[3px] border-[#f5f3ce] bg-[#82f7ff] p-3 text-[#0a0a0a] sm:p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em]">host node</p>
                    <p className="mt-3 font-mono text-[clamp(1.2rem,3vw,2rem)] uppercase leading-none tracking-[-0.12em]">Raster Union</p>
                    <p className="mt-4 font-mono text-sm uppercase leading-5 tracking-[0.12em]">
                      Talk bursts + live patch queue
                      <br />
                      Ticket drop 18:00 UTC
                      <br />
                      Replay seed bundle after stream
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="border-[3px] border-[#f5f3ce] bg-[#111111] p-3 sm:p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ffdc4a]">run ledger</p>
                  <div className="mt-3 space-y-2 font-mono text-xs uppercase tracking-[0.18em] text-[#f5f3ce] sm:text-sm">
                    {ledger.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between border-2 border-[#f5f3ce] px-2 py-3">
                        <span>{label}</span>
                        <span className="text-[#82f7ff]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 border-[3px] border-[#f5f3ce] bg-[#111111] p-3 sm:p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ffdc4a]">guest upload</p>
                  <div className="mt-3 border-[3px] border-dashed border-[#f5f3ce] bg-[#161616] p-3">
                    <p className="font-mono text-[clamp(1.2rem,2.8vw,2rem)] uppercase leading-none tracking-[-0.12em] text-[#f5f3ce]">6 artists</p>
                    <p className="mt-3 font-mono text-xs uppercase leading-5 tracking-[0.14em] text-[#f5f3ce]/84">
                      Ada J. — terminal folk loops
                      <br />
                      Wei Noor — anti-menu toy
                      <br />
                      Lito Bloom — error-sonnet compiler
                    </p>
                  </div>
                  <div className="mt-4 bg-[#ffdc4a] px-3 py-4 font-mono text-[0.8rem] uppercase leading-5 tracking-[0.14em] text-[#111111]">
                    Bring a keyboard, a weird build, or a broken controller. Shared screen slots stay under 7 minutes.
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-4 grid gap-3 border-[3px] border-[#f5f3ce] bg-[#111111] p-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#f5f3ce] sm:grid-cols-[1.3fr_0.7fr_0.8fr] sm:p-4">
              <p>archive seed: dispatch.radinal.cc/01</p>
              <p className="text-[#82f7ff]">bitmap poster / print-safe / share-ready</p>
              <p className="text-right text-[#ffdc4a]">free entry // 240 seats</p>
            </footer>
          </div>
        </article>
      </section>
    </main>
  );
}
