"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface ScrambleTextProps {
  text: string;
  as?: "span" | "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  scrambleOnHover?: boolean;
  triggerOnView?: boolean;
  characters?: string;
  duration?: number;
  delay?: number;
}

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_/[]{}—=+*^?#";

/**
 * Visuvate-inspired Scramble / Decrypt Letter Animation.
 * Letters rapidly cycle through random glyphs before resolving into place.
 */
export default function ScrambleText({
  text,
  as: Component = "span",
  className = "",
  scrambleOnHover = true,
  triggerOnView = true,
  characters = DEFAULT_CHARS,
  duration = 750,
  delay = 0,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLElement>(null);
  const isScramblingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  const startScramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    const startTime = performance.now();
    const length = text.length;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealedCount = Math.floor(progress * length);

      let scrambled = "";
      for (let i = 0; i < length; i++) {
        if (text[i] === " " || text[i] === "\n") {
          scrambled += text[i];
        } else if (i < revealedCount) {
          scrambled += text[i];
        } else {
          const randomIndex = Math.floor(Math.random() * characters.length);
          scrambled += characters[randomIndex];
        }
      }

      setDisplayText(scrambled);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayText(text);
        isScramblingRef.current = false;
      }
    };

    animationFrameRef.current = requestAnimationFrame(update);
  }, [text, characters, duration]);

  useEffect(() => {
    if (!triggerOnView) return;

    let timeoutId: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (delay > 0) {
            timeoutId = setTimeout(() => {
              startScramble();
            }, delay);
          } else {
            startScramble();
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [triggerOnView, startScramble, delay]);

  const handleMouseEnter = () => {
    if (scrambleOnHover && !isScramblingRef.current) {
      startScramble();
    }
  };

  const fontClass = className.includes("font-") ? "" : "font-mono";

  return (
    <Component
      // @ts-expect-error polymorphic ref
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-block select-none ${fontClass} ${className}`.trim()}
    >
      {displayText}
    </Component>
  );
}
