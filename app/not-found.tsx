"use client";

import Link from "next/link";
import { ArrowUpRight, Compass, ArrowLeft } from "lucide-react";
import ValoreLogo from "@/components/ui/ValoreLogo";
import RollingText from "@/components/ui/RollingText";
import ScrambleText from "@/components/ui/ScrambleText";

export default function NotFound() {
  const quickLinks = [
    { label: "Flagship Homepage", href: "/", desc: "Core studio overview & capabilities" },
    { label: "Selected Commissions", href: "/work", desc: "Live production portfolio & case studies" },
    { label: "Investment & Scopes", href: "/pricing", desc: "Milestone pricing specifications" },
    { label: "Architectural Process", href: "/process", desc: "Our 4-stage engineering delivery" },
    { label: "Direct Consultation", href: "/contact", desc: "Initiate custom architecture inquiry" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between pt-32 pb-16 px-6 transition-colors duration-300">
      <div className="mx-auto max-w-3xl w-full text-center flex flex-col items-center my-auto">
        {/* Monogram */}
        <div className="mb-6">
          <ValoreLogo iconOnly size="lg" />
        </div>

        {/* Kicker */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 rounded-full border border-border bg-card">
          <Compass className="h-3.5 w-3.5 text-[#D4AF37]" />
          <ScrambleText
            text="EXCEPTION: 404 // ROUTE NOT INDEXED"
            className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase cursor-default"
          />
        </div>

        {/* Semantic H1 Heading */}
        <h1 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tight text-foreground leading-[1.05] mb-6">
          Specification Not Located.
        </h1>

        <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mb-10">
          The URI you attempted to query does not resolve to an active platform deployment. The endpoint may have been restructured or archived.
        </p>

        {/* Primary Action Button */}
        <div className="mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Flagship Architecture</span>
          </Link>
        </div>

        {/* Quick Directory Grid */}
        <div className="w-full border-t border-border pt-10 text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-6 text-center">
            Valid Production Endpoints
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between p-4 rounded-2xl border border-border bg-card hover:border-foreground/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-sans font-bold text-sm text-foreground uppercase tracking-tight">
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl w-full pt-8 text-center border-t border-border mt-12 text-muted-foreground font-mono text-[10px] uppercase tracking-widest">
        Studio Valore &bull; Est. 2025 &bull; High-Performance Digital Systems
      </div>
    </div>
  );
}
