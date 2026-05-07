import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: "Valore Web Design | Web Development — Missouri",
  description:
    "Custom websites built with modern technology. Choose the package that fits your project.",
  metadataBase: new URL("https://valorewebdesign.com"),
  openGraph: {
    title: "Valore Web Design | Web Development — Missouri",
    description:
      "Custom websites built with modern technology. Choose the package that fits your project.",
    url: "https://valorewebdesign.com",
    siteName: "Valore Web Design",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valore Web Design | Web Development — Missouri",
    description:
      "Custom websites built with modern technology. Choose the package that fits your project.",
  },
  robots: {
    index: true,
    follow: true,
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
  ],
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
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
