import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { EngagementProvider } from "@/components/shared/engagement-provider";
import { company } from "@/content/company";
import { founders } from "@/content/founders";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s · ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "AI Overflow",
    "custom AI solutions",
    "AI consulting",
    "agentic AI automation",
    "AI workflow automation",
    "AI development company",
    "AI agents",
    "AI integration",
    "ScribeDesk",
    "RetailOS",
    "clinical AI scribe",
    "AI for business",
  ],
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: company.name,
    locale: "en_US",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Tab/home-screen icons come from app/icon.tsx and app/apple-icon.tsx.
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      url: siteUrl,
      email: company.email,
      description: company.description,
      foundingDate: String(company.foundedYear),
      areaServed: "Worldwide",
      knowsAbout: [
        "Artificial Intelligence",
        "Agentic AI automation",
        "AI workflow integration",
        "Custom AI product development",
        "Large language models",
      ],
      sameAs: [company.social.linkedin, company.social.github].filter(Boolean),
      founder: founders.map((f) => ({
        "@type": "Person",
        name: f.name,
        jobTitle: f.role,
        sameAs: [f.linkedin, f.github].filter(Boolean),
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI services",
        itemListElement: company.services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.summary,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: company.name,
      description: company.description,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <EngagementProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
