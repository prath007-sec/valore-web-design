import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="section-badge mb-6">Get in touch</div>

        <h2
          className="mb-4 text-4xl font-bold text-[#fafafa] md:text-5xl"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            lineHeight: "1.15",
          }}
        >
          Have a project?
          <br />
          Let&apos;s talk.
        </h2>
        <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-[#71717b]">
          Tell us about your idea and we&apos;ll send over a free mockup and
          quote — no strings attached.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:contact@valorewebdesign.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3b82f6] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#2563eb]"
          >
            contact@valorewebdesign.com
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
