import Reveal from "../components/Reveal";
import GoldDust from "../components/GoldDust";

/* WOKE — verbatim from the CCC statement graphics. Do not reword.
   Set in the poster face, not the site serif: this came from the merch
   voice and the contrast with the ceremonial type is deliberate.
   Placed low on the page, far from C.O.D.E. — the two are structurally
   identical (four letters, four lines) and read as a formula if adjacent. */
const WOKE = [
  { letter: "W", line: "Won't take it lying down." },
  { letter: "O", line: "Overcoming every obstacle." },
  { letter: "K", line: "Know who we are dealing with." },
  { letter: "E", line: "Every time, we win." },
];

export default function Woke() {
  return (
    <section className="grain relative overflow-hidden bg-foundation px-5 py-28 sm:px-8 sm:py-36">
      <GoldDust className="opacity-50" density={0.6} />

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Allow me to reteach you</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-poster mt-7 text-6xl text-cream sm:text-8xl">Woke:</h2>
        </Reveal>

        <dl className="mt-12 space-y-7">
          {WOKE.map((w, i) => (
            <Reveal key={w.letter} delay={0.12 + i * 0.07}>
              <div className="flex items-baseline gap-6 border-b border-gold/12 pb-6 sm:gap-10">
                <dt className="font-poster w-[1.6ch] shrink-0 text-5xl text-gold sm:text-6xl">
                  {w.letter}
                </dt>
                <dd className="font-poster text-2xl leading-tight text-cream sm:text-4xl">
                  {w.line}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
