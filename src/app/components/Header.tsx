"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryCtaLink } from "../../components/PrimaryCtaLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "אודות", href: "#about" },
    { label: "ליווי אישי", href: "#coaching" },
    { label: "דרך ברורה", href: "#clearway" },
    { label: "לארגונים", href: "#b2b" },
    { label: "המלצות", href: "#testimonials" },
    { label: "שאלות", href: "#faq" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-20 ${
        scrolled || isMenuOpen
          ? "bg-[var(--cream)]/90 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-16 md:h-20 flex items-center justify-between">
        {/* Brand wordmark (right side in RTL) */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-xl md:text-2xl text-[var(--green-deep)] hover:text-[var(--green)] transition-colors"
        >
          טלי מפציר
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="var(--green)"
            className="transition-transform duration-300 group-hover:rotate-12"
            aria-hidden
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </Link>

        {/* Desktop navigation links (left side in RTL) - hidden on mobile */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[var(--color-neutral-600)] hover:text-[var(--green-deep)] transition-colors font-semibold after:absolute after:right-0 after:left-0 after:-bottom-1 after:h-[3px] after:rounded-full after:bg-[var(--lime)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <PrimaryCtaLink
            href="https://wa.me/972XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            variant="lime"
            className="px-5 py-2 text-sm md:text-base"
          >
            צור קשר
          </PrimaryCtaLink>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none"
          aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <motion.span
              className="absolute w-6 h-0.5 bg-[var(--green-deep)] rounded-full"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 9 : 0,
              }}
              transition={{ duration: 0.2 }}
              style={{ top: 0 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-[var(--green-deep)] rounded-full top-[9px]"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-[var(--green-deep)] rounded-full"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -9 : 0,
              }}
              transition={{ duration: 0.2 }}
              style={{ bottom: 0 }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[var(--cream)]/95 backdrop-blur-md border-t border-[var(--border)] overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-lg text-[var(--color-neutral-600)] hover:text-[var(--green-deep)] hover:bg-[var(--lime-soft)] transition-colors font-semibold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                className="px-6 pt-4"
              >
                <PrimaryCtaLink
                  href="https://wa.me/972XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="lime"
                  className="px-5 py-3 text-sm md:text-sm"
                >
                  צור קשר בוואטסאפ
                </PrimaryCtaLink>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
