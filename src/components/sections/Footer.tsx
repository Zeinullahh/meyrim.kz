"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    "Консультации",
    "Диагностика",
    "Стационар",
    "Хирургия",
    "Телемедицина",
  ],
  about: ["История", "Врачи", "Оборудование", "Аккредитация", "Новости"],
};

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60L48 55C96 50 192 40 288 37.5C384 35 480 40 576 42.5C672 45 768 45 864 42.5C960 40 1056 35 1152 35C1248 35 1344 40 1392 42.5L1440 45V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#020617" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-medical-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="inline-block mb-6">
                <span className="text-2xl font-bold text-white tracking-tight">
                  МЕЙРИМ
                </span>
                <span className="block text-[11px] font-medium text-slate-600 tracking-[0.2em] uppercase">
                  Медицинский центр
                </span>
              </a>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Многопрофильный медицинский центр в Астане. Высокотехнологичная клиника международного уровня.
              </p>
              <div className="flex items-center gap-4">
                {["Instagram", "WhatsApp", "Telegram"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors border border-white/5"
                  >
                    <span className="text-xs font-bold text-slate-500 hover:text-white">
                      {social[0]}
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
              Услуги
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group text-sm text-slate-500 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link}
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              О клинике
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group text-sm text-slate-500 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link}
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
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <a href="tel:+77172910210" className="text-sm text-slate-500 hover:text-white transition-colors">
                  +7 (7172) 91 02 10
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
              © 2024 Медицинский центр «Мейрим». Все права защищены.
            </p>
            <p className="text-sm text-slate-700">
              Создано с заботой о пациентах
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
