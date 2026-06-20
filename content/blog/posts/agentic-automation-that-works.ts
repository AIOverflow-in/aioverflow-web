import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "agentic-automation-that-actually-works",
  title: "Agentic automation, minus the hype",
  description:
    "An AI agent that acts is very different from a chatbot that talks. Here's where agentic automation genuinely earns its place — and where it quietly fails.",
  date: "2026-06-09",
  authorSlug: "subhanu-sankar-roy",
  tags: ["Agentic AI", "Automation", "Engineering"],
  body: `"Agent" is the most overloaded word in AI right now. It's been stapled to everything from a glorified chatbot to a fully autonomous system nobody should let near production. So let's be precise about what we mean — and where it actually works.

## A chatbot talks. An agent acts.

A chatbot answers a question and stops. An **agent** takes an objective, decides on the steps, and *does* them — calling tools, reading and writing data, and chaining multiple actions until the job is done.

The difference isn't the model. It's that an agent is wired into your systems and trusted to take actions, not just produce text. That's where the value is, and that's also where the risk is.

## Where agentic automation earns its place

The sweet spot is **multi-step, judgment-light, high-volume** work that a person currently shepherds by hand:

- **Inbox and ticket triage** — read incoming requests, classify them, route them, draft a first response, escalate the genuinely hard ones.
- **Document processing** — pull structured data out of invoices, forms, and PDFs, reconcile it against what's already in the system, flag the mismatches.
- **Operations follow-through** — chase the missing field, the unsigned form, the stalled order, so a human only sees the exceptions.

In each case the agent isn't being creative. It's being relentless and consistent about work that's beneath a person's attention but above a simple rule.

## Keep a human where it matters

The teams that succeed with agents are strict about one thing: **the agent does the work; a human owns the consequences.**

That means designing the boundary deliberately:

- Reversible, low-stakes steps → let the agent run.
- Irreversible or high-stakes steps (sending money, deleting records, emailing a customer something binding) → the agent *proposes*, a person *approves*.

Get that boundary right and you get most of the speed with none of the 3 a.m. incidents.

## Where it quietly fails

- **No ground truth.** If the agent can't verify whether it succeeded, errors compound silently. Build the check before the action.
- **Tools that lie.** An agent is only as good as the APIs it calls. Flaky, ambiguous, or under-documented tools produce confident nonsense.
- **Unbounded autonomy.** "Let it figure everything out" is a demo strategy, not a production one. Constrain the action space; widen it as trust is earned.

## How to start

Start with one workflow, one clear objective, and a tight action space. Put it in production behind a human-approval step. Watch where it gets stuck — that's your map for what to automate next.

We build agents this way on purpose: small, observable, and accountable, then compounded over time. It's less dramatic than the demos. It's also the version that's still running a year later.

Curious whether a workflow in your business is a fit for an agent? [Let's talk it through](/contact).`,
};
