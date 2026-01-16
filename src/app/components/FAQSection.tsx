"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "איך עובד התהליך?",
    answer:
      "התהליך מתנהל בשיטת סאטיה - שיטה טיפולית מוכחת שמתמקדת בהבנת הדפוסים שלנו, החוויות מהעבר שעיצבו אותנו, והדרך שבה אנחנו מתמודדים עם אתגרים. בפגישות האישיות נעבוד יחד על זיהוי מה עוצר אותך, נבנה כלים חדשים, ונלווה את השינוי שאת/ה רוצה לראות בחיים.",
  },
  {
    question: "כמה פגישות צריך?",
    answer:
      "תהליך מלא כולל בדרך כלל כ-40 פגישות, אבל זה משתנה מאדם לאדם. יש כאלה שמגיעים לטיפול ממוקד בנושא ספציפי ומסיימים אחרי מספר פגישות, ויש כאלה שבוחרים בתהליך עמוק יותר. נתאים את הקצב והמתכונת לצרכים שלך.",
  },
  {
    question: "כמה עולה פגישה?",
    answer: "עלות פגישה היא 250 ש״ח. כל פגישה נמשכת כשעה.",
  },
  {
    question: "האם מילואימניקים זכאים למימון?",
    answer:
      "כן! משרתי מילואים זכאים למימון מלא או חלקי מהמדינה עבור טיפול נפשי. אני מוסמכת לעבוד עם מופנים דרך קופות החולים ומכוני הרווחה של צה״ל. צרו קשר לפרטים נוספים.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-6 md:px-12 lg:px-20 bg-white"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] mb-10 text-center">
          שאלות נפוצות
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-[var(--color-neutral-200)] rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-right bg-[var(--color-neutral-50)] hover:bg-[var(--color-neutral-100)] transition-colors"
              >
                <span className="text-lg font-medium text-[var(--color-primary-dark)]">
                  {faq.question}
                </span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--color-primary-dark)] flex-shrink-0 mr-4"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-5 text-[var(--color-neutral-600)] leading-relaxed bg-white">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
