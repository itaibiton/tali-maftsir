"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon, LeafIcon } from "@hugeicons/core-free-icons";
import { PrimaryCtaLink } from "../../components/PrimaryCtaLink";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20 md:px-12 lg:px-20 overflow-hidden bg-[#fefcfe]">
      {/* Two-column flex: illustration (left) | content (right) */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between ">

        {/* LEFT column - Hero illustration (appears LEFT on desktop RTL) */}
        <motion.div
          className="order-1 lg:order-2 flex items-center justify-center lg:justify-end w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
            <Image
              src="/images/animation-left.gif"
              alt="Animated illustration representing personal growth"
              width={800}
              height={800}
              quality={100}
              className="w-full h-auto object-contain"
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            {/* Fade mask to blend with background */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: `
                linear-gradient(to bottom, #fefcfe 0%, transparent 25%, transparent 75%, #fefcfe 100%),
                radial-gradient(ellipse at center, transparent 50%, #fefcfe 100%)
              `
            }} />
          </div>
        </motion.div>

        {/* RIGHT column - Content (appears RIGHT on desktop RTL) */}
        <motion.div className="order-2 lg:order-1 flex flex-col justify-center w-full lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >

          {/* Tagline badge - subtle intro element */}
          <motion.div
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm md:text-base font-medium text-[var(--color-primary-dark)] bg-[var(--color-primary-light)]/40 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
              טלי מפציר | מטפלת בשיטת סאטיה
            </span>
          </motion.div>

          {/* Headline - impactful but warm */}
          <motion.h1
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[var(--color-neutral-800)] mb-4 leading-[1.2] tracking-tight"
            style={{ fontFamily: 'var(--font-display), "Heebo", "Assistant", sans-serif' }}
          >
            הזמן להפסיק להסתדר
            <br />
            <span className="text-[var(--color-primary-dark)]">ולהתחיל לחיות</span>
          </motion.h1>


          {/* Subheadline - clear secondary hierarchy */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-[var(--color-neutral-600)] mb-10 max-w-2xl leading-relaxed font-light"
          >
            כאן תמצאו מקום בטוח לעבודה עמוקה על החיים שלכם — על היחסים, על התקשורת, ועל הדרך שבה אתם מתמודדים עם אתגרים. אני טלי מפציר, מלווה אישית בשיטת סאטיה, ואני כאן כדי ללוות אתכם בתהליך של צמיחה אישית, ריפוי דפוסים מהעבר, ובניית דרכי התמודדות חדשות. יחד נגלה מה עוצר אתכם, נבנה כלים מעשיים, וניצור שינוי אמיתי ומתמשך בחיים שלכם.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* WhatsApp CTA Button - prominent and inviting */}
            <PrimaryCtaLink
              href="https://wa.me/972XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              icon={
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  size={24}
                  className="relative z-10"
                />
              }
            >
              לשיחת היכרות בוואטסאפ
            </PrimaryCtaLink>

            {/* Learn About Method CTA Button */}
            <PrimaryCtaLink
              href="#coaching"
              variant="secondary"
              icon={
                <HugeiconsIcon
                  icon={LeafIcon}
                  size={20}
                  className="transition-transform group-hover:scale-110 group-hover:rotate-3"
                />
              }
            >
              שיטת הסאטיה
            </PrimaryCtaLink>
          </div>

          {/* Trust indicator below CTA */}
          <motion.p
            className="mt-4 text-sm text-[var(--color-neutral-600)]/70 flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            ללא התחייבות
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
