export function Case001Beginning() {
  return (
    <div className="mx-auto w-full max-w-[980px]">
      <div className="rounded-[2rem] border border-white/10 bg-[#050505] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.5)] md:p-5">
        <div className="rounded-[1.5rem] border border-white/8 bg-black p-3 md:p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3 text-[10px] uppercase tracking-[0.28em] text-white/38 md:mb-5 md:pb-4">
            <span>case 001</span>
            <span>reconstructed from source poster</span>
          </div>

          <div className="relative mx-auto aspect-[636/899] w-full max-w-[636px] overflow-hidden rounded-[1.5rem] bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#101010_0%,#060606_42%,#000_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_22%,transparent_78%,rgba(255,255,255,0.02))]" />

            {/* Accessibility: preserve the poster copy as real text even though the visual is source-derived. */}
            <div className="sr-only">
              <p>always remember the beginning</p>
              <p>always remember the beginning</p>
              <p>always remember the Beginning</p>
              <p>always remember the beginning</p>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/reference/case-001-beginning/assets/foreground-mask.png"
              alt="Always remember the beginning poster reconstruction"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
