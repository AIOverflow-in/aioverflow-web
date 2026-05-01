export type ProductDemo =
  | { kind: "iframe"; src: string; title: string }
  | { kind: "video"; poster: string; src: string }
  | { kind: "mock"; component: "scribedesk" | "retailos" }
  | { kind: "screenshots"; images: { src: string; alt: string }[] };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "beta" | "coming-soon";
  industry: string;
  accent: string;
  features: { title: string; description: string }[];
  demo: ProductDemo;
  cta: { label: string; href: string };
};

export const products: Product[] = [
  {
    slug: "scribedesk",
    name: "ScribeDesk",
    tagline: "Clinical documentation that writes itself.",
    description:
      "ScribeDesk is an AI-powered clinical scribe that turns patient conversations into structured notes — letting clinicians focus on care, not charts.",
    status: "beta",
    industry: "Healthcare",
    accent: "#22d3a4",
    features: [
      {
        title: "Ambient capture",
        description:
          "Listens to consultations in real time and transcribes with medical-grade accuracy.",
      },
      {
        title: "Structured SOAP notes",
        description:
          "Automatically formats into Subjective, Objective, Assessment, Plan — ready to sign off.",
      },
      {
        title: "EHR-ready exports",
        description:
          "One-click handoff to your EHR with templated formatting per specialty.",
      },
    ],
    demo: { kind: "mock", component: "scribedesk" },
    cta: { label: "Book a demo", href: "/contact?product=scribedesk" },
  },
  {
    slug: "retailos",
    name: "RetailOS",
    tagline: "The operating system for modern retail.",
    description:
      "RetailOS unifies inventory, orders, and store ops into a single AI-augmented control plane — built for retailers who want to move faster than their spreadsheets allow.",
    status: "beta",
    industry: "Retail",
    accent: "#a78bfa",
    features: [
      {
        title: "Unified order desk",
        description:
          "Every channel, every order, in one place. AI triage flags exceptions before they become problems.",
      },
      {
        title: "Inventory intelligence",
        description:
          "Real-time stock signals across stores and warehouses, with reorder forecasts you can trust.",
      },
      {
        title: "Operations copilot",
        description:
          "Ask about today's numbers, yesterday's anomalies, or next week's restock — in plain English.",
      },
    ],
    demo: { kind: "mock", component: "retailos" },
    cta: { label: "Book a demo", href: "/contact?product=retailos" },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
