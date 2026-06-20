export const company = {
  name: "AI Overflow",
  tagline: "We build AI that works.",
  // Short, used in nav/footer and as a meta fallback.
  description:
    "AI Overflow is a team of AI engineers who build production AI — both our own products and custom solutions for businesses. We figure out where AI genuinely fits your work, then design, build, and run the systems that get it done.",
  // One-liner for the services-first hero subhead.
  pitch:
    "We design AI workflows, ship agentic automation, and build custom AI products — and we run our own.",
  email: "aioverflow.ml@gmail.com",
  location: "India",
  foundedYear: 2021,
  social: {
    linkedin: "https://www.linkedin.com/company/ai-overflow/",
    github: "https://github.com/AIOverflow-in",
    twitter: "",
  },
  // Lead with the one un-fakeable thing: we operate our own AI products.
  // (Hackathon track record lives on /about as background, not as headline proof.)
  metrics: [
    { value: "4", label: "AI products running in production" },
    { value: "3", label: "Industries — clinical, retail, maritime" },
    { value: "100%", label: "Built & operated in-house" },
  ],
  // Kept for the /about "background" line — competitions placed in, not clients.
  competitionRecord: { finals: "20+", topThree: "10" },
  // What we sell. Services lead; "Custom AI products" is where our own-product
  // track record (ScribeDesk, RetailOS) becomes proof for client work.
  services: [
    {
      number: "01",
      title: "AI fit & discovery",
      summary: "We tell you the truth about whether AI belongs here.",
      body: "Before a line of code, we map your workflow and find the seam where AI changes the shape of the work — not just the speed of it. If AI isn't the right tool, we say so. If it is, you leave with a concrete plan and a sense of the payoff.",
      examples: [
        "A workflow teardown",
        "A build plan with effort & payoff",
        "An honest go / no-go",
      ],
    },
    {
      number: "02",
      title: "Agentic automation",
      summary: "Hand off the repetitive day-to-day to agents that act.",
      body: "We build agents that do the work, not just chat about it — triaging inboxes, processing documents, reconciling data, and driving multi-step tasks end to end. Reversible steps run on their own; anything irreversible waits for a human to approve.",
      examples: [
        "A Slack command that summarizes a thread",
        "A webhook that scores incoming leads",
        "An agent that reconciles invoices against your records",
      ],
    },
    {
      number: "03",
      title: "AI workflows & integration",
      summary: "AI wired into the tools you already run on.",
      body: "We configure the pipelines, retrieval, and model orchestration that connect AI to your existing systems — your data, your stack, your security boundaries — so it fits the way your team actually works.",
      examples: [
        "Retrieval over your own documents",
        "A model-agnostic pipeline you can audit",
        "AI actions inside your CRM or admin",
      ],
    },
    {
      number: "04",
      title: "Custom AI products",
      summary: "Full products, built and operated the way we build our own.",
      body: "From first prototype to running in production: we design, build, and operate complete AI applications. We do this for our own brands, and we do it for clients who need a real product, not a demo.",
      examples: [
        "A production web app, start to finish",
        "Ongoing operation, not just handover",
        "The same stack behind our own products",
      ],
    },
  ],
  // How we keep agentic systems safe — surfaced as a technical-trust block.
  agentPrinciples: [
    "Model-agnostic — we pick the right model per task, and you can swap it.",
    "Evals from day one, so we measure quality instead of guessing.",
    "An auditable cost-per-call — you always know what AI is costing you.",
    "Humans in the loop by default; autonomy is earned as accuracy is proven.",
    "Execution traces you can inspect — no black boxes.",
  ],
  // Honest framing: these are competitions and programs the team placed in or
  // took part in — NOT commercial partners or clients.
  recognition: [
    "Axis Bank",
    "Walmart",
    "Amadeus",
    "Bajaj Finserv",
    "Samsung",
    "Honeywell",
    "Dropbox",
    "Bitget",
  ],
  process: [
    {
      number: "01",
      title: "Find the seam.",
      body: "We start from the real workflow, not a model card — hunting for the one spot where AI changes the shape of the work. The brief comes from your users and your data.",
    },
    {
      number: "02",
      title: "Ship the smallest thing that works.",
      body: "Production from week one. Real users, real data, real failure modes. We optimize for tight feedback loops over polish, so value shows up early and risk surfaces fast.",
    },
    {
      number: "03",
      title: "Run it, then compound.",
      body: "We don't hand over a prototype and leave. We operate what we build, watch how it behaves in the wild, and keep tightening — for our own products and for yours.",
    },
  ],
  pullQuote: {
    text: "The hard part of AI isn't the model — it's the ten thousand product decisions that turn a model into something people use every day.",
    attribution: "AI Overflow, principle one",
  },
} as const;
