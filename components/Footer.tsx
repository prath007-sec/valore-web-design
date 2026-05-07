"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isDarkPage = pathname.startsWith("/examples/premium");

  return (
    <footer
      className={`px-6 py-10 transition-colors duration-300 ${
        isDarkPage
          ? "bg-[#1d1d1f] border-t border-white/[0.06]"
          : "bg-[#f5f5f7] border-t border-[#e0e0e0]"
      }`}
    >
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p
              className={`font-semibold transition-colors duration-300 ${
                isDarkPage ? "text-white" : "text-[#1d1d1f]"
              }`}
              style={{ fontSize: "14px", letterSpacing: "-0.12px", lineHeight: "1" }}
            >
              Valore Web Design<span className="text-[#0066cc]">.</span>
            </p>
          </div>
          <div className="flex items-center gap-5 sm:gap-7">
            {[
              { label: "Home", href: "/" },
              { label: "Work", href: "/work" },
              { label: "Pricing", href: "/pricing" },
              { label: "Process", href: "/process" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isDarkPage
                    ? "text-[#a1a1aa] hover:text-white"
                    : "text-[#7a7a7a] hover:text-[#1d1d1f]"
                }`}
                style={{ fontSize: "12px", letterSpacing: "0.02em", lineHeight: "1" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isDarkPage ? "border-white/[0.06]" : "border-[#e0e0e0]"
          }`}
        >
          <p
            className={`transition-colors duration-300 ${
              isDarkPage ? "text-[#52525b]" : "text-[#7a7a7a]"
            }`}
            style={{ fontSize: "11px", letterSpacing: "-0.08px", lineHeight: "1.3" }}
          >
            &copy; {new Date().getFullYear()} Valore Web Design. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className={`transition-colors ${
                isDarkPage ? "text-[#52525b] hover:text-[#a1a1aa]" : "text-[#7a7a7a] hover:text-[#1d1d1f]"
              }`}
              style={{ fontSize: "11px", letterSpacing: "-0.08px", lineHeight: "1.3" }}
            >
              Privacy Policy
            </Link>
            <span className={`${isDarkPage ? "text-[#52525b]" : "text-[#d2d2d7]"}`}>&middot;</span>
            <Link
              href="/terms"
              className={`transition-colors ${
                isDarkPage ? "text-[#52525b] hover:text-[#a1a1aa]" : "text-[#7a7a7a] hover:text-[#1d1d1f]"
              }`}
              style={{ fontSize: "11px", letterSpacing: "-0.08px", lineHeight: "1.3" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
