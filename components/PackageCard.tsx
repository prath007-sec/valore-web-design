import { Check, CreditCard, Clock } from "lucide-react";
import Link from "next/link";

interface PackageFeature {
  text: string;
  included: boolean;
}

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  features: PackageFeature[];
  highlighted?: boolean;
  ctaText: string;
  exampleHref?: string;
  onCheckout?: () => void;
  timeline?: string;
}

export default function PackageCard({
  title,
  description,
  price,
  features,
  highlighted = false,
  ctaText,
  exampleHref,
  onCheckout,
  timeline,
}: PackageCardProps) {
  const includedCount = features.filter((f) => f.included).length;
  const totalCount = features.length;

  return (
    <div
      className={`card-elevated relative flex flex-col p-6 sm:p-9 ${
        highlighted ? "ring-1 ring-[#0066cc]" : ""
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0066cc] px-4 py-1 z-10">
          <span
            className="text-xs font-semibold text-white"
            style={{
              fontSize: "12px",
              letterSpacing: "-0.12px",
              lineHeight: "1",
            }}
          >
            Best value
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-7">
        <h3
          className="text-[#1d1d1f] font-semibold"
          style={{ fontSize: "22px", letterSpacing: "-0.374px", lineHeight: "1.3" }}
        >
          {title}
        </h3>
        <p
          className="text-[#7a7a7a] mt-2"
          style={{ fontSize: "14px", lineHeight: "1.5", letterSpacing: "-0.224px" }}
        >
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-7">
        <span className="text-[#7a7a7a] text-xs font-medium" style={{ letterSpacing: "0.02em" }}>
          Starting at
        </span>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span
            className="font-semibold text-[#1d1d1f]"
            style={{ fontSize: "36px", letterSpacing: "-0.374px", lineHeight: "1" }}
          >
            {price}
          </span>
          <span className="text-[#7a7a7a] text-xs">one-time</span>
        </div>
        <div className="mt-1.5">
          <span className="text-[12px] text-[#0066cc] font-medium">
            + maintenance {title === "Starter" ? "$29/mo" : title === "Growth" ? "$49/mo" : "$99/mo"}
          </span>
          <span className="text-[11px] text-[#7a7a7a] ml-1">
            or {title === "Starter" ? "$290" : title === "Growth" ? "$490" : "$990"}/yr
          </span>
        </div>
      </div>

      {/* Timeline */}
      {timeline && (
        <div className="flex items-center gap-2 mb-4 py-3 px-4 rounded-lg bg-[#f5f5f7]">
          <Clock className="h-3.5 w-3.5 text-[#0066cc] flex-shrink-0" />
          <span className="text-xs text-[#7a7a7a] font-medium">
            Typical delivery: <span className="text-[#1d1d1f]">{timeline}</span>
          </span>
        </div>
      )}

      {/* Checkout badge */}
      <div className="flex items-center gap-2 mb-5 py-2 px-3 rounded-lg bg-[#0066cc]/5 border border-[#0066cc]/10">
        <CreditCard className="h-3.5 w-3.5 text-[#0066cc] flex-shrink-0" />
        <span className="text-xs text-[#0066cc] font-medium">
          Checkout & payments included
        </span>
      </div>

      {/* Feature count badge */}
      <div className="mb-5">
        <span className="text-xs text-[#7a7a7a] font-medium">
          {includedCount} of {totalCount} features included
        </span>
        <div className="mt-2 h-1.5 rounded-full bg-[#f0f0f0] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#0066cc]"
            style={{ width: `${(includedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3.5">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                feature.included ? "text-[#0066cc]" : "text-[#d2d2d7]"
              }`}
            />
            <span
              className={`text-sm ${
                feature.included ? "text-[#1d1d1f]" : "text-[#d2d2d7]"
              }`}
              style={{
                fontSize: "14px",
                lineHeight: "1.5",
                letterSpacing: "-0.224px",
              }}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      {onCheckout && (
        <button
          onClick={onCheckout}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] shadow-md shadow-[#0066cc]/15 w-full sm:w-auto"
          style={{ padding: "14px 28px", fontSize: "15px", fontWeight: 600, lineHeight: "1" }}
        >
          <CreditCard className="h-4 w-4" /> Checkout now
        </button>
      )}
      {exampleHref && (
        <Link
          href={exampleHref}
          className="mt-3 inline-flex items-center justify-center rounded-full border border-[#d2d2d7] text-[#7a7a7a] hover:bg-[#f5f5f7] hover:text-[#1d1d1f] transition-all active:scale-[0.97] text-sm w-full sm:w-auto"
          style={{ padding: "11px 22px", fontWeight: 500, lineHeight: "1" }}
        >
          See example
        </Link>
      )}
    </div>
  );
}
