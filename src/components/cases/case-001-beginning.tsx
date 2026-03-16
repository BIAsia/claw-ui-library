import { League_Spartan } from "next/font/google";
import { case001StrokePaths } from "@/components/cases/case-001-beginning.paths";

const displayFace = League_Spartan({
  subsets: ["latin"],
  variable: "--font-case-001-display",
  weight: ["700", "800"],
});

type Point = readonly [number, number];

type PosterTextBlockProps = {
  x: number;
  y: number;
  size?: number;
  lineHeight?: number;
  align?: "start" | "middle" | "end";
  lines: Array<{
    text: string;
    size?: number;
  }>;
};

type OutlineBlobProps = {
  points: Point[];
  strokeWidth?: number;
};

const topBlob: Point[] = [
  [76, 36],
  [92, 18],
  [110, 45],
  [126, 20],
  [146, 50],
  [166, 24],
  [183, 60],
  [202, 30],
  [224, 74],
  [245, 33],
  [267, 93],
  [289, 41],
  [306, 108],
  [338, 66],
  [365, 111],
  [345, 128],
  [360, 146],
  [332, 153],
  [319, 176],
  [289, 166],
  [270, 193],
  [240, 183],
  [214, 196],
  [186, 181],
  [154, 181],
  [128, 159],
  [96, 162],
  [74, 140],
  [81, 112],
  [67, 89],
  [77, 64],
];

const leftRosette: Point[] = [
  [20, 244],
  [28, 216],
  [47, 197],
  [74, 189],
  [100, 193],
  [124, 206],
  [139, 226],
  [139, 253],
  [127, 279],
  [105, 296],
  [78, 301],
  [50, 294],
  [28, 277],
  [18, 252],
];

const heroBlob: Point[] = [
  [208, 154],
  [246, 142],
  [293, 140],
  [343, 137],
  [396, 141],
  [447, 149],
  [497, 162],
  [542, 176],
  [580, 196],
  [607, 225],
  [619, 260],
  [615, 295],
  [624, 327],
  [613, 351],
  [584, 368],
  [546, 374],
  [504, 376],
  [463, 372],
  [423, 377],
  [382, 375],
  [340, 378],
  [300, 381],
  [261, 380],
  [225, 371],
  [194, 352],
  [175, 321],
  [174, 286],
  [164, 255],
  [170, 224],
  [185, 198],
  [198, 173],
];

const lowerBloom: Point[] = [
  [95, 409],
  [123, 392],
  [162, 405],
  [196, 387],
  [231, 399],
  [257, 378],
  [282, 397],
  [296, 369],
  [317, 403],
  [341, 372],
  [355, 413],
  [384, 389],
  [390, 432],
  [422, 416],
  [413, 452],
  [449, 452],
  [432, 483],
  [467, 498],
  [439, 525],
  [470, 549],
  [434, 561],
  [451, 594],
  [416, 592],
  [412, 630],
  [376, 618],
  [360, 655],
  [327, 626],
  [307, 664],
  [280, 627],
  [250, 660],
  [231, 621],
  [196, 648],
  [187, 607],
  [153, 626],
  [155, 587],
  [119, 591],
  [137, 555],
  [103, 535],
  [132, 507],
  [100, 478],
  [139, 461],
  [110, 432],
];

const lowerRightSticker: Point[] = [
  [498, 666],
  [518, 655],
  [542, 660],
  [563, 655],
  [580, 667],
  [585, 688],
  [594, 708],
  [590, 731],
  [597, 753],
  [590, 774],
  [575, 791],
  [554, 799],
  [538, 814],
  [516, 811],
  [500, 798],
  [494, 776],
  [499, 753],
  [491, 731],
  [497, 706],
  [491, 685],
];

function createSplinePath(points: Point[], closed = false, tension = 0.9) {
  if (points.length < 2) return "";

  const getPoint = (index: number) => {
    if (closed) {
      return points[(index + points.length) % points.length];
    }

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

function PosterTextBlock({
  x,
  y,
  size = 55,
  lineHeight = 0.89,
  align = "start",
  lines,
}: PosterTextBlockProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={align}
      fill="#f5f1ec"
      fontSize={size}
      fontWeight={800}
      letterSpacing="-0.05em"
      style={{ textTransform: "lowercase" }}
    >
      {lines.map((line, index) => (
        <tspan
          key={`${line.text}-${index}`}
          x={x}
          dy={index === 0 ? 0 : `${lineHeight}em`}
          fontSize={line.size ?? size}
        >
          {line.text}
        </tspan>
      ))}
    </text>
  );
}

function OutlineBlob({ points, strokeWidth = 4 }: OutlineBlobProps) {
  return (
    <path
      d={createSplinePath(points, true)}
      fill="#010101"
      stroke="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function SmileySticker() {
  return (
    <g transform="translate(467 604) rotate(-9)">
      <circle cx="0" cy="0" r="34" fill="#f5f1ec" />
      <path
        d="M -13 10 C -5 18, 5 18, 14 10"
        fill="none"
        stroke="#171717"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M -10 -12 L -3 -4 M -3 -12 L -10 -4" stroke="#171717" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M 9 -11 L 16 -3 M 16 -11 L 9 -3" stroke="#171717" strokeWidth="2.6" strokeLinecap="round" />
    </g>
  );
}

function TracedStrokeLayer() {
  return (
    <g fill="#f5f1ec" fillRule="evenodd">
      <path d={case001StrokePaths.primary} />
      <path d={case001StrokePaths.lowerLeft} />
      <path d={case001StrokePaths.upperRight} />
      <path d={case001StrokePaths.midRight} />
      <path d={case001StrokePaths.rosette} />
      <path d={case001StrokePaths.lowerRightSticker} />
      <path d={case001StrokePaths.lowerTail} />
    </g>
  );
}

export function Case001Beginning() {
  return (
    <div className={`${displayFace.variable} mx-auto w-full max-w-[980px]`}>
      <div className="rounded-[2rem] border border-white/10 bg-[#050505] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.5)] md:p-5">
        <div className="rounded-[1.5rem] border border-white/8 bg-black p-3 md:p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3 text-[10px] uppercase tracking-[0.28em] text-white/38 md:mb-5 md:pb-4">
            <span>case 001</span>
            <span>true reconstructed poster — editable layers</span>
          </div>

          <div className="relative mx-auto aspect-[636/899] w-full max-w-[636px] overflow-hidden rounded-[1.5rem] bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_42%,rgba(255,255,255,0.035),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_16%,transparent_84%,rgba(255,255,255,0.012))]" />

            <svg
              viewBox="0 0 636 899"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label="Poster reconstruction reading always remember the beginning with real text, vector scribble outlines, and separated sticker elements."
              style={{ fontFamily: "var(--font-case-001-display)" }}
            >
              <rect width="636" height="899" fill="#020202" />

              <g>
                <PosterTextBlock
                  x={38}
                  y={69}
                  size={50}
                  lineHeight={0.91}
                  lines={[
                    { text: "always" },
                    { text: "remember" },
                    { text: "the" },
                    { text: "beginning" },
                  ]}
                />
                <PosterTextBlock
                  x={431}
                  y={68}
                  size={50}
                  lineHeight={0.91}
                  lines={[
                    { text: "always" },
                    { text: "remember" },
                    { text: "the" },
                    { text: "beginning" },
                  ]}
                />
                <PosterTextBlock
                  x={38}
                  y={430}
                  size={50}
                  lineHeight={0.91}
                  lines={[
                    { text: "always" },
                    { text: "remember" },
                    { text: "the" },
                    { text: "beginning" },
                  ]}
                />
                <PosterTextBlock
                  x={454}
                  y={432}
                  size={45}
                  lineHeight={0.9}
                  lines={[
                    { text: "always" },
                    { text: "remember" },
                    { text: "the" },
                    { text: "Beginning", size: 52 },
                  ]}
                />
                <PosterTextBlock
                  x={319}
                  y={600}
                  size={47}
                  align="middle"
                  lineHeight={0.93}
                  lines={[
                    { text: "always" },
                    { text: "remember" },
                    { text: "the" },
                    { text: "beginning" },
                  ]}
                />
                <PosterTextBlock
                  x={38}
                  y={772}
                  size={50}
                  lineHeight={0.91}
                  lines={[
                    { text: "always" },
                    { text: "remember" },
                    { text: "the" },
                    { text: "beginning" },
                  ]}
                />
                <PosterTextBlock
                  x={431}
                  y={771}
                  size={50}
                  lineHeight={0.91}
                  lines={[
                    { text: "always" },
                    { text: "remember" },
                    { text: "the" },
                    { text: "beginning" },
                  ]}
                />
              </g>

              <g>
                <OutlineBlob points={topBlob} />
                <OutlineBlob points={leftRosette} />
                <OutlineBlob points={heroBlob} />
                <OutlineBlob points={lowerBloom} />
                <OutlineBlob points={lowerRightSticker} />
              </g>

              <TracedStrokeLayer />
              <SmileySticker />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
