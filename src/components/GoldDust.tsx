import { useEffect, useRef } from "react";

/**
 * GoldDust — a living atmosphere layer. Warm gold motes drift slowly upward
 * through volumetric light, additively blended (the unicorn.studio
 * "gold-dust-in-darkness" register). Self-contained: fills its relative
 * parent, never captures pointer events.
 *
 * Performance: DPR capped at 2, particle count scaled to area, rAF paused
 * when the tab is hidden. Reduced-motion → a sparse static field, no loop.
 */
interface GoldDustProps {
  className?: string;
  /** density multiplier (1 = default) */
  density?: number;
  /** include the large slow light blooms */
  blooms?: boolean;
}

const GOLDS = [
  [232, 197, 71], // #E8C547
  [201, 162, 39], // #C9A227
  [216, 196, 160], // sand
];

export default function GoldDust({ className, density = 1, blooms = true }: GoldDustProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const densFactor = coarse ? 0.7 : 1; // richer atmosphere on mobile, still perf-aware
    const useBlooms = blooms;
    const dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 2);
    let w = 0;
    let h = 0;

    type P = { x: number; y: number; r: number; vy: number; vx: number; base: number; tw: number; c: number[] };
    let motes: P[] = [];
    type B = { x: number; y: number; r: number; vx: number; vy: number; c: number[] };
    let lightBlooms: B[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const seed = () => {
      const area = w * h;
      const count = Math.max(8, Math.min(90, Math.round((area / 26000) * density * densFactor)));
      motes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: rand(0.5, 2.4),
        vy: -rand(2, 10) / 60, // slow upward drift (px per frame ~)
        vx: rand(-3, 3) / 60,
        base: rand(0.12, 0.6),
        tw: Math.random() * Math.PI * 2,
        c: GOLDS[(Math.random() * GOLDS.length) | 0],
      }));
      lightBlooms = useBlooms
        ? Array.from({ length: 3 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: rand(w * 0.25, w * 0.5),
            vx: rand(-2, 2) / 60,
            vy: rand(-1.5, 1.5) / 60,
            c: GOLDS[(Math.random() * 2) | 0],
          }))
        : [];
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = rect?.width ?? canvas.clientWidth;
      h = rect?.height ?? canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const drawBlooms = () => {
      for (const b of lightBlooms) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},0.05)`);
        g.addColorStop(0.4, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},0.02)`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawMote = (p: P, alpha: number) => {
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
      g.addColorStop(0, `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${alpha})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
      ctx.fill();
    };

    let raf = 0;
    let t = 0;

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      drawBlooms();
      for (const b of lightBlooms) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;
      }
      t += 0.016;
      for (const p of motes) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) { p.y = h + 4; p.x = Math.random() * w; }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
        const alpha = p.base * (0.5 + 0.5 * Math.sin(t * 1.3 + p.tw));
        drawMote(p, alpha);
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(frame);
    };

    const staticFrame = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      drawBlooms();
      for (const p of motes) drawMote(p, p.base * 0.7);
      ctx.globalCompositeOperation = "source-over";
    };

    const onVisibility = () => {
      if (document.hidden) {
        if (raf) cancelAnimationFrame(raf), (raf = 0);
      } else if (!reduce && !raf) {
        raf = requestAnimationFrame(frame);
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    if (reduce) {
      staticFrame();
    } else {
      raf = requestAnimationFrame(frame);
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density, blooms]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}
