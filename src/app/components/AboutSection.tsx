"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[var(--color-neutral-50)]"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] mb-8">
          על טלי
        </h2>

        <div className="space-y-6 text-[var(--color-neutral-600)] text-lg md:text-xl leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            אני טלי מפציר, מלווה אישית בשיטת סאטיה. אני מאמינה שבתוך כל אחד
            ואחת מאיתנו יש את כל מה שצריך כדי לחיות חיים מלאים ומספקים — לפעמים
            אנחנו פשוט צריכים מישהו שיעזור לנו לראות את זה.
          </motion.p>

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
    </section>
  );
}
