"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";

export function FloatingActionButton({ onBook }: { onBook?: () => void }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 p-4 w-64 mb-2"
          >
            <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              {t("fab_title")}
            </p>

            {onBook && (
              <button
                onClick={() => {
                  onBook();
                  setOpen(false);
                }}
                className="flex items-center gap-3 p-3 rounded-xl bg-primary-50 dark:bg-primary-500/10 hover:bg-primary-100 dark:hover:bg-primary-500/20 transition-colors border border-primary-100 dark:border-primary-500/10 w-full mb-2"
              >
                <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <div className="text-left">
                  <p className="text-sm font-bold text-primary-700 dark:text-primary-400">
                    {t("header_book")}
                  </p>
                  <p className="text-xs text-slate-500">Онлайн форма</p>
                </div>
              </button>
            )}

            <a
              href="https://wa.me/77012175904"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-500/10 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors border border-green-100 dark:border-green-500/10 w-full mb-2"
            >
              <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <div className="text-left">
                <p className="text-sm font-bold text-green-700 dark:text-green-400">
                  WhatsApp
                </p>
                <p className="text-xs text-slate-500">+7 (701) 217 59 04</p>
              </div>
            </a>

            <a
              href="tel:+77172910210"
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-100 dark:border-white/5"
            >
              <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  +7 (7172) 91 02 10
                </p>
                <p className="text-xs text-slate-500">{t("header_schedule")}</p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full shadow-lg shadow-primary-500/20 flex items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20" />
        <span className="absolute -inset-2 rounded-full border border-primary-500/20 animate-pulse" />
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Phone className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
