"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface MaskedTextProps extends HTMLMotionProps<"div"> {
  text: string | string[];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

/**
 * Architectural Masked Text Reveal.
 * Words or lines glide up smoothly from an overflow-hidden mask.
 * Easing: [0.16, 1, 0.3, 1] (Apple/Studio kinetic bezier).
 */
export default function MaskedText({
  text,
  as = "h1",
  className = "",
  lineClassName = "",
  delay = 0.1,
  stagger = 0.12,
  duration = 0.9,
  ...props
}: MaskedTextProps) {
  const lines = Array.isArray(text) ? text : [text];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      y: "115%",
      opacity: 0,
      rotateX: 10,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const Component = motion[as] as React.ElementType;

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden py-1">
          <motion.span
            variants={lineVariants}
            className={`block will-change-transform ${lineClassName}`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
