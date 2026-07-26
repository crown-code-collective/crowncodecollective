import { useMemo } from "react";

/**
 * HelixSegment — one vertical double-helix segment, built to tile seamlessly
 * head-to-tail (both ends resolve to center). Used as the connective strand
 * running through the eight pillars: the section IS the helix, each pillar a
 * node on the strand.
 */
function rails(half: number, twists: number, h: number) {
  const N = 40;
  const cx = 20;
  const a: string[] = [];
  const b: string[] = [];
  const rungs: Array<[number, number, number]> = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const y = t * h;
    const off = half * Math.sin(Math.PI * 2 * twists * t);
    a.push(`${(cx + off).toFixed(1)},${y.toFixed(1)}`);
    b.push(`${(cx - off).toFixed(1)},${y.toFixed(1)}`);
  }
  const rc = Math.round(twists * 2);
  for (let r = 0; r < rc; r++) {
    const t = (r + 0.5) / rc;
    const y = t * h;
    const off = half * Math.sin(Math.PI * 2 * twists * t);
    if (Math.abs(off) > half * 0.45) rungs.push([cx + off, cx - off, y]);
  }
  return { a: "M" + a.join(" L"), b: "M" + b.join(" L"), rungs };
}

export default function HelixSegment({ className }: { className?: string }) {
  const h = 120;
  const { a, b, rungs } = useMemo(() => rails(11, 1.5, h), []);
  return (
    <svg viewBox={`0 0 40 ${h}`} fill="none" className={className} preserveAspectRatio="none" aria-hidden="true">
      <g stroke="#C9A227" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55">
        <path d={a} strokeWidth="2" />
        <path d={b} strokeWidth="2" />
        {rungs.map(([x1, x2, y], i) => (
          <path key={i} d={`M${x1.toFixed(1)} ${y.toFixed(1)} L${x2.toFixed(1)} ${y.toFixed(1)}`} strokeWidth="1.4" opacity="0.7" />
        ))}
      </g>
    </svg>
  );
}
