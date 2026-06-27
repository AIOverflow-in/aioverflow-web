import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PostBody } from "@/components/blog/post-body";
import {
  getAllPosts,
  getPost,
  readingTimeMinutes,
  formatPostDate,
} from "@/content/blog";
import { founders } from "@/content/founders";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const author = founders.find((f) => f.slug === post.authorSlug);
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: author ? [author.name] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = founders.find((f) => f.slug === post.authorSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        url: `${siteUrl}/blog/${post.slug}`,
        keywords: post.tags.join(", "),
        author: author
          ? { "@type": "Person", name: author.name, url: author.linkedin }
          : { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Blog", item: `${siteUrl}/blog` },
          {
            "@type": "ListItem",
            position: 2,
            name: post.title,
            item: `${siteUrl}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="relative isolate overflow-hidden border-b border-border">
          <div aria-hidden className="absolute inset-0 line-grid opacity-60" />
          <div aria-hidden className="absolute inset-0 dot-grid dot-grid-mask" />
          <div aria-hidden className="absolute inset-0 spotlight-white" />

          <div className="container-page relative py-16 md:py-24">
            <Link
              href="/blog"
              className="link-underline inline-flex items-center gap-2 font-mono-label text-foreground/65 hover:text-foreground"
            >
              <ArrowLeft size={12} /> All posts
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="border border-border px-2.5 py-1 font-mono-label text-foreground/55"
                >
                  {t}
                </span>
              ))}
            </div>

            <h1 className="text-display mt-6 max-w-4xl text-4xl text-balance md:text-7xl">
              {post.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-label text-foreground/55">
              <span>{author?.name ?? "AI Overflow"}</span>
              <span aria-hidden>·</span>
              <span>{formatPostDate(post.date)}</span>
              <span aria-hidden>·</span>
              <span>{readingTimeMinutes(post.body)} min read</span>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="relative aspect-[3/2] w-full overflow-hidden border-b border-border sm:aspect-[16/7]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover grayscale"
              sizes="100vw"
            />
          </div>
        )}

        <div className="container-page py-16 md:py-24">
          <PostBody body={post.body} />
        </div>
      </article>

      <section className="border-t border-border py-20 md:py-28">
        <div className="container-page">
          <h2 className="text-display max-w-3xl text-4xl md:text-6xl">
            Got a workflow that might fit AI?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            We start with an honest discovery call — and tell you straight
            whether it&apos;s worth building.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Work with us <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              What we do
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
