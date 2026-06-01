"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Star, Heart, Shield, Clock, Award, Users } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export function MarqueeStrip() {
  const { t } = useLanguage();

  const items = [
    { text: t("marquee_specialties"), icon: Star },
    { text: t("marquee_care"), icon: Heart },
    { text: t("marquee_accreditation"), icon: Shield },
    { text: t("marquee_schedule"), icon: Clock },
    { text: t("marquee_category"), icon: Award },
    { text: t("marquee_patients"), icon: Users },
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-primary-100/50 dark:from-primary-900/40 via-primary-50/50 dark:via-primary-800/30 to-primary-100/50 dark:to-primary-900/40 border-y border-black/5 dark:border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/50 dark:bg-slate-950/50" />
      <Marquee speed={40} className="relative py-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 mx-8">
            <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-lg font-bold text-slate-800 dark:text-white/80 tracking-wide">
              {item.text}
            </span>
            <span className="text-primary-400 dark:text-primary-600 mx-4">•</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
