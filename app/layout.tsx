import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeContext";
import Script from "next/script";

const siteUrl = "https://valore.co";

export const metadata: Metadata = {
  title: {
    default: "Studio Valore — Bespoke Web Architecture & Digital Systems",
    template: "%s | Studio Valore",
  },
  description:
    "Studio Valore crafts bespoke web architecture, brand identity systems, and high-performance digital platforms with senior engineering rigor by Pratham Verma.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Studio Valore — Bespoke Web Architecture & Digital Systems",
    description:
      "Studio Valore crafts bespoke web architecture, brand identity systems, and high-performance digital platforms with senior engineering rigor by Pratham Verma.",
    url: siteUrl,
    siteName: "Studio Valore",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio Valore — Bespoke Web Architecture by Pratham Verma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Valore — Bespoke Web Architecture & Digital Systems",
    description:
      "Studio Valore crafts bespoke web architecture, brand identity systems, and high-performance digital platforms with senior engineering rigor by Pratham Verma.",
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
    "bespoke web architecture",
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
    <html lang="en" className="h-full antialiased scroll-smooth" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme') || 'light';
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
                    name: "Studio Valore",
                    url: siteUrl,
                    email: "contact@valorewebdesign.com",
                    description:
                      "Studio Valore crafts bespoke web architecture, brand identity systems, and high-performance digital platforms with senior engineering rigor by Pratham Verma.",
                    foundingDate: "2026",
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
                    name: "Studio Valore",
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
