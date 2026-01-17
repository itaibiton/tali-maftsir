"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PrimaryCtaLink } from "../../components/PrimaryCtaLink";

export default function B2BSection() {
  return (
    <section
      id="b2b"
      className="w-full py-20 bg-[#fffdff] px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative justify-between">
        {/* RIGHT - Animation */}
        <motion.div
          className="mt-12 lg:mt-0 flex items-center justify-center lg:justify-start w-full lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
            <Image
              src="/images/group-4.gif"
              alt="Group coaching animation"
              width={800}
              height={800}
              quality={100}
              className="w-full h-auto object-contain"
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            {/* Fade mask - uses #fffdff to match background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to bottom, #fffdff 0%, transparent 25%, transparent 75%, #fffdff 100%),
                  radial-gradient(ellipse at center, transparent 50%, #fffdff 100%)
                `,
              }}
            />
          </div>
        </motion.div>
        {/* LEFT - Text content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
            ליווי לארגונים
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
            className="bg-[var(--color-neutral-100)] rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-semibold text-[var(--color-primary-dark)] mb-4">
              מה הארגון מקבל?
            </h3>
            <ul className="text-[var(--color-neutral-600)] text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>תמיכה מקצועית לעובדים בנושאים אישיים ומקצועיים</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>כלים להתמודדות עם לחץ, שחיקה ואתגרים בעבודה</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>שיפור הביטחון העצמי והמוטיבציה של העובדים</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>חיזוק תחושת השייכות והערך בארגון</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>דיסקרטיות מלאה — התכנים מהפגישות נשארים בין העובד למלווה</span>
              </li>
            </ul>
          </motion.div>

          {/* Business CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[var(--color-neutral-600)] text-lg mb-6">
              מחירים ותנאים מותאמים לגודל הארגון ולצרכים
            </p>
            <PrimaryCtaLink
              href="https://wa.me/972XXXXXXXXX?text=%D7%A4%D7%A0%D7%99%D7%99%D7%94%20%D7%A2%D7%A1%D7%A7%D7%99%D7%AA"
              target="_blank"
              rel="noopener noreferrer"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              }
            >
              לפנייה עסקית
            </PrimaryCtaLink>
          </motion.div>
        </motion.div>

       
      </div>
    </section>
  );
}
