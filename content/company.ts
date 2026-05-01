export const company = {
  name: "AI Overflow",
  tagline: "An AI product studio.",
  description:
    "We design, build, and operate AI-native products under our own brands — from clinical scribe tools to retail intelligence platforms.",
  email: "aioverflow.ml@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/company/ai-overflow/",
    github: "https://github.com/ai-overflow",
    twitter: "",
  },
  metrics: [
    { value: "20+", label: "National & international finals" },
    { value: "10", label: "Top-3 finishes" },
    { value: "15+", label: "Products shipped" },
  ],
  partners: [
    "Dropbox",
    "Honeywell",
    "Amadeus",
    "Axis Bank",
    "Bajaj Finserv",
    "Samsung",
    "Tekie",
    "Walmart",
  ],
  process: [
    {
      number: "01",
      title: "Find the seam.",
      body: "We hunt for the spot where AI can change the shape of a workflow — not just speed it up. The brief comes from real users, not from a model card.",
    },
    {
      number: "02",
      title: "Ship the smallest thing that works.",
      body: "Production from week one. Real users, real data, real failure modes. We optimize for tight feedback loops over polish.",
    },
    {
      number: "03",
      title: "Compound.",
      body: "Every product is its own brand and team. We pick the ones with legs and double down — quietly, relentlessly, for years.",
    },
  ],
  pullQuote: {
    text: "The hard part of AI products isn't the model — it's the ten thousand product decisions that turn a model into something people use every day.",
    attribution: "AI Overflow, principle one",
  },
} as const;
