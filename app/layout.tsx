import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import Script from "next/script";

const siteUrl = "https://valorewebdesign.com";

export const metadata: Metadata = {
  title: {
    default: "Valore Web Design | Custom Websites — Missouri",
    template: "%s | Valore Web Design",
  },
  description:
    "Professional custom websites built with modern technology. Serving Missouri businesses with affordable web design, development, and SEO — starting at $399.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Valore Web Design | Custom Websites — Missouri",
    description:
      "Professional custom websites built with modern technology. Serving Missouri businesses with affordable web design, development, and SEO — starting at $399.",
    url: siteUrl,
    siteName: "Valore Web Design",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valore Web Design — Custom Websites Built with Modern Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valore Web Design | Custom Websites — Missouri",
    description:
      "Professional custom websites built with modern technology. Serving Missouri businesses with affordable web design, development, and SEO — starting at $399.",
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
    "web development",
    "Missouri web developer",
    "custom websites",
    "Next.js development",
    "freelance web developer",
    "small business website",
    "landing page design",
    "St. Louis web design",
    "affordable website",
    "website builder",
    "professional web design",
    "responsive website",
    "SEO services",
    "business website",
    "local web developer",
  ],
  authors: [{ name: "Valore Web Design" }],
  creator: "Valore Web Design",
  publisher: "Valore Web Design",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-[#1d1d1f]">
        <CartProvider>
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
                    name: "Valore Web Design",
                    url: siteUrl,
                    email: "contact@valorewebdesign.com",
                    description:
                      "Professional custom websites built with modern technology.",
                    foundingDate: "2025",
                    founder: { name: "Pratham Verma" },
                    sameAs: [],
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${siteUrl}/#website`,
                    url: siteUrl,
                    name: "Valore Web Design",
                    publisher: { "@id": `${siteUrl}/#organization` },
                    inLanguage: "en-US",
                  },
                  {
                    "@type": "WebPage",
                    "@id": `${siteUrl}/#webpage`,
                    url: siteUrl,
                    inLanguage: "en-US",
                    name: "Valore Web Design | Custom Websites — Missouri",
                    isPartOf: { "@id": `${siteUrl}/#website` },
                    about: { "@id": `${siteUrl}/#organization` },
                    description:
                      "Professional custom websites built with modern technology. Serving Missouri businesses with affordable web design, development, and SEO.",
                  },
                ],
              }),
            }}
          />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
