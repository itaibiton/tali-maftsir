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

        {/* studio credit */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <a
            href="https://kohelet.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[var(--lime)] transition-colors text-sm"
          >
            עוצב ופותח על ידי <span className="font-semibold">Kohelet Digital</span>
          </a>
          <span className="flex items-center gap-4">
            <a
              href="https://kohelet.digital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="האתר של Kohelet Digital"
              className="text-white/60 hover:text-[var(--lime)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/kohelet.digital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="אינסטגרם של Kohelet Digital"
              className="text-white/60 hover:text-[var(--lime)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/972523410467"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="וואטסאפ של Kohelet Digital"
              className="text-white/60 hover:text-[var(--lime)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
