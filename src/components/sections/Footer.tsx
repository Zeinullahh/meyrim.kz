"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/providers/LanguageProvider";

export function Footer() {
  const { t, lang } = useLanguage();

  const aboutLinks = [
    { label: t("about_timeline_title"), href: "#about" },
    { label: t("nav_doctors"), href: "#doctors" },
    { label: "Оборудование", href: "#about" },
    { label: t("about_tag"), href: "#about" },
    { label: "Новости", href: "#" },
  ];

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-slate-400 overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60L48 55C96 50 192 40 288 37.5C384 35 480 40 576 42.5C672 45 768 45 864 42.5C960 40 1056 35 1152 35C1248 35 1344 40 1392 42.5L1440 45V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="white" className="dark:fill-slate-950 transition-colors duration-500" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-medical-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="inline-flex items-center gap-3 mb-6">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/logo.png"
                    alt="Мейрим"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">
                    МЕЙІРІМ
                  </span>
                  <span className="text-[10px] font-medium text-slate-600 tracking-[0.2em] uppercase">
                    {t("nav_about")}
                  </span>
                </div>
              </a>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {t("about_subtitle")}
              </p>
              <div className="flex items-center gap-4">
                {[
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/meyrim_mediker/",
                    color: "hover:bg-pink-600",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    ),
                  },
                  {
                    name: "WhatsApp",
                    href: "https://wa.me/77012175904",
                    color: "hover:bg-green-600",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.86 13.85c-.25.71-1.46 1.35-2.03 1.43-.54.08-1.04.25-3.47-.74-2.94-1.15-4.83-4.14-4.98-4.33-.15-.19-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.01-2.42.26-.29.57-.36.76-.36.19 0 .38 0 .54.01.19.01.44-.07.69.53.25.59.86 2.03.93 2.18.08.15.13.32.02.51-.1.19-.16.31-.31.48-.15.17-.32.38-.46.51-.15.14-.3.29-.13.57.17.28.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.45.3.15.48.13.65-.08.17-.21.76-.88.96-1.18.2-.3.4-.25.65-.15.25.1 1.58.74 1.85.88.28.14.46.21.53.33.08.12.08.69-.17 1.39z"/>
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`w-10 h-10 bg-slate-800 dark:bg-slate-900 rounded-full flex items-center justify-center ${social.color} transition-colors border border-white/5 group`}
                  >
                    <span className="text-slate-500 group-hover:text-white transition-colors">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              {t("footer_about")}
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group text-sm text-slate-500 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              {t("footer_contacts")}
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{lang === "ru" ? "Телефоны" : "Телефондар"}</span>
                </div>
                <div className="space-y-1.5 pl-6">
                  <a href="tel:+77172910210" className="block text-sm text-slate-500 hover:text-white transition-colors">
                    +7 (7172) 91 02 10
                  </a>
                  <a href="tel:+77172644330" className="block text-sm text-slate-500 hover:text-white transition-colors">
                    +7 (7172) 64 43 30
                  </a>
                  <a href="tel:+77012175904" className="block text-sm text-slate-500 hover:text-white transition-colors">
                    +7 (701) 217 59 04
                  </a>
                  <a href="tel:+77014853212" className="block text-sm text-slate-500 hover:text-white transition-colors">
                    +7 (701) 485 32 12
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{lang === "ru" ? "Аптека" : "Дәріхана"}</span>
                </div>
                <a href="tel:+77172644320" className="block text-sm text-slate-500 hover:text-white transition-colors pl-6">
                  +7 (7172) 64 43 20
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-500">
                  г. Астана, ул. Сыганак, 19
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-500">
                  Пн–Сб: 8:00–20:00
                  <br />
                  Вс: 9:00–17:00
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © 2025 {lang === "ru" ? "Медицинский центр «Мейрим». Все права защищены." : "«Мейрим» медициналық орталығы. Барлық құқықтар қорғалған."}
            </p>
            <p className="text-sm text-slate-700">
              {t("footer_tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
