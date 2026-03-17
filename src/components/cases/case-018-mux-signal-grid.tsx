const cells = Array.from({ length: 16 }, (_, row) =>
  Array.from({ length: 17 }, (_, column) => ({ row, column })),
);

function heatColor(row: number, column: number) {
  if (row < 2) return "#2a2e31";
  if (row < 5) return column < 4 || column > 15 ? "#2a2e31" : row === 2 && (column < 6 || column > 12) ? "#e05ccf" : "#e05ccf";
  if (row < 9) return row === 5 && column < 4 ? "#ffbe1f" : row === 6 && column > 6 && column < 9 ? "#e05ccf" : "#ffbe1f";
  return row < 12 && (column < 4 || column > 14) ? "#df5a31" : row < 12 ? (row === 9 && (column === 9 || column === 14) ? "#df5a31" : "#df5a31") : "#df5a31";
}

export function Case018MuxSignalGrid() {
  return (
    <main className="min-h-screen bg-[#2a2a2c] px-4 py-10 text-[#101010] sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1240px] items-center justify-center">
        <article className="w-full max-w-[1030px] border border-[#727272] bg-[#2f3134] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
          <div className="border border-[#7c7c7c] bg-[#1f2022]">
            <div className="flex h-10 items-center gap-2 border-b border-[#555] px-3">
              {Array.from({ length: 3 }, (_, index) => (
                <span key={index} className="h-3 w-3 rounded-full border border-[#717171]" />
              ))}
            </div>

            <div className="grid md:grid-cols-[1fr_1.05fr]">
              <div className="flex min-h-[26rem] flex-col bg-[#efeee8] text-[#191919]">
                <div className="flex-1 overflow-hidden px-5 py-5 sm:px-8 sm:py-7">
                  <p className="max-w-[5ch] text-[clamp(4rem,8vw,6.4rem)] leading-[0.82] font-[300] tracking-[0.28em] text-[#1e1e1e]">
                    R E AL
                  </p>
                </div>

                <div className="grid grid-cols-[1.05fr_1fr_1fr] border-t border-[#8b8b8b] text-[#151515]">
                  <div className="flex items-end border-r border-[#8b8b8b] px-4 py-5 text-[2rem] font-black tracking-[-0.08em] sm:text-[2.3rem]">
                    MUX
                  </div>
                  <div className="border-r border-[#8b8b8b] px-3 py-5 text-[0.62rem] leading-[1.3] tracking-[0.14em] text-[#555] uppercase sm:text-[0.7rem]">
                    Startup time
                    <br />
                    playback failures
                    <br />
                    buffering
                    <br />
                    video quality
                  </div>
                  <div className="flex items-end px-4 py-5 text-[clamp(2.8rem,5vw,4.2rem)] leading-none font-[300] tracking-[-0.08em]">
                    /100
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[repeat(17,minmax(0,1fr))] gap-px border-t border-[#525557] bg-[#3f4447] p-px md:border-t-0 md:border-l md:border-[#525557]">
                {cells.flat().map(({ row, column }) => (
                  <span
                    key={`${row}-${column}`}
                    aria-hidden
                    className="aspect-square"
                    style={{ background: heatColor(row, column) }}
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
