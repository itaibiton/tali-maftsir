"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "אודות", href: "#about" },
    { label: "שירותים", href: "#services" },
    { label: "שאלות", href: "#faq" },
    { label: "צור קשר", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand name (right side in RTL) */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors"
        >
          טלי מפציר
        </Link>

        {/* Navigation links (left side in RTL) - hidden on mobile */}
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
      </nav>
    </header>
  );
}
