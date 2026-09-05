import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/content/company";
import { products } from "@/content/products";
import { BrandMark } from "@/components/brand/brand-mark";

const colLink = "block py-1.5 text-foreground/65 transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-background">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="container-page py-20 md:py-24">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-display text-2xl"
            >
              <BrandMark className="h-10 w-10 text-violet-700" />
              AIoverflow
            </Link>
            <p className="mt-6 max-w-md text-pretty text-foreground/65">
              {company.description}
            </p>
            <a
              href={`mailto:${company.email}`}
              className="link-underline mt-8 inline-flex max-w-full items-center gap-2 font-display text-xl [overflow-wrap:anywhere] md:text-[clamp(1.25rem,2.4vw,2rem)]"
            >
              {company.email}
              <ArrowUpRight className="h-5 w-5 shrink-0 md:h-6 md:w-6" />
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-mono-label text-foreground/50">Products</h4>
            <ul className="mt-4 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className={colLink}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono-label text-foreground/50">Company</h4>
            <ul className="mt-4 text-sm">
              <li><Link href="/services" className={colLink}>Services</Link></li>
              <li><Link href="/blog" className={colLink}>Blog</Link></li>
              <li><Link href="/founders" className={colLink}>Team</Link></li>
              <li><Link href="/about" className={colLink}>About</Link></li>
              <li><Link href="/contact" className={colLink}>Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono-label text-foreground/50">Elsewhere</h4>
            <ul className="mt-4 text-sm">
              <li>
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={colLink}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://aioverflow.tech"
                  target="_blank"
                  rel="noreferrer"
                  className={colLink}
                >
                  Global operations ↗
                </a>
              </li>
              {company.social.github && (
                <li>
                  <a
                    href={company.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className={colLink}
                  >
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="container-page text-display select-none whitespace-nowrap leading-none text-foreground/[0.06]"
      >
        <span className="block text-[clamp(6rem,28vw,28rem)]">AI Overflow</span>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 font-mono-label text-foreground/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <span className="hidden md:inline">Designed &amp; engineered in-house.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
