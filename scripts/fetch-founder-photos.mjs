#!/usr/bin/env node
/**
 * Attempts to download LinkedIn profile photos for both founders and save them
 * to public/founders/. Run once, then commit the images.
 *
 * Usage:
 *   node scripts/fetch-founder-photos.mjs
 *
 * If LinkedIn blocks the scrape (they block most bots), you'll see a message
 * with manual instructions. The site displays initials as a fallback until
 * real photos are in place.
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "founders");

const founders = [
  {
    slug: "chethan",
    name: "Chethan Reddy",
    linkedin: "https://www.linkedin.com/in/achethanreddy/",
    outFile: "chethan.jpg",
  },
  {
    slug: "subhanu",
    name: "Subhanu Sankar Roy",
    linkedin: "https://www.linkedin.com/in/subhanusroy/",
    outFile: "subhanu.jpg",
  },
];

mkdirSync(OUT_DIR, { recursive: true });

async function fetchOgImage(profileUrl) {
  const res = await fetch(profileUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "en-US,en;q=0.9",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${profileUrl}`);
  const html = await res.text();

  // Try og:image first, then twitter:image
  const ogMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i)
    ?? html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:image"/i)
    ?? html.match(/<meta[^>]+name="twitter:image"[^>]+content="([^"]+)"/i);

  if (!ogMatch) throw new Error("No og:image found in page HTML");
  return ogMatch[1];
}

async function downloadImage(url, outPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} downloading image`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(outPath, buf);
  return buf.length;
}

console.log("AI Overflow — fetch founder photos from LinkedIn\n");
let allOk = true;

for (const f of founders) {
  const outPath = join(OUT_DIR, f.outFile);
  process.stdout.write(`${f.name} ... `);
  try {
    const imgUrl = await fetchOgImage(f.linkedin);
    const bytes = await downloadImage(imgUrl, outPath);
    console.log(`saved (${Math.round(bytes / 1024)} KB) → public/founders/${f.outFile}`);
  } catch (err) {
    allOk = false;
    console.log(`FAILED — ${err.message}`);
  }
}

if (!allOk) {
  console.log(`
─────────────────────────────────────────────────────
LinkedIn blocked the automated download (expected).

Manual steps to add your photos:
  1. Open your LinkedIn profile in Chrome
  2. Right-click your profile picture → "Save image as"
  3. Save to:  public/founders/chethan.jpg
               public/founders/subhanu.jpg
  4. git add public/founders && git commit -m "chore: add founder headshots"
  5. git push   (Vercel will redeploy automatically)

The site shows initials as a fallback until these files exist.
─────────────────────────────────────────────────────`);
} else {
  console.log("\nAll photos saved. Next: git add public/founders/ && git commit && git push");
}
