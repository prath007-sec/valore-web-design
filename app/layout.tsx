import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeContext";
import Script from "next/script";

const siteUrl = "https://valore.co";

export const metadata: Metadata = {
  title: {
    default: "VALORE | Digital Identity Firm & AI Consulting",
    template: "%s | VALORE | Digital Identity Firm & AI Consulting",
  },
  description:
    "VALORE is an elite digital identity firm and AI consulting practice by Pratham Verma. We solve digital problems through strategy, pristine digital identities, automated back-office systems, and high-performance AI workflows.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "VALORE | Digital Identity Firm & AI Consulting",
    description:
      "VALORE is an elite digital identity firm and AI consulting practice by Pratham Verma. We solve digital problems through strategy, digital identity, systems automation, and AI workflows that scale.",
    url: siteUrl,
    siteName: "VALORE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VALORE — Digital Identity Firm & AI Consulting by Pratham Verma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VALORE | Digital Identity Firm & AI Consulting",
    description:
      "VALORE is an elite digital identity firm and AI consulting practice by Pratham Verma. We solve digital problems with modern digital identities and AI workflows that scale.",
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
    "digital identity firm",
    "AI consulting",
    "VALORE AI consulting",
    "Pratham Verma AI",
    "AI automation for business",
    "24/7 AI customer service chatbot",
    "automated back-office systems",
    "high-performance digital identity",
    "enterprise brand design",
    "SEO organic rank growth",
    "Next.js bespoke software"
  ],
  authors: [{ name: "Pratham Verma" }],
  creator: "Pratham Verma",
  publisher: "VALORE",
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
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
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
                    name: "VALORE",
                    url: siteUrl,
                    email: "contact@valorewebdesign.com",
                    description:
                      "VALORE is an elite digital identity firm and AI consulting practice by Pratham Verma. We solve digital problems through strategy, pristine digital identities, automated systems, and scalable AI workflows.",
                    foundingDate: "2026",
                    founder: [
                      { "@type": "Person", name: "Pratham Verma", jobTitle: "Founder & Lead AI Consultant" }
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
                    name: "VALORE",
                    publisher: { "@id": `${siteUrl}/#organization` },
                    inLanguage: "en-US",
                  },
                  {
                    "@type": "WebPage",
                    "@id": `${siteUrl}/#webpage`,
                    url: siteUrl,
                    inLanguage: "en-US",
                    name: "VALORE | Digital Identity Firm & AI Consulting",
                    isPartOf: { "@id": `${siteUrl}/#website` },
                    about: { "@id": `${siteUrl}/#organization` },
                    description:
                      "VALORE is an elite digital identity firm and AI consulting practice by Pratham Verma. We solve digital problems through strategy, pristine digital identities, automated systems, and scalable AI workflows.",
                  },
                ],
              }).replace(/</g, "\\u003c"),
            }}
          />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
