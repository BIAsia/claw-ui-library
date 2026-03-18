const strips = [
  { label: "Travel", color: "#c8c8c8", width: "51%", offset: "0%" },
  { label: "Energy", color: "#ffd400", width: "50%", offset: "49%" },
  { label: "Waste", color: "#9fa216", width: "41%", offset: "0%" },
  { label: "Catering", color: "#9a6add", width: "32%", offset: "36%" },
  { label: "Suppliers", color: "#ffffff", width: "32%", offset: "68%" },
  { label: "Community", color: "#ff5600", width: "51%", offset: "0%" },
  { label: "Conclusion", color: "#f1f1f1", width: "49%", offset: "51%" },
] as const;

function Ribbon({ label, color, width, offset }: (typeof strips)[number]) {
  return (
    <div
      className="absolute h-12 sm:h-14"
      style={{ width, left: offset }}
    >
      <div
        className="flex h-full items-center pl-3 text-[clamp(0.95rem,2vw,1.25rem)] uppercase tracking-[-0.05em] text-black"
        style={{
          background: color,
          clipPath: "polygon(0 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 0 100%)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function Case025DadFestivalTabs() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-black sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1280px] items-center justify-center">
        <article className="relative aspect-[16/9] w-full max-w-[1120px] overflow-hidden bg-[#efefef] shadow-[0_28px_60px_rgba(0,0,0,0.34)]">
          <div className="flex items-start justify-between px-6 py-5 sm:px-8 sm:py-6">
            <div className="grid h-14 w-14 place-items-center bg-[#ffcf1a] [clip-path:polygon(50%_0,95%_25%,95%_75%,50%_100%,5%_75%,5%_25%)]">
              <span className="-rotate-[18deg] text-xl font-bold tracking-[-0.08em]">D&amp;AD</span>
            </div>
            <div className="space-y-2 pt-2">
              <span className="block h-px w-9 bg-black/75" />
              <span className="block h-px w-9 bg-black/75" />
              <span className="block h-px w-9 bg-black/75" />
            </div>
          </div>

          <div className="px-6 pt-8 text-center sm:px-10 sm:pt-14">
            <h1 className="text-[clamp(2.8rem,7vw,6.4rem)] leading-[0.9] font-light uppercase tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.4px_#1c1c1c]">
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
