"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="relative py-20 px-6 md:px-12 lg:px-20 bg-[var(--green-deep)] overflow-hidden grain"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* decorative leaf */}
      <div className="absolute -top-6 left-12 opacity-20 rotate-12" aria-hidden>
        <svg width="120" height="120" viewBox="0 0 24 24" fill="var(--lime)">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <p className="font-display text-2xl md:text-3xl text-white mb-8">
          טלי מפציר
          <span className="text-[var(--lime)]"> · </span>
          <span className="text-[var(--mint)]">ליווי אישי בשיטת סאטיה</span>
        </p>

        <a
          href="https://www.facebook.com/tali.maftsir/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 hover:border-[var(--lime)]/50 transition-colors mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span className="text-lg">עקבו אחריי בפייסבוק</span>
        </a>

        <p className="text-white/70 text-sm">© 2025 טלי מפציר</p>
      </div>
    </motion.footer>
  );
}
