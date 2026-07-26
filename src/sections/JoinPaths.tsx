import Reveal from "../components/Reveal";
import { Link } from "../lib/router";

export default function JoinPaths() {
  return (
    <section className="grain relative overflow-hidden bg-foundation-soft px-5 py-28 sm:px-8 sm:py-36">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Join</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              Join Crown Code Collective
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              Two ways in. Both carry the crown forward.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Partners — green / earth accent */}
          <Reveal>
            <div className="group relative flex h-full flex-col border border-pan-green/40 bg-pan-green/[0.06] p-9 transition-colors duration-300 hover:border-pan-green/70">
              <span className="absolute left-0 top-0 h-full w-1 bg-pan-green/60" />
              <p className="text-xs uppercase tracking-[0.24em] text-pan-green" style={{ color: "#5a9c6e" }}>
                For Organizations
              </p>
              <h3 className="mt-4 font-display text-2xl text-cream">Network Partners</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-sand/80">
                For educators, organizations, mentors, businesses, alumni, and community leaders
                interested in partnership, collaboration, and community support.
              </p>
              <Link
                to="/join"
                className="mt-8 inline-flex w-fit items-center gap-2 border border-cream/30 px-6 py-3 text-sm uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Join as a Network Partner
              </Link>
            </div>
          </Reveal>

          {/* Alumni — gold accent */}
          <Reveal delay={0.08}>
            <div className="group relative flex h-full flex-col border border-gold/40 bg-gold/[0.05] p-9 transition-colors duration-300 hover:border-gold/80">
              <span className="absolute left-0 top-0 h-full w-1 bg-gold/70" />
              <p className="text-xs uppercase tracking-[0.24em] text-gold">For Those Who Walked</p>
              <h3 className="mt-4 font-display text-2xl text-cream">BSU Alumni Network</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-sand/80">
                For former BSU students and leaders who want to stay connected, mentor students,
                support future initiatives, and build community across generations.
              </p>
              <Link
                to="/join"
                className="mt-8 inline-flex w-fit items-center gap-2 bg-gold px-6 py-3 text-sm uppercase tracking-[0.14em] text-foundation transition-colors duration-300 hover:bg-gold-hi"
              >
                Join the BSU Alumni Network
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
