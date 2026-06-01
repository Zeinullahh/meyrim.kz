"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Scan,
  HeartPulse,
  Scissors,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { TiltCard } from "@/components/ui/TiltCard";
import { Spotlight } from "@/components/ui/Spotlight";
import { useLanguage } from "@/providers/LanguageProvider";

export function Directions() {
  const { t } = useLanguage();

  const directions = [
    {
      icon: Stethoscope,
      title: t("dir_consultation"),
      description: t("dir_consultation_desc"),
      color: "from-primary-500/10 to-primary-600/5",
      iconColor: "text-primary-600 dark:text-primary-400",
      bgIcon: "bg-primary-100 dark:bg-primary-500/10",
      borderColor: "border-primary-200 dark:border-primary-500/10",
    },
    {
      icon: Scan,
      title: t("dir_diagnostic"),
      description: t("dir_diagnostic_desc"),
      color: "from-medical-500/10 to-medical-600/5",
      iconColor: "text-medical-600 dark:text-medical-400",
      bgIcon: "bg-medical-100 dark:bg-medical-500/10",
      borderColor: "border-medical-200 dark:border-medical-500/10",
    },
    {
      icon: HeartPulse,
      title: t("dir_stationary"),
      description: t("dir_stationary_desc"),
      color: "from-sky-500/10 to-sky-600/5",
      iconColor: "text-sky-600 dark:text-sky-400",
      bgIcon: "bg-sky-100 dark:bg-sky-500/10",
      borderColor: "border-sky-200 dark:border-sky-500/10",
    },
    {
      icon: Scissors,
      title: t("dir_surgery"),
      description: t("dir_surgery_desc"),
      color: "from-teal-500/10 to-teal-600/5",
      iconColor: "text-teal-600 dark:text-teal-400",
      bgIcon: "bg-teal-100 dark:bg-teal-500/10",
      borderColor: "border-teal-200 dark:border-teal-500/10",
    },
  ];

  const features = [
    { label: t("feat_equipment"), desc: t("feat_equipment_desc") },
    { label: t("feat_doctors"), desc: t("feat_doctors_desc") },
    { label: t("feat_comfort"), desc: t("feat_comfort_desc") },
  ];

  return (
    <section id="directions" className="py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="ambient-light ambient-light-teal w-[500px] h-[500px] top-[-100px] right-[10%] opacity-30" />
      <div className="ambient-light ambient-light-emerald w-[400px] h-[400px] bottom-[10%] left-[-100px] opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-200 dark:border-primary-500/10">
              {t("directions_tag")}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t("directions_title_1")}{" "}
              <span className="text-gradient">{t("directions_title_2")}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              {t("directions_subtitle")}
            </p>
          </RevealOnScroll>
        </div>

        <Spotlight className="rounded-3xl p-4 -m-4">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directions.map((dir) => (
              <StaggerItem key={dir.title}>
                <TiltCard className="group h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${dir.color} border ${dir.borderColor} hover:border-slate-300 dark:hover:border-white/10 transition-colors overflow-hidden glass-card`}
                  >
                    <div className="absolute -top-4 -right-4 w-32 h-32 opacity-5">
                      <dir.icon className="w-full h-full text-slate-900 dark:text-white" />
                    </div>

                    <div className={`w-14 h-14 ${dir.bgIcon} rounded-2xl flex items-center justify-center mb-6 border border-black/5 dark:border-white/5`}>
                      <dir.icon className={`w-7 h-7 ${dir.iconColor}`} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {dir.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {dir.description}
                    </p>

                    <a
                      href="https://wa.me/77012175904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>

                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Spotlight>

        <RevealOnScroll delay={0.4} className="mt-16">
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:glass-card border border-slate-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-500/20 transition-colors"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 shrink-0 shadow-lg shadow-primary-500/50" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{feature.label}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
