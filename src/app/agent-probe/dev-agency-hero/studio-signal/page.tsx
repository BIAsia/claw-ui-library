const clients = ["Strelka Lab", "Northline Health", "Aster Museum", "Quiet Grid"] as const;
const services = ["Internal tools", "Design systems", "AI product surfaces", "Launch engineering"] as const;
const proof = [
  { label: "Avg. prototype cycle", value: "12 days" },
  { label: "Senior operators", value: "08" },
  { label: "Delivery model", value: "design + code" },
] as const;

export default function StudioSignalPage() {
  return (
    <main className="min-h-screen bg-[#ede4d2] px-4 py-4 text-[#171512] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1280px] rounded-[34px] border border-[#171512]/10 bg-[#f7f1e6] p-5 shadow-[0_32px_84px_rgba(34,24,12,0.12)] md:p-7">
        <header className="flex items-center justify-between gap-4 border-b border-[#171512]/10 pb-5 text-[0.72rem] uppercase tracking-[0.22em] text-[#171512]/54">
          <p>studio signal / technical practice</p>
          <p>taking Q2 delivery partners</p>
        </header>

        <div className="grid gap-8 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <section>
            <p className="text-[0.74rem] uppercase tracking-[0.24em] text-[#171512]/48">credibility-first technical studio</p>
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3.2rem,6vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.09em]">
              We build the product surfaces that complex teams actually ship.
            </h1>
            <p className="mt-6 max-w-[34rem] text-base leading-8 text-[#171512]/74 md:text-lg">
              Studio Signal pairs product design with front-end delivery for internal tools, ambitious launches, and interfaces that need technical credibility on day one.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex rounded-full bg-[#171512] px-5 py-3 text-[0.74rem] uppercase tracking-[0.2em] text-[#f7f1e6]" href="#contact">
                Book intro call
              </a>
              <a className="inline-flex rounded-full border border-[#171512]/16 px-5 py-3 text-[0.74rem] uppercase tracking-[0.2em] text-[#171512]/70" href="#work">
                See selected builds
              </a>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {proof.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-[#171512]/10 bg-white/72 p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#171512]/44">{item.label}</p>
                  <p className="mt-4 text-2xl font-semibold tracking-[-0.06em]">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="grid gap-4">
            <div className="rounded-[28px] border border-[#171512]/10 bg-[#171512] p-5 text-[#f8f2e9]">
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/48">what we do</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.map((item) => (
                  <span key={item} className="rounded-full border border-white/12 px-3 py-2 text-sm text-white/78">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-[24rem] text-sm leading-6 text-white/68">Small senior team. Tight scopes. We enter where product clarity and implementation craft need to converge fast.</p>
            </div>

            <div className="rounded-[28px] border border-[#171512]/10 bg-white/74 p-5">
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#171512]/48">recent contexts</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#171512]/76">
                {clients.map((item) => (
                  <li key={item} className="flex items-center justify-between gap-4 border-b border-[#171512]/8 pb-3 last:border-b-0 last:pb-0">
                    <span>{item}</span>
                    <span className="text-[#171512]/42">design + code</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="contact" className="rounded-[28px] border border-[#171512]/10 bg-[#d8c5a2] p-5 text-[#171512]">
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#171512]/50">engagement path</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.06em]">hello@studiosignal.dev</p>
              <p className="mt-3 text-sm leading-6 text-[#171512]/74">Send product stage, constraints, and target date. We reply with fit, senior operator pairing, and sprint proposal.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
