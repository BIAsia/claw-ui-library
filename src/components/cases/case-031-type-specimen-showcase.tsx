const weights = [
  { label: "Thin", value: "100", sample: "Aa" },
  { label: "Light", value: "300", sample: "Aa" },
  { label: "Regular", value: "400", sample: "Aa" },
  { label: "Medium", value: "500", sample: "Aa" },
  { label: "Semibold", value: "600", sample: "Aa" },
  { label: "Bold", value: "700", sample: "Aa" },
  { label: "Black", value: "900", sample: "Aa" },
] as const;

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%&*()";

const useCases = [
  { label: "Headline", size: "72px / 1.0", weight: "700", preview: "Bold\nStatements" },
  { label: "Display", size: "48px / 1.1", weight: "300", preview: "Elegant\nDisplay" },
  { label: "Body", size: "16px / 1.6", weight: "400", preview: "Readable\nParagraph" },
] as const;

export function Case031TypeSpecimenShowcase() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] px-6 py-8 text-[#1a1a1a] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <header className="flex items-end justify-between border-b border-[#1a1a1a]/12 pb-6">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#1a1a1a]/40">
              Type Specimen · 2024
            </p>
            <h1 className="mt-1 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
              Freight Display
            </h1>
          </div>
          <nav className="flex gap-6 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]/40">
            <span>Overview</span>
            <span>Weights</span>
            <span className="text-[#1a1a1a]">Specimen</span>
            <span>License</span>
          </nav>
        </header>

        {/* Hero specimen */}
        <section className="mt-10 overflow-hidden rounded-[1.4rem] bg-[#1a1a1a] px-8 py-10 sm:px-12 sm:py-14">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/30">
            Display · 700 · —4% tracking
          </p>
          <div className="mt-4 text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.88] tracking-[-0.04em] text-white">
            <div>The quick</div>
            <div className="text-white/40">brown fox</div>
            <div>jumps over.</div>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-[0.8rem] leading-[1.7] text-white/40 max-w-[40ch]">
              Freight Display is a contemporary serif designed for editorial use at large sizes. It combines classical proportions with modern optical corrections.
            </p>
            <div className="hidden text-right md:block">
              <p className="text-[2rem] font-thin tracking-[-0.06em] text-white/20">Ff Gg Hh</p>
            </div>
          </div>
        </section>

        {/* Weight scale */}
        <section className="mt-8">
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#1a1a1a]/35">
            Weight Scale
          </p>
          <div className="grid gap-0 divide-y divide-[#1a1a1a]/8">
            {weights.map(({ label, value, sample }) => (
              <div
                key={label}
                className="flex items-center justify-between py-4"
              >
                <div className="flex items-center gap-6">
                  <span className="w-16 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35">
                    {label}
                  </span>
                  <span
                    className="text-[clamp(1.4rem,3vw,2.4rem)] leading-none tracking-[-0.04em]"
                    style={{ fontWeight: value }}
                  >
                    {sample}
                  </span>
                </div>
                <span className="text-[0.65rem] font-mono text-[#1a1a1a]/25">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases + glyph set */}
        <section className="mt-10 grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {useCases.map(({ label, size, weight, preview }) => (
              <div
                key={label}
                className="rounded-[1.1rem] border border-[#1a1a1a]/10 bg-white p-5"
              >
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a]/35">
                  {label}
                </p>
                <div
                  className="mt-3 whitespace-pre-line leading-[1.05] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: weight }}
                >
                  {preview}
                </div>
                <p className="mt-4 font-mono text-[0.6rem] text-[#1a1a1a]/25">{size} · {weight}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[1.1rem] border border-[#1a1a1a]/10 bg-white p-5">
            <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a]/35">
              Glyph Set
            </p>
            <p className="break-all text-[0.9rem] leading-[1.9] tracking-[0.04em] text-[#1a1a1a]/60">
              {glyphs}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
