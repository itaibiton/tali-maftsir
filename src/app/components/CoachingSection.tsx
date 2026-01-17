"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PrimaryCtaLink } from "../../components/PrimaryCtaLink";

export default function CoachingSection() {
  return (
    <section
      id="coaching"
      className="w-full py-20 bg-[#fffdff] px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative">
        {/* LEFT - Text content (order-2 on desktop for RTL visual left) */}
        <motion.div
          className="order-2 lg:order-2 w-full lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
            תהליך ליווי אישי בשיטת סאטיה
          </h2>
          <div className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8">
            <motion.p
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              שיטת סאטיה היא גישה הוליסטית לעבודה טיפולית, שמסתכלת על האדם השלם —
              על מה שקורה בתוכנו, ביחסים שלנו עם אחרים, ועל הדרך שבה אנחנו מתמודדים
              עם האתגרים של החיים. בתהליך הליווי נעבוד יחד על הנושאים שמעסיקים אותך,
              בקצב שמתאים לך.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              תהליך שלם נמשך בדרך כלל כשנה (כ-40 פגישות), וכולל עבודה על היכרות עצמית
              עמוקה, ריפוי דפוסים מהעבר, ובניית דרכי התמודדות חדשות. זו לא דרך קלה,
              אבל התוצאות שוות את ההשקעה.
            </motion.p>
          </div>

          {/* What clients work on */}
          <motion.div
            className="bg-[var(--color-neutral-100)] rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-semibold text-[var(--color-primary-dark)] mb-4">
              אם אתה מרגיש ש...
            </h3>
            <ul className="text-[var(--color-neutral-600)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>היחסים שלך עם אנשים קרובים לא עובדים כמו שהיית רוצה</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>קשה לך להרגיש טוב עם עצמך לגבי דברים מסוימים</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>אתה רוצה לפרוץ קדימה אבל משהו עוצר אותך</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>יש דברים מהעבר שמשפיעים על ההווה שלך</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">●</span>
                <span>יש בך יותר ממה שכרגע בא לידי ביטוי בחייך</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[var(--color-neutral-600)] text-lg mb-6">
              מחיר פגישה: ₪250 | פגישות של 50 דקות | אונליין בזום
            </p>
            <PrimaryCtaLink
              href="https://wa.me/972XXXXXXXXX"
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
              לשיחת היכרות בוואטסאפ
            </PrimaryCtaLink>
          </motion.div>
        </motion.div>

        {/* RIGHT - Animation with fade mask (order-1 on desktop for RTL visual right) */}
        <motion.div
          className="order-1 lg:order-1 flex items-center justify-center lg:justify-start w-full lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
            <Image
              src="/images/animation-right.gif"
              alt="Animated illustration"
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
      </div>
    </section>
  );
}
