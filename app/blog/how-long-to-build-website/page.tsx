"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function HowLongToBuildWebsite() {
  useEffect(() => {
    document.title = "How Long Does It Take to Build a Custom Website? | Valore Web Design";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "A realistic timeline for custom website development. How long each phase takes, what affects delivery speed, and how to get your site launched faster.");
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
              Process
            </span>
            <h1
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              How Long Does It Take to Build a Custom Website?
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
                One of the most common questions we hear is: &ldquo;How long will
                it take?&rdquo; The short answer is that it depends on the scope
                of your project. But we can give you a realistic breakdown so you
                know what to expect.
              </p>
              <p
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                A well-executed custom website usually takes 1 to 6 weeks from
                kickoff to launch. Here&apos;s how that time breaks down and what
                affects the timeline.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Phase 1: Strategy & planning (3–5 days)
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Every good website starts with a plan. This phase sets the
                foundation for everything that follows.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Discovery call to understand your business, audience, and goals",
                  "Competitive analysis and inspiration gathering",
                  "Sitemap and content structure planning",
                  "Defining the feature set and technical requirements",
                  "Content gathering (text, images, brand assets)",
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
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Your responsiveness during this phase has a major impact on the
                overall timeline. The faster you can provide content and feedback,
                the sooner the project moves forward. That&apos;s why we keep our
                process lean — fewer meetings, more building.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Phase 2: Design (3–7 days)
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Once the strategy is set, we move into design. You&apos;ll see
                mockups of what your site will look like before any code is
                written.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Wireframes and layout mockups",
                  "Design review and iteration (usually 1–2 rounds of feedback)",
                  "Final design approval",
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
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Simple single-page sites may be designed in a couple of days.
                Multi-page projects with custom illustrations, animations, or
                complex layouts take longer.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Phase 3: Development (5–14 days)
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                This is where the design becomes a real, functioning website. The
                development phase takes the longest because it involves building
                everything from the ground up.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Setting up the development environment and framework",
                  "Building responsive layouts for desktop, tablet, and mobile",
                  "Adding animations, interactions, and transitions",
                  "Integrating any third-party services (forms, payments, analytics)",
                  "Setting up the CMS if applicable",
                  "Testing across browsers and devices",
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
                Phase 4: Review & launch (3–5 days)
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Before going live, we go through a final review and quality check.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "You review the live preview and provide final feedback",
                  "Final revisions and polish",
                  "Performance optimization and SEO setup",
                  "SSL certificate, domain configuration, and deployment",
                  "Post-launch monitoring",
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
                Typical timelines by project type
              </h2>
              <ul className="space-y-2 mb-6">
                {[
                  "Single-page landing site: 1 week",
                  "Multi-page business site (3–5 pages): 2–3 weeks",
                  "Full website with custom features or e-commerce: 4–6 weeks",
                  "Web application or custom platform: 6+ weeks",
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
                How to speed things up
              </h2>
              <ul className="space-y-2 mb-6">
                {[
                  "Have your content (text, images, logos) ready before the project starts",
                  "Respond to feedback requests promptly — bottlenecks usually happen on the client side, not the developer side",
                  "Keep scope changes to a minimum once development begins",
                  "Choose a simpler design approach if speed is the priority",
                  "Work with a solo freelancer or small studio — less overhead, faster decision-making",
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
                A custom website is an investment in your business. While it takes
                longer than dragging and dropping a template, the result is a site
                that actually works for you — fast, unique, and built to grow.

                At Valore, we stick to these timelines and keep you in the loop at
                every stage. If you&apos;re tired of vague estimates and want a
                clear timeline before any work begins, that&apos;s exactly how we
                operate.
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
              Free mockup and quote — we&apos;ll give you a clear timeline before
              any work begins.
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
                name: "How Long Does It Take to Build a Custom Website?",
                item: "https://valorewebdesign.com/blog/how-long-to-build-website",
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
            headline: "How Long Does It Take to Build a Custom Website?",
            description:
              "A realistic timeline for custom website development. How long each phase takes, what affects delivery speed, and how to get your site launched faster.",
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
              "@id": "https://valorewebdesign.com/blog/how-long-to-build-website",
            },
            image: "https://valorewebdesign.com/og-image.png",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
