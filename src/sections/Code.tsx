import Reveal from "../components/Reveal";
import GoldDust from "../components/GoldDust";

/* C.O.D.E. — CCC's tagline and operating framework.
   The four steps and their first-person lines are verbatim from the Build
   Back Black 90-day journal. Do not reword them.
   Rule from the CCC documents: C.O.D.E. must never appear as decorative
   letters without Claim, Observe, Do and Embody spelled out beside it. */
const STEPS = [
  { letter: "C", name: "Claim", line: "I accept the challenge." },
  { letter: "O", name: "Observe", line: "I face reality." },
  { letter: "D", name: "Do", line: "I take intentional action." },
  { letter: "E", name: "Embody", line: "I reflect, grow, and become." },
];

export default function Code() {
  return (
    <section className="grain relative overflow-hidden bg-foundation-soft px-5 py-28 sm:px-8 sm:py-36">
      <GoldDust className="opacity-60" density={0.7} />
      <div className="gold-glow left-1/2 top-1/3 h-[24rem] w-[42rem] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">The Framework</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              C.O.D.E.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              Every Crown Code Collective initiative follows the same four-step framework. C.O.D.E.
              transforms awareness into action and action into lasting practice.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.letter} delay={0.14 + i * 0.06}>
              <div className="flex h-full flex-col items-center bg-foundation px-6 py-10 text-center">
                <span className="font-display text-5xl leading-none text-gold/85">{s.letter}</span>
                <h3 className="mt-5 text-xs uppercase tracking-[0.3em] text-cream">{s.name}</h3>
                <p className="mt-4 font-display text-xl italic leading-snug text-sand/85">
                  {s.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-14 max-w-2xl text-center text-lg leading-relaxed text-sand/80">
            Every mission, program, partnership, and community initiative begins here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
