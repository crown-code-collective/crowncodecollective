import { useMemo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * HelixSpine — the skeleton of the site. A continuous gold double-helix runs
 * the full page height down the left rail; as you scroll, light travels the
 * strand (the bright layer "draws" from top to your scroll position) and a
 * glow node rides the tip. The DNA is the structure of the story, not decor.
 *
 * Mobile: slim left-edge rail (w-4); md+ full rail. Reduced-motion → fully-lit static strand.
 */
function buildRails(vw: number, vh: number, twists: number, samples = 220) {
  const cx = vw / 2;
  const half = vw * 0.32;
  const a: string[] = [];
  const b: string[] = [];
  const rungs: string[] = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const y = t * vh;
    const off = half * Math.sin(Math.PI * 2 * twists * t);
    a.push(`${(cx + off).toFixed(2)},${y.toFixed(2)}`);
    b.push(`${(cx - off).toFixed(2)},${y.toFixed(2)}`);
  }
  const rc = Math.round(twists * 2);
  for (let r = 0; r < rc; r++) {
    const t = (r + 0.5) / rc;
    const y = t * vh;
    const off = half * Math.sin(Math.PI * 2 * twists * t);
    if (Math.abs(off) > half * 0.5)
      rungs.push(`M${(cx + off).toFixed(2)} ${y.toFixed(2)} L${(cx - off).toFixed(2)} ${y.toFixed(2)}`);
  }
  return { a: "M" + a.join(" L"), b: "M" + b.join(" L"), rungs };
}

export default function HelixSpine() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const VW = 48;
  const VH = 2400;
  const { a, b, rungs } = useMemo(() => buildRails(VW, VH, 11), []);

  // bright layer draws from top (0) to current scroll position (progress)
  const dash = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const nodeTop = useTransform(scrollYProgress, [0, 1], ["1%", "99%"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-0 z-[2] w-4 md:w-12 lg:w-14"
    >
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        {/* dim base strand */}
        <g stroke="#9A7B1E" strokeOpacity="0.22" strokeLinecap="round" fill="none">
          <path d={a} strokeWidth="1.4" />
          <path d={b} strokeWidth="1.4" />
          {rungs.map((d, i) => (
            <path key={i} d={d} strokeWidth="1" strokeOpacity="0.16" />
          ))}
        </g>
        {/* bright lit strand — draws with scroll */}
        <g stroke="#E8C547" strokeLinecap="round" fill="none" style={{ filter: "drop-shadow(0 0 3px rgba(232,197,71,0.6))" }}>
          <motion.path
            d={a}
            strokeWidth="1.8"
            pathLength={1}
            strokeDasharray="1 1"
            style={reduce ? { strokeDashoffset: 0 } : { strokeDashoffset: dash }}
          />
          <motion.path
            d={b}
            strokeWidth="1.8"
            pathLength={1}
            strokeDasharray="1 1"
            style={reduce ? { strokeDashoffset: 0 } : { strokeDashoffset: dash }}
          />
        </g>
      </svg>

      {/* glow node riding the tip of the lit strand */}
      {!reduce && (
        <motion.div
          className="absolute left-1/2 h-6 w-6 md:h-10 md:w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            top: nodeTop,
            background:
              "radial-gradient(circle, rgba(232,197,71,0.55) 0%, rgba(201,162,39,0.18) 40%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
