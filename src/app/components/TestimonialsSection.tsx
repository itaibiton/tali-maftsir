"use client";

import { motion } from "framer-motion";
import { Blob, ParallaxLeaf, Reveal, EASE } from "./decor";

interface Testimonial {
  quote: string;
  author: string;
  service: string;
  tint: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "התהליך עם טלי עזר לי לראות דברים שהייתי עיוורת אליהם במשך שנים. היום אני מרגישה יותר שלמה, יותר בטוחה בעצמי, ויודעת מה אני באמת רוצה.",
    author: "מיכל",
    service: "ליווי אישי",
    tint: "var(--mint-soft)",
  },
  {
    quote:
      "הגעתי לפגישה לפני ראיון עבודה חשוב ויצאתי עם בהירות מלאה. קיבלתי את המשרה, ואני בטוח שזה בזכות ההכנה הממוקדת.",
    author: "יואב",
    service: "דרך ברורה",
    tint: "var(--lime-soft)",
  },
  {
    quote:
      "אחרי שנים של תקיעות, סוף סוף הצלחתי לעשות צעד קדימה. טלי יודעת לשאול את השאלות הנכונות ולהחזיק מרחב בטוח.",
    author: "רונית",
    service: "ליווי אישי",
    tint: "var(--lilac-soft)",
  },
  {
    quote:
      "טלי נתנה לי כלים פשוטים שאני משתמשת בהם כל יום — בבית, בעבודה, מול עצמי. השעה הזאת בשבוע היא משהו שאני כבר לא מוותרת עליו.",
    author: "נועה",
    service: "ליווי אישי",
    tint: "var(--lime-soft)",
  },
  {
    quote:
      "הייתי סקפטית לגבי טיפול בזום — והופתעתי. החיבור היה מיידי, והתהליך שינה את הדרך שבה אני מתקשרת עם האנשים הקרובים אליי.",
    author: "דנה",
    service: "ליווי אישי",
    tint: "var(--lilac-soft)",
  },
  {
    quote:
      "פגישה אחת לפני שיחה קשה עם אבא שלי. הגעתי רגוע וברור, והשיחה עברה אחרת לגמרי ממה שדמיינתי.",
    author: "אמיר",
    service: "דרך ברורה",
    tint: "var(--mint-soft)",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4" role="img" aria-label="דירוג חמישה כוכבים">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="var(--lime)"
          stroke="var(--green)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-[var(--cream-deep)] overflow-hidden grain"
    >
      {/* organic background shapes */}
      <Blob className="-top-24 -right-28 w-96 h-96 bg-[var(--mint)]/25" />
      <Blob className="-bottom-32 -left-24 w-[26rem] h-[26rem] bg-[var(--lilac)]/20" />
      <ParallaxLeaf
        className="top-16 left-[6%] hidden md:block"
        size={52}
        from="var(--green)"
        to="var(--mint)"
        drift={70}
      />
      <ParallaxLeaf
        className="bottom-24 right-[4%] hidden md:block"
        size={40}
        from="var(--lilac)"
        to="var(--mint)"
        drift={45}
        flip
      />

      <div className="max-w-6xl mx-auto relative">
        <Reveal className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--green-deep)] mb-4">
            <span className="marker-lime">מה אומרים?</span>
          </h2>
          <p className="text-lg text-[var(--color-neutral-600)]">
            מילים מאנשים שעברו את הדרך
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              className="group relative flex flex-col bg-white rounded-3xl p-7 border border-[var(--green-deep)]/8 shadow-[0_1px_2px_rgba(22,41,28,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(29,77,49,0.35)]"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.08 * index, ease: EASE }}
            >
              <Stars />
              <blockquote className="text-[var(--color-neutral-600)] text-base leading-relaxed mb-6 flex-1">
                {testimonial.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-[var(--green-deep)]/10 pt-5">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display text-lg text-[var(--green-deep)] transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: testimonial.tint }}
                  aria-hidden
                >
                  {testimonial.author[0]}
                </span>
                <span className="flex flex-col">
                  <span className="font-bold text-[var(--green-deep)]">
                    {testimonial.author}
                  </span>
                  <span className="text-sm text-[var(--color-neutral-600)]/75">
                    {testimonial.service}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
