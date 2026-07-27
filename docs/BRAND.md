# BRAND — the design system, and why it is what it is

The look of this site isn't decoration. Every choice below was made to carry
Crown Code Collective's meaning: recognition, lineage, and the ceremonial weight
of the stole. Read this before changing a color or a font — then change it if
the owner wants it changed. It's her brand.

All of it is defined in `src/index.css`.

---

## Color

| Role | Value | Where it shows |
|---|---|---|
| Foundation (warm black) | `#0A0A0A` | Page background — warm, not a cold pure black |
| Gold — shadow | `#9A7B1E` | Depth in gradients |
| Gold — core | `#C9A227` | The main gold: rules, accents, the crest |
| Gold — highlight | `#E8C547` | Shimmer and light |
| Pan-African red | `#B5232B` | **Punctuation only** — never a large field |
| Pan-African green | `#1E5631` | **Punctuation only** — the Partners path |
| Earth range | bronze · sand · cream · brown | Body text and warm surfaces |

The gold range is three values, not one. That's what makes the gold read as
metal catching light instead of a flat yellow. Replacing the three with one
color is the fastest way to make the site look cheap.

Red and green are used sparingly on purpose. Widened into large areas they stop
reading as heritage and start reading as decoration.

---

## Type

- **Fraunces** — display face. Headlines, the wordmark, the mission. A
  ceremonial serif, set with slightly negative letter-spacing (`-0.03em`) so
  large text sits tight and confident.
- **Geist** — body face. A humanist sans, chosen to be plain and readable
  underneath a ceremonial display face.

**There is exactly one italic on the entire site**: the mission statement on the
Home page. That's deliberate. Italics used once carry weight; used three times
they carry none. If you add a second italic, you've spent the first one.

---

## Texture

Flat color is avoided everywhere:

- Film grain over dark sections, plus a fixed page-level grain
- A paper-tooth texture on cream surfaces
- A soft gold radial glow behind focal points

This is what stops the site looking like a template. If a section ever looks
oddly flat next to the others, it's probably missing its grain layer.

---

## Motion

The register is **ceremonial restraint** — slow, continuous, never bouncy.

- The hero video loops natively and plays slightly slower than real time, so the
  moment feels longer than the clip is.
- The background breathes and drifts. Content does not.
- Gold dust drifts across dark sections.
- A helix spine draws itself down the left edge as you scroll.
- On the About page, 107 points of light gather into the crown — **107 is the
  number of HBCUs**, and the count is the point. Don't change it to a round
  number.
- Sections fade up once as they arrive. They don't animate again on the way out.

**Two rules learned the hard way during the build, worth keeping:**

1. **Cursor-following effects never go on text.** Text that shifts under the
   pointer feels unstable and cheap. Backgrounds may respond to the cursor;
   words stay still.
2. **Never play video in reverse to make a loop.** On footage of people it reads
   as a glitch — they walk backwards. Loop natively and slow the playback rate
   instead.

Everything respects the visitor's **reduced-motion** setting: if their device
asks for less animation, the hero falls back to a still image and the ambient
motion stops. Don't remove those fallbacks — some people get motion sickness,
and for others it's an accessibility requirement.

---

## The crest

The DNA-crown emblem is drawn as scalable artwork (`src/components/Emblem.tsx`)
so it stays crisp at any size: three helix columns with rungs, outer finials, an
S-curl and crescent topper, on a crown base.

⚠️ **It was rebuilt by eye from the artwork available at build time — it is not
an official logo file.** If Crown Code Collective has an official vector logo,
it should replace this. Ask before altering the crest by hand; it's the single
most identity-carrying element on the site.

---

## Voice

Short, certain lines. Plain words carrying weight. The thread running through
the writing is **recognition → return**: being seen, and coming back for the
next person.

Two standing rules for anyone writing new copy:

- **No invented quotes**, and nothing attributed to anyone who didn't say it.
- **No corporate filler.** The site was checked against a banned list —
  *empower, unlock, seamless, revolutionize, leverage, synergy, world-class,
  cutting-edge, innovate, transform.* None appear in the writing. Keep it that
  way; those words are exactly what makes a nonprofit site sound like every
  other nonprofit site.

The anchor line of the whole identity: **BSU is the mission. HBCU is the
vision.**
