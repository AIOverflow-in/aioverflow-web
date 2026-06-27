export type BlogPost = {
  slug: string;
  title: string;
  // Used as the meta description, OG description, and listing excerpt.
  description: string;
  // ISO date (YYYY-MM-DD) the post was published.
  date: string;
  // Matches a founder slug in content/founders.ts.
  authorSlug: string;
  tags: string[];
  // Markdown. Rendered with react-markdown + remark-gfm.
  body: string;
  // Hero image path (relative to /public). Auto-generated posts populate this.
  image?: string;
};
