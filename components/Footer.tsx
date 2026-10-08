"use client";

import Link from "next/link";
import ValoreLogo from "./ui/ValoreLogo";
import RollingText from "./ui/RollingText";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const navItems = [
    { label: "Selected Work", href: "/work" },
    { label: "Capabilities", href: "/#services" },
    { label: "Commission Tiers", href: "/#pricing" },
    { label: "Development Process", href: "/process" },
    { label: "Studio Philosophy", href: "/#about-me" },
  ];

  return (
    <footer className="bg-black border-t border-white/[0.08] px-6 py-20 text-[#F5F5F7] transition-colors duration-300">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-12 md:grid-cols-12 pb-16 border-b border-white/[0.06]">
          {/* Brand & Mission */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <ValoreLogo size="sm" />
            <p className="text-[#86868B] text-xs sm:text-sm leading-relaxed max-w-sm mt-1 font-sans">
              Founded and engineered by <strong className="text-white font-semibold">Pratham Verma</strong>. Equipping ambitious brands and enterprises with bespoke web architecture, sub-second latency, and aesthetic supremacy.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-3.5 py-1 text-[10px] font-mono tracking-[0.2em] text-[#86868B] uppercase">
              Studio Valore &bull; Est. 2026
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#86868B] mb-5">
              Index
            </p>
            <ul className="space-y-3 font-mono text-[11px] tracking-wider uppercase text-[#86868B]">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    <RollingText duplicateClassName="text-white">
                      {item.label}
                    </RollingText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Consultation */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#86868B] mb-5">
                Direct Inquiries
              </p>
              <p className="text-xs text-[#86868B] leading-relaxed mb-4">
                Have a new commission in mind or require custom architectural review?
              </p>
              <a
                href="mailto:contact@valorewebdesign.com"
                className="font-mono text-xs text-white hover:text-[#E5D3B3] transition-colors block mb-6"
              >
                contact@valorewebdesign.com
              </a>
            </div>

            <a
              href="#book-discovery"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-mono text-[11px] tracking-wider uppercase px-6 py-3.5 hover:bg-[#F5F5F7] transition-all shadow-xl active:scale-[0.97] w-fit"
            >
              <RollingText duplicateClassName="text-black">Initiate Project Spec</RollingText>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#86868B] uppercase tracking-wider">
          <p>
            &copy; {new Date().getFullYear()} Studio Valore. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>&middot;</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>&middot;</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Direct Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
