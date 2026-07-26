import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * PingPongVideo  — now: smooth native loop (not ping-pong anymore).
 * --------------------------------------------------------------------------
 * Previously drove desktop playback via rAF currentTime stepping (forward
 * then reverse). That was CPU-heavy AND the reverse direction made the
 * loop read as a short jolt — people moving backward looks wrong.
 *
 * Now: native `autoPlay loop muted playsInline` on every device, with
 * `playbackRate` exposed via the `speed` prop for cinematic slowdowns.
 * Same component name kept so call sites don't change.
 *
 * Reduced motion → static poster only.
 */

export interface PingPongVideoSource {
  src: string;
  type: string;
}

interface PingPongVideoProps {
  sources: PingPongVideoSource[];
  poster: string;
  className?: string;
  /** playbackRate. <1 = slower/cinematic, 1 = native. */
  speed?: number;
}

export default function PingPongVideo({
  sources,
  poster,
  className,
  speed = 1,
}: PingPongVideoProps) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const v = videoRef.current;
    if (!v) return;
    v.loop = true;
    v.playbackRate = speed;
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };
    const applyRate = () => {
      v.playbackRate = speed;
    };
    if (v.readyState >= 2) {
      tryPlay();
      applyRate();
    } else {
      v.addEventListener('loadeddata', tryPlay, { once: true });
      v.addEventListener('loadeddata', applyRate, { once: true });
    }
    return () => {
      v.removeEventListener('loadeddata', tryPlay);
      v.removeEventListener('loadeddata', applyRate);
    };
  }, [reduceMotion, speed]);

  if (reduceMotion) {
    return <img src={poster} alt="" className={className} />;
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      playsInline
      autoPlay
      loop
      preload="auto"
    >
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  );
}
