"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { PrimaryCtaLink } from "../../components/PrimaryCtaLink";
import {
  Briefcase01Icon,
  BubbleChatAddIcon,
  Idea01Icon,
  Target01Icon,
  ArrowLeft01Icon,
  Clock01Icon,
  Wallet01Icon,
  ComputerVideoCallIcon,
} from "@hugeicons/core-free-icons";

export default function ClearWaySection() {
  return (
    <section
      id="clearway"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[#f1e9dc]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text column */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-primary-dark)] mb-6">
            פגישות &ldquo;דרך ברורה&rdquo;
          </h2>
          <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8">
            לפעמים לא צריך תהליך שלם — צריך פגישה אחת ממוקדת לפני רגע חשוב.
            פגישות &ldquo;דרך ברורה&rdquo; הן פגישות של שעה וחצי שנועדו לעזור לך
            להגיע מוכן ובטוח לאירוע משמעותי. זו הזדמנות להכיר את הדרך שבה אני
            עובדת, לחוות את הכלים של שיטת סאטיה, ולקבל תמיכה קונקרטית במשהו
            שמעסיק אותך עכשיו.
          </p>

         
          {/* Use cases */}
          <div className="mb-10 w-full">
            <h3 className="font-display text-xl font-semibold text-[var(--color-primary-dark)] mb-6">
              מתי זה מתאים?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-[var(--color-neutral-600)] w-full">
              {[
                { label: "לפני ראיון עבודה חשוב", icon: Briefcase01Icon },
                { label: "לפני שיחה קשה עם מישהו קרוב", icon: BubbleChatAddIcon },
                { label: "לפני החלטה גדולה בחיים", icon: Idea01Icon },
                { label: "כשמשהו מעסיק ומבקש מיקוד", icon: Target01Icon },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-[var(--color-primary-light)]/60 bg-[var(--color-primary-light)]/10 p-4 transition-colors hover:bg-[var(--color-primary-light)]/20"
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    size={24}
                    className="text-[var(--color-primary)] flex-shrink-0"
                  />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA & Pricing */}
          <div className="w-full pt-8 flex flex-col items-center lg:items-start gap-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="inline-flex flex-row-reverse items-center gap-2 text-[var(--color-primary-dark)] text-sm font-medium text-right">
                <HugeiconsIcon icon={Clock01Icon} size={16} />
                90 דקות
              </span>
              <span className="inline-flex flex-row-reverse items-center gap-2 text-[var(--color-primary-dark)] text-sm font-medium text-right">
                <HugeiconsIcon icon={Wallet01Icon} size={16} />
                ₪150-250 (תרומה לפי יכולת)
              </span>
              <span className="inline-flex flex-row-reverse items-center gap-2 text-[var(--color-primary-dark)] text-sm font-medium text-right">
                <HugeiconsIcon icon={ComputerVideoCallIcon} size={16} />
                אונליין בזום
              </span>
            </div>

            <PrimaryCtaLink
              href="https://wa.me/972XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              icon={
                <HugeiconsIcon
                  icon={ArrowLeft01Icon}
                  size={24}
                  className="transition-transform group-hover:-translate-x-1"
                />
              }
            >
              לקביעת פגישה
            </PrimaryCtaLink>
          </div>
        </motion.div>

        {/* Gif column */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
            <Image
              src="/images/2-people.gif"
              alt="אנימציה של שתי דמויות בשיחה"
              width={800}
              height={800}
              quality={100}
              className="w-full h-auto object-contain"
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
