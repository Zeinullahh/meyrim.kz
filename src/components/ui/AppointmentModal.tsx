"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const { lang } = useLanguage();

  const whatsappText =
    lang === "ru"
      ? "Здравствуйте! Хочу записаться на приём в Мейірім"
      : "Сәлеметсіз бе! Мейірімге қабылдауға жазылғым келеді";

  const whatsappLink = `https://wa.me/77012175904?text=${encodeURIComponent(whatsappText)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Header gradient */}
            <div className="relative bg-gradient-to-br from-primary-700 to-primary-600 p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-2xl font-bold relative z-10">
                {lang === "ru" ? "Записаться на приём" : "Қабылдауға жазылу"}
              </h3>
              <p className="text-primary-100 mt-2 text-sm relative z-10">
                {lang === "ru"
                  ? "Напишите нам в WhatsApp и мы подберём удобное время"
                  : "WhatsApp-қа жазыңыз, біз ыңғайлы уақытты таңдаймыз"}
              </p>
            </div>

            <div className="p-8 space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg shadow-green-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                {lang === "ru" ? "Написать в WhatsApp" : "WhatsApp-қа жазу"}
              </a>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-slate-400 uppercase">
                    {lang === "ru" ? "или" : "немесе"}
                  </span>
                </div>
              </div>

              <a
                href="tel:+77172910210"
                onClick={onClose}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary-50 border border-primary-100 hover:bg-primary-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-primary-600 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-primary-700">
                    +7 (7172) 91 02 10
                  </p>
                  <p className="text-xs text-slate-500">
                    {lang === "ru" ? "Позвонить напрямую" : "Тікелей қоңырау шалу"}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Пн–Сб: 8:00–20:00</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Астана, ул. Сыганак, 19</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
