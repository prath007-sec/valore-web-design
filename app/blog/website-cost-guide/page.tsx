"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function WebsiteCostGuide() {
  useEffect(() => {
    document.title = "How Much Does a Custom Website Cost? | Studio Valore";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "A transparent breakdown of custom website pricing. Learn what goes into the cost, what to expect, and how to budget for your project.");
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: "Website Cost Guide" },
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/20 text-[#D4AF37] px-3.5 py-1 text-[9px] font-bold uppercase tracking-wider mb-4">
              Pricing
            </span>
            <h1
              className="text-foreground font-sans font-bold uppercase tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: "1.1",
              }}
            >
              How Much Does a Custom Website Cost in 2026?
            </h1>
            <div
              className="mt-4 flex items-center gap-4 text-muted-foreground/70 font-sans text-[10px] uppercase tracking-wider font-semibold"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
                May 1, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
                6 min read
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
                One of the most common questions we hear is: &ldquo;How much does a
                website cost?&rdquo; The honest answer is &mdash; it depends. But
                let us give you a transparent breakdown so you know what to expect.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                What affects the price
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                Three main factors drive the cost of a custom website: complexity,
                number of pages, and required features. A simple one-page landing
                site is fundamentally different from a multi-page site with a blog,
                CMS, and custom integrations.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Pages & content volume — more pages means more design and development time",
                  "Custom functionality — e-commerce, user accounts, API integrations add complexity",
                  "Design polish — custom animations, illustrations, and brand work take additional effort",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-muted-foreground transition-colors duration-300"
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                    }}
                  >
                    <span className="text-[#D4AF37] mt-0.5">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Typical price ranges
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                Here&apos;s what you can generally expect for custom-built sites in
                2026:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Single-page landing site: $300–$500",
                  "Multi-page business site (3–5 pages): $700–$1,200",
                  "Full web application with backend: $1,500+",
                  "E-commerce store: $1,000–$3,000+",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-muted-foreground transition-colors duration-300"
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                    }}
                  >
                    <span className="text-[#D4AF37] mt-0.5">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Why custom costs more than templates
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                Template-based builders like Squarespace or Wix charge $15–$50 per
                month, but you trade ownership, performance, and flexibility. A
                custom site costs more upfront but gives you full ownership, better
                performance, and a design that actually fits your brand.
              </p>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-6 font-sans text-xs leading-relaxed"
              >
                Over three years, a custom site often pays for itself in better
                conversion rates, faster load times, and the ability to add exactly
                the features your business needs.
              </p>

              <div className="gradient-divider my-8 bg-border h-[1px] transition-colors duration-300" />

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                What you get with a custom site
              </h2>
              <ul className="space-y-2 mb-6">
                {[
                  "Full ownership of the code, domain, and hosting",
                  "A design built specifically for your brand — not a modified template",
                  "Performance optimized from the ground up",
                  "Scalability — your site grows with your business",
                  "No monthly subscription fees beyond hosting",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-muted-foreground transition-colors duration-300"
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                    }}
                  >
                    <span className="text-[#D4AF37] mt-0.5">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p
                className="text-muted-foreground transition-colors duration-300 font-sans text-xs leading-relaxed"
              >
                If you&apos;re unsure what you need, reach out. We&apos;re happy to
                give you a free assessment and quote — no strings attached.
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
              Ready to get started?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-muted-foreground transition-colors duration-300 font-sans"
              style={{
                fontSize: "16px",
                lineHeight: "1.65",
              }}
            >
              Let&apos;s talk about your project. Free consultation, no
              obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#0A0A0A] hover:bg-foreground hover:text-background transition-all font-semibold tracking-wider uppercase text-xs shadow-lg shadow-[#D4AF37]/10"
              style={{ padding: "14px 28px" }}
            >
              Get a free quote <ArrowRight className="h-4 w-4" />
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
                name: "How Much Does a Custom Website Cost in 2026?",
                item: "https://valore.co/blog/website-cost-guide",
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
            headline: "How Much Does a Custom Website Cost in 2026?",
            description:
              "A transparent breakdown of what goes into custom website pricing and what you can expect to pay.",
            datePublished: "2026-05-01",
            dateModified: "2026-05-01",
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
              "@id": "https://valore.co/blog/website-cost-guide",
            },
            image: "https://valore.co/og-image.png",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
