"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip-card";
import { Blob, ParallaxLeaf, Reveal } from "./decor";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full relative overflow-hidden bg-[var(--cream)] px-6 py-24 md:px-12 lg:px-20"
    >
      {/* organic background shapes */}
      <Blob className="-top-28 -left-28 w-96 h-96 bg-[var(--lime-soft)]" />
      <Blob className="-bottom-24 -right-20 w-80 h-80 bg-[var(--mint-soft)]" />
      <ParallaxLeaf
        className="top-16 right-[4%] hidden md:block"
        size={44}
        from="var(--green)"
        to="var(--lime)"
        drift={60}
        flip
      />
      <ParallaxLeaf
        className="bottom-20 left-[40%] hidden lg:block"
        size={34}
        from="var(--lilac)"
        to="var(--mint)"
        drift={45}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">
        {/* Portrait in arch frame (left in RTL) */}
        <Reveal className="order-1 lg:order-2 flex items-center justify-center w-full lg:w-[42%]" delay={0.15} y={40}>
          <div className="relative w-full max-w-sm md:max-w-md">
            {/* offset arch shapes behind the portrait */}
            <div className="absolute inset-0 arch-frame bg-[var(--mint)] translate-x-5 translate-y-5" aria-hidden />
            <div className="absolute inset-0 arch-frame bg-[var(--lilac)]/45 -translate-x-3 translate-y-2" aria-hidden />

            <div className="relative arch-frame bg-[var(--lime-soft)]">
              <Image
                src="/images/tali-portrait-1.jpg"
                alt="טלי מפציר"
                width={900}
                height={1100}
                quality={95}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>

            {/* leaf accent */}
            <div className="absolute -top-7 -left-4 float-soft" aria-hidden>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--green)">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>
            </div>
          </div>
        </Reveal>

        {/* Text content (right in RTL) */}
        <Reveal className="order-2 lg:order-1 w-full lg:w-[58%] flex flex-col justify-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--green-deep)] mb-10">
            <span className="marker-lime">טלי מפציר</span>
          </h2>

          <div className="space-y-6 text-[var(--color-neutral-600)] text-lg md:text-xl leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[var(--color-neutral-600)] text-lg md:text-xl leading-relaxed"
            >
              אני טלי מפציר, מלווה אישית בשיטת{" "}
              <Tooltip
                content={
                  <div className="text-right">
                    <p className="font-semibold mb-2">שיטת סאטיה</p>
                    <p className="text-sm leading-relaxed">
                      שיטה טיפולית הוליסטית שמסתכלת על האדם השלם — על מה שקורה
                      בתוכנו, ביחסים שלנו עם אחרים, ועל הדרך שבה אנחנו מתמודדים
                      עם האתגרים של החיים. השיטה מתמקדת בהבנת דפוסים, ריפוי
                      חוויות מהעבר, ובניית דרכי התמודדות חדשות לצמיחה אישית
                      אמיתית.
                    </p>
                  </div>
                }
              >
                <span className="underline decoration-[3px] decoration-[var(--green)] underline-offset-4 cursor-help">
                  סאטיה
                </span>
              </Tooltip>
              . אני מאמינה שבתוך כל אחד ואחת מאיתנו יש את כל מה שצריך כדי לחיות
              חיים מלאים ומספקים — לפעמים אנחנו פשוט צריכים מישהו שיעזור לנו לראות
              את זה.
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              אני מקשיבה באמת, עם סקרנות וללא שיפוט. בתהליך שלנו יחד אני ישירה
              וממוקדת, מאתגרת כשצריך ורכה כשצריך. יש מקום להומור, לקלילות, ולחיבור
              אמיתי — אבל גם לעבודה עמוקה ורצינית על הדברים שחשובים לך.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              אני עובדת מאמסטרדם, אונליין דרך זום, עם מטופלים מכל העולם. עברתי
              בעצמי תהליכי שינוי משמעותיים, כולל מעבר חיים בין יבשות, ואני יודעת
              מה זה לעמוד מול אתגרים גדולים. הניסיון הזה מלווה אותי בעבודה
              ומאפשר לי להכיל גם את מה שנראה לך קשה או מסובך.
            </motion.p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
