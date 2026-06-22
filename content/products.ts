export type ProductDemo =
  | { kind: "iframe"; src: string; title: string }
  | { kind: "video"; poster: string; src: string }
  | { kind: "mock"; component: "scribedesk" | "sellos" }
  | { kind: "screenshots"; images: { src: string; alt: string }[] };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "beta" | "coming-soon";
  industry: string;
  accent: string;
  url?: string;
  features: { title: string; description: string }[];
  demo: ProductDemo;
  cta: { label: string; href: string };
  // Trust / reliability block — honest, non-over-claimed. `note` invites the
  // deeper conversation (compliance, uptime) rather than asserting certs/SLAs.
  trust?: {
    label: string;
    title: string;
    points: string[];
    note: string;
  };
};

// Our own brands — built and operated by AI Overflow.
export const products: Product[] = [
  {
    slug: "scribedesk",
    name: "ScribeDesk",
    tagline: "Clinical documentation that writes itself.",
    description:
      "An AI clinical scribe that records the consultation and generates structured documentation in real time — SOAP notes, prescriptions, follow-up tasks, and billing codes — so clinicians can focus on the patient, not the chart.",
    status: "beta",
    industry: "Healthcare",
    accent: "#22d3a4",
    features: [
      {
        title: "Real-time medical transcription",
        description:
          "Streams the consultation to a medical-grade speech model, transcribing live as the clinician speaks — with auto-resume if the connection drops.",
      },
      {
        title: "Structured SOAP & beyond",
        description:
          "Generates the SOAP note, extracts vitals, suggests prescriptions with drug-interaction checks, and drafts a follow-up task list — ready to review and sign.",
      },
      {
        title: "Codes, exports & after-visit summaries",
        description:
          "ICD-10 and CPT code suggestions, EHR-formatted exports, PDF reports, and a plain-English summary for the patient — one click each.",
      },
    ],
    demo: { kind: "mock", component: "scribedesk" },
    cta: { label: "Book a demo", href: "/contact?product=scribedesk" },
    url: "https://scribedesk.app/",
    trust: {
      label: "Built for clinical trust",
      title: "A clinician is always in the loop.",
      points: [
        "ScribeDesk drafts — the clinician reviews and signs every note. It never decides on its own.",
        "Decision support, not a substitute for clinical judgement.",
        "Recording is explicit and controlled by the clinician, never ambient or hidden.",
        "Every note is attributable, with a full history of what was generated and edited.",
      ],
      // TODO(chethan): confirm the exact compliance posture before publishing —
      // data residency, DPDP stance, encryption at rest, retention, BAA availability.
      note: "Evaluating a clinical pilot? Ask us about data residency, DPDP compliance, and a data-processing agreement — we'll put it in writing before any real patient data is involved.",
    },
  },
  {
    slug: "sellos",
    name: "Sell OS",
    tagline: "A fast, GST-ready POS for Indian medical shops.",
    description:
      "A minimalist, multi-tenant point-of-sale built for Indian pharmacies and medical shops. Billing, batch-level inventory, customer history, and GST-ready reports — fast enough to keep up with a busy counter.",
    status: "beta",
    industry: "Retail",
    accent: "#a78bfa",
    url: "https://www.sellos.in/",
    features: [
      {
        title: "Counter-speed billing",
        description:
          "A keyboard-first billing flow designed to move as fast as the queue does, with batch and expiry tracking baked into every line item.",
      },
      {
        title: "Inventory & batch intelligence",
        description:
          "Real-time stock across products and batches, with the signals a pharmacy actually needs — low stock, near-expiry, and reorder cues.",
      },
      {
        title: "GST-ready reports, multi-tenant",
        description:
          "Each shop runs in its own isolated tenant, with GST reports ready to file and a super-admin view for operators running many stores.",
      },
    ],
    demo: { kind: "mock", component: "sellos" },
    cta: { label: "Book a demo", href: "/contact?product=sellos" },
    trust: {
      label: "Reliable at the counter",
      title: "Your shop, your data.",
      points: [
        "Your GST data is yours — export it anytime, in full.",
        "Keyboard-first billing built to keep pace with a busy evening counter.",
        "Multi-tenant by design — each shop's data is isolated from every other.",
      ],
      // TODO(chethan): confirm real uptime / offline-billing / support-hours story before publishing.
      note: "Currently in beta with pilot pharmacies. Before you switch your counter over, ask us about uptime, what happens if the internet drops, and support hours — straight answers, no fine print.",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Custom solutions we've built and run for clients. These are the proof that
// the services aren't theory — they're production systems with real users.
export type CaseStudy = {
  slug: string;
  name: string;
  client: string; // displayed; keep generic until the client consents to be named
  industry: string;
  status: "live" | "beta" | "coming-soon";
  summary: string;
  detail: string;
  outcomes: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "auditvault",
    name: "AuditVault",
    client: "A maritime audit consultancy",
    industry: "Maritime",
    status: "live",
    summary:
      "Replaced an email + file-transfer + spreadsheet workflow with one web platform for managing vessel audits end to end.",
    detail:
      "A maritime consultancy was running every ship inspection through email threads, WeTransfer links, and a shared spreadsheet. We built a single platform that tracks each audit through an eight-stage lifecycle, gives clients a self-serve portal to download their own reports, and enforces per-vessel access control. Designed for a senior, non-technical primary user — plain language, large type, and a layout that mirrors the spreadsheet the team already knew.",
    outcomes: [
      "5 audit types across an 8-stage tracked lifecycle",
      "Per-vessel access control, not just per-company",
      "Clients self-serve reports — no more file-transfer links",
    ],
  },
  {
    slug: "marinepulse",
    name: "MarinePulse",
    client: "Maritime operations",
    industry: "Maritime",
    status: "beta",
    summary:
      "A passage-planning and operations tool for maritime teams, built to bring structure to voyage workflows.",
    detail:
      "An operations-focused product for maritime teams, centered on passage planning and the day-to-day coordination of voyages — extending our work in the maritime domain alongside AuditVault.",
    outcomes: [
      "Structured passage-planning workflow",
      "Built on the same production stack as our other platforms",
    ],
  },
];
