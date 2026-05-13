import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import Script from "next/script";

const siteUrl = "https://valorewebdesign.com";

export const metadata: Metadata = {
  title: {
    default: "Valore Web Design",
    template: "%s | Valore Web Design",
  },
  description:
    "Professional custom websites built with modern technology. Serving businesses nationwide — from Missouri to California, New York to Texas — with affordable web design, development, and SEO. Starting at $399.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Valore Web Design",
    description:
      "Professional custom websites built with modern technology. Serving businesses nationwide — from Missouri to California, New York to Texas — with affordable web design, development, and SEO. Starting at $399.",
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
    title: "Valore Web Design",
    description:
      "Professional custom websites built with modern technology. Serving businesses nationwide — from Missouri to California, New York to Texas — with affordable web design, development, and SEO. Starting at $399.",
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
    // Core services
    "web development",
    "custom websites",
    "Next.js development",
    "freelance web developer",
    "small business website",
    "landing page design",
    "affordable website",
    "website builder",
    "professional web design",
    "responsive website",
    "SEO services",
    "business website",
    "local web developer",
    // National reach
    "web developer for small business",
    "custom website design",
    "freelance web designer",
    "modern website development",
    "website design services",
    // Missouri & local
    "Missouri web developer",
    "Missouri web design",
    "St. Louis web design",
    "St. Louis web developer",
    "Kansas City web design",
    "Springfield MO web design",
    "Columbia MO web designer",
    // Midwest
    "Illinois web developer",
    "Chicago web design",
    "Indiana web developer",
    "Indianapolis web design",
    "Ohio web developer",
    "Columbus web design",
    "Michigan web developer",
    "Detroit web design",
    "Wisconsin web developer",
    "Minnesota web developer",
    "Minneapolis web design",
    "Iowa web developer",
    "Nebraska web developer",
    "Kansas web developer",
    // West Coast
    "California web developer",
    "Los Angeles web design",
    "San Francisco web developer",
    "San Diego web design",
    "Seattle web design",
    "Oregon web developer",
    "Portland web design",
    "Arizona web developer",
    "Phoenix web design",
    "Nevada web developer",
    "Las Vegas web design",
    "Colorado web developer",
    "Denver web design",
    // South
    "Texas web developer",
    "Dallas web design",
    "Houston web developer",
    "Austin web design",
    "San Antonio web design",
    "Florida web developer",
    "Miami web design",
    "Orlando web design",
    "Georgia web developer",
    "Atlanta web design",
    "North Carolina web developer",
    "Raleigh web design",
    "Tennessee web developer",
    "Nashville web design",
    "Virginia web developer",
    "Washington DC web design",
    "Maryland web developer",
    "South Carolina web developer",
    "Alabama web developer",
    "Louisiana web developer",
    "New Orleans web design",
    "Oklahoma web developer",
    "Arkansas web developer",
    "Kentucky web developer",
    "Mississippi web developer",
    "West Virginia web developer",
    "Delaware web developer",
    // Northeast
    "New York web developer",
    "NYC web design",
    "New York City web developer",
    "Massachusetts web developer",
    "Boston web design",
    "Pennsylvania web developer",
    "Philadelphia web design",
    "Pittsburgh web design",
    "New Jersey web developer",
    "Connecticut web developer",
    "New Hampshire web developer",
    "Maine web developer",
    "Rhode Island web developer",
    "Vermont web developer",
    // Mountain & Plains
    "Utah web developer",
    "Salt Lake City web design",
    "Idaho web developer",
    "Montana web developer",
    "Wyoming web developer",
    "North Dakota web developer",
    "South Dakota web developer",
    "New Mexico web developer",
    "Alaska web developer",
    "Hawaii web developer",
    // Territories
    "Puerto Rico web design",
  ],
  authors: [{ name: "Valore Web Design" }],
  creator: "Valore Web Design",
  publisher: "Valore Web Design",
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
                      "Professional custom websites built with modern technology. Serving businesses nationwide with affordable web design, development, and SEO.",
                    foundingDate: "2025",
                    founder: { name: "Pratham Verma" },
                    sameAs: [],
                    areaServed: [
                      { "@type": "Country", name: "US" },
                    ],
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
                    name: "Valore Web Design",
                    isPartOf: { "@id": `${siteUrl}/#website` },
                    about: { "@id": `${siteUrl}/#organization` },
                    description:
                      "Professional custom websites built with modern technology. Serving businesses nationwide from Missouri with affordable web design, development, and SEO.",
                  },
                ],
              }).replace(/</g, "\\u003c"),
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
