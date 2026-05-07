import PackageCard from "./PackageCard";

const packages = [
  {
    title: "Starter",
    description:
      "A clean, single-page presence to establish your brand online. Perfect for freelancers and small projects.",
    price: "$399",
    ctaText: "Get started",
    features: [
      { text: "Single-page responsive website", included: true },
      { text: "Custom design & layout", included: true },
      { text: "Mobile-optimized", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form integration", included: true },
      { text: "CMS integration", included: false },
      { text: "Ongoing maintenance", included: false },
    ],
  },
  {
    title: "Growth",
    description:
      "A multi-page site with modern performance and SEO. Ideal for businesses ready to scale their online presence.",
    price: "$899",
    ctaText: "Go growth",
    features: [
      { text: "Up to 5 responsive pages", included: true },
      { text: "Custom design & animations", included: true },
      { text: "Mobile & tablet optimized", included: true },
      { text: "Full SEO optimization", included: true },
      { text: "CMS integration (Sanity, Contentful)", included: true },
      { text: "Performance optimization", included: true },
      { text: "Contact form + newsletter", included: true },
      { text: "Ongoing maintenance", included: false },
    ],
  },
  {
    title: "Premium",
    description:
      "The full package — a complete web application with everything included. Best value for ambitious projects.",
    price: "$1,199",
    highlighted: true,
    ctaText: "Best value →",
    features: [
      { text: "Full custom web application", included: true },
      { text: "Backend & database setup", included: true },
      { text: "Authentication & user management", included: true },
      { text: "Custom animations & interactions", included: true },
      { text: "Full SEO & performance audit", included: true },
      { text: "Priority support & maintenance", included: true },
      { text: "Dedicated project timeline", included: true },
    ],
  },
];

export default function Services() {
  return (
    <section id="pricing" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="section-badge mb-6">Pricing</div>

          <h2
            className="mb-4 text-4xl font-bold text-[#fafafa] md:text-5xl"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              lineHeight: "1.15",
            }}
          >
            Simple, upfront pricing.
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#71717b]">
            No surprises, no hidden fees. Pick a package or reach out for a
            custom quote.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
