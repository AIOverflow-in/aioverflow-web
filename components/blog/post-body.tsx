import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Bespoke renderer: maps Markdown to the site's B&W design system rather than a
// generic prose theme, so posts read like the rest of the site.
function MarkdownLink({ href = "", children }: ComponentPropsWithoutRef<"a">) {
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className="link-underline font-medium text-foreground">
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-underline font-medium text-foreground"
    >
      {children}
    </a>
  );
}

export function PostBody({ body }: { body: string }) {
  return (
    <div className="max-w-2xl text-lg leading-relaxed text-foreground/80">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-display mt-16 text-3xl text-foreground md:text-4xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-display mt-10 text-2xl text-foreground">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mt-6 text-pretty">{children}</p>,
          a: MarkdownLink,
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          ul: ({ children }) => (
            <ul className="mt-6 flex flex-col gap-3">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-6 flex list-none flex-col gap-3 [counter-reset:item]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="relative pl-6 text-pretty before:absolute before:left-0 before:text-foreground/40 before:content-['—']">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-10 border-l-2 border-border-strong pl-6 text-display text-2xl leading-snug text-foreground/90 md:text-3xl">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-12 border-border" />,
          code: ({ children }) => (
            <code className="font-mono text-[0.85em] text-foreground">
              {children}
            </code>
          ),
          table: ({ children }) => (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-base">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-border-strong">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-mono-label text-foreground/70">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border px-4 py-3 align-top text-foreground/75">
              {children}
            </td>
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
