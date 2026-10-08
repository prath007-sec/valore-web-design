"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";
import ValoreLogo from "@/components/ui/ValoreLogo";
import RollingText from "@/components/ui/RollingText";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Selected Work", href: "/work" },
  { label: "Capabilities", href: "/#services" },
  { label: "Studio", href: "/#about-me" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-black/80 border-b border-white/[0.08] shadow-2xl py-3"
            : "backdrop-blur-xl bg-black/40 border-b border-white/[0.04] py-4"
        }`}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <ValoreLogo size="sm" />
          </Link>

          {/* Desktop Navigation Links with Kinetic Rolling Hover */}
          <div className="flex items-center gap-6 sm:gap-8">
            <ul className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group relative block py-1 font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-[#86868B] hover:text-[#F5F5F7]"
                      }`}
                    >
                      <RollingText duplicateClassName="text-white">
                        {link.label}
                      </RollingText>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full transition-colors text-[#86868B] hover:text-white hover:bg-white/5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Apple-style Initiate Project CTA */}
            <a
              href="/#book-discovery"
              className="group hidden sm:inline-flex items-center rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-xl px-5 py-2 text-[11px] font-mono tracking-[0.18em] uppercase text-[#F5F5F7] transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-lg active:scale-[0.96]"
            >
              <RollingText duplicateClassName="text-black">
                Initiate Project
              </RollingText>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden p-2 text-[#86868B] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-28 px-8 pb-10 overflow-y-auto lg:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#86868B] uppercase">
                Navigation Index
              </span>
              <ul className="flex flex-col gap-5 border-b border-white/[0.08] pb-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-2xl font-bold tracking-tight uppercase text-[#F5F5F7] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 pt-2">
                <a
                  href="/#book-discovery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center rounded-full bg-white text-black font-mono text-xs tracking-wider uppercase py-4 px-6 active:scale-[0.96] shadow-xl"
                >
                  Initiate Project Spec
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-[#F5F5F7] font-mono text-xs tracking-wider uppercase py-3.5 px-6"
                >
                  Direct Inquiry
                </Link>
              </div>
            </div>

            <div className="max-w-md mx-auto w-full pt-8 border-t border-white/[0.08] flex items-center justify-between text-[#86868B] font-mono text-[10px] uppercase tracking-widest">
              <span>Studio Valore &bull; 2026</span>
              <span>Bespoke Architecture</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
