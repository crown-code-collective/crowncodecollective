# Crown Code Collective — the website

This repository holds the complete Crown Code Collective website. Everything the
site is made of is in here, and it belongs to Crown Code Collective.

**Live at:** https://crowncodecollective.com

---

## If you're not technical, read only this part

You don't need to understand any of the files in here. They're for the computer.

To change anything on the website — the wording, a photo, your social links, who
gets told when someone fills in a form — **open this folder in Claude Code and
say what you want in plain English.** For example:

> *"Add our Instagram link to the footer — it's instagram.com/ourhandle"*
>
> *"Change the paragraph on the About page, I'll paste the new wording"*
>
> *"Someone filled in the form but nobody got an email — fix that"*

It reads its own instructions from this repository and does the work, including
putting the change on the live website. It will tell you when the change is live
and give you the link to check.

### The very first time — say this

> *"Read CLAUDE.md, then work through docs/OPEN_ITEMS.md until everything is
> finished."*

That one sentence is the whole job: it puts the website on your real web
address, sets up your forms, fixes the few things left open when the site was
built, and doesn't stop until the list is finished.

It will pause and tell you whenever it needs something only you can do — signing
into an account, approving a permission screen, or answering a question about
your own organization. **It will never ask you for a password.** If anything
ever asks you for one on someone else's behalf, that's wrong; don't give it.

---

## What you own

| | |
|---|---|
| **The website code** | This repository. Yours. |
| **The hosting** | Netlify, on your own account, free tier |
| **The domain** | `crowncodecollective.com`, managed through your Google account |
| **Form submissions** | Netlify dashboard, plus an email whenever someone applies |

Nobody else needs to be involved to change any of it.

---

## One thing to be careful about

Your Crown Code Collective **email** runs on the same domain as the website, but
through different settings. Anyone working on the website — human or AI — should
leave the `MX` and `SPF` records alone. That rule is written into the
instructions in this repository, so anything following them will already know.

If someone ever suggests "moving your domain to Netlify" or "switching your
nameservers," the answer is no, and `docs/FACTS.md` explains why.

---

## The rest of the files

| File | What's in it |
|---|---|
| `CLAUDE.md` | The instructions Claude Code follows. It reads this automatically. |
| `docs/OPEN_ITEMS.md` | **The to-do list.** Everything still unfinished, with a box for each. |
| `docs/GO_LIVE.md` | The one-time setup: putting the site on the real web address |
| `docs/EDIT_THE_SITE.md` | How to change wording, photos, links, forms |
| `docs/BRAND.md` | Your colors, fonts, and the reasoning behind them |
| `docs/FACTS.md` | The technical setup — hosting, domain, records |

---

## For a developer

Vite 8 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion. No backend;
forms are Netlify Forms.

```bash
npm install
npm run dev      # local preview
npm run build    # production build → dist/
```

The site is at the **repo root** — `netlify.toml` is here, so Netlify needs no
base directory set. Push to `main` and Netlify deploys automatically.

---

© Crown Code Collective.
