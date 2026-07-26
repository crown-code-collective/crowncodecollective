# EDIT THE SITE — how to change things

For everyday changes after the site is live. If the site isn't live yet, go to
`docs/GO_LIVE.md` first.

---

## The loop, every time

1. Make the change.
2. `npm run build` — if this fails, the live site would fail too. Fix it here.
3. Commit and push.
4. Wait a minute or two. Netlify rebuilds by itself.
5. **Check the live site**, not your own edit:
   ```bash
   curl -sS https://crowncodecollective.com | grep -o "<title>[^<]*</title>"
   ```
6. Tell the owner what changed and where to look.

First time on a new machine, install first: `npm install`.
To preview locally while working: `npm run dev` → open the address it prints.

---

## Where things live

| Page | File |
|---|---|
| Home | `src/pages/Home.tsx` — assembles the sections below |
| About | `src/pages/About.tsx` — the writing is in this file directly |
| Join | `src/pages/Join.tsx` — the writing and both forms |

The Home page is built from these, in this order:

| Section on screen | File |
|---|---|
| The hero — family video, headline, buttons | `src/sections/Hero.tsx` |
| Intro paragraph under the hero | `src/sections/AboutIntro.tsx` |
| The core statement | `src/sections/CoreStatement.tsx` |
| Mission | `src/sections/Mission.tsx` |
| Pillars | `src/sections/Pillars.tsx` |
| The ways to join | `src/sections/JoinPaths.tsx` |
| Horizon | `src/sections/Horizon.tsx` |
| Reserved gallery | `src/sections/ReservedGallery.tsx` |

Shared across every page:

| Piece | File |
|---|---|
| Top navigation | `src/components/Header.tsx` |
| Footer, including social links | `src/components/Footer.tsx` |
| The crest / emblem | `src/components/Emblem.tsx` |
| Colors, fonts, textures | `src/index.css` |

---

## Social links

They start as placeholders — every one points at `"#"`, which means clicking
does nothing.

In `src/components/Footer.tsx`, near the top:

```tsx
const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook",  href: "#" },
  { label: "LinkedIn",  href: "#" },
  { label: "TikTok",    href: "#" },
];
```

Replace each `"#"` with the full web address, including `https://`:

```tsx
const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/theirhandle" },
  { label: "Facebook",  href: "https://www.facebook.com/theirpage" },
];
```

**Delete the lines for accounts that don't exist.** A footer with two working
links is better than four that go nowhere. The layout adjusts on its own.

After pushing, click each one on the live site. A typo here looks exactly like a
correct link until someone clicks it.

---

## Wording

Find the section in the table above, open the file, and change the text between
the tags. The words are written plainly in the files — you're looking for the
sentence, not for code.

Two things to leave alone unless asked:

- **`className="…"`** — that's the styling. Changing it changes the design.
- The **one italic phrase** in the Mission section. It's deliberate: the site
  uses italics exactly once, so that moment carries weight.

---

## Photos and the hero video

The hero is a video with a still image behind it, in `public/media/`:

| File | What it is |
|---|---|
| `hero-family.mp4` | The video, for most browsers |
| `hero-family.webm` | The same video, smaller, for browsers that prefer it |
| `hero-poster.jpg` | The still shown before the video loads, and to anyone who has reduced-motion turned on |

To swap the hero, replace all three, keeping the same filenames. **All three, or
some visitors see the old one.** Keep them wide (16:9) — a tall image gets
cropped badly. There's a conversion helper at
`scripts/convert-scroll-scrub.ps1` if you need to produce the `.webm`.

The crest images are `public/emblem-full.png` and `public/emblem-mark.png`.
If Crown Code Collective ever supplies an official vector logo, that's the file
to replace — ask before changing the crest, it's the heart of the brand.

---

## Forms

The two forms are on the Join page: **`partners`** (partnership interest) and
**`alumni`** (alumni network).

**Where submissions go:** Netlify → the site → **Forms**. They are stored there
whether or not anyone is emailed about them.

**To change who gets notified:** Netlify → **Forms** → **Form notifications** →
edit the email notification. That's a dashboard setting, not a code change.

**If submissions stop appearing:** the cause is almost always a deploy that
happened before the Forms feature was enabled. Turn Forms on, then push an empty
commit to trigger a fresh deploy:

```bash
git commit --allow-empty -m "Redeploy to re-detect forms"
git push
```

**To add a field to a form:** add it inside the `<form>` in
`src/pages/Join.tsx`, giving it a `name`. Netlify picks up new fields on the
next deploy. Don't remove the hidden `form-name` field or the `bot-field`
honeypot — the first makes the form work, the second blocks spam.

---

## Colors and fonts

Both are defined in `src/index.css`.

The palette is a locked brand system — see `docs/BRAND.md` before changing a
color. The gold isn't decoration; it carries the ceremonial meaning of the
stoles. Change it only if the owner asks directly.

---

## If something breaks

The last working version is always one command away:

```bash
git log --oneline -10        # find the last good commit
git revert <commit-id>       # undo it safely, keeping the history
git push
```

Netlify also keeps every previous deploy. In the Netlify dashboard, under
**Deploys**, any earlier one can be published again in a single click — the
fastest way to put the site back while you work out what went wrong.
