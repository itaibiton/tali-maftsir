"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { PrimaryCtaLink } from "../../components/PrimaryCtaLink";
import { AnimatedBlob } from "./AnimatedBlob";
import {
  Briefcase01Icon,
  BubbleChatAddIcon,
  Idea01Icon,
  Target01Icon,
  Clock01Icon,
  Wallet01Icon,
  ComputerVideoCallIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";

const useCases = [
  { label: "לפני ראיון עבודה חשוב", icon: Briefcase01Icon },
  { label: "לפני שיחה קשה עם מישהו קרוב", icon: BubbleChatAddIcon },
  { label: "לפני החלטה גדולה בחיים", icon: Idea01Icon },
  { label: "כשמשהו מעסיק ומבקש מיקוד", icon: Target01Icon },
];

export default function ClearWaySection() {
  return (
    <section
      id="clearway"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-[var(--green-deep)] overflow-hidden grain"
    >
      {/* decorative shapes on the dark canvas */}
      <div className="absolute top-12 left-10 w-40 h-40 rounded-full bg-[var(--green)]/25 pointer-events-none" aria-hidden />
      <div className="absolute -bottom-20 right-16 w-72 h-72 rounded-full bg-[var(--lime)]/10 pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
        {/* Text column */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-right"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-snug">
            פגישות{" "}
            <span className="text-[var(--lime)]">&ldquo;דרך ברורה&rdquo;</span>
          </h2>
          <p className="text-white/85 text-lg leading-relaxed mb-10">
            לפעמים לא צריך תהליך שלם — צריך פגישה אחת ממוקדת לפני רגע חשוב.
            פגישות &ldquo;דרך ברורה&rdquo; הן פגישות של שעה וחצי שנועדו לעזור לך
            להגיע מוכן ובטוח לאירוע משמעותי. זו הזדמנות להכיר את הדרך שבה אני
            עובדת, לחוות את הכלים של שיטת סאטיה, ולקבל תמיכה קונקרטית במשהו
            שמעסיק אותך עכשיו.
          </p>

          {/* Use cases */}
          <div className="mb-10 w-full">
            <h3 className="font-display text-xl md:text-2xl text-[var(--mint)] mb-6">
              מתי זה מתאים?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 w-full">
              {useCases.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 items-center rounded-2xl bg-white/10 border border-white/15 p-4 text-white transition-colors hover:bg-white/15 hover:border-[var(--lime)]/50 text-right"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                >
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[var(--lime)] flex items-center justify-center">
                    <HugeiconsIcon icon={item.icon} size={22} className="text-[var(--green-deep)]" />
                  </span>
                  <span className="font-semibold">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA & Pricing */}
          <div className="w-full flex flex-col items-center lg:items-start gap-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-medium">
                <HugeiconsIcon icon={Clock01Icon} size={16} className="text-[var(--lime)]" />
                90 דקות
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-medium">
                <HugeiconsIcon icon={Wallet01Icon} size={16} className="text-[var(--lime)]" />
                ₪150-250 (תרומה לפי יכולת)
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-medium">
                <HugeiconsIcon icon={ComputerVideoCallIcon} size={16} className="text-[var(--lime)]" />
                אונליין בזום
              </span>
            </div>
            <PrimaryCtaLink
              href="https://wa.me/972XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              variant="lime"
              icon={<HugeiconsIcon icon={WhatsappIcon} size={24} />}
            >
              לקביעת פגישה
            </PrimaryCtaLink>
          </div>
        </motion.div>

        {/* Conversation animation in blob */}
        <motion.div
          className="w-full lg:w-[45%] flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full max-w-sm md:max-w-md">
            <div className="absolute -inset-2 blob-frame-2 bg-[var(--lime)]/25 -translate-x-4 translate-y-4" aria-hidden />
            <AnimatedBlob
              videoSrc="/images/v2/conversation.mp4"
              imageSrc="/images/v2/conversation.jpg"
              alt="אנימציה של שתי דמויות בשיחה"
              className="relative shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
