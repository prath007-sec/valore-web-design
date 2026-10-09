import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeContext";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import Script from "next/script";

const siteUrl = "https://valorewebdesign.com";

export const metadata: Metadata = {
  title: {
    default: "Valore",
    template: "%s | Valore",
  },
  description:
    "Valore crafts custom web architecture, brand identity systems, and high-performance digital platforms with senior engineering rigor by Pratham Verma.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Valore",
    description:
      "Valore crafts custom web architecture, brand identity systems, and high-performance digital platforms with senior engineering rigor by Pratham Verma.",
    url: siteUrl,
    siteName: "Valore",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valore — Custom Web Architecture by Pratham Verma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valore",
    description:
      "Valore crafts custom web architecture, brand identity systems, and high-performance digital platforms with senior engineering rigor by Pratham Verma.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "custom web architecture",
    "Studio Valore",
    "Pratham Verma",
    "custom web development",
    "Next.js engineering",
    "brand identity systems",
    "high-performance web design",
    "Stripe integration",
    "edge infrastructure",
    "Springfield MO web designer"
  ],
  authors: [{ name: "Pratham Verma" }],
  creator: "Pratham Verma",
  publisher: "Studio Valore",
  category: "technology",
  verification: {
    google: "N0klCKsH5SX8xHlbIF2dSdOo4_eT1M9WIfnVdI5NHBA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', saved);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-[#D4AF37]/20 selection:text-[#D4AF37] transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <Script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": `${siteUrl}/#organization`,
                    name: "Valore",
                    alternateName: ["Studio Valore", "Valore Web Design", "Valore Digital Identity"],
                    url: siteUrl,
                    email: "contact@valorewebdesign.com",
                    description:
                      "Valore crafts custom web architecture, brand identity systems, and high-performance digital platforms with senior engineering rigor by Pratham Verma.",
                    foundingDate: "2025",
                    founder: [
                      { "@type": "Person", name: "Pratham Verma", jobTitle: "Founder & Lead Architect" }
                    ],
                    sameAs: [],
                    areaServed: [
                      { "@type": "Country", name: "US" },
                    ],
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${siteUrl}/#website`,
                    url: siteUrl,
                    name: "Valore",
                    alternateName: ["Studio Valore", "Valore Web Design"],
                    publisher: { "@id": `${siteUrl}/#organization` },
                    inLanguage: "en-US",
                    potentialAction: {
                      "@type": "SearchAction",
                      target: `${siteUrl}/work?q={search_term_string}`,
                      "query-input": "required name=search_term_string",
                    },
                  },
                  {
                    "@type": "WebPage",
                    "@id": `${siteUrl}/#webpage`,
                    url: siteUrl,
                    inLanguage: "en-US",
                    name: "Valore",
                    isPartOf: { "@id": `${siteUrl}/#website` },
                    about: { "@id": `${siteUrl}/#organization` },
                    description:
                      "Valore is an elite digital identity firm and custom web architecture studio by Pratham Verma. High-performance digital platforms engineered without compromise.",
                  },
                  {
                    "@type": "ItemList",
                    "@id": `${siteUrl}/#site-navigation`,
                    name: "Main Site Navigation",
                    description: "Key architectural navigation endpoints and service domains for Valore",
                    itemListElement: [
                      {
                        "@type": "SiteNavigationElement",
                        position: 1,
                        name: "Selected Works",
                        description: "Production portfolio and case studies across restaurant ordering, e-commerce, and enterprise web applications.",
                        url: `${siteUrl}/work`,
                      },
                      {
                        "@type": "SiteNavigationElement",
                        position: 2,
                        name: "Investment & Scopes",
                        description: "Milestone pricing specifications, fixed-scope investment tiers, and deliverables.",
                        url: `${siteUrl}/pricing`,
                      },
                      {
                        "@type": "SiteNavigationElement",
                        position: 3,
                        name: "Engineering Process",
                        description: "5-stage delivery: live interactive mockup walkthrough, Stripe rails, digital agreement, and 1-week build.",
                        url: `${siteUrl}/process`,
                      },
                      {
                        "@type": "SiteNavigationElement",
                        position: 4,
                        name: "Direct Consultation",
                        description: "Initiate project specification or schedule a 1:1 call directly with lead architect Pratham Verma.",
                        url: `${siteUrl}/contact`,
                      },
                      {
                        "@type": "SiteNavigationElement",
                        position: 5,
                        name: "Insights & Strategy",
                        description: "Engineering essays on Next.js performance, web architecture, and digital conversion.",
                        url: `${siteUrl}/blog`,
                      },
                    ],
                  },
                ],
              }).replace(/</g, "\\u003c"),
            }}
          />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
