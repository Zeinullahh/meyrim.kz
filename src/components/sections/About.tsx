"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Award, Microscope, Building } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/providers/LanguageProvider";

export function About() {
  const { t } = useLanguage();
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 2004, suffix: "", label: t("about_stat_founded"), icon: Building },
    { value: 200, suffix: "K+", label: t("about_stat_patients"), icon: TrendingUp },
    { value: 25, suffix: "", label: t("about_stat_specialties"), icon: Microscope },
    { value: 800, suffix: "", label: t("about_stat_stationary"), icon: Award },
  ];

  const timeline = [
    { year: "2004", text: t("about_timeline_2004") },
    { year: "2020", text: t("about_timeline_2020") },
    { year: "2022", text: t("about_timeline_2022") },
    { year: "2023", text: t("about_timeline_2023") },
  ];

  const missions = [
    { title: t("about_mission_innovation"), desc: t("about_mission_innovation_desc") },
    { title: t("about_mission_access"), desc: t("about_mission_access_desc") },
    { title: t("about_mission_tele"), desc: t("about_mission_tele_desc") },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="ambient-light ambient-light-emerald w-[600px] h-[600px] top-[-200px] left-[20%] opacity-20" />
      <div className="ambient-light ambient-light-blue w-[500px] h-[500px] bottom-[-100px] right-[10%] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-medical-100 dark:bg-medical-500/10 text-medical-700 dark:text-medical-400 text-sm font-semibold rounded-full mb-4 border border-medical-200 dark:border-medical-500/10">
              {t("about_tag")}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              <span className="text-gradient">{t("about_title_1")}</span> {t("about_title_2")}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              {t("about_subtitle")}
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800/50 to-slate-900 rounded-3xl p-10 lg:p-16 mb-24 overflow-hidden border border-white/5">
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#aboutGrid)" />
              </svg>
            </div>

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-medical-500/10 rounded-full blur-3xl" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4 border border-white/10">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl lg:text-5xl text-white"
                    label={stat.label}
                    labelClassName="text-slate-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
              {t("about_timeline_title")}
            </h3>
          </RevealOnScroll>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 dark:from-primary-500/30 via-primary-200 dark:via-primary-500/20 to-transparent" />

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                      className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-slate-950 shadow-lg shadow-primary-500/30"
                    />
                  </div>

                  <div className={`ml-20 lg:ml-0 lg:w-1/2 ${isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 text-sm font-bold rounded-lg mb-2 border border-primary-200 dark:border-primary-500/10">
                      {item.year}
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 grid sm:grid-cols-3 gap-6">
          {missions.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-slate-50 dark:glass-card border border-slate-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-500/20 hover:bg-primary-50/50 dark:hover:bg-primary-500/5 transition-colors duration-300">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
