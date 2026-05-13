"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function ChooseRightWebDesigner() {
  useEffect(() => {
    document.title = "How to Choose the Right Web Designer | Valore Web Design";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "A practical guide to hiring a web designer. Learn what to look for, questions to ask, red flags to avoid, and how to find the right fit for your business.");
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
              Guides
            </span>
            <h1
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              How to Choose the Right Web Designer for Your Business
            </h1>
            <div
              className="mt-4 flex items-center gap-4 text-[#7a7a7a]"
              style={{ fontSize: "13px" }}
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                May 12, 2026
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
                Hiring a web designer is a big decision. Your website is often the
                first impression potential customers have of your business, and
                getting it wrong can cost you time, money, and missed
                opportunities.
              </p>
              <p
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                But with so many options — freelancers, agencies, DIY builders —
                how do you choose the right fit? Here&apos;s a practical guide to
                finding a web designer who delivers.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Step 1: Define your goals first
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Before you start looking for a designer, get clear on what you
                need. A well-defined project attracts better candidates and leads
                to better results.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "What is the purpose of your site? (informational, e-commerce, portfolio, etc.)",
                  "How many pages do you need?",
                  "Do you need ongoing maintenance or just a one-time build?",
                  "What is your budget and timeline?",
                  "Do you have brand assets (logo, colors, copy) or need help with those too?",
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
                Step 2: Look at their portfolio
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                A portfolio tells you more than a sales pitch ever will. Look for
                variety in design style, quality of work, and relevance to your
                industry.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Do the sites look modern and professional?",
                  "Are they responsive (look good on mobile)?",
                  "Do they load quickly? Check using Google PageSpeed Insights",
                  "Is the design approach varied, or do all sites look the same?",
                  "Do they have experience in your industry or with similar projects?",
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
                Step 3: Questions to ask before hiring
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Don&apos;t be shy about asking detailed questions. A reputable
                designer will welcome them.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "What is your process from start to finish? Do I get to see a mockup before development?",
                  "Who owns the code, domain, and hosting after the project ends?",
                  "Do you provide ongoing support or maintenance after launch?",
                  "Will the site be built on a CMS so I can update content myself?",
                  "How do you handle revisions and scope changes?",
                  "Can you provide references or client testimonials?",
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
                Red flags to watch for
              </h2>
              <ul className="space-y-2 mb-6">
                {[
                  "Vague pricing with no clear scope of work — you should know what you're paying for",
                  "They don't build responsive/mobile-friendly sites — this is non-negotiable in 2026",
                  "They use a drag-and-drop builder but charge custom prices — there's nothing wrong with builders, but be honest about what you're getting",
                  "No contract or written agreement — always get scope, timeline, and price in writing",
                  "They don't ask about your business, goals, or audience — how can they build something effective without understanding you?",
                  "They own the domain or hosting in their name — you should always own your own assets",
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

              <div className="gradient-divider my-8" />

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Freelancer vs. agency vs. DIY
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Each option has trade-offs. Freelancers offer lower rates and
                personal attention but may have limited bandwidth. Agencies provide
                a full team but at a higher cost. DIY builders are cheap but limit
                what you can build and how it performs.
              </p>
              <p
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                For most small businesses, a skilled freelancer or small studio
                hits the sweet spot — professional quality at a reasonable price,
                with a direct line of communication.
              </p>

              <p
                className="text-[#7a7a7a]"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Take your time, do your research, and trust your instincts. The
                right web designer is out there — and they&apos;ll be just as
                excited about your project as you are.
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
              Ready to work with us?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              Free mockup and quote — no strings attached. Let&apos;s build
              something great.
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
                name: "How to Choose the Right Web Designer for Your Business",
                item: "https://valorewebdesign.com/blog/choose-right-web-designer",
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
            headline: "How to Choose the Right Web Designer for Your Business",
            description:
              "A practical guide to hiring a web designer. Learn what to look for, questions to ask, red flags to avoid, and how to find the right fit for your business.",
            datePublished: "2026-05-12",
            dateModified: "2026-05-12",
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
              "@id": "https://valorewebdesign.com/blog/choose-right-web-designer",
            },
            image: "https://valorewebdesign.com/og-image.png",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
