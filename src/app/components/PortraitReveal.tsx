"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import { LeafSvg } from "./decor";

type PortraitRevealProps = {
  photoSrc: string;
  illustrationSrc: string;
  videoSrc?: string;
  alt: string;
  className?: string;
};

type LeafConfig = {
  className: string;
  size: number;
  from: string;
  to: string;
  rotate: number;
  delay: number;
  depth: number; // px of mouse-parallax drift — bigger feels closer
  flip?: boolean;
  layer: "front" | "back";
};

const LEAVES: LeafConfig[] = [
  { className: "-top-8 -right-6", size: 72, from: "var(--green)", to: "var(--lime)", rotate: 18, delay: 0, depth: 26, layer: "front" },
  { className: "-bottom-6 -left-8", size: 62, from: "var(--green-deep)", to: "var(--green)", rotate: -160, delay: 0.06, depth: 22, flip: true, layer: "front" },
  { className: "top-1/4 -left-10", size: 44, from: "var(--mint)", to: "var(--lime)", rotate: -40, delay: 0.12, depth: 30, layer: "front" },
  { className: "-top-10 left-10", size: 56, from: "var(--mint)", to: "var(--mint-soft)", rotate: -15, delay: 0.05, depth: 12, layer: "back" },
  { className: "bottom-1/4 -right-10", size: 50, from: "var(--lilac)", to: "var(--mint)", rotate: 140, delay: 0.1, depth: 14, flip: true, layer: "back" },
  { className: "-bottom-9 right-1/4", size: 40, from: "var(--green)", to: "var(--mint)", rotate: -200, delay: 0.15, depth: 10, layer: "back" },
];

function HoverLeaf({
  cfg,
  revealed,
  mx,
  my,
}: {
  cfg: LeafConfig;
  revealed: boolean;
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const x = useTransform(mx, (v) => v * cfg.depth);
  const y = useTransform(my, (v) => v * cfg.depth);

  return (
    <motion.div
      style={{ x, y }}
      className={`absolute pointer-events-none ${cfg.layer === "front" ? "z-10" : "-z-10"} ${cfg.className}`}
      initial={false}
      animate={
        revealed
          ? { opacity: 1, scale: 1, rotate: cfg.rotate }
          : { opacity: 0, scale: 0.2, rotate: cfg.rotate - 50 }
      }
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 16,
        delay: revealed ? cfg.delay : 0,
      }}
      aria-hidden
    >
      <LeafSvg size={cfg.size} from={cfg.from} to={cfg.to} flip={cfg.flip} />
    </motion.div>
  );
}

/**
 * Shows the real photo by default; on hover the illustrated version is
 * "painted in" through a circular reveal expanding from the cursor's entry
 * point, while gradient leaves spring in around the blob — front and back
 * layers drifting with the mouse for a dimensional parallax feel.
 * Tap toggles on touch.
 */
export function PortraitReveal({
  photoSrc,
  illustrationSrc,
  videoSrc,
  alt,
  className = "",
}: PortraitRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  // normalized mouse position (-1..1), spring-smoothed for the leaf parallax
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 120, damping: 20 });
  const my = useSpring(rawY, { stiffness: 120, damping: 20 });

  const pointFromEvent = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return { x: 50, y: 50 };
    return {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={(e) => {
        setOrigin(pointFromEvent(e));
        setRevealed(true);
      }}
      onMouseLeave={(e) => {
        setOrigin(pointFromEvent(e));
        setRevealed(false);
        rawX.set(0);
        rawY.set(0);
      }}
      onMouseMove={(e) => {
        const p = pointFromEvent(e);
        rawX.set((p.x / 100 - 0.5) * 2);
        rawY.set((p.y / 100 - 0.5) * 2);
      }}
      onClick={() => setRevealed((v) => !v)}
    >
      {/* leaves springing in around the portrait on hover */}
      {LEAVES.map((cfg, i) => (
        <HoverLeaf key={i} cfg={cfg} revealed={revealed} mx={mx} my={my} />
      ))}

      <div
        ref={ref}
        className="relative aspect-square blob-frame isolate cursor-pointer"
      >
        {/* base layer — the real Tali (own blob clip so corners survive the scale transform) */}
        <div className="absolute inset-0 blob-frame">
          <Image
            src={photoSrc}
            alt={alt}
            fill
            quality={95}
            className={`object-cover object-top transition-transform duration-700 ${
              revealed ? "scale-105" : "scale-100"
            }`}
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>

        {/* hover layer — the illustrated Tali, painted in from the cursor */}
        <div
          className="absolute inset-0 blob-frame"
          style={{
            clipPath: `circle(${revealed ? 142 : 0}% at ${origin.x}% ${origin.y}%)`,
            transition: "clip-path 0.9s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
          aria-hidden={!revealed}
        >
          {videoSrc ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={illustrationSrc}
              aria-label={`${alt} — איור`}
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={illustrationSrc}
              alt={`${alt} — איור`}
              fill
              quality={95}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          )}
        </div>

        {/* hover hint — icon only */}
        <span
          className={`absolute bottom-5 right-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white/85 backdrop-blur-sm shadow-md flex items-center justify-center text-[var(--green-deep)] transition-opacity duration-500 pointer-events-none ${
            revealed ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden
        >
          <MousePointer2 size={18} className="animate-pulse" />
        </span>
      </div>
    </div>
  );
}
