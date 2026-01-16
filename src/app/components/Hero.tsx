"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Photo with border - image rises from below */}
        <div className="flex flex-col items-center mb-8">
          {/* Border appears first */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Image container with overflow hidden to create "rising from under" effect */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.25,
                  ease: [0.33, 1, 0.68, 1] // easeOutCubic
                }}
              >
                <Image
                  src="/images/hero-no-bg.png"
                  alt="טלי מפציר - ליווי אישי בשיטת סאטיה"
                  width={400}
                  height={500}
                  className="w-64 md:w-80 lg:w-96 h-auto"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative border - appears and expands */}
          <motion.div
            className="h-0.5 bg-[var(--color-primary)]"
            initial={{ width: 0 }}
            animate={{ width: "90vw" }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: [0.33, 1, 0.68, 1]
            }}
            style={{ maxWidth: "56rem" }}
          />
        </div>

        {/* Headline */}
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-primary-dark)] mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          הזמן להפסיק להסתדר ולהתחיל לחיות
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-[var(--color-neutral-600)] mb-10 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          ליווי אישי בשיטת סאטיה | צמיחה מתוך חיבור
        </motion.p>

        {/* WhatsApp CTA Button */}
        <motion.a
          href="https://wa.me/972XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 text-lg md:text-xl font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          לשיחת היכרות בוואטסאפ
        </motion.a>
      </div>
    </section>
  );
}
