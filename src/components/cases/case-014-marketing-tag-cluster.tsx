"use client";

import { M_PLUS_Rounded_1c } from "next/font/google";
import { useEffect, useMemo, useState, type PointerEvent as ReactPointerEvent } from "react";

const face = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-case-014",
  weight: ["500", "700", "800", "900"],
});

type TagId = "marketing" | "seo" | "social-media" | "email-marketing" | "conversions" | "ads";

type TagItem = {
  id: TagId;
  label: string;
  width: string;
  fontSize: string;
  x: number;
  y: number;
  rotate: number;
  depth: number;
  zIndex: number;
  palette: {
    top: string;
    bottom: string;
    edge: string;
    glow: string;
    shadow: string;
  };
};

const tags: TagItem[] = [
  {
    id: "marketing",
    label: "marketing",
    width: "clamp(14.7rem, 34vw, 17.2rem)",
    fontSize: "clamp(1.18rem, 3.25vw, 1.96rem)",
    x: -10,
    y: -114,
    rotate: -8.5,
    depth: 0.48,
    zIndex: 10,
    palette: {
      top: "#ffc83e",
      bottom: "#f7b92a",
      edge: "#df9c11",
      glow: "rgba(255, 196, 56, 0.34)",
      shadow: "rgba(183, 137, 17, 0.16)",
    },
  },
  {
    id: "social-media",
    label: "social media",
    width: "clamp(16.4rem, 38vw, 18.3rem)",
    fontSize: "clamp(1.22rem, 3.45vw, 2rem)",
    x: -26,
    y: -49,
    rotate: 1.2,
    depth: 0.7,
    zIndex: 20,
    palette: {
      top: "#ff9356",
      bottom: "#ff8247",
      edge: "#f06433",
      glow: "rgba(255, 135, 84, 0.34)",
      shadow: "rgba(190, 101, 55, 0.18)",
    },
  },
  {
    id: "seo",
    label: "SEO",
    width: "clamp(8.5rem, 20vw, 10rem)",
    fontSize: "clamp(1.42rem, 4.15vw, 2.28rem)",
    x: 96,
    y: -42,
    rotate: 14.5,
    depth: 0.88,
    zIndex: 35,
    palette: {
      top: "#ff8750",
      bottom: "#ff7244",
      edge: "#f16037",
      glow: "rgba(255, 121, 77, 0.36)",
      shadow: "rgba(184, 86, 56, 0.2)",
    },
  },
  {
    id: "email-marketing",
    label: "email marketing",
    width: "clamp(22.6rem, 51vw, 26.2rem)",
    fontSize: "clamp(1.56rem, 4.28vw, 2.4rem)",
    x: -12,
    y: 6,
    rotate: -2.8,
    depth: 1,
    zIndex: 50,
    palette: {
      top: "#f8b3c0",
      bottom: "#f0a0b2",
      edge: "#db8799",
      glow: "rgba(242, 167, 184, 0.34)",
      shadow: "rgba(173, 104, 123, 0.19)",
    },
  },
  {
    id: "conversions",
    label: "conversions",
    width: "clamp(15.4rem, 35vw, 18.1rem)",
    fontSize: "clamp(1.28rem, 4vw, 2.12rem)",
    x: 18,
    y: 76,
    rotate: 2.4,
    depth: 0.82,
    zIndex: 25,
    palette: {
      top: "#4d8efa",
      bottom: "#3874e8",
      edge: "#2f60c6",
      glow: "rgba(71, 129, 242, 0.3)",
      shadow: "rgba(52, 88, 150, 0.22)",
    },
  },
  {
    id: "ads",
    label: "ads",
    width: "clamp(7.5rem, 18vw, 8.9rem)",
    fontSize: "clamp(1.35rem, 4vw, 2.1rem)",
    x: 18,
    y: 126,
    rotate: -6,
    depth: 1.12,
    zIndex: 60,
    palette: {
      top: "#29c4ff",
      bottom: "#15b3f0",
      edge: "#0697d1",
      glow: "rgba(41, 192, 243, 0.34)",
      shadow: "rgba(26, 132, 166, 0.18)",
    },
  },
];

export function Case014MarketingTagCluster() {
  const [activeId, setActiveId] = useState<TagId>("email-marketing");
  const [hoveredId, setHoveredId] = useState<TagId | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);

    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  const highlightedId = hoveredId ?? activeId;
  const activeLabel = useMemo(
    () => tags.find((item) => item.id === activeId)?.label ?? "email marketing",
    [activeId],
  );

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (reducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    setPointer({
      x: Number(x.toFixed(3)),
      y: Number(y.toFixed(3)),
    });
  }

  function resetPointer() {
    setPointer({ x: 0, y: 0 });
    setHoveredId(null);
  }

  return (
    <main
      className={`${face.variable} min-h-screen overflow-hidden bg-[#ebe9e7] text-[#312422]`}
      style={{ fontFamily: "var(--font-case-014), system-ui, sans-serif" }}
    >
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .case014-piece,
          .case014-front,
          .case014-edge,
          .case014-glow {
            transition-duration: 0ms !important;
          }
        }
      `}</style>

      <section
        aria-label="Marketing tag cluster"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 sm:px-6"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.96) 0%, rgba(247,244,241,0.95) 22%, rgba(236,232,229,0.98) 58%, rgba(232,228,224,1) 100%)",
          }}
        />

        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[9rem] w-[20rem] max-w-[60vw] -translate-x-1/2 translate-y-[8.8rem] rounded-full blur-[40px]"
          style={{
            background: "radial-gradient(circle, rgba(54, 42, 39, 0.18) 0%, rgba(54, 42, 39, 0.05) 42%, rgba(54, 42, 39, 0) 76%)",
            transform: `translate(-50%, 0) translate3d(${pointer.x * 12}px, ${pointer.y * 8}px, 0)`,
          }}
        />

        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[84px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.4) 36%, rgba(255,255,255,0) 74%)",
          }}
        />

        <h1 className="sr-only">Marketing tag cluster</h1>
        <p className="sr-only" aria-live="polite">
          Selected tag: {activeLabel}
        </p>

        <div className="relative w-full max-w-[38rem] [perspective:1400px]">
          <div className="relative mx-auto aspect-[1.22/1] w-full max-w-[35.5rem] min-w-[18rem] [transform-style:preserve-3d]">
            {tags.map((tag) => {
              const isHighlighted = tag.id === highlightedId;
              const isSelected = tag.id === activeId;
              const shiftX = reducedMotion ? 0 : pointer.x * tag.depth * -15;
              const shiftY = reducedMotion ? 0 : pointer.y * tag.depth * -10;
              const rotateX = reducedMotion ? 0 : pointer.y * tag.depth * -1.6;
              const rotateY = reducedMotion ? 0 : pointer.x * tag.depth * 2.2;
              const liftY = isHighlighted ? -7 : 0;
              const liftZ = isHighlighted ? 32 : 0;
              const scale = isHighlighted ? 1.014 : 1;
              const textOpacity = tag.id === "conversions" && !isHighlighted ? 0.88 : 1;

              return (
                <button
                  key={tag.id}
                  type="button"
                  aria-label={tag.label}
                  aria-pressed={isSelected}
                  onClick={() => setActiveId(tag.id)}
                  onMouseEnter={() => setHoveredId(tag.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(tag.id)}
                  onBlur={() => setHoveredId(null)}
                  className="case014-piece absolute left-1/2 top-1/2 outline-none transition-transform duration-200 ease-out focus-visible:ring-4 focus-visible:ring-[#302321]/15"
                  style={{
                    width: tag.width,
                    zIndex: isHighlighted ? 120 : tag.zIndex,
                    transform: `translate(-50%, -50%) translate3d(${tag.x + shiftX}px, ${tag.y + liftY + shiftY}px, ${liftZ}px) rotate(${tag.rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span
                    aria-hidden
                    className="case014-glow absolute inset-x-[7%] top-[30%] h-[72%] rounded-[2rem] blur-[20px] transition-opacity duration-200 ease-out"
                    style={{
                      background: `radial-gradient(circle at 50% 45%, ${tag.palette.glow} 0%, rgba(255,255,255,0) 72%)`,
                      opacity: isHighlighted || isSelected ? 1 : 0.8,
                      transform: "translateY(14px) scale(1.04, 0.92)",
                    }}
                  />

                  <span
                    aria-hidden
                    className="absolute inset-x-[4%] top-[72%] h-[36%] rounded-[999px] blur-[18px]"
                    style={{
                      background: `radial-gradient(circle, ${tag.palette.shadow} 0%, rgba(255,255,255,0) 74%)`,
                      transform: "translateZ(-1px)",
                      opacity: tag.id === "ads" ? 0.72 : 0.56,
                    }}
                  />

                  <span
                    aria-hidden
                    className="case014-edge absolute inset-x-0 top-[0.42rem] h-full rounded-[1.7rem] transition-transform duration-200 ease-out"
                    style={{
                      background: `linear-gradient(180deg, ${tag.palette.edge} 0%, color-mix(in srgb, ${tag.palette.edge} 76%, #7b4a44 24%) 100%)`,
                      boxShadow:
                        "inset 0 -1px 0 rgba(86, 40, 29, 0.22), inset 0 1px 0 rgba(255,255,255,0.12)",
                      transform: `translateY(${isHighlighted ? 0.28 : 0.42}rem) translateZ(-1px)`,
                    }}
                  />

                  <span
                    className="case014-front relative flex min-h-[3.7rem] items-center justify-center rounded-[1.7rem] px-5 pb-[0.52rem] pt-[0.34rem] text-center font-[800] tracking-[-0.09em] whitespace-nowrap text-[#382825] transition-[filter,transform] duration-200 ease-out sm:min-h-[4.15rem]"
                    style={{
                      fontSize: tag.fontSize,
                      lineHeight: 0.9,
                      background: `linear-gradient(180deg, color-mix(in srgb, ${tag.palette.top} 88%, white 12%) 0%, ${tag.palette.top} 34%, ${tag.palette.bottom} 100%)`,
                      boxShadow: [
                        "inset 0 1.5px 0 rgba(255,255,255,0.5)",
                        "inset 0 -1px 0 rgba(142, 81, 72, 0.12)",
                        "0 14px 24px rgba(118, 90, 83, 0.08)",
                      ].join(", "),
                      filter: isSelected ? "saturate(1.03) brightness(1.01)" : "none",
                      transform: isHighlighted ? "translateY(-1px)" : "translateY(0)",
                    }}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-[1px] rounded-[1.6rem]"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 46%)",
                        mixBlendMode: "screen",
                      }}
                    />
                    <span
                      className="relative block"
                      style={{
                        opacity: textOpacity,
                        textShadow: "0 1px 0 rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag.label}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
