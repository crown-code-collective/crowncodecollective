import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PingPongVideo from "../components/PingPongVideo";
import GoldDust from "../components/GoldDust";
import { Link } from "../lib/router";

const ease = [0.22, 1, 0.36, 1] as const;

const HERO_SOURCES = [
  { src: "/media/hero-family.webm", type: "video/webm" },
  { src: "/media/hero-family.mp4", type: "video/mp4" },
];
const HERO_POSTER = "/media/hero-poster.jpg";

/** True below the `sm` breakpoint (640px). Drives the stacked mobile hero so
 * the full six-person landscape shows as a band instead of a cropped strip. */
function useIsNarrow() {
  const [narrow, setNarrow] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 639px)").matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const on = () => setNarrow(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return narrow;
}

export default function Hero() {
  const reduce = useReducedMotion();
  const narrow = useIsNarrow();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
  };
  const rise = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease } },
  };

  // Shared copy — only one layout mounts at a time, so reusing the motion
  // children is safe.
  const headline = (
    <motion.h1
      variants={rise}
      className="font-display font-display-tight text-[2rem] leading-[1.08] text-cream sm:text-5xl lg:text-6xl"
    >
      We are building community through{" "}
      <span className="text-gold">recognition, leadership, culture,</span> and educational
      perseverance.
    </motion.h1>
  );
  const sub = (
    <motion.p variants={rise} className="mt-6 max-w-xl text-base leading-relaxed text-sand/85 sm:text-lg">
      Crown Code Collective honors educational journeys through community recognition,
      ceremonial experiences, leadership visibility, and cultural connection.
    </motion.p>
  );
  const ctas = (
    <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        to="/join"
        className="group relative inline-flex items-center justify-center overflow-hidden bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-foundation transition-all duration-300 hover:bg-gold-hi"
      >
        <span className="relative z-10">Join the Network</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </Link>
      <Link
        to="/join"
        className="inline-flex items-center justify-center border border-cream/40 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:border-gold hover:text-gold"
      >
        BSU Alumni Network
      </Link>
    </motion.div>
  );

  // MOBILE (< sm): full-family image band on top, copy below on the dark.
  if (narrow) {
    return (
      <section className="relative w-full overflow-hidden bg-foundation pt-[76px]">
        {/* 2:1 frame — whole family visible (crops only sky/ground), shorter so
            the header and copy clear the fold. */}
        <div className="relative aspect-[15/8] w-full overflow-hidden">
          {/* entrance fade, then a slow continuous breathing scale so it's alive */}
          <motion.div
            className="h-full w-full"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
            transition={{ duration: 1.6, ease }}
          >
            <motion.div
              className="h-full w-full"
              animate={reduce ? {} : { scale: [1, 1.04, 1] }}
              transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
            >
              <PingPongVideo
                sources={HERO_SOURCES}
                poster={HERO_POSTER}
                speed={1}
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </motion.div>
          {/* Top scrim so the fixed header stays legible over the bright sky */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-foundation/90 via-foundation/35 to-transparent" />
          {/* Bottom fade into the foundation so copy reads as one piece */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foundation via-foundation/55 to-transparent" />
        </div>

        {/* Copy on the gold-dust dark */}
        <div className="relative px-5 pb-16 pt-7">
          <GoldDust className="z-[1]" density={0.9} blooms={false} />
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate={reduce ? {} : "show"}
            className="relative z-10"
          >
            {headline}
            {sub}
            {ctas}
          </motion.div>
        </div>
      </section>
    );
  }

  // DESKTOP (>= sm): cinematic full-bleed, copy overlaid on the lower third.
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-foundation">
      {/* Hero footage — GPT Image 2 family, animated by Kling 3.0 (job 816df103).
          Native forward loop @ 0.7x for cinematic feel. No cursor parallax on
          BG (mousemove + many transforms = lag). Continuous breathing only. */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08, opacity: 0 }}
        animate={reduce ? {} : { scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <motion.div
          className="h-full w-full"
          animate={reduce ? {} : { scale: [1, 1.06, 1], x: ["-1.5%", "1.5%", "-1.5%"] }}
          transition={{
            scale: { duration: 18, ease: "easeInOut", repeat: Infinity },
            x: { duration: 30, ease: "easeInOut", repeat: Infinity },
          }}
        >
          <PingPongVideo
            sources={HERO_SOURCES}
            poster={HERO_POSTER}
            speed={0.7}
            className="h-full w-full object-cover object-[34%_center]"
          />
        </motion.div>
      </motion.div>

      {/* Overlay stack — documentary footage: top scrim LOW so faces breathe. */}
      <div className="absolute inset-0 bg-gradient-to-b from-foundation/40 via-foundation/10 to-transparent" />
      {/* Lower-third headline-protect gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-foundation via-foundation/80 to-transparent" />

      {/* Drifting god-rays — slow warm light sweep */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute inset-0 z-[2] mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(105deg, transparent 36%, rgba(232,197,71,0.14) 46%, rgba(232,197,71,0.24) 50%, rgba(232,197,71,0.14) 54%, transparent 64%)",
            backgroundSize: "260% 100%",
          }}
          animate={{ backgroundPosition: ["120% 0%", "-40% 0%"] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
      )}
      {/* Subtle ceremonial gold glow, lower-center — gentle heartbeat */}
      {reduce ? (
        <div className="gold-glow bottom-[12%] left-1/2 h-72 w-[44rem] -translate-x-1/2" />
      ) : (
        <motion.div
          aria-hidden
          className="gold-glow bottom-[12%] left-1/2 h-72 w-[44rem] -translate-x-1/2"
          animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.05, 1] }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        />
      )}
      {/* Living gold-dust atmosphere */}
      <GoldDust className="z-[3]" density={1.0} />
      {/* Grain */}
      <div className="grain absolute inset-0" />

      {/* Copy layer */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-20 sm:px-8 sm:pb-24">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? {} : "show"}
          className="max-w-3xl"
        >
          {headline}
          {sub}
          {ctas}
        </motion.div>
      </div>

      {/* Scroll cue */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      )}
    </section>
  );
}
