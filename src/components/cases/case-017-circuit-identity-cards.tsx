type CardTone = "blue" | "lime-dark" | "lime-light";

type CardItem = {
  title: string;
  tone: CardTone;
};

const cards: CardItem[] = [
  { title: "Circuit - The Protocol That Powers Identity.", tone: "blue" },
  { title: "circuit", tone: "lime-dark" },
  { title: "Circuit - The Protocol That Powers Identity.", tone: "lime-light" },
];

const grid = Array.from({ length: 14 }, (_, row) =>
  Array.from({ length: 14 }, (_, column) => ({ row, column })),
);

function dotOpacity(row: number, column: number, tone: CardTone) {
  const centerX = 6.5;
  const centerY = 6.5;
  const distance = Math.hypot(column - centerX, row - centerY);

  if (tone === "blue") {
    const hole = distance < 2.3;
    const edge = row < 2 || row > 11 || column < 2 || column > 11;
    if (hole) return 0;
    return edge ? 1 : Math.max(0.4, 1 - distance / 12);
  }

  if (tone === "lime-dark") {
    const innerHole = distance < 1.55;
    if (innerHole) return 0;
    return distance < 5.6 ? 1 : row % 5 === 0 && column % 5 === 0 ? 0.85 : 0;
  }

  return distance < 5.4 ? Math.max(0.22, 1 - distance / 8.2) : row % 5 === 0 && column % 13 === 0 ? 0.7 : 0;
}

function dotColor(row: number, column: number, tone: CardTone) {
  if (tone === "blue") {
    const mix = (row + column) / 26;
    return `color-mix(in srgb, #f0ff86 ${Math.round((1 - mix) * 48)}%, #7dc7ff)`;
  }

  return tone === "lime-dark" ? "#ebff7c" : "#efff72";
}

function CircuitCard({ card }: { card: CardItem }) {
  const darkPanel = card.tone !== "lime-light";

  return (
    <article className="w-full max-w-[22rem] overflow-hidden bg-[#f6f4f0] shadow-[0_22px_42px_rgba(44,77,108,0.16)]">
      <div className={`relative aspect-[1/0.88] p-5 ${darkPanel ? "bg-[#050505]" : "bg-[#f2f1ee]"}`}>
        <div className="grid h-full grid-cols-[repeat(14,minmax(0,1fr))] gap-[0.42rem]">
          {grid.flat().map(({ row, column }) => {
            const opacity = dotOpacity(row, column, card.tone);
            return (
              <span
                key={`${card.tone}-${row}-${column}`}
                aria-hidden
                className="aspect-square rounded-full"
                style={{
                  opacity,
                  background: dotColor(row, column, card.tone),
                  boxShadow: opacity > 0 ? "0 0 18px rgba(240,255,118,0.08)" : "none",
                }}
              />
            );
          })}
        </div>

        <span className="absolute left-1/2 top-1/2 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[0.7rem] bg-[#0b0b0b] text-[1.8rem] font-black text-[#f3f0ec] shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
          c
        </span>
      </div>

      <div className="bg-[#f6f4f0] px-5 pb-7 pt-5 text-[#0c0c0c]">
        <p className="text-[0.82rem] font-semibold tracking-[-0.03em]">circuit</p>
        <h1 className="mt-4 max-w-[11ch] text-[clamp(2rem,4vw,3.2rem)] leading-[0.92] font-[700] tracking-[-0.09em]">
          {card.title}
        </h1>
      </div>
    </article>
  );
}

export function Case017CircuitIdentityCards() {
  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#6980d8_0%,#70b8dd_58%,#92e2d6_100%)] px-4 py-10 text-black sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1320px] items-center justify-center">
        <div className="grid w-full max-w-[1180px] gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <CircuitCard key={card.tone} card={card} />
          ))}
        </div>
      </section>
    </main>
  );
}
