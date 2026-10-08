"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

const posts = [
  {
    slug: "seo-for-small-businesses",
    title: "SEO for Small Businesses: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of SEO — from keyword research to local search — and start ranking higher without hiring an agency.",
    date: "May 12, 2026",
    readTime: "7 min read",
    category: "SEO",
  },
  {
    slug: "choose-right-web-designer",
    title: "How to Choose the Right Web Designer for Your Business",
    excerpt:
      "A practical guide to hiring a web designer — what to look for, questions to ask, and red flags to avoid.",
    date: "May 12, 2026",
    readTime: "8 min read",
    category: "Guides",
  },
  {
    slug: "how-long-to-build-website",
    title: "How Long Does It Take to Build a Custom Website?",
    excerpt:
      "A realistic timeline for custom website development and what affects delivery speed.",
    date: "May 12, 2026",
    readTime: "6 min read",
    category: "Process",
  },
  {
    slug: "website-cost-guide",
    title: "How Much Does a Custom Website Cost in 2026?",
    excerpt:
      "A transparent breakdown of what goes into custom website pricing and what you can expect to pay.",
    date: "May 1, 2026",
    readTime: "6 min read",
    category: "Pricing",
  },
  {
    slug: "nextjs-vs-wordpress",
    title: "Next.js vs. WordPress: Which Is Right for You?",
    excerpt:
      "Comparing modern static sites with traditional CMS platforms for your next web project.",
    date: "April 22, 2026",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    slug: "why-custom-websites",
    title: "Why Custom Websites Beat Templates Every Time",
    excerpt:
      "Why off-the-shelf templates fall short and how a custom-built site delivers better results.",
    date: "April 15, 2026",
    readTime: "5 min read",
    category: "Design",
  },
];

export default function BlogPage() {
  useEffect(() => {
    document.title = "Insights & Strategy | VALORE";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Expert articles on bespoke systems, digital performance architecture, and business conversion strategies.");
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <div className="mb-6 flex justify-center">
            <Breadcrumbs items={[{ label: "Insights & Perspectives", href: "/blog" }]} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="apple-badge mb-6">Blog</div>
          </motion.div>
          <motion.h1
            className="text-foreground font-sans font-bold uppercase tracking-tight"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              lineHeight: "1.1",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Guides &amp; insights.
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 mb-10 max-w-lg text-muted-foreground font-sans transition-colors duration-300"
            style={{
              fontSize: "16px",
              lineHeight: "1.65",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Practical insights on modular software, visual identity systems, and custom conversion optimization.
          </motion.p>
        </div>
      </section>

      <AnimatedSection>
        <section className="bg-card border-y border-border transition-colors duration-300">
          <div className="mx-auto max-w-[720px] px-6 apple-section-spacing">
            <div className="grid gap-6">
              {posts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <motion.div
                    className="card-elevated p-6 sm:p-8 cursor-pointer border border-border bg-background transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/20 text-[#D4AF37] px-3.5 py-1 text-[9px] font-bold uppercase tracking-wider mb-4">
                      {post.category}
                    </span>
                    <h3
                      className="text-foreground font-sans font-bold text-base tracking-wide uppercase group-hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      {post.title}
                    </h3>
                    <p
                      className="mt-2.5 text-muted-foreground font-sans text-xs leading-relaxed transition-colors duration-300"
                    >
                      {post.excerpt}
                    </p>
                    <div
                      className="mt-4 flex items-center gap-4 text-muted-foreground/70 font-sans text-[10px] tracking-wider uppercase font-semibold"
                    >
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider group-hover:underline">
                      Read article <ArrowRight className="h-3 w-3" />
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="bg-background transition-colors duration-300">
          <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
            <h2
              className="text-foreground font-sans font-bold uppercase tracking-tight transition-colors duration-300"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: "1.1",
              }}
            >
              Have a digital problem?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-muted-foreground font-sans transition-colors duration-300"
              style={{
                fontSize: "16px",
                lineHeight: "1.65",
              }}
            >
              Partner with Valore today. Let&apos;s talk about your project and formulate a high-fidelity visual prototype.
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
    </>
  );
}
