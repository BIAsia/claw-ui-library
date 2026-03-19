const phases = [
  { name: "Research", window: "Mar 3–10", color: "bg-[#d8d1c1]", tasks: ["artifact pull", "interview map", "rights sweep"] },
  { name: "Fabrication", window: "Mar 11–22", color: "bg-[#cfb795]", tasks: ["plinth drawings", "vinyl proofs", "case build"] },
  { name: "Install", window: "Mar 23–27", color: "bg-[#a38c70]", tasks: ["wayfinding", "light focus", "sound check"] },
  { name: "Press", window: "Mar 28–31", color: "bg-[#4f5d73]", tasks: ["walkthrough", "photo set", "opening notes"] },
] as const;

const milestones = [
  { label: "Narrative lock", date: "Mar 09", lane: "top", left: "18%" },
  { label: "Fabrication sign-off", date: "Mar 18", lane: "bottom", left: "47%" },
  { label: "Press preview", date: "Mar 29", lane: "top", left: "84%" },
] as const;

export default function BuildChroniclePage() {
  return (
    <main className="min-h-screen bg-[#f1ede5] px-4 py-5 text-[#171717] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1120px] rounded-[32px] border border-[#171717]/10 bg-[#faf6ee] p-5 shadow-[0_28px_80px_rgba(33,26,18,0.12)] md:p-7">
        <header className="flex flex-col gap-6 border-b border-[#171717]/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#171717]/50">tablet review board / museum exhibition</p>
            <h1 className="mt-3 text-[clamp(2.5rem,5vw,4.4rem)] font-semibold tracking-[-0.08em]">Build Chronicle</h1>
            <p className="mt-3 max-w-[36rem] text-sm leading-6 text-[#171717]/72">Contained chronology for the exhibition launch window: sequence first, milestones distinct, copy kept operational.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl border border-[#171717]/10 bg-white/70 px-4 py-3"><p className="text-[#171717]/48">Launch</p><p className="mt-1 font-medium">31 Mar 2026</p></div>
            <div className="rounded-2xl border border-[#171717]/10 bg-white/70 px-4 py-3"><p className="text-[#171717]/48">Owner</p><p className="mt-1 font-medium">Exhibit Ops</p></div>
            <div className="rounded-2xl border border-[#171717]/10 bg-white/70 px-4 py-3"><p className="text-[#171717]/48">Risk</p><p className="mt-1 font-medium">Lighting lead</p></div>
          </div>
        </header>

        <section className="mt-7 overflow-hidden rounded-[28px] border border-[#171717]/10 bg-[#f3efe6]">
          <div className="grid border-b border-[#171717]/10 md:grid-cols-[220px_repeat(4,minmax(0,1fr))]">
            <div className="border-b border-[#171717]/10 p-4 md:border-b-0 md:border-r">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#171717]/46">time axis</p>
              <p className="mt-3 text-lg font-medium tracking-[-0.04em]">March build window</p>
            </div>
            {phases.map((phase) => (
              <div key={phase.name} className="border-b border-[#171717]/10 p-4 last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#171717]/44">phase</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.06em]">{phase.name}</p>
                <p className="mt-1 text-sm text-[#171717]/62">{phase.window}</p>
              </div>
            ))}
          </div>

          <div className="relative p-5 md:p-6">
            <div className="relative mb-10 h-24 rounded-[22px] border border-[#171717]/10 bg-white/70">
              <div className="grid h-full overflow-hidden rounded-[22px] md:grid-cols-4">
                {phases.map((phase) => (
                  <div key={phase.name} className={`${phase.color} border-b border-[#171717]/10 p-4 last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0`}>
                    <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#171717]/54">phase band</p>
                    <p className="mt-2 text-sm leading-6 text-[#171717]/76">{phase.tasks.join(" · ")}</p>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-[#171717]/15" />
              {milestones.map((milestone) => (
                <div
                  key={milestone.label}
                  className={`absolute ${milestone.lane === "top" ? "top-[-1.25rem]" : "bottom-[-1.25rem]"} w-32 -translate-x-1/2`}
                  style={{ left: milestone.left }}
                >
                  <div className="rounded-2xl border border-[#171717]/12 bg-[#171717] px-3 py-2 text-[#f7f2ea] shadow-[0_10px_24px_rgba(23,23,23,0.16)]">
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/56">{milestone.date}</p>
                    <p className="mt-1 text-sm leading-5">{milestone.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {phases.map((phase) => (
                <article key={phase.name} className="rounded-[24px] border border-[#171717]/10 bg-white/78 p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#171717]/46">checkpoints</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.05em]">{phase.name}</h2>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#171717]/74">
                    {phase.tasks.map((task) => (
                      <li key={task}>• {task}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
