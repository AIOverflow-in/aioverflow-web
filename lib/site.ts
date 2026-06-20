// Canonical site origin. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. set it to the production domain in Vercel project settings).
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aioverflow.com"
).replace(/\/$/, "");
