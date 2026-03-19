"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";

const displayFace = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-traditional-agent-003-display",
  weight: ["400", "500", "600", "700"],
});

const infoFace = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-traditional-agent-003-info",
  weight: ["400", "500", "600", "700"],
});

type Point = readonly [number, number];

type LargeTextProps = {
  x: number;
  y: number;
  size: number;
  lines: string[];
  align?: "start" | "middle" | "end";
  lineHeight?: number;
};

type CopyBlockProps = {
  x: number;
  y: number;
  size?: number;
  weight?: number;
  lines: string[];
  align?: "start" | "middle" | "end";
  lineHeight?: number;
  fill?: string;
};

const paper = "#f6f2ef";
const red = "#d92633";
const pink = "#f0b9df";
const pinkStroke = "#d786ac";
const note = "#8b5248";

const centralBurst: Point[] = [
  [203, 137], [280, 188], [338, 116], [379, 203], [486, 177], [424, 259], [514, 322], [408, 322],
  [429, 433], [326, 359], [252, 448], [230, 346], [143, 402], [194, 302], [108, 264], [209, 238],
];
const topRightBurst: Point[] = [
  [512, 31], [545, 86], [584, 18], [566, 94], [643, 66], [580, 118], [601, 207], [548, 149],
  [533, 226], [512, 154], [448, 170], [493, 116], [441, 47],
];
const cloverLeft: Point[] = [
  [82, 525], [78, 490], [97, 465], [130, 461], [154, 438], [192, 447], [208, 474], [244, 474],
  [261, 502], [254, 534], [270, 566], [256, 595], [222, 602], [201, 631], [167, 635], [146, 607],
  [109, 613], [86, 591], [86, 559],
];
const miniClover: Point[] = [
  [263, 608], [258, 586], [273, 569], [296, 573], [311, 553], [336, 563], [341, 585], [365, 591],
  [370, 614], [354, 629], [355, 650], [331, 657], [315, 644], [294, 656], [275, 648], [271, 628],
];
const speechBubble: Point[] = [
  [455, 401], [496, 394], [553, 393], [614, 399], [666, 416], [687, 444], [688, 478], [675, 511],
  [649, 536], [620, 550], [625, 566], [606, 569], [585, 561], [533, 563], [478, 560], [437, 548],
  [412, 528], [405, 496], [410, 460], [425, 428],
];

const brushPatchPath =
  "M 338 650 C 360 631, 392 624, 426 631 C 468 638, 506 662, 537 699 C 563 731, 583 775, 601 831 L 579 841 L 567 827 L 558 846 L 544 833 L 534 851 L 521 837 L 511 852 L 498 838 L 488 853 L 474 839 L 464 855 L 451 842 L 440 856 L 428 842 L 417 856 L 405 844 L 393 855 L 382 841 L 371 848 L 359 834 L 349 836 L 343 818 L 351 804 L 339 794 L 343 778 L 333 768 L 341 753 L 332 742 L 341 726 L 333 713 L 344 703 L 336 687 L 344 672 L 338 650 Z";

const lowerSticker: Point[] = [
  [444, 912], [473, 916], [502, 899], [517, 928], [554, 930], [543, 958], [573, 976], [543, 991],
  [548, 1020], [518, 1016], [492, 1030], [472, 1010], [450, 1020], [441, 995], [411, 991], [424, 964],
  [410, 938], [436, 938],
];

const diagonalStrip = "M 96 734 L 142 679 L 326 839 L 292 915 Q 286 927 275 926 L 94 773 Q 82 763 86 748 Z";
const topLoop = "M 156 167 C 185 121, 275 106, 363 116 C 469 128, 551 149, 585 183 C 616 212, 612 251, 576 270 C 532 289, 456 282, 369 264 C 278 245, 204 242, 168 212 C 151 198, 143 182, 156 167 Z";
const centerCircle = "M 302 596 C 325 571, 354 568, 373 585 C 392 602, 392 632, 370 651 C 349 669, 317 669, 298 649 C 283 633, 283 608, 302 596 Z";
const lowerArc = "M 127 846 C 205 902, 280 932, 360 955 C 432 976, 502 982, 558 978";
const rightLoop = "M 588 558 C 626 538, 671 546, 701 580 C 721 607, 724 647, 705 678 C 681 711, 633 723, 597 701";
const leftParenA = "M 51 533 C 28 551, 18 584, 23 620 C 27 652, 46 680, 74 691";
const leftParenB = "M 72 545 C 54 560, 47 586, 50 615 C 53 639, 66 660, 86 669";
const topStrokes = [
  "M 213 20 L 268 106", "M 227 74 L 228 176", "M 248 129 L 281 222", "M 318 113 L 422 10",
  "M 354 171 L 430 85", "M 557 33 L 584 -15", "M 613 62 L 677 35",
];
const brushMarks = [
  "M 404 664 L 370 689", "M 456 706 L 419 738", "M 489 780 L 451 811", "M 519 862 L 476 894",
  "M 407 868 L 371 896", "M 346 833 L 316 853", "M 350 752 L 318 775", "M 341 899 L 304 912",
  "M 423 860 L 385 883", "M 440 729 L 406 753",
];
const rightZig = "M 636 719 L 676 710 L 647 750 L 687 747 L 655 794 L 696 792 L 665 844 L 699 853";

function createSplinePath(points: Point[], closed = false, tension = 0.9) {
  if (points.length < 2) return "";
  const getPoint = (index: number) => {
    if (closed) return points[(index + points.length) % points.length];
    if (index < 0) return points[0];
    if (index >= points.length) return points[points.length - 1];
    return points[index];
  };
  let path = `M ${points[0][0]} ${points[0][1]}`;
  const lastIndex = closed ? points.length : points.length - 1;
  for (let index = 0; index < lastIndex; index += 1) {
    const current = getPoint(index);
    const next = getPoint(index + 1);
    const previous = getPoint(index - 1);
    const nextNext = getPoint(index + 2);
    const cp1x = current[0] + ((next[0] - previous[0]) / 6) * tension;
    const cp1y = current[1] + ((next[1] - previous[1]) / 6) * tension;
    const cp2x = next[0] - ((nextNext[0] - current[0]) / 6) * tension;
    const cp2y = next[1] - ((nextNext[1] - current[1]) / 6) * tension;
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next[0]} ${next[1]}`;
  }
  return closed ? `${path} Z` : path;
}

function LargeText({ x, y, size, lines, align = "start", lineHeight = 0.86 }: LargeTextProps) {
  return (
    <text
      x={x}
      y={y}
      fill={red}
      textAnchor={align}
      fontSize={size}
      fontWeight={600}
      letterSpacing="-0.045em"
      style={{ textTransform: "uppercase" }}
    >
      {lines.map((line, index) => (
        <tspan key={`${line}-${index}`} x={x} dy={index === 0 ? 0 : `${lineHeight}em`}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function CopyBlock({ x, y, size = 13, weight = 600, lines, align = "start", lineHeight = 1.2, fill = note }: CopyBlockProps) {
  return (
    <text
      x={x}
      y={y}
      fill={fill}
      textAnchor={align}
      fontFamily="var(--font-traditional-agent-003-info)"
      fontSize={size}
      fontWeight={weight}
      letterSpacing="-0.03em"
    >
      {lines.map((line, index) => (
        <tspan key={`${line}-${index}`} x={x} dy={index === 0 ? 0 : `${lineHeight}em`}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function PinkShape({ d }: { d: string }) {
  return <path d={d} fill={pink} stroke={pinkStroke} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />;
}

export default function TraditionalAgent003Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, tx: 0, ty: 0 });

  const svgPaths = useMemo(
    () => ({
      centralBurst: createSplinePath(centralBurst, true),
      topRightBurst: createSplinePath(topRightBurst, true),
      cloverLeft: createSplinePath(cloverLeft, true),
      miniClover: createSplinePath(miniClover, true),
      speechBubble: createSplinePath(speechBubble, true),
      lowerSticker: createSplinePath(lowerSticker, true),
    }),
    [],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = event.clientX - rect.left;
      const py = event.clientY - rect.top;
      const nx = px / rect.width - 0.5;
      const ny = py / rect.height - 0.5;

      setPointer({ x: px, y: py });
      setTilt({
        rx: ny * -7,
        ry: nx * 9,
        tx: nx * 14,
        ty: ny * 10,
      });
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => {
      setHovered(false);
      setTilt({ rx: 0, ry: 0, tx: 0, ty: 0 });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <main className={`${displayFace.variable} ${infoFace.variable} min-h-screen overflow-hidden bg-[#131313] text-white`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_35%),linear-gradient(180deg,#171717_0%,#0d0d0d_100%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] items-center justify-center px-4 py-10 md:px-10 md:py-16">
        <div ref={containerRef} className="group relative w-full max-w-[860px] cursor-none" style={{ perspective: 1800 }}>
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-12 opacity-70 blur-3xl transition duration-300"
            style={{
              background: `radial-gradient(circle at ${hovered ? `${pointer.x}px ${pointer.y}px` : "50% 35%"}, rgba(240,185,223,0.22), transparent 24%), radial-gradient(circle at 52% 48%, rgba(223,37,50,0.16), transparent 28%)`,
            }}
          />

          <div
            className="relative mx-auto aspect-[736/1051] w-full max-w-[736px] overflow-hidden rounded-[1.6rem] bg-[#f7f2ef] shadow-[0_36px_120px_rgba(0,0,0,0.45)] transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translate3d(${tilt.tx}px, ${tilt.ty}px, 0)`,
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.82),transparent_18%),radial-gradient(circle_at_73%_76%,rgba(255,255,255,0.48),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0.06)_12%,rgba(0,0,0,0.02)_58%,rgba(255,255,255,0.22))]" />
            <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(180,156,150,0.45)_1px,transparent_0)] [background-size:14px_14px]" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-screen transition-opacity duration-200"
              style={{
                opacity: hovered ? 1 : 0.55,
                background: `radial-gradient(240px 240px at ${pointer.x}px ${pointer.y}px, rgba(255,255,255,0.16), transparent 44%)`,
              }}
            />

            <svg
              viewBox="0 0 736 1051"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label="Traditional Agent poster surface with oversized condensed operator words, sparse procedural notes, pink collage shapes, and pointer-reactive hand-drawn marks."
              style={{ fontFamily: "var(--font-traditional-agent-003-display)" }}
            >
              <rect width="736" height="1051" fill={paper} />

              <g style={{ transform: `translate(${tilt.tx * -0.12}px, ${tilt.ty * -0.12}px)` }}>
                <LargeText x={50} y={100} size={80} lines={["TRADITIONAL", "AGENT"]} />
                <LargeText x={448} y={294} size={82} lines={["INTAKE", "ROUTING"]} />
                <LargeText x={52} y={432} size={80} lines={["QUEUE", "HANDOFF"]} />
                <LargeText x={447} y={604} size={80} lines={["RUNBOOK", "REVIEW"]} />
                <LargeText x={54} y={718} size={84} lines={["TASK", "RECORD"]} />
                <LargeText x={286} y={894} size={84} lines={["REPORT", "RELEASE"]} />
              </g>

              <g style={{ transform: `translate(${tilt.tx * -0.08}px, ${tilt.ty * -0.08}px)` }}>
                <CopyBlock x={304} y={41} lines={["operator entrance, not the workspace itself", "assign / run / review / return"]} />
                <CopyBlock x={53} y={260} lines={["probe 003 / traditional agent", "classical AI operations surface", "before the queue becomes visible"]} />
                <CopyBlock x={292} y={565} weight={500} lines={["every request gets a route and a record", "intake / handoff / release"]} />
                <text
                  x="129"
                  y="811"
                  fill={note}
                  fontFamily="var(--font-traditional-agent-003-info)"
                  fontSize="12"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                  transform="rotate(-89 129 811)"
                >
                  <tspan x="129" dy="0">small run markers, review tags,</tspan>
                  <tspan x="129" dy="1.18em">and routed verbs only.</tspan>
                  <tspan x="129" dy="1.18em">this page should announce work discipline,</tspan>
                  <tspan x="129" dy="1.18em">not explain the full product.</tspan>
                </text>
              </g>

              <g fill="none" stroke={red} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `translate(${tilt.tx * 0.18}px, ${tilt.ty * 0.18}px)` }}>
                <path d={topLoop} opacity="0.84" />
                <path d={centerCircle} opacity="0.9" />
                <path d={lowerArc} opacity="0.9" />
                <path d={rightLoop} opacity="0.9" />
                <path d={leftParenA} />
                <path d={leftParenB} />
                <path d={rightZig} />
                {topStrokes.map((stroke) => <path key={stroke} d={stroke} />)}
              </g>

              <g style={{ transform: `translate(${tilt.tx * 0.12}px, ${tilt.ty * 0.12}px)` }}>
                <PinkShape d={svgPaths.centralBurst} />
                <PinkShape d={svgPaths.topRightBurst} />
                <PinkShape d={svgPaths.cloverLeft} />
                <PinkShape d={svgPaths.miniClover} />
                <PinkShape d={svgPaths.speechBubble} />
                <g transform="translate(8 -36)"><PinkShape d={brushPatchPath} /></g>
                <PinkShape d={svgPaths.lowerSticker} />
                <path d={diagonalStrip} fill={pink} stroke={pinkStroke} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
              </g>

              <g fill="none" stroke={red} strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" transform="translate(8 -36)" style={{ transform: `translate(${tilt.tx * 0.2 + 8}px, ${tilt.ty * 0.2 - 36}px)` }}>
                {brushMarks.map((stroke) => <path key={stroke} d={stroke} />)}
              </g>

              <g fill="none" stroke={pinkStroke} strokeWidth="2.1" strokeLinecap="round" style={{ transform: `translate(${tilt.tx * 0.1}px, ${tilt.ty * 0.1}px)` }}>
                <g transform="translate(8 -36)">
                  <path d="M 471 645 L 434 675" />
                  <path d="M 452 673 L 413 705" />
                  <path d="M 517 873 L 487 897" />
                </g>
                <path d="M 563 946 L 531 965" />
              </g>
            </svg>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#df2532]/80 bg-[#f6f2ef]/50 backdrop-blur-[2px] transition duration-150"
            style={{
              left: pointer.x,
              top: pointer.y,
              opacity: hovered ? 1 : 0,
              transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0.7})`,
              boxShadow: hovered ? "0 0 0 10px rgba(223,37,50,0.08)" : "none",
            }}
          >
            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#df2532]" />
          </div>
        </div>
      </div>
    </main>
  );
}
