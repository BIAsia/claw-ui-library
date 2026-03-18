const tinyBits = [
  { text: "- 01", top: "4%", left: "2%" },
  { text: "NEW MERCAT", top: "8%", left: "2%" },
  { text: ".01 > HORIZONTAL", top: "14%", left: "3%" },
  { text: ".02 > VERTICAL", top: "18%", left: "3%" },
  { text: ".03 > PIXEL", top: "22%", left: "3%" },
  { text: ".04 > BRICK LANE", top: "26%", left: "3%" },
  { text: ".05 > FULL", top: "30%", left: "3%" },
  { text: ".06 > INFLATED", top: "34%", left: "3%" },
  { text: "© DESIGNED BY TOORMIX", top: "4%", right: "3%" },
  { text: "£ 2023", top: "8%", right: "3%" },
  { text: "5678", top: "56%", left: "12%" },
  { text: "ERROR 50555", bottom: "6%", right: "3%" },
];

export function Case022MercatError404() {
  return (
    <main className="min-h-screen bg-[#e6ff00] px-3 py-6 text-[#111] sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-[1380px] items-center justify-center">
        <article className="relative aspect-[1.5/1] w-full overflow-hidden bg-[#e6ff00] font-mono uppercase tracking-[0.08em] text-[#111]">
          {tinyBits.map((bit) => (
            <span
              key={bit.text}
              className="absolute text-[0.75rem] leading-none sm:text-[1rem]"
              style={{ top: bit.top, left: bit.left, right: bit.right, bottom: bit.bottom }}
            >
              {bit.text}
            </span>
          ))}

          <p className="absolute left-[3%] top-[42%] text-[1.2rem] leading-[1.2] sm:text-[2rem]">(WHICH WORKS AS A BACKGROUND FOR ALL OTHER STYLES)</p>

          <div className="absolute left-1/2 top-1/2 w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 px-6 text-center">
            <h1 className="text-[clamp(4rem,11vw,9rem)] leading-[0.88] tracking-[0.14em] text-[#111]">(ERROR 404.)</h1>
            <div className="mt-8 flex items-center justify-between text-[1rem] sm:text-[1.6rem]">
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
            </div>
          </div>

          <div className="absolute left-[5%] top-[65%] text-[1rem] leading-[1.15] sm:text-[1.65rem]">
            PLEASE_ _ _ _ INSERT USER_ _ _ AGAIN
            <br />
            _ _ _ _ _ _ _ _ _ _ PASSWORD
          </div>

          <div className="absolute right-[5%] top-[47%] text-right text-[1rem] leading-[1.15] sm:text-[1.65rem]">
            (...) DOWNLOADING . . . . .
            <br />
            <br />
            INSERT USER
            <br />
            PASSWORD
            <br />
            <br />
            ( LOGIN ) ( REGISTER )
            <br />
            (LOG OUT )
            <br />
            ◇ END 404
          </div>

          <div className="absolute bottom-[7%] left-[3%] text-[1rem] leading-[1.1] sm:text-[1.55rem]">
            _ END OF TEST PAGE
            <br />
            NUMBER 01 AES
          </div>

          <div className="absolute bottom-[12%] right-[8%] h-[10%] w-[26%] border border-[#111] bg-[repeating-linear-gradient(90deg,#111_0_2px,transparent_2px_4px)] opacity-[0.85]" />
        </article>
      </section>
    </main>
  );
}
