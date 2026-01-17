"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip-card";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full relative overflow-hidden bg-[#fefefe] px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative h-full">
        {/* LEFT - Tali's portrait (order-2 on desktop for RTL visual left) */}
        <motion.div
          className="order-1 lg:order-2 flex items-center justify-center w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full">
            <Image
              src="/images/bg-no-bg-hd.png"
              alt="טלי מפציר"
              width={1200}
              height={1500}
              quality={100}
              className="w-full h-auto object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* RIGHT - Text content (order-1 on desktop for RTL visual right) */}
        <motion.div
          className=" w-full lg:w-1/2 flex flex-col  justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-7xl font-bold text-[var(--color-primary-dark)] mb-8">
            טלי מפציר
          </h2>

          <div className="space-y-6 text-[var(--color-neutral-600)] text-lg md:text-xl leading-relaxed ">
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
                <span className="underline decoration-2 decoration-[var(--color-primary)] underline-offset-2 cursor-help">
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
        </motion.div>
      </div>
    </section>
  );
}
