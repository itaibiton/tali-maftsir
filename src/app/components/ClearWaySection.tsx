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
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
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
