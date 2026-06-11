"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  service: string;
  tint: string;
  rotation: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "התהליך עם טלי עזר לי לראות דברים שהייתי עיוורת אליהם במשך שנים. היום אני מרגישה יותר שלמה, יותר בטוחה בעצמי, ויודעת מה אני באמת רוצה.",
    author: "מיכל",
    service: "ליווי אישי",
    tint: "var(--lime-soft)",
    rotation: "-1.2deg",
  },
  {
    quote:
      "הגעתי לפגישה לפני ראיון עבודה חשוב ויצאתי עם בהירות מלאה. קיבלתי את המשרה, ואני בטוח שזה בזכות ההכנה הממוקדת.",
    author: "יואב",
    service: "דרך ברורה",
    tint: "var(--mint-soft)",
    rotation: "1.4deg",
  },
  {
    quote:
      "אחרי שנים של תקיעות, סוף סוף הצלחתי לעשות צעד קדימה. טלי יודעת לשאול את השאלות הנכונות ולהחזיק מרחב בטוח.",
    author: "רונית",
    service: "ליווי אישי",
    tint: "var(--lilac-soft)",
    rotation: "-0.8deg",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-[var(--cream-deep)] overflow-hidden grain"
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--green-deep)] mb-4">
            <span className="marker-lime">מה אומרים?</span>
          </h2>
          <p className="text-lg text-[var(--color-neutral-600)]">
            מילים מאנשים שעברו את הדרך
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl p-7 shadow-[0_2px_0_0_rgba(29,77,49,0.12)] border border-[var(--green-deep)]/8 transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0"
              style={{ backgroundColor: testimonial.tint, rotate: testimonial.rotation }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.12 * index }}
            >
              <div className="mb-4">
                <svg
                  className="w-9 h-9 text-[var(--green)]"
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
              <div className="flex items-center justify-between border-t border-[var(--green-deep)]/10 pt-4">
                <span className="font-display text-[var(--green-deep)]">
                  {testimonial.author}
                </span>
                <span className="text-sm font-semibold text-[var(--green-deep)]/60 bg-white/60 px-3 py-1 rounded-full">
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
