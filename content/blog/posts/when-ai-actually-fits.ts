import type { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "when-ai-actually-fits-your-business",
  title: "How to tell if AI actually fits your business",
  description:
    "Most AI projects fail before the first model call — because nobody asked whether AI was the right tool. Here's the honest test we run before we build anything.",
  date: "2026-06-17",
  authorSlug: "chethan-reddy",
  tags: ["AI strategy", "AI for business", "Discovery"],
  body: `Every week, someone asks us to "add AI" to their business. Almost as often, the most useful thing we can say is: not yet, or not here.

That's an unusual sales pitch for an AI company. But the fastest way to waste a budget is to point a model at a problem that didn't need one — and the AI industry has gotten very good at encouraging exactly that.

So before we write a line of code, we run a short, honest test. Here's how it works.

## The wrong question

The wrong question is "where can we use AI?" Ask it and you'll get a list of places AI is *possible* — which is everywhere, and therefore useless.

It leads to demos that impress in a meeting and quietly get abandoned three weeks later, because they automated something nobody actually struggled with.

## The right question: where's the seam?

The better question is: **where does AI change the *shape* of the work, not just its speed?**

We call that the seam — the single point in a workflow where the bottleneck isn't effort, it's something only judgment, language, or pattern-recognition can unblock. A few signs you've found one:

- A person spends hours turning messy, unstructured input (calls, documents, emails) into structured output.
- The task is repetitive but not *rule-based* enough for ordinary automation to have already solved it.
- The cost of the work isn't the doing — it's the waiting, the queue, the "I'll get to it tomorrow."

When the seam is real, AI doesn't just make the task 20% faster. It removes the task.

## Three signs AI genuinely fits

1. **There's language or perception in the middle.** Transcribing a consultation, reading a contract, triaging a support inbox — work that lives in words or images is where modern models earn their keep.
2. **You have the data, or you generate it as a byproduct.** If the raw material already flows through your business, you're most of the way there. If you'd have to manufacture it, be skeptical.
3. **"Good enough, reviewed by a human" is acceptable.** AI is probabilistic. If a 95%-correct draft that a person checks is valuable, you're in great shape. If you need 100% with no human in the loop, tread carefully.

## Three signs it doesn't (yet)

- **The real problem is a process problem.** If the workflow is broken, AI will just break faster. Fix the process first; sometimes that's the whole project.
- **A spreadsheet or a script would do.** If deterministic rules cover the case, you don't need a model — you need an afternoon.
- **Nobody owns the outcome.** If no one inside the business is accountable for the result the AI produces, it won't get adopted, no matter how good it is.

> The hard part of AI isn't the model. It's the ten thousand product decisions that turn a model into something people use every day.

## How we run discovery

Our first engagement with anyone is a discovery call, not a build. We map the workflow, find the seam (or tell you there isn't one yet), and put a number on the payoff. You leave with a concrete plan and a clear answer — even when the answer is "don't."

If it does fit, the next step is small: the smallest thing that works, in production, in front of real users, fast. Everything compounds from there.

If you're staring at a workflow and wondering whether AI belongs in it, that's exactly the conversation we like to have. [Tell us what you're working on](/contact) — we'll tell you straight.`,
};
