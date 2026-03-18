function Poster({
  bg,
  accentA,
  accentB,
  accentC,
  titleColor = "#111",
}: {
  bg: string;
  accentA: string;
  accentB: string;
  accentC: string;
  titleColor?: string;
}) {
  return (
    <article className="relative aspect-[0.67] overflow-hidden px-6 py-5" style={{ background: bg }}>
      <div className="absolute left-[34%] top-[3%] h-[28%] w-[31%] -rotate-[5deg]" style={{ background: accentA }} />
      <div className="absolute left-[52%] top-[34%] h-[32%] w-[22%] rotate-[11deg]" style={{ background: accentB }} />
      <div className="absolute left-[17%] top-[55%] h-[24%] w-[28%] -rotate-[18deg]" style={{ background: accentC }} />
      <div className="absolute left-[48%] top-[15%] h-[20%] w-[22%] bg-black" />
      <div className="relative z-10 mt-[32%] max-w-[11ch] text-[clamp(1.8rem,3vw,3.5rem)] leading-[0.92] font-medium tracking-[-0.09em]" style={{ color: titleColor }}>
        Newe zadania zdań. Gdańskie spotkania programistów literatury
      </div>
      <div className="relative z-10 mt-5 flex items-end justify-between text-[0.78rem] uppercase tracking-[0.04em] text-black/75 sm:text-[0.92rem]">
        <div>
          <p>Gdańsk (Poland)</p>
          <p>Długa 35</p>
        </div>
        <div className="text-right">
          <p>1–3 June</p>
          <p>2023</p>
        </div>
      </div>
      <div className="absolute bottom-5 left-6 flex items-center gap-5 text-[0.62rem] uppercase tracking-[0.08em] text-black/75">
        <span>Art Circle</span>
        <span>Gdańsk Future Stories</span>
      </div>
    </article>
  );
}

function PromoCard({ bg }: { bg: string }) {
  return (
    <article className="relative aspect-[2.25] overflow-hidden px-4 py-4" style={{ background: bg }}>
      <div className="absolute left-[10%] top-[16%] h-[68%] w-[24%] bg-[#f4f4f4]">
        <div className="h-full w-full bg-[linear-gradient(135deg,#383838_0%,#b4b4b4_50%,#111_100%)]" />
      </div>
      <div className="absolute left-[36%] top-[28%] h-[34%] w-[20%] bg-[#ff4224]" />
      <div className="absolute left-[47%] top-[20%] h-[18%] w-[24%] bg-black" />
      <div className="absolute left-[52%] top-[52%] h-[23%] w-[16%] rotate-[8deg] bg-[#f7aec8]" />
      <div className="absolute left-[63%] top-[42%] h-[28%] w-[20%] -rotate-[6deg] bg-[#5579c8]" />
      <div className="relative z-10 ml-[40%] mt-2 max-w-[8ch] text-[clamp(1rem,1.3vw,1.2rem)] leading-[0.95] font-medium tracking-[-0.08em] text-white">
        Spotkanie z Jurajem Andruchowyczem
      </div>
      <div className="absolute bottom-3 left-4 text-[0.55rem] uppercase tracking-[0.08em] text-black/70">Gdańsk &middot; Literature</div>
    </article>
  );
}

export function Case027GdanskLiteratureSystem() {
  return (
    <main className="min-h-screen bg-black px-4 py-8 text-black sm:px-6 lg:px-10">
      <section className="mx-auto max-w-[1280px]">
        <div className="grid gap-4 xl:grid-cols-[1.08fr_1.08fr_1.12fr]">
          <Poster bg="#ca84b9" accentA="#52bf76" accentB="#5577c7" accentC="#f1c7df" titleColor="#050505" />
          <Poster bg="#4d6fbb" accentA="#ff4b22" accentB="#dfb5d0" accentC="#fbef00" titleColor="#111" />

          <div className="grid gap-4 self-start">
            <div className="grid grid-cols-[1.25fr_0.9fr] gap-4">
              <article className="relative min-h-[120px] overflow-hidden bg-[#4d6fbb] px-4 py-3 text-[#f4c7d8]">
                <p className="max-w-[10ch] text-[clamp(1.5rem,2vw,2.2rem)] leading-[0.92] tracking-[-0.08em]">Nowe zadania zdań. Gdańskie spotkania programistów literatury</p>
                <div className="absolute bottom-3 left-4 text-[0.58rem] uppercase tracking-[0.08em] text-white/80">1–3 June 2023</div>
              </article>
              <article className="rotate-[-10deg] overflow-hidden bg-[#fff100] px-4 py-4 text-[0.68rem] leading-[1.1] uppercase tracking-[0.06em] text-black">
                <p className="font-semibold">Invitation for event organisers</p>
                <p className="mt-3 max-w-[18ch]">International literary meeting, Długa 35.</p>
              </article>
            </div>

            <div className="grid grid-cols-[1.05fr_1fr] gap-4">
              <article className="bg-[#ff421e] px-4 py-4 text-[#ffe61a]">
                <p className="max-w-[9ch] text-[clamp(1.5rem,2vw,2.1rem)] leading-[0.9] tracking-[-0.08em]">Nowe zadania zdań. Gdańskie spotkania programistów literatury</p>
              </article>
              <article className="relative rotate-[2deg] overflow-hidden bg-[#f2bfd7] px-5 py-4 text-[#111] shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                <p className="text-[0.95rem] leading-[1.05]">Szanowny Panie serdecznie zapraszam do udziału w międzynarodowym spotkaniu organizatorów wydarzeń literackich, które odbędzie się w dniach 1–3 czerwca br., przy Długiej 35.</p>
                <div className="mt-4 text-[0.52rem] uppercase tracking-[0.08em] text-black/60">Invitation handout</div>
              </article>
            </div>

            <div className="grid grid-cols-[1fr_0.92fr] gap-4">
              <article className="relative overflow-hidden bg-[#fff100] px-4 py-4">
                <div className="absolute left-4 top-4 h-[72%] w-[34%] bg-[linear-gradient(135deg,#1c1c1c_0%,#a6a6a6_46%,#0c0c0c_100%)]" />
                <div className="absolute left-[38%] top-[34%] h-[38%] w-[18%] bg-[#4e77c2]" />
                <div className="absolute left-[45%] top-[24%] h-[22%] w-[22%] bg-black" />
                <div className="absolute left-[52%] top-[32%] h-[50%] w-[19%] rotate-[-7deg] bg-[#ff4423]" />
                <div className="relative z-10 ml-[34%] mt-4 max-w-[8ch] bg-black px-3 py-2 text-[0.95rem] leading-[0.9] tracking-[-0.06em] text-white">Spotkanie z Xabierem Zadarem</div>
              </article>
              <article className="relative rotate-[18deg] overflow-hidden bg-[#5bc177] px-4 py-5 text-[#4c6dc0]">
                <p className="mt-12 ml-10 max-w-[8ch] text-[clamp(1.4rem,1.8vw,2rem)] leading-[0.9] tracking-[-0.08em]">Nowe zadania zdań. Gdańskie spotkania programistów literatury</p>
              </article>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <PromoCard bg="#5dc07d" />
              <PromoCard bg="#5dc07d" />
              <PromoCard bg="#5974bf" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
