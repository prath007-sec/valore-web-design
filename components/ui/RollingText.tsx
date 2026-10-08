"use client";

import React from "react";

interface RollingTextProps {
  children: string;
  className?: string;
  duplicateClassName?: string;
}

/**
 * Dual-layer kinetic rolling text hover effect.
 * Inspired by high-end studio design (Metabole Studio, Apple Keynotes).
 * The active label rolls upward while a cloned layer glides in from below.
 */
export default function RollingText({
  children,
  className = "",
  duplicateClassName = "",
}: RollingTextProps) {
  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      {/* Primary layer */}
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {children}
      </span>
      {/* Clone layer gliding in from below */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 inline-block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 ${duplicateClassName}`}
      >
        {children}
      </span>
    </span>
  );
}
