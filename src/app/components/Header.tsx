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
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-16 md:h-20 flex items-center justify-between">
        {/* Brand name (right side in RTL) */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors"
        >
          טלי מפציר
        </Link>

        {/* Desktop navigation links (left side in RTL) - hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[var(--color-neutral-600)] hover:text-[var(--color-primary-dark)] transition-colors font-medium"
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
            className="px-5 py-2 text-sm md:text-sm"
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
              className="absolute w-6 h-0.5 bg-[var(--color-primary-dark)] rounded-full"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 9 : 0,
              }}
              transition={{ duration: 0.2 }}
              style={{ top: 0 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-[var(--color-primary-dark)] rounded-full top-[9px]"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-[var(--color-primary-dark)] rounded-full"
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-[var(--color-neutral-200)] overflow-hidden"
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
                    className="block px-6 py-3 text-lg text-[var(--color-neutral-600)] hover:text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-light)]/20 transition-colors font-medium"
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
