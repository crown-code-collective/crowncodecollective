import Reveal from "../components/Reveal";

/* Declarations — verbatim from the CCC statement graphics. Do not reword.
   These are intended for merch; publishing them first is deliberate, so it
   is visible which lines people actually repeat back before anything is
   printed. Poster face, matching the graphics they came from. */
const DECLARATIONS = [
  { text: "I am not anti — I am aligned." },
  { text: "I do not have to be understood to be divine." },
  { text: "I choose myself without fear of consequence." },
  { text: "This body is no longer available for fear-based negotiation." },
];

export default function Declarations() {
  return (
    <section className="grain relative overflow-hidden bg-foundation-soft px-5 py-28 sm:px-8 sm:py-36">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">The Crown Code</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              Said plainly, and out loud.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {DECLARATIONS.map((d, i) => (
            <Reveal key={d.text} delay={0.06 * i}>
              <div className="relative flex h-full min-h-[15rem] items-center border border-gold/18 bg-foundation p-8 sm:p-10">
                <div className="gold-glow inset-0 opacity-40" />
                <p className="font-poster relative text-3xl leading-[1.05] text-cream sm:text-[2.4rem]">
                  {d.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
