"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { useState } from "react";

export function FloatingActionButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-slate-900 rounded-2xl shadow-xl border border-white/10 p-4 w-64 mb-2"
          >
            <p className="text-sm font-semibold text-white mb-3">
              Записаться на приём
            </p>
            <a
              href="tel:+77172910210"
              className="flex items-center gap-3 p-3 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 transition-colors border border-primary-500/10"
            >
              <Phone className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-sm font-bold text-primary-400">
                  +7 (7172) 91 02 10
                </p>
                <p className="text-xs text-slate-500">Пн–Сб 8:00–20:00</p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full shadow-lg shadow-primary-500/20 flex items-center justify-center"
      >
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
