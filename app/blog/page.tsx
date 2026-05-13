"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

const posts = [
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
    document.title = "Blog | Valore Web Design";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Expert articles on custom web design, website costs, Next.js vs WordPress, and tips for building a better business website.");
  }, []);

  return (
    <>
      <section className="pt-24 bg-white">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="apple-badge mb-6">Blog</div>
          </motion.div>
          <motion.h1
            className="text-[#1d1d1f] font-semibold"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              letterSpacing: "-0.28px",
              lineHeight: "1.1",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Guides &amp; insights.
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 mb-10 max-w-lg text-[#7a7a7a]"
            style={{
              fontSize: "17px",
              lineHeight: "1.6",
              letterSpacing: "-0.374px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Practical advice on web development, design, and getting the most out
            of your online presence.
          </motion.p>
        </div>
      </section>

      <AnimatedSection>
        <section className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-[720px] px-6 apple-section-spacing">
            <div className="grid gap-6">
              {posts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <motion.div
                    className="card-elevated p-6 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center rounded-full bg-[#0066cc]/10 text-[#0066cc] px-3 py-1 text-[11px] font-medium mb-3">
                      {post.category}
                    </span>
                    <h3
                      className="text-[#1d1d1f] font-semibold"
                      style={{
                        fontSize: "18px",
                        letterSpacing: "-0.28px",
                        lineHeight: "1.2",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="mt-2 text-[#7a7a7a]"
                      style={{ fontSize: "14px", lineHeight: "1.6" }}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      className="mt-4 flex items-center gap-4 text-[#7a7a7a]"
                      style={{ fontSize: "12px" }}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-[#0066cc] text-[13px] font-medium group-hover:underline">
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
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
              Have a project in mind?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              Let&apos;s talk about what you need. We&apos;ll send over a free
              mockup and quote.
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
    </>
  );
}
