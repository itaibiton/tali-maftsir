"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon, LeafIcon } from "@hugeicons/core-free-icons";
import { PrimaryCtaLink } from "../../components/PrimaryCtaLink";
import { AnimatedBlob } from "./AnimatedBlob";
import { ParallaxLeaf, EASE } from "./decor";

const marqueeWords = [
  "הקשבה אמיתית",
  "צמיחה אישית",
  "ריפוי דפוסים",
  "תקשורת",
  "חיבור אמיתי",
  "דרך ברורה",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--cream)] grain">
      {/* soft color washes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(55% 45% at 18% 22%, var(--lime-soft) 0%, transparent 70%),
            radial-gradient(50% 50% at 85% 75%, var(--mint-soft) 0%, transparent 70%),
            radial-gradient(30% 30% at 70% 15%, var(--lilac-soft) 0%, transparent 75%)
          `,
        }}
      />

      {/* parallax leaves drifting around the hero */}
      <ParallaxLeaf
        className="top-[20%] left-[3%] hidden md:block"
        size={62}
        from="var(--green)"
        to="var(--mint)"
        drift={80}
      />
      <ParallaxLeaf
        className="top-[12%] right-[28%] hidden lg:block"
        size={36}
        from="var(--mint)"
        to="var(--lime)"
        drift={55}
        flip
      />
      <ParallaxLeaf
        className="bottom-[26%] right-[2%] hidden md:block"
        size={46}
        from="var(--lilac)"
        to="var(--mint)"
        drift={65}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Content (right in RTL) */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <motion.div
            className="mb-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm md:text-base font-semibold text-[var(--green-deep)] bg-white/70 backdrop-blur-sm border border-[var(--mint)]/50 rounded-full shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--green)] animate-pulse" />
              טלי מפציר | מטפלת בשיטת סאטיה
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--green-deep)] mb-7 leading-[1.15]"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          >
            הזמן להפסיק להסתדר
            <br />
            <span className="marker-lime">ולהתחיל לחיות</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-[var(--color-neutral-600)] mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            כאן תמצאו מקום בטוח לעבודה עמוקה על החיים שלכם — על היחסים, על התקשורת, ועל הדרך שבה אתם מתמודדים עם אתגרים. אני טלי מפציר, מלווה אישית בשיטת סאטיה, ואני כאן כדי ללוות אתכם בתהליך של צמיחה אישית, ריפוי דפוסים מהעבר, ובניית דרכי התמודדות חדשות. יחד נגלה מה עוצר אתכם, נבנה כלים מעשיים, וניצור שינוי אמיתי ומתמשך בחיים שלכם.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <PrimaryCtaLink
              href="https://wa.me/972XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              variant="lime"
              icon={<HugeiconsIcon icon={WhatsappIcon} size={24} className="relative z-10" />}
            >
              לשיחת היכרות בוואטסאפ
            </PrimaryCtaLink>

            <PrimaryCtaLink
              href="#coaching"
              variant="secondary"
              icon={
                <HugeiconsIcon
                  icon={LeafIcon}
                  size={20}
                  className="transition-transform group-hover:scale-110 group-hover:rotate-6"
                />
              }
            >
              שיטת הסאטיה
            </PrimaryCtaLink>
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-[var(--color-neutral-600)]/80 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <svg className="w-4 h-4 text-[var(--green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            ללא התחייבות
          </motion.p>
        </motion.div>

        {/* Animation in organic blob (left in RTL) */}
        <motion.div
          className="w-full lg:w-[45%] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
            {/* offset organic shadow shapes */}
            <div className="absolute -inset-3 blob-frame-2 bg-[var(--mint)]/40 translate-x-4 translate-y-4" />
            <div className="absolute -inset-1 blob-frame bg-[var(--lime)]/50 -translate-x-3 translate-y-2" />

            <AnimatedBlob
              videoSrc="/images/v2/hero.mp4"
              imageSrc="/images/v2/hero.jpg"
              alt="אילוסטרציה של אישה צועדת בין עלים — התחלה חדשה"
              className="relative shadow-xl"
            />

            {/* floating accents */}
            <div className="absolute -top-6 -right-2 float-soft" aria-hidden>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="var(--green)">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-2 float-soft-delayed" aria-hidden>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="var(--lilac)">
                <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* marquee strip */}
      <div className="relative w-full border-y-2 border-[var(--green-deep)]/10 bg-white/50 backdrop-blur-sm py-3.5 overflow-hidden" dir="ltr">
        <div className="marquee-track flex w-max gap-0">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {marqueeWords.map((word) => (
                <span
                  key={`${copy}-${word}`}
                  className="flex items-center gap-6 px-6 text-lg font-semibold text-[var(--green-deep)]/80 whitespace-nowrap"
                >
                  {word}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--green)" aria-hidden>
                    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
