const manifestoLines = [
  "Design is",
  "not a service —",
  "it is a",
  "position.",
] as const;

const credits = [
  ["Direction", "Studio Noir"],
  ["Typography", "Freight Display"],
  ["Year", "2024"],
  ["Edition", "No. 03"],
] as const;

export function Case030EditorialManifesto() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] px-6 py-6 text-white sm:px-10 lg:px-16">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-[1100px] flex-col">
        {/* Header */}
        <header className="flex items-start justify-between border-b border-white/15 pb-5">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/40">
            Studio Noir
          </div>
          <nav className="flex gap-8 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/40">
            <span>Work</span>
            <span>Studio</span>
            <span className="text-white/80">Manifesto</span>
            <span>Contact</span>
          </nav>
        </header>

        {/* Main editorial block */}
        <div className="flex flex-1 flex-col justify-center py-16">
          <div className="relative">
            {/* Issue label */}
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px w-12 bg-white/30" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/40">
                Manifesto — Issue 03
              </span>
            </div>

            {/* Giant text */}
            <div className="space-y-[-0.06em]">
              {manifestoLines.map((line, i) => (
                <div
                  key={i}
                  className="overflow-hidden"
                >
                  <h1
                    className="text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-white"
                    style={{
                      fontStyle: i === 3 ? "italic" : "normal",
                      color: i === 3 ? "rgba(255,255,255,0.55)" : "white",
                    }}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            {/* Side annotation */}
            <div className="absolute right-0 top-0 hidden max-w-[14rem] text-right lg:block">
              <p className="text-[0.75rem] leading-[1.6] text-white/35">
                A statement on the role of design practice in contemporary culture — not aesthetic, but ethical.
              </p>
            </div>
          </div>

          {/* Divider + body text */}
          <div className="mt-16 grid gap-10 border-t border-white/12 pt-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr_1fr]">
            <p className="text-[0.85rem] leading-[1.8] text-white/50 lg:max-w-[32ch]">
              Every choice made in the studio — type size, spacing, palette, medium — is a declaration. There is no neutral design. There is only design that knows itself and design that does not.
            </p>
            <p className="text-[0.85rem] leading-[1.8] text-white/35">
              We refuse the language of deliverables. We speak instead of commitments. The project ends when the idea is honest, not when the deadline arrives.
            </p>
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Footer credits */}
        <footer className="grid grid-cols-2 gap-6 border-t border-white/12 pt-6 sm:grid-cols-4">
          {credits.map(([label, value]) => (
            <div key={label}>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/25">
                {label}
              </p>
              <p className="mt-1 text-[0.8rem] font-semibold text-white/60">{value}</p>
            </div>
          ))}
        </footer>
      </section>
    </main>
  );
}
