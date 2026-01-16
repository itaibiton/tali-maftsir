"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "התהליך עם טלי עזר לי לראות דברים שהייתי עיוורת אליהם במשך שנים. היום אני מרגישה יותר שלמה, יותר בטוחה בעצמי, ויודעת מה אני באמת רוצה.",
    author: "מיכל",
    service: "ליווי אישי",
  },
  {
    quote:
      "הגעתי לפגישה לפני ראיון עבודה חשוב ויצאתי עם בהירות מלאה. קיבלתי את המשרה, ואני בטוח שזה בזכות ההכנה הממוקדת.",
    author: "יואב",
    service: "דרך ברורה",
  },
  {
    quote:
      "אחרי שנים של תקיעות, סוף סוף הצלחתי לעשות צעד קדימה. טלי יודעת לשאול את השאלות הנכונות ולהחזיק מרחב בטוח.",
    author: "רונית",
    service: "ליווי אישי",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[var(--color-neutral-100)]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
            מה אומרים?
          </h2>
          <p className="text-lg text-[var(--color-neutral-600)]">
            מילים מאנשים שעברו את הדרך
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-[var(--color-primary-light)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[var(--color-neutral-600)] text-base leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center justify-between border-t border-[var(--color-neutral-200)] pt-4">
                <span className="font-semibold text-[var(--color-primary-dark)]">
                  {testimonial.author}
                </span>
                <span className="text-sm text-[var(--color-neutral-500)]">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
