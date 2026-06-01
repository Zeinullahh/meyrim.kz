"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#directions", label: "Направления" },
  { href: "#doctors", label: "Врачи" },
  { href: "#about", label: "О клинике" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="relative group">
              <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">
                  МЕЙРИМ
                </span>
                <span className="text-[11px] font-medium text-slate-400 tracking-[0.2em] uppercase -mt-1">
                  Медицинский центр
                </span>
              </motion.div>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-medical-400"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 rounded-full group-hover:w-4/5 transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+77172910210" className="flex flex-col items-end group">
                <span className="text-sm font-bold text-primary-400 group-hover:text-primary-300 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +7 (7172) 91 02 10
                </span>
                <span className="text-[11px] text-slate-500">
                  Пн–Сб 8:00–20:00
                </span>
              </a>
              <a
                href="tel:+77172910210"
                className="relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Записаться</span>
                <div className="absolute inset-0 bg-gradient-to-r from-medical-400 to-primary-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Меню"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 glass shadow-xl md:hidden"
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
                  className="px-4 py-3 text-base font-medium text-slate-300 hover:text-primary-400 hover:bg-primary-950/30 rounded-xl transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5">
                <a
                  href="tel:+77172910210"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  +7 (7172) 91 02 10
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
