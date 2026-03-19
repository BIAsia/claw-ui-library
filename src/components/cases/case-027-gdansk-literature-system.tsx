function Poster({
  bg,
  accentA,
  accentB,
  accentC,
  titleColor = "#111",
  variant,
}: {
  bg: string;
  accentA: string;
  accentB: string;
  accentC: string;
  titleColor?: string;
  variant: "pink" | "blue";
}) {
  const shapes =
    variant === "pink"
      ? {
          a: "absolute left-[30%] top-[2%] h-[23%] w-[34%] -rotate-[5deg]",
          b: "absolute left-[52%] top-[19%] h-[27%] w-[29%] rotate-[1deg]",
          c: "absolute left-[23%] top-[52%] h-[32%] w-[31%] -rotate-[37deg]",
          d: "absolute left-[56%] top-[50%] h-[29%] w-[30%] rotate-[0.5deg]",
          block: "absolute left-[4%] top-[21%] w-[54%] bg-black px-4 py-3",
          text: "max-w-[7.2ch] text-[clamp(1.15rem,2.18vw,2.65rem)] leading-[0.92] font-normal tracking-[-0.08em]",
          footer: "mt-[59%]",
        }
      : {
          a: "absolute left-[11%] top-[4%] h-[28%] w-[37%] -rotate-[2deg]",
          b: "absolute left-[44%] top-[16%] h-[33%] w-[28%] rotate-[10deg]",
          c: "absolute left-[22%] top-[62%] h-[29%] w-[23%] -rotate-[15deg]",
          d: "absolute left-[58%] top-[56%] h-[31%] w-[24%] rotate-[11deg]",
          block: "absolute left-[6%] top-[45%] w-[64%] px-4 py-3",
          text: "max-w-[7.5ch] text-[clamp(1.08rem,2.05vw,2.45rem)] leading-[0.92] font-normal tracking-[-0.078em]",
          footer: "mt-[76%]",
        };

  return (
    <article className="relative aspect-[0.67] overflow-hidden px-5 py-4" style={{ background: bg }}>
      <div className={shapes.a} style={{ background: accentA }} />
      <div className={shapes.b} style={{ background: accentB }} />
      <div className={shapes.c} style={{ background: accentC }} />
      <div className={shapes.d} style={{ background: variant === "pink" ? "#506fba" : "#e3b6d5" }} />

      <div className={shapes.block}>
        <div className={`relative z-10 ${shapes.text}`} style={{ color: titleColor }}>
          New Senses of Sentences. Gdańsk Meetings of Literary Programmers
        </div>
        <div className="mt-4 flex items-end justify-between text-[0.56rem] uppercase leading-[0.95] tracking-[0.06em] text-white/90 sm:text-[0.72rem]">
          <div>
            <p>Gdańsk (Poland)</p>
            <p>Długa 35</p>
          </div>
          <div className="text-right">
            <p>1–3 June</p>
            <p>2023</p>
          </div>
        </div>
      </div>

      <div className={`absolute left-0 right-0 ${shapes.footer} flex items-center justify-center gap-8 px-5 text-[0.44rem] uppercase tracking-[0.12em] text-black/70 sm:text-[0.54rem]`}>
        <span>Art Circle Gdańsk</span>
        <span>Gdańsk Future Stories</span>
      </div>
    </article>
  );
}

function TallTextCard({ bg, color }: { bg: string; color: string }) {
  return (
    <article className="relative min-h-[118px] overflow-hidden px-4 py-3" style={{ background: bg, color }}>
      <p className="max-w-[8ch] text-[clamp(1.25rem,1.95vw,2.4rem)] leading-[0.9] font-normal tracking-[-0.075em]">
        Nowe zadania zdań. Gdańskie spotkania programistów literatury
      </p>
      <div className="absolute bottom-3 left-4 flex w-[calc(100%-2rem)] items-end justify-between text-[0.42rem] uppercase tracking-[0.08em] text-current/80 sm:text-[0.54rem]">
        <div>
          <p>Gdańsk</p>
          <p>Długa 35</p>
        </div>
        <div className="text-right">
          <p>1–3 czerwca</p>
          <p>2023</p>
        </div>
      </div>
    </article>
  );
}

function InviteCard() {
  return (
    <article className="relative rotate-[-8deg] overflow-hidden border border-black/30 bg-[#ffef09] px-4 py-3 text-black shadow-[0_12px_18px_rgba(0,0,0,0.18)]">
      <div className="ml-auto max-w-[8ch] text-[0.34rem] uppercase leading-[1.1] tracking-[0.08em] text-black/80 sm:text-[0.42rem]">
        Międzynarodowe spotkanie organizatorów wydarzeń literackich
      </div>
      <p className="mt-4 max-w-[17ch] text-[0.88rem] leading-[0.92] tracking-[-0.045em] sm:text-[1.05rem]">
        Zapraszam organizatorów wydarzeń literackich, które odbędzie się w dniach 1–3 czerwca br., przy Długiej 35.
      </p>
    </article>
  );
}

function LetterCard() {
  return (
    <article className="relative rotate-[6deg] overflow-hidden border border-black/25 bg-[#efbfd7] px-4 py-4 text-black shadow-[0_14px_18px_rgba(0,0,0,0.22)]">
      <p className="text-[0.92rem] leading-[1.04] tracking-[-0.04em] sm:text-[1.02rem]">
        Szanowny Panie serdecznie zapraszam do udziału w międzynarodowym spotkaniu organizatorów wydarzeń literackich, które odbędzie się w dniach 1–3 czerwca br., przy Długiej 35.
      </p>
      <div className="mt-4 text-[0.4rem] uppercase tracking-[0.1em] text-black/65 sm:text-[0.48rem]">Invitation handout</div>
    </article>
  );
}

function GreenTiltCard() {
  return (
    <article className="relative min-h-[196px] rotate-[24deg] overflow-hidden bg-[#58be77] px-4 py-4 text-[#4d6fbb] shadow-[0_16px_28px_rgba(0,0,0,0.22)]">
      <p className="ml-[32%] mt-11 max-w-[7ch] text-[clamp(1.32rem,1.85vw,2.1rem)] leading-[0.9] font-normal tracking-[-0.08em]">
        Nowe zadania zdań. Gdańskie spotkania programistów literatury
      </p>
    </article>
  );
}

function SpeakerCard({ bg, name, accent }: { bg: string; name: string; accent: string }) {
  return (
    <article className="relative aspect-[2.18] overflow-hidden" style={{ background: bg }}>
      <div className="absolute left-[11%] top-[17%] h-[65%] w-[22%] overflow-hidden bg-[#ececec]">
        <div className="h-full w-full bg-[linear-gradient(135deg,#111_0%,#666_38%,#e6e6e6_60%,#1a1a1a_100%)]" />
      </div>
      <div className="absolute left-[26%] top-[22%] h-[18%] w-[6%] bg-[#f4b8d1]" />
      <div className="absolute left-[26%] top-[56%] h-[18%] w-[7%] bg-[#f5ef11]" />
      <div className="absolute left-[34%] top-[28%] h-[44%] w-[13%] -rotate-[6deg] bg-[#4f71bc]" />
      <div className="absolute left-[46%] top-[26%] h-[34%] w-[15%] rotate-[7deg]" style={{ background: accent }} />
      <div className="absolute left-[41%] top-[16%] bg-black px-2 py-1 text-[0.62rem] leading-[0.95] tracking-[-0.04em] text-white sm:text-[0.76rem]">
        <span className="block">Spotkanie</span>
        <span className="block">z {name}</span>
      </div>
      <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[0.32rem] uppercase tracking-[0.11em] text-black/65 sm:text-[0.42rem]">
        <span>Gdańsk Literature</span>
        <span>2023</span>
      </div>
    </article>
  );
}

export function Case027GdanskLiteratureSystem() {
  return (
    <main className="min-h-screen bg-black px-4 py-8 text-black sm:px-6 lg:px-10">
      <section className="mx-auto max-w-[1280px]">
        <div className="grid gap-4 xl:grid-cols-[1.02fr_1.02fr_1.14fr]">
          <Poster bg="#ca84b9" accentA="#57bf79" accentB="#ff4422" accentC="#efbfd6" titleColor="#f3efe9" variant="pink" />
          <Poster bg="#4f6fba" accentA="#ff4520" accentB="#080808" accentC="#fff100" titleColor="#070707" variant="blue" />

          <div className="grid gap-4 self-start">
            <div className="grid grid-cols-[1.18fr_0.96fr] gap-4">
              <TallTextCard bg="#4f6fba" color="#efbfd7" />
              <InviteCard />
            </div>

            <div className="grid grid-cols-[1.06fr_1fr] gap-4">
              <TallTextCard bg="#ff4520" color="#fff100" />
              <LetterCard />
            </div>

            <div className="grid grid-cols-[0.96fr_1.04fr] gap-4">
              <article className="relative overflow-hidden bg-[#fff100] px-4 py-4 shadow-[0_16px_22px_rgba(0,0,0,0.16)]">
                <div className="absolute left-[10%] top-[15%] h-[56%] w-[27%] bg-[linear-gradient(135deg,#181818_0%,#8e8e8e_44%,#0d0d0d_100%)]" />
                <div className="absolute left-[29%] top-[57%] h-[14%] w-[6%] bg-[#f0bfd8]" />
                <div className="absolute left-[35%] top-[25%] h-[26%] w-[15%] bg-[#4e72bc]" />
                <div className="absolute left-[45%] top-[18%] h-[17%] w-[16%] bg-black" />
                <div className="absolute left-[50%] top-[26%] h-[41%] w-[17%] rotate-[6deg] bg-[#ff4520]" />
                <div className="absolute left-[40%] top-[16%] bg-black px-2 py-1 text-[0.6rem] leading-[0.95] tracking-[-0.04em] text-white sm:text-[0.72rem]">
                  <span className="block">Spotkanie</span>
                  <span className="block">z Xabierem</span>
                  <span className="block">Zadarem</span>
                </div>
              </article>
              <GreenTiltCard />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <SpeakerCard bg="#fff100" name="Jerzym Zasadnem" accent="#ff4520" />
              <SpeakerCard bg="#58be77" name="Jurajem Andruchowyczem" accent="#4f6fba" />
              <SpeakerCard bg="#4f6fba" name="Krzysztofem Czyżewskim" accent="#ff4520" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
