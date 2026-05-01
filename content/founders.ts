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

// TODO: replace placeholder photos / bios with real LinkedIn-sourced content
// once Chethan provides the LinkedIn URLs and copy.
export const founders: Founder[] = [
  {
    slug: "subhanu-sankar-roy",
    name: "Subhanu Sankar Roy",
    role: "Co-founder",
    shortBio: "Builds AI systems end-to-end — from research to production.",
    longBio:
      "Subhanu has led AI engineering across multiple national-finalist projects. At AI Overflow he leads product engineering for ScribeDesk and the core AI platform.",
    linkedin: "https://www.linkedin.com/in/subhanu-sankar-roy/",
    photo: "/founders/subhanu.jpg",
  },
  {
    slug: "chethan-reddy",
    name: "Chethan Reddy",
    role: "Co-founder",
    shortBio: "Ships products. Ten years across data, ML, and full-stack.",
    longBio:
      "Chethan leads product and operations at AI Overflow. He has shipped fifteen-plus products across healthcare, retail, and consumer AI, with a particular bias for fast iteration and tight feedback loops.",
    linkedin: "https://www.linkedin.com/in/chethan-reddy/",
    email: "aioverflow.ml@gmail.com",
    photo: "/founders/chethan.jpg",
  },
];
