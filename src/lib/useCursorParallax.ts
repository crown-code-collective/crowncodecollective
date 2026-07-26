import { useEffect, useState } from "react";

/**
 * useCursorParallax — page-level pointer drift for the hero headline/emblem
 * layer. Max ±range px. Disabled on touch devices and under reduced-motion.
 */
export function useCursorParallax(range = 12) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || touch) return;

    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x: nx * range, y: ny * range });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [range]);

  return offset;
}
