"use client";

import { motion } from "framer-motion";
import { Home, Search, HeartPulse, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Ambient lights */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-medical-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 mb-8"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Search className="w-10 h-10 text-primary-500 dark:text-primary-400" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-8xl sm:text-9xl font-bold tracking-tighter text-gradient mb-4">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Страница не найдена
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Похоже, запрашиваемая страница удалена или никогда не существовала. Не переживайте — мы поможем вернуться на правильный путь.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-semibold rounded-full shadow-xl shadow-primary-600/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            На главную
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>

          <a
            href="tel:+77172910210"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold rounded-full border border-slate-200 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-500/30 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300"
          >
            <HeartPulse className="w-5 h-5 text-primary-500" />
            Позвонить в клинику
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-100 dark:border-white/5"
        >
          <p className="text-sm text-slate-400 dark:text-slate-600">
            Медицинский центр «Мейрим» — Астана, ул. Сыганак, 19
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-600 mt-1">
            +7 (7172) 91 02 10 · Пн–Сб: 8:00–20:00
          </p>
        </motion.div>
      </div>
    </div>
  );
}
