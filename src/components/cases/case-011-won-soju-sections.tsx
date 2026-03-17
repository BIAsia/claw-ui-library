import { Instrument_Sans, Noto_Sans_KR } from "next/font/google";

const latinFace = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-case-011-latin",
  weight: ["400", "500", "600", "700"],
});

const koreanFace = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-case-011-korean",
  weight: ["400", "500", "600", "700"],
});

type Band = {
  title: string;
  label: string;
  width: string;
  marginLeft: string;
  tone: string;
  shadow: string;
};

const bands: Band[] = [
  {
    title: "Identity & Slogan",
    label: "브랜드 아이덴티티와 방향성",
    width: "81%",
    marginLeft: "14%",
    tone: "#323232",
    shadow: "0 18px 24px rgba(0, 0, 0, 0.16)",
  },
  {
    title: "How We Started & What We Do",
    label: "원소주 설립 배경과 철학",
    width: "87%",
    marginLeft: "4%",
    tone: "#191919",
    shadow: "0 16px 22px rgba(0, 0, 0, 0.14)",
  },
  {
    title: "Founder’s Quote",
    label: "브랜드 창립자의 철학 문구",
    width: "84%",
    marginLeft: "8.5%",
    tone: "#050505",
    shadow: "0 18px 24px rgba(0, 0, 0, 0.18)",
  },
  {
    title: "Our Process",
    label: "브랜드 프로세스 진행방식",
    width: "78.5%",
    marginLeft: "0%",
    tone: "#3a3a3a",
    shadow: "0 16px 22px rgba(0, 0, 0, 0.14)",
  },
  {
    title: "Clear Vision, Clear Spirit",
    label: "브랜드 가치 설명",
    width: "82%",
    marginLeft: "9.5%",
    tone: "#1d1d1d",
    shadow: "0 18px 24px rgba(0, 0, 0, 0.14)",
  },
  {
    title: "WON SOJU at a Glance",
    label: "브랜드 성장사",
    width: "78.8%",
    marginLeft: "4%",
    tone: "#050505",
    shadow: "0 18px 24px rgba(0, 0, 0, 0.17)",
  },
];

export function Case011WonSojuSections() {
  return (
    <main
      className={`${latinFace.variable} ${koreanFace.variable} min-h-screen bg-[#080808] px-3 py-3 text-[#121212] sm:px-5 sm:py-5 lg:px-7 lg:py-6`}
      style={{ fontFamily: "var(--font-case-011-latin), sans-serif" }}
    >
      <section className="mx-auto min-h-[calc(100vh-1.5rem)] max-w-[1520px] overflow-hidden bg-[#f4f2ee] px-5 py-6 shadow-[0_20px_90px_rgba(0,0,0,0.32)] sm:min-h-[calc(100vh-2.5rem)] sm:px-8 sm:py-8 lg:min-h-[calc(100vh-3rem)] lg:px-10 lg:py-10 xl:px-12 xl:py-11">
        <div className="grid gap-8 lg:grid-cols-[11.5rem_minmax(0,1fr)] lg:gap-10">
          <aside className="flex flex-col gap-10 lg:gap-16">
            <div className="flex items-start justify-between gap-5 lg:block">
              <p className="text-[clamp(2.25rem,4.1vw,3rem)] font-[700] leading-none tracking-[-0.08em] text-[#111111]">
                3.1
              </p>

              <div className="pr-2 text-right text-[0.72rem] leading-[1.35] tracking-[-0.04em] text-[#1d1d1d] lg:hidden">
                <p>Verbal identity</p>
                <p>Messaging Platform — Brand Story</p>
              </div>
            </div>

            <p
              className="max-w-[12rem] text-[0.79rem] leading-[1.62] tracking-[-0.035em] text-[#252525] sm:text-[0.84rem]"
              style={{ fontFamily: "var(--font-case-011-korean), sans-serif" }}
            >
              브랜드의 철학, 역사, 비전, 가치, 제품에 대한 내용을 한 장의 흐름으로 정리한 브랜드 스토리 섹션입니다.
              오른쪽 밴드는 각 장면을 분리하면서도 전체 메시지가 한 맥락으로 읽히도록 이어집니다.
            </p>
          </aside>

          <div className="flex flex-col">
            <div className="hidden text-[0.74rem] leading-[1.35] tracking-[-0.04em] text-[#1d1d1d] lg:block">
              <p>Verbal identity</p>
              <p>Messaging Platform — Brand Story</p>
            </div>

            <div className="mt-0 sm:mt-1 lg:mt-2">
              <div className="flex flex-col gap-0 overflow-hidden pb-2 pt-2 sm:pt-3 lg:pt-2">
                {bands.map((band, index) => (
                  <article
                    key={band.title}
                    tabIndex={0}
                    aria-label={`${band.title} — ${band.label}`}
                    className={[
                      "group relative isolate -mt-2.5 overflow-hidden px-5 py-4 text-white outline-none sm:-mt-3 sm:px-6 sm:py-5 lg:-mt-4 lg:px-7 lg:py-[1.35rem]",
                      "motion-safe:transition-[transform,filter,box-shadow] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "hover:brightness-[1.06] focus-visible:brightness-[1.08] focus-visible:ring-2 focus-visible:ring-black/60",
                      "hover:translate-x-[0.2rem] focus-visible:translate-x-[0.2rem]",
                    ].join(" ")}
                    style={{
                      width: band.width,
                      marginLeft: band.marginLeft,
                      background: band.tone,
                      boxShadow: band.shadow,
                      zIndex: bands.length - index,
                      clipPath: "polygon(0 0, 100% 0, calc(100% - 1.6rem) 100%, 0 100%)",
                    }}
                  >
                    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_52%,rgba(255,255,255,0.025))]" />
                    <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-white/8" />

                    <div className="relative flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                      <h2 className="text-[clamp(1.65rem,2.8vw,2.6rem)] font-[600] leading-[0.92] tracking-[-0.065em] text-white text-balance">
                        {band.title}
                      </h2>
                      <p
                        className="max-w-[9.5rem] text-[0.66rem] font-[500] leading-[1.35] tracking-[-0.045em] text-white/88 sm:pt-1 sm:text-right lg:max-w-[10.5rem]"
                        style={{ fontFamily: "var(--font-case-011-korean), sans-serif" }}
                      >
                        {band.label}
                      </p>
                    </div>
                  </article>
                ))}

                <div
                  aria-hidden
                  className="relative -mt-2.5 h-16 sm:-mt-3 sm:h-20 lg:-mt-4 lg:h-24"
                  style={{ width: "84%", marginLeft: "8.5%" }}
                >
                  <div
                    className="absolute inset-x-0 top-5 h-full bg-[#3a3a3a]"
                    style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 1.9rem) 100%, 0 100%)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
