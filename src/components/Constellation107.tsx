import { useEffect, useRef, useState } from "react";

/**
 * Constellation107 — 107 points of gold light scatter in and assemble into the
 * crown emblem, each light a single HBCU. A count-up 0→107 runs in sync. The
 * target points are sampled from the real emblem's alpha, so the lights truly
 * form the crown. Reduced-motion → formed crown + final number, no animation.
 */
const COUNT = 107;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Constellation107({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;

    type Pt = { sx: number; sy: number; tx: number; ty: number; r: number; tw: number };
    let pts: Pt[] = [];
    let targets: Array<[number, number]> = [];

    const layout = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // sample 107 gold points from the emblem alpha → crown-shaped targets
    const buildTargets = (cb: () => void) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const s = 240;
        const ar = img.width / img.height;
        const sw = ar >= 1 ? s : Math.round(s * ar);
        const sh = ar >= 1 ? Math.round(s / ar) : s;
        const off = document.createElement("canvas");
        off.width = sw; off.height = sh;
        const octx = off.getContext("2d");
        if (!octx) return cb();
        octx.drawImage(img, 0, 0, sw, sh);
        const data = octx.getImageData(0, 0, sw, sh).data;
        const gold: Array<[number, number]> = [];
        for (let y = 0; y < sh; y += 1) {
          for (let x = 0; x < sw; x += 1) {
            if (data[(y * sw + x) * 4 + 3] > 90) gold.push([x / sw, y / sh]);
          }
        }
        // shuffle and take COUNT
        for (let i = gold.length - 1; i > 0; i--) {
          const j = (Math.random() * (i + 1)) | 0;
          [gold[i], gold[j]] = [gold[j], gold[i]];
        }
        targets = gold.slice(0, COUNT);
        cb();
      };
      img.onerror = () => cb();
      img.src = "/emblem-mark.png";
    };

    const seed = () => {
      // fit crown into canvas with padding, centered
      const pad = 0.12;
      const cw = W * (1 - pad * 2);
      const ch = H * (1 - pad * 2);
      const scale = Math.min(cw, ch * 0.82);
      const ox = (W - scale) / 2;
      const oy = (H - scale * 1.18) / 2;
      pts = (targets.length ? targets : Array.from({ length: COUNT }, () => [Math.random(), Math.random()] as [number, number])).map(
        ([nx, ny]) => ({
          sx: Math.random() * W,
          sy: Math.random() * H,
          tx: ox + nx * scale,
          ty: oy + ny * scale * 1.18,
          r: 0.8 + Math.random() * 1.8,
          tw: Math.random() * Math.PI * 2,
        })
      );
    };

    const draw = (progress: number, t: number) => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      const e = easeOut(progress);
      for (const p of pts) {
        const x = p.sx + (p.tx - p.sx) * e;
        const y = p.sy + (p.ty - p.sy) * e;
        const tw = 0.55 + 0.45 * Math.sin(t * 1.6 + p.tw);
        const a = (0.35 + 0.65 * progress) * tw;
        const g = ctx.createRadialGradient(x, y, 0, x, y, p.r * 5);
        g.addColorStop(0, `rgba(232,197,71,${a})`);
        g.addColorStop(0.5, `rgba(201,162,39,${a * 0.5})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    let raf = 0, startTs = 0, running = false;

    const run = () => {
      const DUR = 2600;
      const tick = (ts: number) => {
        if (!startTs) startTs = ts;
        const elapsed = ts - startTs;
        const progress = Math.min(1, elapsed / DUR);
        draw(progress, ts / 1000);
        setN(Math.round(easeOut(progress) * COUNT));
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          // gentle twinkle loop after formation
          const idle = (it: number) => { draw(1, it / 1000); raf = requestAnimationFrame(idle); };
          raf = requestAnimationFrame(idle);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    layout();
    const ro = new ResizeObserver(() => { layout(); seed(); });
    ro.observe(wrap);

    buildTargets(() => {
      seed();
      if (reduce) { draw(1, 0); setN(COUNT); return; }
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !running) { running = true; run(); io.disconnect(); }
        },
        { threshold: 0.4 }
      );
      io.observe(wrap);
      draw(0, 0);
    });

    return () => { if (raf) cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <div ref={wrapRef} className={`relative ${className ?? ""}`}>
      <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center">
        <span className="font-display text-6xl leading-none text-gold sm:text-7xl" aria-label={`${COUNT} Historically Black Colleges and Universities`}>
          {n}
        </span>
      </div>
    </div>
  );
}
