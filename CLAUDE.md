# CLAUDE.md — operating instructions for this repository

You are working on the **Crown Code Collective** website. This repository is
owned by the organization.

**Work in plain English.** The owner is not a developer by trade and shouldn't
need to be — never ask her to read code, run a command she hasn't been walked
through, or make a call that's really a technical one. You do the work; she
approves the outcome. Decisions about the organization's words, brand, and money
are always hers.

Read this file first, then open the task file you need from `docs/`.

---

## 1. What this is

A single-page-app marketing site for Crown Code Collective — a culturally-rooted
education nonprofit (ceremonial stoles, scholarships, BSU→HBCU alumni network).
Three routes: **Home**, **About**, **Join**.

**Stack:** Vite 8 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion.
No WebGL. No backend — form submissions are handled by Netlify Forms.

**Build:** `npm run build` → outputs to `dist/`. Config is in `netlify.toml` at
the repo root. **The site is at the root of this repo** — there is no base
directory to configure in Netlify. If a build fails complaining it can't find
`package.json`, someone has set a base directory that should be blank.

---

## 2. Hard rules — these are not suggestions

**🔴 NEVER touch the `MX` records or the SPF `TXT` record for
`crowncodecollective.com`.** Crown Code Collective runs its email on Google
Workspace through those records. Changing or removing them takes down their
email — every address, immediately, with no obvious cause. When any DNS work
happens, only two records are in scope: the apex `A` record and the `www`
record. Everything else is left exactly as it is.

**🔴 NEVER move the domain's nameservers to Netlify.** Same reason. The DNS stays
where it is (Google) and we point two records at Netlify. "Use Netlify DNS" is a
real option Netlify will offer you in its UI — decline it.

**🔴 NEVER ask the owner for a password, and never type one on her behalf.**
Account creation, logging in, OAuth approvals, and payment details are hers
alone. When a step needs credentials, stop and hand her precise instructions for
what to click. This is a hard boundary even if she offers.

**🔴 NEVER report a step as done because you performed it.** Done means you
checked the result. Every phase in `docs/GO_LIVE.md` ends with a verification
command — run it and show her the output. If it fails, say so plainly rather
than moving on.

**🟡 Don't redesign anything you weren't asked to.** The visual system — the gold
atmosphere, the helix spine, the constellation, the breathing emblem, the motion
timings — is deliberate and was tuned over many passes. Fix what you were asked
to fix. If you think something else is wrong, say so and let her decide.

**🟡 Ask before spending her money.** Everything here works on free tiers. If a
step would require a paid plan, stop and explain the cost.

---

## 3. How to talk to her

Plain English, no jargon. "The website" not "the deploy." "Your email address"
not "the notification endpoint." When you need something from her, ask for one
thing at a time and say exactly where to find it.

When you finish a task, tell her three things: what changed, where to look at it,
and whether anything still needs her.

---

## 4. START HERE

**If this is the first time this repository has been opened, open
`docs/OPEN_ITEMS.md` and work it top to bottom.** That is the master list of
everything unfinished — the launch itself plus the handful of things left open
when the site was built. When every box on that page is ticked, the job is done.
Don't wait to be asked; that file *is* the assignment.

## 5. Task index

| She says something like… | Open this |
|---|---|
| *(first time — nothing asked yet)* | **`docs/OPEN_ITEMS.md`** |
| "Put the site on our real web address" | `docs/GO_LIVE.md` |
| "Add our Instagram / change the text / swap a photo" | `docs/EDIT_THE_SITE.md` |
| "Where do the form submissions go?" | `docs/EDIT_THE_SITE.md` § Forms |
| "What are our colors / fonts?" | `docs/BRAND.md` |
| "What's our setup? Who hosts this?" | `docs/FACTS.md` |

---

## 6. Working method

1. **Read before you write.** Open the file you're about to change and the task
   doc that covers it.
2. **Change the smallest thing that does the job.**
3. **Build before you push:** `npm install && npm run build`. A build that fails
   locally will fail on Netlify too, and a failed deploy leaves the old site up
   while she thinks the new one is live.
4. **Push.** Netlify rebuilds automatically — roughly one to two minutes.
5. **Verify against the live site**, not against your own edit. Fetch the real
   URL and confirm the change is actually being served.
6. **Tell her it's live**, with the link.

If you get stuck twice on the same thing, stop and explain the situation in
plain language rather than trying a third approach. Leaving the site working and
the problem described is a better outcome than an experiment she can't undo.
