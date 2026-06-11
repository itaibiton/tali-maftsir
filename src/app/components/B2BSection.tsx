"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { PrimaryCtaLink } from "../../components/PrimaryCtaLink";
import { AnimatedBlob } from "./AnimatedBlob";

const benefits = [
  "תמיכה מקצועית לעובדים בנושאים אישיים ומקצועיים",
  "כלים להתמודדות עם לחץ, שחיקה ואתגרים בעבודה",
  "שיפור הביטחון העצמי והמוטיבציה של העובדים",
  "חיזוק תחושת השייכות והערך בארגון",
  "דיסקרטיות מלאה — התכנים מהפגישות נשארים בין העובד למלווה",
];

export default function B2BSection() {
  return (
    <section
      id="b2b"
      className="w-full py-24 bg-[var(--cream)] px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* soft lilac wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(45% 50% at 15% 80%, var(--lilac-soft) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
        {/* Group illustration in blob */}
        <motion.div
          className="flex items-center justify-center w-full lg:w-[45%]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full max-w-sm md:max-w-md">
            <div className="absolute -inset-2 blob-frame bg-[var(--mint)]/40 translate-x-4 translate-y-3" aria-hidden />
            <AnimatedBlob
              imageSrc="/images/v2/group.jpg"
              alt="אילוסטרציה של קבוצת עובדים בשיחה פתוחה"
              blobVariant={2}
              className="relative shadow-lg"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="w-full lg:w-[55%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--green-deep)] mb-6 leading-snug">
            ליווי <span className="marker-lime marker-lilac">לארגונים</span>
          </h2>
          <div className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8">
            <motion.p
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              חברות שמשקיעות ברווחת העובדים שלהן רואות תוצאות — עובדים מרוצים יותר,
              פרודוקטיביות גבוהה יותר, ושימור טאלנטים לאורך זמן. הליווי האישי שלי
              מותאם לעולם הארגוני ומאפשר לעובדים לקבל תמיכה מקצועית בנושאים אישיים
              ומקצועיים כאחד.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              אני מציעה חבילות ליווי גמישות לארגונים — ממספר פגישות בודדות לעובדים
              שזקוקים לתמיכה נקודתית, ועד ריטיינר קבוע של שעות ליווי חודשיות לכלל
              העובדים.
            </motion.p>
          </div>

          {/* Benefits for organizations */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 mb-8 border border-[var(--lilac)]/30 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl md:text-2xl text-[var(--green-deep)] mb-5">
              מה הארגון מקבל?
            </h3>
            <ul className="text-[var(--color-neutral-600)] text-lg space-y-3.5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--lilac)]/40 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[var(--green-deep)]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Business CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[var(--green-deep)] font-semibold text-lg mb-6">
              מחירים ותנאים מותאמים לגודל הארגון ולצרכים
            </p>
            <PrimaryCtaLink
              href="https://wa.me/972XXXXXXXXX?text=%D7%A4%D7%A0%D7%99%D7%99%D7%94%20%D7%A2%D7%A1%D7%A7%D7%99%D7%AA"
              target="_blank"
              rel="noopener noreferrer"
              icon={<HugeiconsIcon icon={WhatsappIcon} size={24} />}
            >
              לפנייה עסקית
            </PrimaryCtaLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
