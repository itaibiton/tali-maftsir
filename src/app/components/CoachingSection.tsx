"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { PrimaryCtaLink } from "../../components/PrimaryCtaLink";
import { AnimatedBlob } from "./AnimatedBlob";
import { Blob, ParallaxLeaf, Reveal } from "./decor";

const feelings = [
  "היחסים שלך עם אנשים קרובים לא עובדים כמו שהיית רוצה",
  "קשה לך להרגיש טוב עם עצמך לגבי דברים מסוימים",
  "אתה רוצה לפרוץ קדימה אבל משהו עוצר אותך",
  "יש דברים מהעבר שמשפיעים על ההווה שלך",
  "יש בך יותר ממה שכרגע בא לידי ביטוי בחייך",
];

export default function CoachingSection() {
  return (
    <section
      id="coaching"
      className="w-full py-24 bg-[var(--mint-soft)] px-6 md:px-12 lg:px-20 relative overflow-hidden grain"
    >
      {/* organic background shapes */}
      <Blob className="-top-32 -left-32 w-96 h-96 bg-[var(--lime)]/40" />
      <Blob className="-bottom-28 -right-24 w-80 h-80 bg-white/50" />
      <ParallaxLeaf
        className="top-14 right-[5%] hidden md:block"
        size={56}
        from="var(--green)"
        to="var(--lime)"
        drift={75}
      />
      <ParallaxLeaf
        className="bottom-20 left-[8%] hidden md:block"
        size={38}
        from="var(--green-deep)"
        to="var(--green)"
        drift={45}
        flip
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
        {/* Text content */}
        <Reveal className="order-2 w-full lg:w-[55%]">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--green-deep)] mb-6 leading-snug">
            תהליך ליווי אישי <span className="marker-lime">בשיטת סאטיה</span>
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
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 mb-8 border border-[var(--mint)]/40 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl md:text-2xl text-[var(--green-deep)] mb-5">
              אם אתה מרגיש ש...
            </h3>
            <ul className="text-[var(--color-neutral-600)] space-y-3.5">
              {feelings.map((feeling, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--lime)] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[var(--green-deep)]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{feeling}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[var(--green-deep)] font-semibold text-lg mb-6">
              מחיר פגישה: ₪250 | פגישות של 50 דקות | אונליין בזום
            </p>
            <PrimaryCtaLink
              href="https://wa.me/972506660011"
              target="_blank"
              rel="noopener noreferrer"
              icon={<HugeiconsIcon icon={WhatsappIcon} size={24} />}
            >
              לשיחת היכרות בוואטסאפ
            </PrimaryCtaLink>
          </motion.div>
        </Reveal>

        {/* Process animation in blob */}
        <Reveal className="order-1 flex items-center justify-center w-full lg:w-[45%]" delay={0.15} y={40}>
          <div className="relative w-full max-w-sm md:max-w-md">
            <div className="absolute -inset-2 blob-frame bg-[var(--lilac)]/35 translate-x-4 -translate-y-3" aria-hidden />
            <AnimatedBlob
              videoSrc="/images/v2/process.mp4"
              imageSrc="/images/v2/process.jpg"
              alt="אילוסטרציה של תהליך צמיחה — חוט סבוך שהופך לצמח פורח"
              blobVariant={2}
              className="relative shadow-lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
