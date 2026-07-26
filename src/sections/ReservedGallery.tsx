import Reveal from "../components/Reveal";
import Emblem from "../components/Emblem";

/* Intentional RESERVED space — not a placeholder. A reverent home waiting for
   the first ceremony's photos and video. */
export default function ReservedGallery() {
  return (
    <section className="grain relative overflow-hidden bg-foundation px-5 py-28 sm:px-8 sm:py-36">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Moments to Come</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              This space is reserved for the first walk.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              Nothing here is missing. It is held open — on purpose — for the faces, the stoles, and
              the moments not yet lived. When the first ceremony comes, it already has a home.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div className="relative flex aspect-[4/5] items-center justify-center border border-gold/20 bg-gradient-to-b from-foundation-soft to-foundation">
                <div className="gold-glow inset-0 opacity-60" />
                <Emblem className="relative h-16 w-auto opacity-25" />
                <span className="absolute bottom-5 left-0 right-0 text-center text-[0.65rem] uppercase tracking-[0.28em] text-sand/60">
                  Reserved
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
