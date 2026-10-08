"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function WhyCustomWebsites() {
  useEffect(() => {
    document.title = "Why Custom Websites Beat Templates | VALORE";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Discover why custom-built websites outperform templates in branding, performance, SEO, and long-term value for your business.");
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-[720px] px-6">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#D4AF37] transition-colors mb-8 uppercase tracking-widest font-bold"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/20 text-[#D4AF37] px-3.5 py-1 text-[9px] font-bold uppercase tracking-wider mb-4">
              Design
            </span>
            <h1
              className="text-foreground font-sans font-bold uppercase tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: "1.1",
              }}
            >
              Why Custom Websites Beat Templates Every Time
            </h1>
            <div
              className="mt-4 flex items-center gap-4 text-muted-foreground/70 font-sans text-[10px] uppercase tracking-wider font-semibold"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
                April 15, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
                5 min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <section className="bg-card border-y border-border text-muted-foreground transition-colors duration-300">
          <div className="mx-auto max-w-[720px] px-6 apple-section-spacing">
            <article>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-6 font-sans text-xs leading-relaxed"
              >
                Templates are tempting. They&apos;re cheap, fast, and easy. But
                there&apos;s a reason businesses that invest in custom websites
                consistently outperform those that use templates. Here&apos;s why.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Your brand is unique — your site should be too
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                Templates are built for the average business, not yours. Thousands
                of other sites use the exact same layout, the same animations, the
                same structure. A custom site is designed around your specific
                brand, message, and audience. It looks like you, not like everyone
                else.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Performance that converts
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                Templates come packed with features you don&apos;t need, loading
                unnecessary code that slows your site down. A 1-second delay in
                page load time can reduce conversions by 7%. Custom sites include
                only what you need, resulting in faster load times, better SEO, and
                higher conversion rates.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                No limitations, no workarounds
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                With a template, you&apos;re limited to what the template allows.
                Want to add a custom feature? You&apos;ll need to hack it in or
                switch themes entirely, which often means starting over. A custom
                site grows with you — adding features, pages, or integrations is
                straightforward because the foundation was built for exactly that.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Long-term value
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                A template might save you money upfront, but you&apos;ll pay for it
                in lost opportunities, slow performance, and limitations down the
                road. A custom website is an investment in your business that
                compounds over time — better SEO rankings, higher conversion rates,
                and a professional image that builds trust with your customers.
              </p>

              <div className="gradient-divider my-8 bg-border h-[1px] transition-colors duration-300" />

              <p
                className="text-muted-foreground transition-colors duration-300 font-sans text-xs leading-relaxed"
              >
                Your website is often the first impression customers have of your
                business. Make it count. If you&apos;re ready for a site that&apos;s
                truly yours, let&apos;s talk.
              </p>
            </article>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="bg-background transition-colors duration-300">
          <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
            <h2
              className="text-foreground font-sans font-bold uppercase tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: "1.1",
              }}
            >
              Ready for a site that&apos;s truly yours?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-muted-foreground transition-colors duration-300 font-sans"
              style={{
                fontSize: "16px",
                lineHeight: "1.65",
              }}
            >
              Let&apos;s build something custom — starting with a free mockup
              and quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#0A0A0A] hover:bg-foreground hover:text-background transition-all font-semibold tracking-wider uppercase text-xs shadow-lg shadow-[#D4AF37]/10"
              style={{ padding: "14px 28px" }}
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Blog", item: "https://valore.co/blog" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Why Custom Websites Beat Templates Every Time",
                item: "https://valore.co/blog/why-custom-websites",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Why Custom Websites Beat Templates Every Time",
            description:
              "Discover the key advantages of custom-built websites over template-based solutions for branding, performance, SEO, and long-term value.",
            datePublished: "2026-04-15",
            dateModified: "2026-04-15",
            author: {
              "@type": "Organization",
              name: "VALORE",
            },
            publisher: {
              "@type": "Organization",
              name: "VALORE",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://valore.co/blog/why-custom-websites",
            },
            image: "https://valore.co/og-image.png",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
