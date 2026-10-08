"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function NextjsVsWordPress() {
  useEffect(() => {
    document.title = "Next.js vs. WordPress Comparison | Studio Valore";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Compare Next.js and WordPress for modern website development. Performance, SEO, security, and cost — find out which platform is right for your business.");
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: "Next.js vs WordPress" },
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/20 text-[#D4AF37] px-3.5 py-1 text-[9px] font-bold uppercase tracking-wider mb-4">
              Technology
            </span>
            <h1
              className="text-foreground font-sans font-bold uppercase tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: "1.1",
              }}
            >
              Next.js vs. WordPress: Which Is Right for You?
            </h1>
            <div
              className="mt-4 flex items-center gap-4 text-muted-foreground/70 font-sans text-[10px] uppercase tracking-wider font-semibold"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
                April 22, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
                8 min read
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
                When planning a new website, one of the first decisions is which
                technology to build it on. WordPress powers over 40% of the web,
                while Next.js has rapidly become the modern alternative. Here&apos;s
                how they compare.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Performance
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                Next.js generates static HTML at build time, resulting in
                lightning-fast load speeds. Sites score 95+ on Lighthouse
                Performance out of the box. WordPress relies on PHP rendering and
                plugins for caching, which adds complexity and often results in
                slower performance without significant tuning.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Security
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                WordPress is the most-targeted CMS by hackers due to its massive
                market share. Security relies on constant plugin updates, strong
                passwords, and often paid security services. Next.js has a much
                smaller attack surface — no database exposed to the frontend, no PHP
                vulnerabilities, and static pages that can&apos;t be exploited.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Flexibility &amp; customization
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                WordPress offers thousands of themes and plugins, but you&apos;re
                often limited by what they allow. Customizing beyond basic settings
                requires PHP development. Next.js gives you complete control over
                every aspect of the site. Any design, any feature, any integration
                — if you can imagine it, you can build it.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Maintenance &amp; cost
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                WordPress requires ongoing maintenance: plugin updates, security
                patches, backups, and occasional conflict resolution. Many business
                owners pay $50–$200/month just for maintenance. A well-built Next.js
                site needs minimal ongoing maintenance — no plugin updates, no
                database optimization, just occasional content updates.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                When to choose each
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                Choose WordPress if you need a blog with complex editorial
                workflows, rely on specific plugins for your business, or have a
                non-technical team that needs to manage content through a familiar
                dashboard.
              </p>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-6 font-sans text-xs leading-relaxed"
              >
                Choose Next.js if you want the best possible performance, need a
                custom design, care about security, and want a site that won&apos;t
                slow down over time as plugins pile up. It&apos;s especially good
                for businesses that want to stand out from the crowd.
              </p>

              <div className="gradient-divider my-8 bg-border h-[1px] transition-colors duration-300" />

              <p
                className="text-muted-foreground transition-colors duration-300 font-sans text-xs leading-relaxed"
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
        <section className="bg-background transition-colors duration-300">
          <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
            <h2
              className="text-foreground font-sans font-bold uppercase tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: "1.1",
              }}
            >
              Not sure what you need?
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
                name: "Next.js vs. WordPress: Which Is Right for You?",
                item: "https://valore.co/blog/nextjs-vs-wordpress",
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
              name: "VALORE",
            },
            publisher: {
              "@type": "Organization",
              name: "VALORE",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://valore.co/blog/nextjs-vs-wordpress",
            },
            image: "https://valore.co/og-image.png",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
