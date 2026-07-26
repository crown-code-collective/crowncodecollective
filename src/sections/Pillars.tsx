import Reveal from "../components/Reveal";
import HelixSegment from "../components/HelixSegment";

const PILLARS = [
  { n: "01", title: "Student Recognition", body: "The stole on the shoulders. The name read aloud. The walk made to mean what it means." },
  { n: "02", title: "BSU Alumni Connection", body: "Those who already walked, reaching back — so the next graduate never reaches an empty hand." },
  { n: "03", title: "Leadership Visibility", body: "Seen at the front of the room, not the margin of it. Lifted up where others can find them." },
  { n: "04", title: "Ceremonial Experiences", body: "The moment marked, never rushed past. Ritual that tells a student: this counts, and so do you." },
  { n: "05", title: "Scholarships", body: "Weight lifted off the shoulders so the mind is free to rise. Tuition met. Doors held open." },
  { n: "06", title: "Cultural Events", body: "Heritage gathered into one room — music, language, food, story — and handed forward whole." },
  { n: "07", title: "Community Partnerships", body: "Concrete hands and concrete doors: schools, churches, businesses standing behind the work." },
  { n: "08", title: "Intergenerational Legacy", body: "Inherited, carried, passed down. The crown moves from one generation to the next, unbroken." },
];

export default function Pillars() {
  return (
    <section className="grain relative overflow-hidden bg-foundation px-5 py-28 sm:px-8 sm:py-36">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-20 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">What We're Building</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              Eight strands. One crown.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              Each part of the work is a strand in the same helix — wound around the others, holding
              the whole together. None of them stands alone.
            </p>
          </Reveal>
        </div>

        <div>
          {PILLARS.map((p, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal key={p.n} delay={0.04}>
                <div className="grid grid-cols-[36px_1fr] items-stretch gap-x-5 md:grid-cols-[1fr_60px_1fr] md:gap-x-0">
                  {/* spine cell */}
                  <div className="relative col-start-1 min-h-[7.5rem] md:col-start-2">
                    <HelixSegment className="absolute inset-0 h-full w-full" />
                    <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold bg-foundation shadow-[0_0_18px_rgba(201,162,39,0.5)]">
                      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-hi" />
                    </span>
                  </div>

                  {/* content cell */}
                  <div
                    className={[
                      "col-start-2 flex flex-col justify-center py-6",
                      "md:py-10",
                      right ? "md:col-start-3 md:pl-12 md:text-left" : "md:col-start-1 md:pr-12 md:text-right",
                    ].join(" ")}
                  >
                    <span className="font-display text-sm tracking-[0.2em] text-gold/70">{p.n}</span>
                    <h3 className="mt-2 font-display text-2xl text-cream sm:text-[1.7rem]">{p.title}</h3>
                    <p className={["mt-3 max-w-md text-base leading-relaxed text-sand/80", right ? "" : "md:ml-auto"].join(" ")}>
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
