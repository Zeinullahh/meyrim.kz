"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";
import Image from "next/image";

export function Header({ onBook }: { onBook?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#directions", label: t("nav_directions") },
    { href: "#doctors", label: t("nav_doctors") },
    { href: "#about", label: t("nav_about") },
    { href: "#contacts", label: t("nav_contacts") },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg lg:glass"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="relative group flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} className="relative w-14 h-14">
                <Image
                  src="/images/logo.png"
                  alt="Мейірім"
                  fill
                  className="object-contain rounded-lg"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--primary-text)' }}>
                  МЕЙІРІМ
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase -mt-0.5" style={{ color: 'var(--tertiary-text)' }}>
                  {t("nav_about")}
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors group"
                  style={{ color: 'var(--muted-foreground)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 rounded-full group-hover:w-4/5 transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop Controls */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <div className="flex items-center rounded-full p-1 gap-0.5" style={{ background: 'var(--muted)' }}>
                {(["ru", "kk"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={cn(
                      "px-3 py-1 text-xs font-bold rounded-full transition-all duration-300",
                      lang === l
                        ? "bg-primary-600 text-white shadow-md"
                        : "hover:text-primary-500"
                    )}
                    style={{ color: lang === l ? undefined : 'var(--muted-foreground)' }}
                  >
                    {l === "ru" ? "RU" : "ҚАЗ"}
                  </button>
                ))}
              </div>

              <a href="tel:+77172910210" className="flex flex-col items-end group">
                <span className="text-sm font-bold text-primary-600 group-hover:text-primary-500 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +7 (7172) 91 02 10
                </span>
                <span className="text-[11px]" style={{ color: 'var(--tertiary-text)' }}>
                  {t("header_schedule")}
                </span>
              </a>

              <a
                href="https://wa.me/77012175904"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 hover:bg-green-100 transition-colors border border-green-100"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
              </a>

              <button
                onClick={onBook}
                className="relative overflow-hidden px-5 py-2.5 bg-gradient-to-r from-primary-700 to-primary-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-primary-600/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                {t("header_book")}
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 transition-colors"
              style={{ color: 'var(--primary-text)' }}
              aria-label="Меню"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 bg-white/95 backdrop-blur-md shadow-xl lg:hidden"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium rounded-xl transition-colors"
                  style={{ color: 'var(--secondary-text)' }}
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center rounded-full p-1 gap-0.5" style={{ background: 'var(--muted)' }}>
                  {(["ru", "kk"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={cn(
                        "px-3 py-1 text-xs font-bold rounded-full transition-all duration-300",
                        lang === l
                          ? "bg-primary-600 text-white shadow-md"
                          : ""
                      )}
                      style={{ color: lang === l ? undefined : 'var(--muted-foreground)' }}
                    >
                      {l === "ru" ? "RU" : "ҚАЗ"}
                    </button>
                  ))}
                </div>

              </div>

              <div className="mt-4">
                <a
                  href="tel:+77172910210"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  +7 (7172) 91 02 10
                </a>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/77012175904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/meyrim_mediker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
