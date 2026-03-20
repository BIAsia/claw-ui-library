const categories = [
  {
    id: "01",
    title: "Brand Identity",
    count: 48,
    tags: ["Logo", "Guidelines", "Color", "Typography"],
    featured: "Meridian Studio · 2024",
  },
  {
    id: "02",
    title: "Editorial Design",
    count: 34,
    tags: ["Print", "Layout", "Spread", "Magazine"],
    featured: "Norder Press · 2023",
  },
  {
    id: "03",
    title: "Motion & Interaction",
    count: 27,
    tags: ["Animation", "Prototype", "UI Motion"],
    featured: "Loop Studio · 2024",
  },
  {
    id: "04",
    title: "Spatial & Signage",
    count: 19,
    tags: ["Wayfinding", "Environmental", "3D"],
    featured: "Atelier Forms · 2023",
  },
  {
    id: "05",
    title: "Digital Products",
    count: 61,
    tags: ["App", "Dashboard", "Web", "System"],
    featured: "Pixel Dept. · 2024",
  },
  {
    id: "06",
    title: "Packaging",
    count: 22,
    tags: ["Label", "Structure", "Material"],
    featured: "Fold Studio · 2023",
  },
] as const;

const filters = ["All", "2024", "2023", "Print", "Digital", "Motion"] as const;

export function Case034DirectoryIndexSurface() {
  return (
    <main className="min-h-screen bg-[#fafaf8] px-6 py-8 text-[#1c1c1a] sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#1c1c1a]/35">
                Design Archive
              </p>
              <h1 className="mt-2 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                Work Index
              </h1>
            </div>
            <div className="hidden text-right md:block">
              <p className="text-[0.72rem] text-[#1c1c1a]/40">211 projects</p>
              <p className="mt-0.5 text-[0.72rem] text-[#1c1c1a]/25">Last updated March 2024</p>
            </div>
          </div>

          {/* Filter strip */}
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`rounded-full px-4 py-1.5 text-[0.72rem] font-semibold tracking-[-0.01em] transition-colors ${
                  i === 0
                    ? "bg-[#1c1c1a] text-[#fafaf8]"
                    : "border border-[#1c1c1a]/12 bg-transparent text-[#1c1c1a]/50 hover:border-[#1c1c1a]/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </header>

        {/* Directory list */}
        <div className="divide-y divide-[#1c1c1a]/8">
          {categories.map(({ id, title, count, tags, featured }) => (
            <div
              key={id}
              className="group grid cursor-pointer items-center gap-4 py-6 transition-colors hover:bg-[#1c1c1a]/[0.018] sm:grid-cols-[2.5rem_1fr_auto] md:grid-cols-[2.5rem_1fr_1fr_auto]"
            >
              {/* Number */}
              <span className="font-mono text-[0.65rem] text-[#1c1c1a]/25">{id}</span>

              {/* Title */}
              <div>
                <h2 className="text-[clamp(1.1rem,2vw,1.4rem)] font-semibold leading-tight tracking-[-0.03em] text-[#1c1c1a] transition-colors group-hover:text-[#1c1c1a]">
                  {title}
                </h2>
                <p className="mt-1 text-[0.7rem] text-[#1c1c1a]/35">{featured}</p>
              </div>

              {/* Tags */}
              <div className="hidden flex-wrap gap-1.5 md:flex">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[#1c1c1a]/10 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#1c1c1a]/35"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Count + arrow */}
              <div className="flex items-center gap-4">
                <span className="text-[0.78rem] font-semibold tabular-nums text-[#1c1c1a]/40">
                  {count} projects
                </span>
                <span className="text-[#1c1c1a]/20 transition-all group-hover:translate-x-1 group-hover:text-[#1c1c1a]/60">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <footer className="mt-10 border-t border-[#1c1c1a]/8 pt-6">
          <p className="text-[0.68rem] text-[#1c1c1a]/25">
            Archive maintained by the editorial team. New submissions reviewed quarterly.
          </p>
        </footer>
      </div>
    </main>
  );
}
