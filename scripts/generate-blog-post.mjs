#!/usr/bin/env node
/**
 * Automated daily blog post generator for aioverflow.com.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-blog-post.mjs
 *
 * Picks today's topic from a rotating list, calls OpenAI API to write a short
 * SEO-friendly post in AI Overflow's voice, writes it as a TypeScript file in
 * content/blog/posts/, then regenerates content/blog/index.ts.
 *
 * Designed to run inside GitHub Actions on a cron schedule.
 */

import { writeFileSync, readdirSync, mkdirSync } from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const POSTS_DIR = join(ROOT, "content", "blog", "posts");
const INDEX_PATH = join(ROOT, "content", "blog", "index.ts");

// ─── Topic rotation (picks by dayOfYear % length) ─────────────────────────
const TOPICS = [
  "Why most AI projects fail before they launch — and the one question that predicts success",
  "Agentic automation for operations teams: what works in 2025",
  "AI in clinical documentation: what's actually reducing physician burnout",
  "How to scope an AI project correctly before writing a single line of code",
  "The hidden costs of running LLMs in production nobody talks about",
  "AI for Indian SMBs: where to start without a dedicated tech team",
  "Retrieval-augmented generation explained for non-engineers",
  "Why pharmacy POS systems in India need to move beyond Excel",
  "Document automation: the unglamorous AI use case with the highest ROI",
  "How to evaluate an AI vendor without getting sold to",
  "The difference between AI agents and AI copilots — and when you need each",
  "When to use a small model vs a frontier model: a practical decision tree",
  "Building AI products that non-technical users actually trust",
  "Maritime tech: the business case for digitizing ship audits",
  "AI in healthcare: what clinicians trust and what they reject",
  "Why evals matter more than prompt engineering for production AI",
  "The AI implementation playbook for early-stage startups",
  "Reducing clinical admin load: the case for AI scribes in Indian hospitals",
  "Agentic AI: how to decide when automation should ask for human approval",
  "GST-ready billing software: what Indian medical shops need in 2025",
];

// ─── Author alternation ────────────────────────────────────────────────────
const AUTHORS = ["chethan-reddy", "subhanu-sankar-roy"];

// ─── Helpers ──────────────────────────────────────────────────────────────
function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

function toKebab(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60);
}

function toVarName(filename) {
  const base = basename(filename, ".ts");
  const stripped = base.replace(/^\d{4}-\d{2}-\d{2}-/, "");
  return stripped.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

// ─── OpenAI API call ──────────────────────────────────────────────────────
async function callOpenAI(systemPrompt, userMessage) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY is not set");

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      max_tokens: 2048,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`OpenAI API ${res.status}: ${body}`);
  }

  const data = await res.json();
  return data.choices[0].message.content;
}

// ─── Regenerate index.ts from posts directory ─────────────────────────────
function regenerateIndex() {
  const files = readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".ts"))
    .sort(); // alphabetical = date-prefixed files come out chronological

  const varNames = files.map(toVarName);

  const imports = files
    .map((f, i) => `import { post as ${varNames[i]} } from "./posts/${basename(f, ".ts")}";`)
    .join("\n");

  const arrayItems = varNames.join(", ");

  const content = `import type { BlogPost } from "./types";
${imports}

export type { BlogPost } from "./types";

// Source list. Order here doesn't matter — getAllPosts() sorts by date.
const all: BlogPost[] = [${arrayItems}];

export function getAllPosts(): BlogPost[] {
  return [...all].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return all.find((p) => p.slug === slug);
}

// ~200 words per minute, rounded, floored at 1.
export function readingTimeMinutes(body: string): number {
  const words = body.trim().split(/\\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatPostDate(iso: string): string {
  // Deterministic, locale-stable formatting (avoids hydration drift).
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return \`\${months[m - 1]} \${d}, \${y}\`;
}
`;

  writeFileSync(INDEX_PATH, content, "utf8");
  console.log(`index.ts regenerated (${files.length} posts)`);
}

// ─── Main ──────────────────────────────────────────────────────────────────
const today = new Date();
const doy = dayOfYear(today);
const topic = TOPICS[doy % TOPICS.length];
const authorSlug = AUTHORS[doy % AUTHORS.length];
const dateStr = today.toISOString().split("T")[0]; // YYYY-MM-DD

console.log(`AI Overflow Blog Generator`);
console.log(`Date: ${dateStr}`);
console.log(`Topic: ${topic}`);
console.log(`Author: ${authorSlug}`);
console.log("Calling OpenAI API...");

const systemPrompt = `You are a ghostwriter for AI Overflow, a two-person AI engineering company based in India.
We build production AI — both our own products (ScribeDesk for clinical documentation, Sell OS for pharmacy POS) and custom AI solutions for businesses.
Our founders are Subhanu Sankar Roy (AI & Engineering) and Chethan Reddy (Product & Operations).

Write a blog post for our website (aioverflow.com). Guidelines:
- Tone: direct, honest, expert but not academic. No jargon without explanation. No hyperbole.
- Voice: first-person plural (we/our). Speak as practitioners who build and run AI systems daily.
- Length: 450–550 words in the body field.
- Structure: a short opening that frames the problem, 2–3 sections with ## headings, a close with a CTA.
- The closing paragraph MUST include a link to our contact page in Markdown format: [your problem or goal here](/contact)
- No hallucinated statistics. No invented client names. No external citations needed.
- No listicle-bait titles or "X things you must know" framing.
- SEO: the title and description should be searchable but not keyword-stuffed.

Output ONLY valid JSON (no markdown fences, no commentary before or after), with this exact shape:
{
  "slug": "kebab-case-url-slug-max-60-chars",
  "title": "The post title",
  "description": "One sentence meta description, 120–155 chars",
  "tags": ["Tag One", "Tag Two", "Tag Three"],
  "body": "Full Markdown body string (use actual newline escapes \\n for line breaks)"
}`;

const userMessage = `Write a blog post on this topic: ${topic}

Today's date: ${dateStr}
Author (for context): ${authorSlug === "chethan-reddy" ? "Chethan Reddy (Product & Operations)" : "Subhanu Sankar Roy (AI & Engineering)"}

Remember: output ONLY the JSON object, nothing else.`;

let postData;
try {
  const raw = await callOpenAI(systemPrompt, userMessage);

  // Strip any accidental markdown fences
  const cleaned = raw.replace(/^```json\s*/i, "").replace(/\s*```$/, "").trim();
  postData = JSON.parse(cleaned);
} catch (err) {
  console.error("Failed to generate or parse post:", err.message);
  process.exit(1);
}

// Validate required fields
const required = ["slug", "title", "description", "tags", "body"];
for (const key of required) {
  if (!postData[key]) {
    console.error(`Missing field in Claude response: ${key}`);
    process.exit(1);
  }
}

// Build the full BlogPost object
const fullPost = {
  slug: toKebab(postData.slug),
  title: postData.title,
  description: postData.description,
  date: dateStr,
  authorSlug,
  tags: postData.tags,
  body: postData.body,
};

// Write the TypeScript post file
mkdirSync(POSTS_DIR, { recursive: true });
const filename = `${dateStr}-${fullPost.slug}.ts`;
const filePath = join(POSTS_DIR, filename);

const tsContent = `import type { BlogPost } from "../types";

export const post: BlogPost = ${JSON.stringify(fullPost, null, 2)};
`;

writeFileSync(filePath, tsContent, "utf8");
console.log(`Post written → content/blog/posts/${filename}`);

// Regenerate the index
regenerateIndex();

console.log(`\nDone. Post: "${fullPost.title}"`);
