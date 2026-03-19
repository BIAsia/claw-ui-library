const actions = [
  { label: "Donate", value: "Emergency kitchen fund / Rafah network" },
  { label: "Attend", value: "Shanghai solidarity reading / Sat 19:30" },
  { label: "Share", value: "Resource pack + posters + verified updates" },
] as const;

export default function SolidarityBroadsidePage() {
  return (
    <main className="min-h-screen bg-[#120d0b] px-3 py-3 text-[#fff1d8] sm:px-5 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[880px] items-center justify-center">
        <article className="relative aspect-[0.76] w-full overflow-hidden border border-[#f4d588]/25 bg-[#11110f] shadow-[0_34px_90px_rgba(0,0,0,0.46)]">
          <div className="absolute inset-x-0 top-0 h-[14%] bg-[#157347]" />
          <div className="absolute inset-x-0 bottom-0 h-[14%] bg-[#111111]" />
          <div className="absolute inset-y-0 right-0 w-[9%] bg-[#c5312e]" />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,241,216,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,241,216,0.06)_1px,transparent_1px)] [background-size:100%_7.25rem,7.25rem_100%]" />

          <div className="relative z-10 flex h-full flex-col px-[6.5%] py-[6%]">
            <header className="flex items-center justify-between text-[0.74rem] uppercase tracking-[0.22em] text-[#ffeec4]/78">
              <p>coalition bulletin / humanitarian relief network</p>
              <p>statement no. 03</p>
            </header>

            <div className="mt-[8%] max-w-[10ch] text-[clamp(4rem,10vw,7.8rem)] font-black uppercase leading-[0.85] tracking-[-0.08em] text-[#fff3d1]">
              I&apos;m with Palestine.
            </div>

            <p className="mt-8 max-w-[30ch] border-l-4 border-[#f0d16f] pl-4 text-base leading-7 text-[#ffecc2]/82 md:text-lg">
              We refuse distance, euphemism, and delay. This page exists to direct attention, money, and bodies toward relief, witness, and collective action.
            </p>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {actions.map((item) => (
                <div key={item.label} className="border border-[#f4d588]/25 bg-[#201714]/70 p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#f0d16f]">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-[#fff0cf]/84">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto grid gap-5 border-t border-[#f4d588]/20 pt-6 text-sm leading-6 text-[#ffecc2]/78 md:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#f0d16f]">urgent line</p>
                <p className="mt-2">Field kitchens in the south need immediate resupply; verified partner list updated 19 Mar 2026 / 16:40 UTC.</p>
              </div>
              <div className="md:text-right">
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#f0d16f]">public actions</p>
                <p className="mt-2">posters · reading list · local vigils · mutual aid handoff</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
