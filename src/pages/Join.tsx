import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "../components/Reveal";
import Emblem from "../components/Emblem";

type Field = { name: string; label: string; type?: string; optional?: boolean };

const PARTNER_FIELDS: Field[] = [
  { name: "name", label: "Name" },
  { name: "organization", label: "Organization" },
  { name: "email", label: "Email", type: "email" },
  { name: "location", label: "City / State" },
  { name: "partnership-interest", label: "Partnership Interest" },
  { name: "social", label: "Social Media", optional: true },
];

const ALUMNI_FIELDS: Field[] = [
  { name: "name", label: "Name" },
  { name: "school", label: "School" },
  { name: "graduation-year", label: "Graduation Year" },
  { name: "email", label: "Email", type: "email" },
  { name: "location", label: "City / State" },
  { name: "profession", label: "Profession or Interests" },
  { name: "social", label: "Social Media", optional: true },
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

function JoinForm({
  formName,
  fields,
  accent,
  done,
}: {
  formName: string;
  fields: Field[];
  accent: "gold" | "green";
  done: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = { "form-name": formName };
    fd.forEach((v, k) => (data[k] = String(v)));
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  const accentRing = accent === "gold" ? "border-gold/40" : "border-pan-green/40";
  const btn =
    accent === "gold"
      ? "bg-gold text-foundation hover:bg-gold-hi"
      : "bg-pan-green text-cream hover:brightness-125";

  if (submitted) {
    return (
      <div className={`relative flex min-h-[28rem] flex-col items-center justify-center border ${accentRing} bg-foundation-soft p-10 text-center`}>
        <div className="gold-glow inset-0 opacity-70" />
        <Emblem className="relative h-16 w-auto" />
        <p className="relative mt-7 font-display text-2xl text-cream">You're in the line.</p>
        <p className="relative mt-3 max-w-sm text-base leading-relaxed text-sand/80">{done}</p>
      </div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className={`relative border ${accentRing} bg-foundation-soft p-7 sm:p-9`}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="space-y-5">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={`${formName}-${f.name}`} className="mb-2 block text-xs uppercase tracking-[0.16em] text-sand/70">
              {f.label} {f.optional && <span className="text-sand/55">(optional)</span>}
            </label>
            <input
              id={`${formName}-${f.name}`}
              name={f.name}
              type={f.type || "text"}
              required={!f.optional}
              className="field"
            />
          </div>
        ))}
      </div>

      {error && (
        <p className="mt-5 text-sm text-pan-red">
          Something interrupted the send. Please try once more.
        </p>
      )}

      <button
        type="submit"
        className={`mt-8 w-full px-7 py-4 text-sm font-medium uppercase tracking-[0.14em] transition-all duration-300 ${btn}`}
      >
        {accent === "gold" ? "Join the BSU Alumni Network" : "Join as a Network Partner"}
      </button>
    </form>
  );
}

export default function Join() {
  return (
    <main className="relative overflow-hidden bg-foundation">
      <Emblem className="pointer-events-none absolute -left-24 top-40 h-[36rem] w-auto opacity-[0.035]" />

      <header className="grain relative px-5 pb-16 pt-40 sm:px-8 sm:pt-48">
        <div className="gold-glow left-1/2 top-28 h-72 w-[42rem] -translate-x-1/2" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Join</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display font-display-tight text-4xl leading-[1.08] text-cream sm:text-6xl">
              Take your place in the line.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sand/85">
              Two ways in. Stand behind the work as a partner, or step forward as an alum who makes
              sure the next graduate is seen.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="grain relative px-5 pb-32 sm:px-8">
        <div className="relative mx-auto grid max-w-5xl gap-7 md:grid-cols-2">
          <div id="partners">
            <Reveal>
              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.24em]" style={{ color: "#5a9c6e" }}>
                  For Organizations
                </p>
                <h2 className="mt-2 font-display text-2xl text-cream">Network Partners</h2>
              </div>
              <JoinForm
                formName="partners"
                fields={PARTNER_FIELDS}
                accent="green"
                done="We'll reach out about how your organization can fund stoles, open doors, and stand with the work."
              />
            </Reveal>
          </div>

          <div id="alumni">
            <Reveal delay={0.08}>
              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.24em] text-gold">For Those Who Walked</p>
                <h2 className="mt-2 font-display text-2xl text-cream">BSU Alumni Network</h2>
              </div>
              <JoinForm
                formName="alumni"
                fields={ALUMNI_FIELDS}
                accent="gold"
                done="Welcome back. We'll connect you to the next ceremony, and to the graduates who'll one day reach for your name."
              />
            </Reveal>
          </div>
        </div>

        {/* TODO (TAP-IN #1): set Netlify Form notification email in dashboard.
            Submissions currently capture to the Netlify Forms dashboard only. */}
      </section>
    </main>
  );
}
