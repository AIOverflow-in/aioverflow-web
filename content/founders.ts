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

// Photos: drop real headshots at public/founders/<file>.jpg (matching `photo` below)
// and they'll render automatically in place of the initials fallback.
export const founders: Founder[] = [
  {
    slug: "subhanu-sankar-roy",
    name: "Subhanu Sankar Roy",
    role: "Co-founder — AI & Engineering",
    shortBio: "Builds AI systems end to end, from research to production.",
    longBio:
      "Subhanu leads AI engineering at AI Overflow, owning the model and platform work behind ScribeDesk and the team's custom builds. He's most at home turning a research idea into something that holds up under real users and real data.",
    linkedin: "https://www.linkedin.com/in/subhanu-sankar-roy/",
    github: "https://github.com/AIOverflow-in",
    photo: "/founders/subhanu.jpg",
  },
  {
    slug: "chethan-reddy",
    name: "Chethan Reddy",
    role: "Co-founder — Product & Operations",
    shortBio: "Ships products. Years across data, ML, and full-stack.",
    longBio:
      "Chethan leads product and operations at AI Overflow, from first scoping call to the system running in production. He's shipped across healthcare, retail, and maritime, with a bias for tight feedback loops and getting real value in front of users early.",
    linkedin: "https://www.linkedin.com/in/chethan-reddy/",
    github: "https://github.com/chethanreddy123",
    email: "aioverflow.ml@gmail.com",
    photo: "/founders/chethan.jpg",
  },
];
