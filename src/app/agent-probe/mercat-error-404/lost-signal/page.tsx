import Link from "next/link";

const recoveryLinks = [
  { label: "Return to archive map", href: "/agent-probe/mercat-error-404" },
  { label: "Join waitlist bulletin", href: "#waitlist" },
] as const;

const notes = [
  "Edition 12 withdrew at 16:40 after the final print left the stall.",
  "The route you followed points to a closed listing, expired ticket window, or archive fragment that no longer trades publicly.",
  "Mercat keeps the sign visible so absence is legible, not hidden.",
] as const;

export default function MercatError404LostSignalPage() {
  return (
    <main className="min-h-screen bg-[#120808] px-3 py-3 text-[#f6e7d2] sm:px-5 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[920px] items-center justify-center">
        <article className="group relative aspect-[0.73] w-full overflow-hidden rounded-[28px] border border-[#f0c697]/20 bg-[#b13b24] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,236,205,0.22),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(88,12,8,0.35),transparent_26%),linear-gradient(135deg,rgba(38,6,6,0.12),transparent_42%)]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(246,231,210,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(246,231,210,0.32)_1px,transparent_1px)] [background-size:100%_11rem,25%_100%]" />
          <div className="absolute left-[7%] top-[6.5%] h-[76%] w-px bg-[#f5d7b4]/40" />
          <div className="absolute right-[7%] top-[6.5%] h-[76%] w-px bg-[#f5d7b4]/40" />
          <div className="absolute inset-x-[7%] top-[13.5%] h-px bg-[#f5d7b4]/55" />
          <div className="absolute inset-x-[7%] bottom-[17%] h-px bg-[#f5d7b4]/40" />
          <div className="absolute right-[11%] top-[18%] h-[46%] w-[22%] border border-dashed border-[#f5d7b4]/55 bg-[#7a2111]/35" />
          <div className="absolute right-[14.5%] top-[21%] h-[40%] w-[16%] border border-[#f5d7b4]/60" />
          <div className="absolute right-[13.5%] top-[22.5%] flex w-[18%] flex-col gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-[#ffe7c6]/78">
            <span>mercat archive</span>
            <span>stall closed</span>
            <span>route withdrawn</span>
            <span>see left field</span>
          </div>

          <div className="relative z-10 flex h-full flex-col px-[7%] py-[6.4%]">
            <header className="flex items-start justify-between gap-6 border-b border-[#f5d7b4]/55 pb-[3.2%]">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[#ffe6c5]/74">Mercat / exception broadside</p>
                <p className="mt-2 text-[0.8rem] uppercase tracking-[0.18em] text-[#ffe6c5]/56">closed stall notice / route unavailable / edition withdrawn</p>
              </div>
              <Link href="/agent-probe" className="text-[0.72rem] uppercase tracking-[0.26em] text-[#fff0d6]/76 transition hover:text-white">
                agent probe ↗
              </Link>
            </header>

            <div className="grid flex-1 grid-cols-[1.15fr_0.85fr] gap-6 pt-[4.4%]">
              <div className="flex flex-col">
                <p className="text-[clamp(1rem,1.3vw,1.1rem)] uppercase tracking-[0.42em] text-[#ffe7c6]/72">Lost Signal</p>
                <h1 className="mt-[1.8%] max-w-[7ch] text-[clamp(5.8rem,13vw,10.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.08em] text-[#fff1dd]">
                  404
                  <br />
                  stall
                  <br />
                  closed
                </h1>
                <p className="mt-[4.8%] max-w-[34ch] text-[clamp(0.98rem,1.35vw,1.14rem)] leading-7 text-[#ffe6cb]/85">
                  The page you requested is no longer on the floor. Mercat treats missing inventory like a posted event: visible, dated, and signed off instead of quietly erased.
                </p>

                <div className="mt-[6.4%] flex flex-wrap gap-3">
                  {recoveryLinks.map((item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={index === 0 ? "inline-flex items-center border border-[#fff0d6]/65 bg-[#fff0d6] px-4 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-[#7c2513] transition hover:-translate-y-0.5" : "inline-flex items-center border border-[#fff0d6]/35 px-4 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-[#fff0d6]/82 transition hover:border-[#fff0d6]/70 hover:text-white"}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pt-[10%]">
                  <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#ffe7c6]/62">Exception notes</p>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-[#fff0da]/82">
                    {notes.map((item, index) => (
                      <div key={item} className="grid grid-cols-[auto_1fr] gap-3 border-t border-[#f5d7b4]/24 pt-3 first:border-t-0 first:pt-0">
                        <span className="text-[#fff0d6]/48">0{index + 1}</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between border-l border-[#f5d7b4]/35 pl-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ffe6c5]/58">Route manifest</p>
                  <div className="mt-4 space-y-4 text-sm leading-6 text-[#ffe8ce]/82">
                    <div>
                      <p className="text-[#fff0d6]/54">Requested listing</p>
                      <p className="mt-1 text-lg font-medium tracking-[-0.03em] text-[#fff2df]">/edition/12/night-vellum</p>
                    </div>
                    <div>
                      <p className="text-[#fff0d6]/54">Current state</p>
                      <p className="mt-1 text-lg font-medium tracking-[-0.03em] text-[#fff2df]">Withdrawn after final sale</p>
                    </div>
                    <div>
                      <p className="text-[#fff0d6]/54">Archive release</p>
                      <p className="mt-1 text-lg font-medium tracking-[-0.03em] text-[#fff2df]">Returns in June bulletin</p>
                    </div>
                  </div>
                </div>

                <div id="waitlist" className="border border-[#f5d7b4]/28 bg-[#6d1a10]/35 p-4 backdrop-blur-sm transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-y-[-4px]">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#ffe6c5]/56">Waitlist bulletin</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.08em] text-[#fff1dc]">287</p>
                  <p className="mt-2 max-w-[18ch] text-sm leading-6 text-[#ffe8cf]/78">Collectors asking for reissue notice, archive preview, and substitute routes.</p>
                </div>

                <footer className="text-[0.72rem] uppercase tracking-[0.26em] text-[#ffe7c6]/58">
                  Mercat keeps the sign up so the absence has a witness.
                </footer>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
