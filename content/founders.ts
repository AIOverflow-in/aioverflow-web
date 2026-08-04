export type TeamGroupKey = "founders" | "design" | "engineering" | "strategy";

/** Render order of the groups on the team page. */
export const teamGroups: {
  key: TeamGroupKey;
  label: string;
  blurb: string;
}[] = [
  {
    key: "founders",
    label: "Founders",
    blurb: "Set direction, and stay hands-on through delivery.",
  },
  {
    key: "design",
    label: "Design",
    blurb: "How everything we ship looks and behaves.",
  },
  {
    key: "engineering",
    label: "Engineering",
    blurb: "Models, pipelines, and getting them running in the field.",
  },
  {
    key: "strategy",
    label: "Strategy",
    blurb: "Where our capabilities meet market and client priorities.",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  group: TeamGroupKey;
  /** One-line summary — this is what the card shows. */
  shortBio: string;
  /** Longer profile copy. Kept for per-person pages; not rendered today. */
  longBio?: string;
  /** Drives the Organization `founder` structured data in app/layout.tsx. */
  isFounder?: boolean;
  linkedin: string;
  twitter?: string;
  github?: string;
  email?: string;
  /** Optional: drop a headshot at public/founders/<file>; initials show until then. */
  photo?: string;
};

// One page, grouped by function — `group` places each person under a heading
// from teamGroups above. Photos: drop a headshot at public/founders/<file>
// (matching `photo` below); initials render until one exists.
export const team: TeamMember[] = [
  {
    slug: "subhanu-sankar-roy",
    name: "Subhanu Sankar Roy",
    role: "Co-founder — AI & Engineering",
    group: "founders",
    isFounder: true,
    shortBio: "AI engineer who builds systems that hold up under real users and real data.",
    longBio:
      "Subhanu leads AI & Engineering at AI Overflow — from model selection and evaluation to the infrastructure that keeps production systems running. He's placed top-3 at 10+ national hackathons and spent 2,000+ hours mentoring developers across ML and full-stack. Most at home turning a research idea into something that survives contact with real users.",
    linkedin: "https://www.linkedin.com/in/subhanusroy/",
    github: "https://github.com/AIOverflow-in",
    email: "subhanu12@gmail.com",
    photo: "/founders/subhanu.png",
  },
  {
    slug: "chethan-reddy",
    name: "Chethan Reddy",
    role: "Co-founder — Product & Operations",
    group: "founders",
    isFounder: true,
    shortBio: "Turns AI research into things businesses actually use.",
    longBio:
      "Chethan leads Product & Operations at AI Overflow, owning the full arc from first scoping call to live system. He's shipped across healthcare (ScribeDesk), retail (Sell OS), and maritime — 30+ projects delivered, with a bias for tight feedback loops and getting real value in front of users fast.",
    linkedin: "https://www.linkedin.com/in/achethanreddy/",
    github: "https://github.com/chethanreddy123",
    email: "achethanreddy1921@gmail.com",
    photo: "/founders/chethan.png",
  },
  {
    slug: "harsha-vardhan-reddy",
    name: "Harsha Vardhan Reddy",
    role: "Design",
    group: "design",
    shortBio:
      "Designs how our products look and behave — interfaces, brand, and the details users actually notice.",
    linkedin: "https://www.linkedin.com/in/harsha-vardhan-reddy-98a870278/",
    photo: "/founders/harsha-vardhan-reddy.jpg",
  },
  {
    slug: "purushoth-dl",
    name: "Purushoth DL",
    role: "Core AI Engineering",
    group: "engineering",
    shortBio:
      "Works on the core AI engineering — the models, pipelines, and evaluation behind our production systems.",
    linkedin: "https://www.linkedin.com/in/purushoth-dl-b2a5a52a7/",
    photo: "/founders/purushoth-dl.jpg",
  },
  {
    slug: "jacqueline-ekumba",
    name: "Jacqueline Ekumba",
    role: "Strategist",
    group: "strategy",
    shortBio:
      "Strategy — where our AI capabilities meet real market and client priorities.",
    linkedin: "https://www.linkedin.com/in/jacqueline-ekumba-3bba6890/",
    photo: "/founders/jacqueline-ekumba.jpg",
  },
  {
    slug: "nithin-kumar-reddy-thukakula",
    name: "Nithin Kumar Reddy Thukakula",
    role: "Core AI Engineer / AI Solution Implementer / Forward Deployed Engineer",
    group: "engineering",
    shortBio:
      "Builds the AI systems and takes them into the field — implementation through everyday use.",
    linkedin: "https://www.linkedin.com/in/nithin-kumar-reddy-thukakula/",
    photo: "/founders/nithin-kumar-reddy-thukakula.jpg",
  },
];

/** Co-founders only — used for Organization `founder` structured data. */
export const founders = team.filter((m) => m.isFounder);

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
