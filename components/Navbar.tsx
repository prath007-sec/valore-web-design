"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isDarkPage = pathname.startsWith("/examples/premium");
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkPage
          ? "bg-[#1d1d1f]/90 border-white/[0.06]"
          : "bg-white/90 border-[#f0f0f0]"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6">
        <Link
          href="/"
          className={`font-semibold flex items-center gap-2 transition-colors duration-300 ${
            isDarkPage ? "text-white" : "text-[#1d1d1f]"
          }`}
          style={{ fontSize: "14px", lineHeight: "1" }}
        >
          Valore<span className="text-[#0066cc]">.</span>
          <span className={`hidden sm:inline-flex items-center gap-1 font-normal transition-colors duration-300 ${
            isDarkPage ? "text-[#a1a1aa]" : "text-[#7a7a7a]"
          }`} style={{ fontSize: "12px" }}>
            <MapPin className="h-3 w-3" />
            Missouri
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-8">
          <ul className="hidden sm:flex items-center gap-5 md:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const linkColor = isDarkPage
                ? isActive ? "#2997ff" : "#a1a1aa"
                : isActive ? "#0066cc" : "#7a7a7a";
              const hoverColor = isDarkPage ? "#e4e4e7" : "#1d1d1f";
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-all hover:text-[#1d1d1f]"
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      lineHeight: "1",
                      color: linkColor,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = linkColor}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/cart"
            className={`relative flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all ${
              isDarkPage
                ? "text-[#a1a1aa] hover:text-white hover:bg-white/[0.06]"
                : "text-[#7a7a7a] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
            }`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            <span className="text-xs font-medium hidden sm:inline">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#0066cc] text-white text-[9px] font-bold flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            href="/contact"
            className={`rounded-full transition-all ${
              isDarkPage
                ? "bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]"
                : "bg-[#0066cc] text-white hover:bg-[#0071e3]"
            }`}
            style={{
              fontSize: "13px",
              padding: "7px 16px",
              lineHeight: "1",
              fontWeight: 500,
            }}
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
