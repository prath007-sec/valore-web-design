const steps = [
  {
    number: "01",
    label: "Strategy",
    description:
      "We map out your goals, audience, and content structure before a single line of code is written.",
  },
  {
    number: "02",
    label: "Design & Build",
    description:
      "We design and develop your site using modern tools — responsive, fast, and polished.",
  },
  {
    number: "03",
    label: "Review & Refine",
    description:
      "You review a live preview, give feedback, and we iterate until it's perfect.",
  },
  {
    number: "04",
    label: "Launch & Support",
    description:
      "We deploy to production with SSL, analytics, and ongoing support included.",
  },
];

export default function Workflow() {
  return (
    <section id="work" className="px-6 py-24 md:py-32 bg-[#0c0c0f]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="section-badge mb-6">Process</div>

          <h2
            className="mb-4 text-4xl font-bold text-[#fafafa] md:text-5xl"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              lineHeight: "1.15",
            }}
          >
            How it works.
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#71717b]">
            A straightforward process designed to deliver quality without the
            headache.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <span
                className="text-4xl font-bold text-[#3b82f6]/30 shrink-0 leading-none"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {step.number}
              </span>
              <div>
                <h3
                  className="mb-2 text-xl font-bold text-[#fafafa]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {step.label}
                </h3>
                <p className="text-sm leading-relaxed text-[#71717b]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
