"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Microscope, HeartPulse, Building2, Star } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/providers/LanguageProvider";

export function TrustStrip() {
  const { lang } = useLanguage();

  const badges =
    lang === "ru"
      ? [
          { icon: ShieldCheck, label: "Национальная\nаккредитация" },
          { icon: Award, label: "Высшая\nкатегория" },
          { icon: Microscope, label: "Современное\nоборудование" },
          { icon: HeartPulse, label: "25+\nспециальностей" },
          { icon: Building2, label: "20 лет\nна рынке" },
          { icon: Star, label: "200 000+\nпациентов" },
        ]
      : [
          { icon: ShieldCheck, label: "Ұлттық\nаккредитация" },
          { icon: Award, label: "Жоғары\nсанат" },
          { icon: Microscope, label: "Заманауи\nжабдықтар" },
          { icon: HeartPulse, label: "25+\nмамандық" },
          { icon: Building2, label: "Нарықта\n20 жыл" },
          { icon: Star, label: "200 000+\nнауқас" },
        ];

  return (
    <section className="py-16 bg-gradient-to-b from-white dark:from-slate-950 to-slate-50 dark:to-slate-900/50 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 dark:from-primary-500/10 to-medical-100 dark:to-medical-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:from-primary-200 dark:group-hover:from-primary-500/20 group-hover:to-medical-200 dark:group-hover:to-medical-500/20 transition-colors">
                  <badge.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 whitespace-pre-line leading-tight">
                  {badge.label}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
