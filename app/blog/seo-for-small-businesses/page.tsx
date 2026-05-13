"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function SEOForSmallBusinesses() {
  useEffect(() => {
    document.title = "SEO for Small Businesses: A Beginner's Guide | Valore Web Design";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Learn the fundamentals of SEO for small businesses. Keyword research, on-page optimization, local SEO, and practical tips to rank higher without hiring an agency.");
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
              SEO
            </span>
            <h1
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              SEO for Small Businesses: A Beginner&apos;s Guide
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
                7 min read
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
                If you own a small business, you&apos;ve probably heard that SEO
                matters. But between running your business and serving your
                customers, who has time to learn the ins and outs of search engine
                optimization?
              </p>
              <p
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                The good news is you don&apos;t need to become an expert. A handful
                of fundamentals can make a real difference in how customers find
                you online. Here&apos;s what every small business owner should know.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                What is SEO and why does it matter?
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                SEO (search engine optimization) is the practice of making your
                website more visible in search results like Google. When someone
                searches for &ldquo;bakery near me&rdquo; or
                &ldquo;affordable web design,&rdquo; you want your site to appear
                near the top.
              </p>
              <p
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Studies show that the first five search results get over 67% of
                all clicks. If your site isn&apos;t ranking, you&apos;re leaving
                potential customers to your competitors.
              </p>

              <h2
                className="text-[#1d1d1f] font-semibold mt-8 mb-3"
                style={{ fontSize: "20px", letterSpacing: "-0.28px" }}
              >
                Start with keyword research
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Keywords are the phrases people type into search engines. Your
                goal is to figure out which keywords your potential customers are
                using and make sure your site matches.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Think like your customer — what would they search for?",
                  "Use free tools like Google Keyword Planner or Ubersuggest to find keyword ideas",
                  "Focus on specific, long-tail keywords like 'plumber in Austin TX' rather than just 'plumber'",
                  "Look at what keywords your competitors rank for",
                  "Prioritize keywords with decent search volume but lower competition",
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
                On-page SEO basics
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                On-page SEO refers to optimizations you make directly on your
                website. These are the easiest to control and have immediate
                impact.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Title tags — every page should have a unique, descriptive title (like this one: "SEO for Small Businesses: A Beginner\'s Guide")',
                  "Meta descriptions — the short blurb under your search result. Make it compelling and include your target keyword",
                  "Heading structure — use H1 for your page title, H2 for section headings, H3 for subsections. This helps Google understand your content",
                  "Image alt text — describe your images for accessibility and search engines. Don't just leave them blank",
                  "URL structure — keep URLs short and descriptive, like yoursite.com/blog/seo-tips instead of yoursite.com/p=123",
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
                Local SEO: get found in your area
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                For small businesses, local SEO is often the most important piece.
                When someone searches for a service near them, Google shows local
                results prominently.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Claim and optimize your Google Business Profile — it's free and essential",
                  'Include your city and state in key areas of your site (title tags, headings, content)',
                  "Get listed in local directories like Yelp, Yellow Pages, and industry-specific sites",
                  "Encourage customers to leave Google reviews — more reviews = higher local rankings",
                  "Create location-specific pages if you serve multiple areas",
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
                Technical SEO: the foundation
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Technical SEO covers the behind-the-scenes factors that affect how
                search engines crawl and index your site.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Mobile-friendliness — Google uses mobile-first indexing, so your site must work perfectly on phones",
                  "Page speed — slow sites rank lower. Use Google's PageSpeed Insights to check yours",
                  "Secure HTTPS connection — required by Google and trusted by users",
                  "XML sitemap — helps Google discover all your pages. Most website platforms generate this automatically",
                  "Clean, semantic code — well-structured code helps search engines understand your content",
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
                Content is still king
              </h2>
              <p
                className="text-[#7a7a7a] mb-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Google rewards sites that regularly publish helpful, relevant
                content. A blog is one of the best ways to do this — each post is
                another page Google can index and another opportunity to be found.
              </p>
              <p
                className="text-[#7a7a7a] mb-6"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                Focus on answering your customers&apos; questions. What problems
                do they have? What information are they looking for? Write content
                that genuinely helps, and the rankings will follow.
              </p>

              <p
                className="text-[#7a7a7a]"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  letterSpacing: "-0.224px",
                }}
              >
                SEO isn&apos;t a one-time task, but you don&apos;t need to do
                everything at once. Start with the fundamentals — keyword
                research, on-page optimization, and local SEO — then build from
                there. Even small improvements can make a meaningful difference in
                how customers find your business.
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
              Need a website that ranks?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              Every site we build includes solid SEO foundations. Let&apos;s talk
              about your project.
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
                name: "SEO for Small Businesses: A Beginner's Guide",
                item: "https://valorewebdesign.com/blog/seo-for-small-businesses",
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
            headline: "SEO for Small Businesses: A Beginner's Guide",
            description:
              "Learn the fundamentals of SEO for small businesses. Keyword research, on-page optimization, local SEO, and practical tips to rank higher without hiring an agency.",
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
              "@id": "https://valorewebdesign.com/blog/seo-for-small-businesses",
            },
            image: "https://valorewebdesign.com/og-image.png",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
