import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "../components/Reveal";
import Emblem from "../components/Emblem";

/* Four participation pathways, matching the homepage Participate section:
   Individuals, Businesses, Schools & Organizations, Supporters.

   NETLIFY FORMS: each form's `name` becomes its name in the Netlify dashboard.
   New forms are only detected on a deploy AFTER form detection is enabled —
   it is already on, so a normal push is enough. The email notification is set
   to "any form", so all four inherit it without further configuration.

   `partners` is kept as the form name for Schools & Organizations so the
   existing submissions and notification history stay attached to it.

   The old `alumni` form has been retired from this page: BSU alumni is a
   program, not an organization-wide entry point. Its past submissions remain
   in the Netlify dashboard under `alumni`. */

type Field = { name: string; label: string; type?: string; optional?: boolean };

const COMMON: Field[] = [
  { name: "name", label: "Name" },
  { name: "email", label: "Email", type: "email" },
  { name: "location", label: "City / State" },
];

const INDIVIDUAL_FIELDS: Field[] = [
  ...COMMON,
  { name: "interest", label: "What brings you here" },
  { name: "social", label: "Social Media", optional: true },
];

const BUSINESS_FIELDS: Field[] = [
  { name: "name", label: "Your Name" },
  { name: "business", label: "Business Name" },
  { name: "email", label: "Email", type: "email" },
  { name: "location", label: "City / State" },
  { name: "business-type", label: "Type of Business" },
  { name: "website", label: "Website or Social", optional: true },
];

const ORGANIZATION_FIELDS: Field[] = [
  { name: "name", label: "Name" },
  { name: "organization", label: "School or Organization" },
  { name: "email", label: "Email", type: "email" },
  { name: "location", label: "City / State" },
  { name: "partnership-interest", label: "Partnership Interest" },
  { name: "social", label: "Website or Social", optional: true },
];

const SUPPORTER_FIELDS: Field[] = [
  ...COMMON,
  { name: "support-type", label: "How you'd like to support" },
  { name: "social", label: "Website or Social", optional: true },
];

const PATHWAYS = [
  {
    id: "individuals",
    eyebrow: "For Individuals",
    title: "Individuals",
    blurb:
      "Participate in missions, use Crown Code resources, discover participating businesses, and strengthen your community through intentional action.",
    formName: "individuals",
    fields: INDIVIDUAL_FIELDS,
    button: "Start Here",
    done: "You're in. We'll send you the next mission and the resources to work through it.",
  },
  {
    id: "businesses",
    eyebrow: "For Businesses",
    title: "Businesses",
    blurb:
      "Join the Business Directory, complete Crown Score, earn Crown Verified recognition, and become part of a growing community network.",
    formName: "businesses",
    fields: BUSINESS_FIELDS,
    button: "Join as a Business",
    done: "Received. We'll be in touch about the directory listing and the Crown Score process.",
  },
  {
    id: "organizations",
    eyebrow: "For Schools & Organizations",
    title: "Schools & Organizations",
    blurb:
      "Partner with Crown Code Collective to bring educational resources, missions, leadership development, and community engagement opportunities to your organization.",
    formName: "partners",
    fields: ORGANIZATION_FIELDS,
    button: "Become a Partner",
    done: "Thank you. We'll reach out about bringing Crown Code resources and missions to your organization.",
  },
  {
    id: "supporters",
    eyebrow: "For Supporters",
    title: "Supporters",
    blurb:
      "Support the work through partnerships, sponsorships, volunteering, advocacy, or financial contributions.",
    formName: "supporters",
    fields: SUPPORTER_FIELDS,
    button: "Support the Mission",
    done: "Thank you. We'll follow up with the ways your support can go furthest right now.",
  },
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

function JoinForm({
  formName,
  fields,
  button,
  done,
}: {
  formName: string;
  fields: Field[];
  button: string;
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

  if (submitted) {
    return (
      <div className="relative flex min-h-[26rem] flex-col items-center justify-center border border-gold/40 bg-foundation-soft p-10 text-center">
        <div className="gold-glow inset-0 opacity-70" />
        <Emblem className="relative h-16 w-auto" />
        <p className="relative mt-7 font-display text-2xl text-cream">Received.</p>
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
      className="relative border border-gold/25 bg-foundation-soft p-7 sm:p-9"
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
            <label
              htmlFor={`${formName}-${f.name}`}
              className="mb-2 block text-xs uppercase tracking-[0.16em] text-sand/70"
            >
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
        className="mt-8 w-full bg-gold px-7 py-4 text-sm font-medium uppercase tracking-[0.14em] text-foundation transition-all duration-300 hover:bg-gold-hi"
      >
        {button}
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
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Find Your Path</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display font-display-tight text-4xl leading-[1.08] text-cream sm:text-6xl">
              Everyone Has a Place
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
              Four ways to enter the work. Choose the one that fits your role, and we'll take it
              from there.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-2">
              {PATHWAYS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="text-xs uppercase tracking-[0.18em] text-sand/75 transition-colors hover:text-gold"
                >
                  {p.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      <section className="grain relative px-5 pb-32 sm:px-8">
        <div className="relative mx-auto max-w-5xl space-y-20">
          {PATHWAYS.map((p, i) => (
            <div key={p.id} id={p.id} className="scroll-mt-28">
              <Reveal delay={i === 0 ? 0 : 0.04}>
                <div className="grid gap-8 border-t border-gold/15 pt-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-gold">{p.eyebrow}</p>
                    <h2 className="mt-3 font-display text-2xl text-cream sm:text-[1.9rem]">
                      {p.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-sand/80">{p.blurb}</p>
                  </div>
                  <JoinForm
                    formName={p.formName}
                    fields={p.fields}
                    button={p.button}
                    done={p.done}
                  />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
