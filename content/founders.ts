export type Founder = {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  longBio: string;
  linkedin: string;
  twitter?: string;
  github?: string;
  email?: string;
  photo: string;
};

/** Founding-team member card — lighter than a full founder profile. */
export type TeamMember = {
  slug: string;
  name: string;
  /** Optional: leave out until the real title is confirmed. */
  role?: string;
  linkedin: string;
  /** Optional: drop a headshot at public/founders/<slug>.png; initials show until then. */
  photo?: string;
};

// Photos: drop real headshots at public/founders/<file>.jpg (matching `photo` below)
// and they'll render automatically in place of the initials fallback.
export const founders: Founder[] = [
  {
    slug: "subhanu-sankar-roy",
    name: "Subhanu Sankar Roy",
    role: "Co-founder — AI & Engineering",
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
    shortBio: "Turns AI research into things businesses actually use.",
    longBio:
      "Chethan leads Product & Operations at AI Overflow, owning the full arc from first scoping call to live system. He's shipped across healthcare (ScribeDesk), retail (Sell OS), and maritime — 30+ projects delivered, with a bias for tight feedback loops and getting real value in front of users fast.",
    linkedin: "https://www.linkedin.com/in/achethanreddy/",
    github: "https://github.com/chethanreddy123",
    email: "achethanreddy1921@gmail.com",
    photo: "/founders/chethan.png",
  },
];

// Founding team beyond the two co-founders. `role` and `photo` are optional —
// add a title line and a headshot at public/founders/<slug>.png when ready.
const additionalTeam: TeamMember[] = [
  {
    slug: "harsha-vardhan-reddy",
    name: "Harsha Vardhan Reddy",
    linkedin: "https://www.linkedin.com/in/harsha-vardhan-reddy-98a870278/",
  },
  {
    slug: "purushoth-dl",
    name: "Purushoth DL",
    linkedin: "https://www.linkedin.com/in/purushoth-dl-b2a5a52a7/",
  },
  {
    slug: "jacqueline-ekumba",
    name: "Jacqueline Ekumba",
    linkedin: "https://www.linkedin.com/in/jacqueline-ekumba-3bba6890/",
  },
  {
    slug: "nithin-kumar-reddy-thukakula",
    name: "Nithin Kumar Reddy Thukakula",
    linkedin: "https://www.linkedin.com/in/nithin-kumar-reddy-thukakula/",
  },
];

/** Everyone in the founding team, co-founders first. Single source of truth. */
export const foundingTeam: TeamMember[] = [
  ...founders.map(({ slug, name, role, linkedin, photo }) => ({
    slug,
    name,
    role,
    linkedin,
    photo,
  })),
  ...additionalTeam,
];

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
