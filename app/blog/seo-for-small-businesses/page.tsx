"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function SEOForSmallBusinesses() {
  useEffect(() => {
    document.title = "SEO for Small Businesses: Architecture Guide | Studio Valore";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Learn the fundamentals of SEO for small businesses. Keyword research, on-page optimization, local SEO, and practical tips to rank higher without hiring an agency.");
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: "SEO for Small Businesses" },
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/20 text-[#D4AF37] px-3.5 py-1 text-[9px] font-bold uppercase tracking-wider mb-4">
              SEO
            </span>
            <h1
              className="text-foreground font-sans font-bold uppercase tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: "1.1",
              }}
            >
              SEO for Small Businesses: A Beginner&apos;s Guide
            </h1>
            <div
              className="mt-4 flex items-center gap-4 text-muted-foreground/70 font-sans text-[10px] uppercase tracking-wider font-semibold"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
                May 12, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
                7 min read
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
                If you own a small business, you&apos;ve probably heard that SEO
                matters. But between running your business and serving your
                customers, who has time to learn the ins and outs of search engine
                optimization?
              </p>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-6 font-sans text-xs leading-relaxed"
              >
                The good news is you don&apos;t need to become an expert. A handful
                of fundamentals can make a real difference in how customers find
                you online. Here&apos;s what every small business owner should know.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                What is SEO and why does it matter?
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                SEO (search engine optimization) is the practice of making your
                website more visible in search results like Google. When someone
                searches for &ldquo;bakery near me&rdquo; or
                &ldquo;affordable web design,&rdquo; you want your site to appear
                near the top.
              </p>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-6 font-sans text-xs leading-relaxed"
              >
                Studies show that the first five search results get over 67% of
                all clicks. If your site isn&apos;t ranking, you&apos;re leaving
                potential customers to your competitors.
              </p>

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Start with keyword research
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
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
                On-page SEO basics
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
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
                Local SEO: get found in your area
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
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
                Technical SEO: the foundation
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
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
                className="text-muted-foreground transition-colors duration-300 mb-6 font-sans text-xs leading-relaxed"
              >
                Every site we build at Valore ships with all of this baked in
                from day one. Clean semantic code, fast load times, proper heading
                structure, and a generated sitemap — so you don&apos;t have to
                worry about the technical side.
              </p>

              <div className="gradient-divider my-8 bg-border h-[1px] transition-colors duration-300" />

              <h2
                className="text-foreground font-sans font-bold mt-8 mb-3 uppercase tracking-wide text-sm transition-colors duration-300"
              >
                Content is still king
              </h2>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-4 font-sans text-xs leading-relaxed"
              >
                Google rewards sites that regularly publish helpful, relevant
                content. A blog is one of the best ways to do this — each post is
                another page Google can index and another opportunity to be found.
              </p>
              <p
                className="text-muted-foreground transition-colors duration-300 mb-6 font-sans text-xs leading-relaxed"
              >
                Focus on answering your customers&apos; questions. What problems
                do they have? What information are they looking for? Write content
                that genuinely helps, and the rankings will follow. That&apos;s
                exactly the approach we take with every site we build — and it&apos;s
                the same approach that makes this blog useful to you.
              </p>

              <p
                className="text-muted-foreground transition-colors duration-300 font-sans text-xs leading-relaxed"
              >
                SEO isn&apos;t a one-time task, but you don&apos;t need to do
                everything at once. Start with the fundamentals — keyword
                research, on-page optimization, and local SEO — then build from
                there. Even small improvements can make a meaningful difference in
                how customers find your business.

                And if you&apos;d rather focus on running your business while
                someone else handles the SEO foundations, that&apos;s exactly what
                we&apos;re here for.
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
              Need a website that ranks?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-muted-foreground transition-colors duration-300 font-sans"
              style={{
                fontSize: "16px",
                lineHeight: "1.65",
              }}
            >
              Every site we build includes solid SEO foundations. Let&apos;s talk
              about your project.
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
                name: "SEO for Small Businesses: A Beginner's Guide",
                item: "https://valore.co/blog/seo-for-small-businesses",
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
              name: "VALORE",
            },
            publisher: {
              "@type": "Organization",
              name: "VALORE",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://valore.co/blog/seo-for-small-businesses",
            },
            image: "https://valore.co/og-image.png",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
