"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function WebsiteCostGuide() {
  useEffect(() => {
    document.title = "How Much Does a Custom Website Cost? | Valore Web Design";
  }, []);

  return (
    <>
      <section className="pt-24 bg-white">
        <div className="mx-auto max-w-[720px] px-6">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-[#7a7a7a] hover:text-[#1d1d1f] transition-colors mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#0066cc]/10 text-[#0066cc] px-3 py-1 text-[11px] font-medium mb-4">
              Pricing
            </span>
            <h1
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              How Much Does a Custom Website Cost in 2026?
            </h1>
            <div
              className="mt-4 flex items-center gap-4 text-[#7a7a7a]"
              style={{ fontSize: "13px" }}
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                May 1, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                6 min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <section className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-[720px] px-6 apple-section-spacing">
            <article>
              <p
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                One of the most common questions we hear is: &ldquo;How much does a
                website cost?&rdquo; The honest answer is &mdash; it depends. But
                let us give you a transparent breakdown so you know what to expect.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                What affects the price
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
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
                    className="flex items-start gap-2.5 text-[#7a7a7a]"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      letterSpacing: "-0.224px",
                    }}
                  >
                    <span className="text-[#0066cc] mt-0.5">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Typical price ranges
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
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
                    className="flex items-start gap-2.5 text-[#7a7a7a]"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      letterSpacing: "-0.224px",
                    }}
                  >
                    <span className="text-[#0066cc] mt-0.5">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Why custom costs more than templates
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Template-based builders like Squarespace or Wix charge $15–$50 per
                month, but you trade ownership, performance, and flexibility. A
                custom site costs more upfront but gives you full ownership, better
                performance, and a design that actually fits your brand.
              </p>
              <p
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Over three years, a custom site often pays for itself in better
                conversion rates, faster load times, and the ability to add exactly
                the features your business needs.
              </p>

              <div className="gradient-divider my-8" />

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
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
                    className="flex items-start gap-2.5 text-[#7a7a7a]"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      letterSpacing: "-0.224px",
                    }}
                  >
                    <span className="text-[#0066cc] mt-0.5">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p
                className="text-[#7a7a7a]"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                If you&apos;re unsure what you need, reach out. We&apos;re happy to
                give you a free assessment and quote — no strings attached.
              </p>
            </article>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="bg-white">
          <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
            <h2
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              Ready to get started?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              Let&apos;s talk about your project. Free consultation, no
              obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97]"
              style={{ padding: "12px 24px", fontSize: "16px", fontWeight: 500, lineHeight: "1" }}
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
              { "@type": "ListItem", position: 1, name: "Blog", item: "https://valorewebdesign.com/blog" },
              {
                "@type": "ListItem",
                position: 2,
                name: "How Much Does a Custom Website Cost in 2026?",
                item: "https://valorewebdesign.com/blog/website-cost-guide",
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
              name: "Valore Web Design",
            },
            publisher: {
              "@type": "Organization",
              name: "Valore Web Design",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://valorewebdesign.com/blog/website-cost-guide",
            },
            image: "https://valorewebdesign.com/og-image.png",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
