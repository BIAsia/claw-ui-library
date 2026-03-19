const strips = [
  { label: "Travel", color: "#c8c8c8", width: "51%", offset: "0%", shift: "translateX(10px)", delay: "0ms" },
  { label: "Energy", color: "#ffd400", width: "50%", offset: "49%", shift: "translateX(-8px)", delay: "70ms" },
  { label: "Waste", color: "#9fa216", width: "41%", offset: "0%", shift: "translateX(8px)", delay: "40ms" },
  { label: "Catering", color: "#9a6add", width: "32%", offset: "36%", shift: "translateX(-6px)", delay: "110ms" },
  { label: "Suppliers", color: "#ffffff", width: "32%", offset: "68%", shift: "translateX(7px)", delay: "140ms" },
  { label: "Community", color: "#ff5600", width: "51%", offset: "0%", shift: "translateX(12px)", delay: "120ms" },
  { label: "Conclusion", color: "#f1f1f1", width: "49%", offset: "51%", shift: "translateX(-10px)", delay: "180ms" },
] as const;

function Ribbon({ label, color, width, offset, shift, delay }: (typeof strips)[number]) {
  return (
    <div className="absolute h-12 sm:h-14" style={{ width, left: offset }}>
      <div
        className="flex h-full items-center pl-3 text-[clamp(0.95rem,2vw,1.25rem)] uppercase tracking-[-0.05em] text-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-y-[-1px]"
        style={{
          background: color,
          clipPath: "polygon(0 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 0 100%)",
          transitionDelay: delay,
          ['--hover-shift' as string]: shift,
          transform: "translate3d(0,0,0)",
        }}
      >
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:[transform:var(--hover-shift)]">{label}</span>
      </div>
    </div>
  );
}

export function Case025DadFestivalTabs() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-black sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1280px] items-center justify-center">
        <article className="group relative aspect-[16/9] w-full max-w-[1120px] overflow-hidden bg-[#efefef] shadow-[0_28px_60px_rgba(0,0,0,0.34)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_36px_90px_rgba(0,0,0,0.4)]">
          <div className="flex items-start justify-between px-6 py-5 sm:px-8 sm:py-6">
            <div className="grid h-14 w-14 place-items-center bg-[#ffcf1a] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:polygon(50%_0,95%_25%,95%_75%,50%_100%,5%_75%,5%_25%)] motion-safe:group-hover:rotate-[8deg] motion-safe:group-hover:scale-[1.03]">
              <span className="-rotate-[18deg] text-xl font-bold tracking-[-0.08em]">D&amp;AD</span>
            </div>
            <div className="space-y-2 pt-2">
              <span className="block h-px w-9 origin-right bg-black/75 transition-transform duration-300 motion-safe:group-hover:scale-x-110" />
              <span className="block h-px w-9 origin-right bg-black/75 transition-transform delay-75 duration-300 motion-safe:group-hover:scale-x-110" />
              <span className="block h-px w-9 origin-right bg-black/75 transition-transform delay-150 duration-300 motion-safe:group-hover:scale-x-110" />
            </div>
          </div>

          <div className="px-6 pt-8 text-center sm:px-10 sm:pt-14">
            <h1 className="text-[clamp(2.8rem,7vw,6.4rem)] leading-[0.9] font-light uppercase tracking-[-0.06em] text-transparent transition-[color,text-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [-webkit-text-stroke:1.4px_#1c1c1c] motion-safe:group-hover:text-black/10 motion-safe:group-hover:[text-shadow:0_0_0_rgba(0,0,0,0)]">
              Sustainability
              <br />
              At D&amp;Ad Festival
            </h1>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-[#f2f2f2] pb-1">
            <div className="relative h-[8.6rem] sm:h-[10rem]">
              <div className="absolute inset-x-0 top-0 h-12 sm:h-14"><Ribbon {...strips[0]} /><Ribbon {...strips[1]} /></div>
              <div className="absolute inset-x-0 top-12 h-12 sm:top-14 sm:h-14"><Ribbon {...strips[2]} /><Ribbon {...strips[3]} /><Ribbon {...strips[4]} /></div>
              <div className="absolute inset-x-0 top-24 h-12 sm:top-28 sm:h-14"><Ribbon {...strips[5]} /><Ribbon {...strips[6]} /></div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
