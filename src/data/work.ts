/* The six Areas of Work, written out.
   Drafted 2026-07-28 at Natasha's instruction: the homepage named six areas
   and every one of them led nowhere, which reads as six promises and no
   product.

   TWO RULES WERE FOLLOWED HERE AND SHOULD KEEP BEING FOLLOWED:

   1. Nothing is described as finished unless it is finished. Every offering
      carries a `status`. "Available now" means a person can use it today.
      Anything else says so plainly. A nonprofit that overstates what it has
      is one email away from losing a partner's trust, and the fix costs
      nothing but honesty.

   2. Where Build Back Black is described, it uses the language of Natasha's
      welcome letter — an audit, not a financial literacy course. If that
      letter changes, change these words with it.

   The card copy on the homepage (sections/OurWork.tsx) is approved-verbatim
   and is NOT repeated here; these pages carry the long form. */

export type Status = "available" | "building" | "opening" | "planned";

export const STATUS_LABEL: Record<Status, string> = {
  available: "Available now",
  building: "In development",
  opening: "Opening this year",
  planned: "Planned",
};

export interface Offering {
  name: string;
  status: Status;
  body: string;
  href?: string;
  hrefLabel?: string;
}

export interface WorkArea {
  slug: string;
  index: number;
  title: string;
  eyebrow: string;
  lede: string;
  /** The long-form "what this actually is" — 2–4 paragraphs. */
  body: string[];
  offerings: Offering[];
  /** Who this area is for, in plain terms. */
  forWhom: string[];
  cta: { label: string; href: string };
}

export const WORK_AREAS: WorkArea[] = [
  {
    slug: "missions",
    index: 1,
    title: "Missions and Community Activations",
    eyebrow: "Area 01",
    lede: "Awareness is only the beginning. A mission is what turns it into something a community does together, on purpose, at the same time.",
    body: [
      "Most of us already know what is wrong. Knowing has not been the problem for a long time. What is missing is a way to act that does not depend on one person having unusual discipline — something with a start date, a shape, and other people doing it alongside you.",
      "That is what a mission is here. A defined period, a small number of specific actions, and a way to see what everyone's participation added up to when it is over. Missions are built so that a person can join without having to reorganize their life, and so that a group — a family, a church, a Black Student Union, a block — can run one together.",
      "Every mission follows C.O.D.E. You claim it, you observe honestly where you actually stand, you take intentional action, and you come back and reflect on what changed. The framework is the same one that runs through everything Crown Code Collective builds.",
    ],
    offerings: [
      {
        name: "BLACKOUT Activation Mission",
        status: "building",
        body: "A coordinated participation mission that asks you to examine your habits, redirect your attention, and take intentional action alongside everyone else running it. Designed to be run by an individual, a household, or an organized group. Currently being written; the first cohort has not opened.",
      },
      {
        name: "BLACKOUT Mission Kit",
        status: "planned",
        body: "The printable companion to the mission — the daily prompts, the tracking pages, and the group facilitation guide for someone leading others through it rather than running it alone.",
      },
      {
        name: "Future missions and public campaigns",
        status: "planned",
        body: "Missions are intended to be recurring rather than one-time. Later missions will focus on specific areas of community participation — economic, educational, civic — using the same structure.",
      },
    ],
    forWhom: [
      "Individuals who want a defined way to start",
      "Families running something together",
      "Black Student Unions and campus groups",
      "Churches, block groups, and community organizations",
    ],
    cta: { label: "Tell us you want in", href: "/join#individuals" },
  },

  {
    slug: "economics",
    index: 2,
    title: "Economic Education and Practice",
    eyebrow: "Area 02",
    lede: "An opportunity to stop participating in our own neglect.",
    body: [
      "We begin with economics because our money is one of the clearest ways to see our participation. We can track where it goes, who benefits from it, what it sustains, and how little of it returns to care for Black people.",
      "This is not another lesson about becoming more financially literate inside a system built to lock us out. We have spent enough time learning how to survive systems that were never designed with our security in mind. This is an audit.",
      "Where does our money go? Who receives our support? What are we helping build? What would become possible if we intentionally redirected even a portion of what we already spend toward Black businesses, Black institutions, Black families, and Black futures?",
      "We have intentionally contributed to everyone. Now we must become intentional about contributing to ourselves. And when we say self, we mean the collective. Build Back Black is where we stop, look honestly at our participation, and begin redirecting so we can exhale.",
    ],
    offerings: [
      {
        name: "Build Back Black Journal — Volume I",
        status: "building",
        body: "Forty-four undated pages that walk from your honest starting point through where your money actually goes, who receives it, what you own, and the letters you leave behind. Volume I is written and designed; it is in a final revision pass and has not been released.",
      },
      {
        name: "Build Back Black Digital Companion",
        status: "building",
        body: "The same journal, filled in your browser — type directly on the pages, save to your own device, and download your completed PDF. There is no account and no cloud. What you write about your finances never leaves your device.",
      },
      {
        name: "Build Back Black — the practice",
        status: "available",
        body: "The framework itself is free and always will be. Audit where your money goes. Redirect one recurring purchase toward a Black-owned business. Notice what that one change builds over a year. You do not need to buy anything to begin.",
      },
    ],
    forWhom: [
      "Anyone who has never once looked at where their money actually goes",
      "Families who want to talk about money out loud",
      "Groups running Build Back Black together",
      "Educators teaching economic participation",
    ],
    cta: { label: "Start with the practice", href: "/join#individuals" },
  },

  {
    slug: "business",
    index: 3,
    title: "Business Recognition, Visibility, and Connection",
    eyebrow: "Area 03",
    lede: "A dollar cannot be redirected toward a business nobody can find. This is the other half of the economic work.",
    body: [
      "Asking people to spend intentionally only works if there is somewhere to spend. Most of us can name two or three Black-owned businesses near us and could not name a tenth. The businesses exist; the connection does not.",
      "This area builds that connection from both directions. For the community, a way to find businesses worth returning to. For the business, a way to demonstrate what it actually contributes — not a badge you buy, but recognition tied to participation you can point at.",
      "Crown Score is being designed so that recognition means something. A business that has done the work should be distinguishable from a business that has paid a fee, or the recognition is worthless to everyone holding it.",
    ],
    offerings: [
      {
        name: "Crown Code Collective Business Directory",
        status: "building",
        body: "A searchable directory of participating businesses, built so a person redirecting a purchase can actually find somewhere to redirect it. Business listings are not yet open for submission.",
      },
      {
        name: "Crown Score",
        status: "building",
        body: "A structured evaluation of a business's community participation — how it hires, what it circulates, how it shows up. The scoring criteria are being written now, deliberately, because a rubric that can be gamed is worse than none.",
      },
      {
        name: "Crown Verified",
        status: "planned",
        body: "Recognition for businesses that complete Crown Score and meet the standard. Verification will be reviewed rather than automatic, and it will be renewable rather than permanent.",
      },
      {
        name: "Founding Builder Program",
        status: "opening",
        body: "For the businesses and supporters willing to be first — before the directory is full and before there is a crowd to join. Founding Builders help set the standard the rest of the program is measured against.",
      },
    ],
    forWhom: [
      "Black-owned businesses of any size",
      "Businesses that want their community participation to be visible",
      "Community members looking for somewhere to redirect a purchase",
      "Early supporters willing to help set the standard",
    ],
    cta: { label: "Register your interest", href: "/join#businesses" },
  },

  {
    slug: "recognition",
    index: 4,
    title: "Recognition and Leadership Development",
    eyebrow: "Area 04",
    lede: "Recognition is not a trophy. It is the moment a young person finds out that what they did counted, and that somebody was watching.",
    body: [
      "A great deal of the work that holds a community together is done by people nobody names. Students who kept a Black Student Union alive when the school would not staff it. The person who drives everyone. The one who shows up early and stays late. None of it appears on a transcript.",
      "This area exists to name that work while the person doing it is still there to hear it. Recognition here is tied to participation — something someone actually did — rather than to popularity or to who was in the room when the decision was made.",
      "It also runs the other direction. Being recognized is often the first time someone considers that they might lead. The leadership development work picks up where recognition leaves off: what do you do with it now that someone has told you it mattered?",
    ],
    offerings: [
      {
        name: "Student Recognition",
        status: "opening",
        body: "Recognition for students who carried something — a Black Student Union, a project, a younger student. Built with the ceremonial weight the moment deserves rather than a certificate printed the morning of.",
      },
      {
        name: "Participation Badges",
        status: "building",
        body: "A visible record of missions completed and work contributed, so participation accumulates into something a person can show rather than evaporating at the end of each activation.",
      },
      {
        name: "Leadership Recognition",
        status: "planned",
        body: "For the adults doing the same unnamed work — advisors, organizers, and the people who keep showing up for other people's children.",
      },
      {
        name: "Community Recognition",
        status: "planned",
        body: "Recognition for organizations, congregations, and groups whose participation strengthened something measurable in their own community.",
      },
      {
        name: "Leadership Development",
        status: "planned",
        body: "Practical development for people who have been recognized and are deciding what to do next — running a mission, leading a BSU, or building something of their own.",
      },
    ],
    forWhom: [
      "Students and Black Student Unions",
      "Advisors, educators, and youth leaders",
      "Schools and districts",
      "Community organizations and congregations",
    ],
    cta: { label: "Nominate or partner with us", href: "/join#schools" },
  },

  {
    slug: "education-media",
    index: 5,
    title: "Education, Media, and Public Engagement",
    eyebrow: "Area 05",
    lede: "Black history is our school. Black progress is our future. This is where the teaching happens.",
    body: [
      "One cannot stay in school forever. Eventually we have to live the major. But living it well requires knowing what actually happened — not the version that fits in a February assembly, and not a version so painful that people put the book down.",
      "The work in this area is educational and it is public. It covers what was built, what was taken, what was designated for us by others, and what we made of it anyway. It is written for people who were never handed the full record and are not interested in being lectured about it.",
      "Everything published here is intended to be usable — by a teacher on a Monday, by a parent at a kitchen table, by a student who asked a question nobody around them could answer.",
    ],
    offerings: [
      {
        name: "Educational Resources",
        status: "building",
        body: "Written and printable material on Black economic history, institutional history, and community participation — built to be handed to a classroom or a family rather than only read online.",
      },
      {
        name: "HBCU and Black Student Union education",
        status: "building",
        body: "Original research and writing on where HBCUs actually came from, what the designation legally means, why Black Student Unions were formed out of necessity, and why one exists to realize the other. Sourced rather than repeated.",
      },
      {
        name: "Workshops and Public Speaking",
        status: "available",
        body: "Sessions for schools, organizations, and community groups on economic participation, recognition, and building institutions that outlast the people who start them. Available now by request.",
        href: "/join#schools",
        hrefLabel: "Request a session",
      },
      {
        name: "Crown Code Media — podcast and video",
        status: "building",
        body: "Conversations and short-form teaching documenting community participation. The show is built and the first episode has not published; it will be linked here the day it does.",
      },
    ],
    forWhom: [
      "Teachers and school districts",
      "Students and Black Student Unions",
      "Parents and families",
      "Community organizations booking a speaker",
    ],
    cta: { label: "Bring this to your school", href: "/join#schools" },
  },

  {
    slug: "research",
    index: 6,
    title: "Research, Partnerships, and Community Infrastructure",
    eyebrow: "Area 06",
    lede: "Meaningful change should be visible, measurable, and repeatable. That means somebody has to keep the record.",
    body: [
      "It is easy to claim community impact and difficult to demonstrate it. Crown Code Collective is built on the position that participation should be counted, outcomes should be documented, and the results should be published whether or not they are flattering.",
      "That serves two purposes. It tells the communities doing the work what their participation actually produced. And it gives schools, funders, and partner organizations something real to evaluate rather than a mission statement and a hope.",
      "The partnership work exists so that programs are delivered through institutions people already trust — their school, their church, their organization — rather than asking every individual to find us on their own.",
    ],
    offerings: [
      {
        name: "Research Projects",
        status: "building",
        body: "Original research on Black economic circulation, institutional history, and the conditions under which community participation is sustained. The first projects are underway and nothing has been published yet.",
      },
      {
        name: "Public Reports",
        status: "planned",
        body: "Participation and outcome reporting, published openly. When there is data worth reporting, it will be posted here in full rather than summarized into a press release.",
      },
      {
        name: "School and District Partnerships",
        status: "available",
        body: "Bringing recognition, educational resources, and mission programming into schools through the people already doing the work there.",
        href: "/join#schools",
        hrefLabel: "Start a partnership",
      },
      {
        name: "Community, Business, and Organizational Partnerships",
        status: "available",
        body: "Working with congregations, nonprofits, businesses, and community groups to deliver programs through institutions their people already trust.",
        href: "/join#partners",
        hrefLabel: "Partner with us",
      },
      {
        name: "Grant Initiatives",
        status: "planned",
        body: "Crown Code Collective is a 501(c)(3) nonprofit organization, EIN 39-4418635. Grant-funded initiatives will be listed here as they are secured, along with what they funded.",
      },
    ],
    forWhom: [
      "Schools, districts, colleges and universities",
      "Nonprofits and community organizations",
      "Funders and grantmaking institutions",
      "Researchers and evaluation partners",
    ],
    cta: { label: "Become a partner", href: "/join#partners" },
  },
];

export function findWorkArea(slug: string) {
  return WORK_AREAS.find((a) => a.slug === slug);
}
