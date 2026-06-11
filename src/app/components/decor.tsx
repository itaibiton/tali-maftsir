"use client";

import { useRef, useId } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const EASE: [number, number, number, number] = [0.21, 0.61, 0.35, 1];

/**
 * Shared section enter transition: blur-rise reveal on scroll into view.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Decorative glowing blob for section backgrounds — heavily blurred so it
 * reads as a soft color wash (like the hero gradients), slowly morphing.
 * Size/position/color via className (e.g. "-top-32 -left-32 w-96 h-96 bg-[var(--lime)]/40").
 */
export function Blob({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none blob-shape blur-3xl ${className}`}
    />
  );
}

const LEAF_PATH =
  "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z";

/**
 * Gradient leaf with a soft drop shadow (dimensional feel) that drifts
 * and rotates on scroll for a parallax effect.
 */
export function ParallaxLeaf({
  className = "",
  size = 56,
  from = "var(--green)",
  to = "var(--mint)",
  drift = 60,
  rotate = 18,
  flip = false,
}: {
  className?: string;
  size?: number;
  from?: string;
  to?: string;
  drift?: number;
  rotate?: number;
  flip?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const gradientId = useId().replace(/:/g, "");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);
  const r = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate: r }}
      className={`absolute pointer-events-none z-0 ${className}`}
      aria-hidden
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{
          transform: flip ? "scaleX(-1)" : undefined,
          filter:
            "drop-shadow(0 8px 10px rgba(22, 41, 28, 0.22)) drop-shadow(0 2px 3px rgba(22, 41, 28, 0.12))",
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path fill={`url(#${gradientId})`} d={LEAF_PATH} />
      </svg>
    </motion.div>
  );
}
