"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function NextjsVsWordPress() {
  useEffect(() => {
    document.title = "Next.js vs. WordPress | Valore Web Design";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Compare Next.js and WordPress for modern website development. Performance, SEO, security, and cost — find out which platform is right for your business.");
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
              Technology
            </span>
            <h1
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              Next.js vs. WordPress: Which Is Right for You?
            </h1>
            <div
              className="mt-4 flex items-center gap-4 text-[#7a7a7a]"
              style={{ fontSize: "13px" }}
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                April 22, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                8 min read
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
                When planning a new website, one of the first decisions is which
                technology to build it on. WordPress powers over 40% of the web,
                while Next.js has rapidly become the modern alternative. Here&apos;s
                how they compare.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Performance
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Next.js generates static HTML at build time, resulting in
                lightning-fast load speeds. Sites score 95+ on Lighthouse
                Performance out of the box. WordPress relies on PHP rendering and
                plugins for caching, which adds complexity and often results in
                slower performance without significant tuning.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Security
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                WordPress is the most-targeted CMS by hackers due to its massive
                market share. Security relies on constant plugin updates, strong
                passwords, and often paid security services. Next.js has a much
                smaller attack surface — no database exposed to the frontend, no PHP
                vulnerabilities, and static pages that can&apos;t be exploited.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Flexibility &amp; customization
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                WordPress offers thousands of themes and plugins, but you&apos;re
                often limited by what they allow. Customizing beyond basic settings
                requires PHP development. Next.js gives you complete control over
                every aspect of the site. Any design, any feature, any integration
                — if you can imagine it, you can build it.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Maintenance &amp; cost
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                WordPress requires ongoing maintenance: plugin updates, security
                patches, backups, and occasional conflict resolution. Many business
                owners pay $50–$200/month just for maintenance. A well-built Next.js
                site needs minimal ongoing maintenance — no plugin updates, no
                database optimization, just occasional content updates.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                When to choose each
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Choose WordPress if you need a blog with complex editorial
                workflows, rely on specific plugins for your business, or have a
                non-technical team that needs to manage content through a familiar
                dashboard.
              </p>
              <p
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Choose Next.js if you want the best possible performance, need a
                custom design, care about security, and want a site that won&apos;t
                slow down over time as plugins pile up. It&apos;s especially good
                for businesses that want to stand out from the crowd.
              </p>

              <div className="gradient-divider my-8" />

              <p
                className="text-[#7a7a7a]"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Not sure which path is right for your project? Reach out and
                we&apos;ll help you figure it out — no pressure, just honest
                advice.
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
              Not sure what you need?
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
              { "@type": "ListItem", position: 1, name: "Blog", item: "https://valorewebdesign.com/blog" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Next.js vs. WordPress: Which Is Right for You?",
                item: "https://valorewebdesign.com/blog/nextjs-vs-wordpress",
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
            headline: "Next.js vs. WordPress: Which Is Right for You?",
            description:
              "A detailed comparison of Next.js and WordPress for modern website development, covering performance, security, SEO, and cost.",
            datePublished: "2026-04-22",
            dateModified: "2026-04-22",
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
              "@id": "https://valorewebdesign.com/blog/nextjs-vs-wordpress",
            },
            image: "https://valorewebdesign.com/og-image.png",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
