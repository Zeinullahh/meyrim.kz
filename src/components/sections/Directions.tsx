"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Scan,
  HeartPulse,
  Scissors,
  ArrowUpRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { TiltCard } from "@/components/ui/TiltCard";
import { Spotlight } from "@/components/ui/Spotlight";

const directions = [
  {
    icon: Stethoscope,
    title: "Консультативные услуги",
    description:
      "Команда лучших специалистов столицы более чем по 25 направлениям для взрослых и детей",
    gradient: "from-primary-500/10 to-primary-600/5",
    iconColor: "text-primary-400",
    bgIcon: "bg-primary-500/10",
    borderColor: "border-primary-500/10",
  },
  {
    icon: Scan,
    title: "Диагностика",
    description:
      "УЗИ, Допплер, МРТ, КТ, рентген, Холтер, СМАД, колоноскопия, гастроскопия и лаборатория",
    gradient: "from-medical-500/10 to-medical-600/5",
    iconColor: "text-medical-400",
    bgIcon: "bg-medical-500/10",
    borderColor: "border-medical-500/10",
  },
  {
    icon: HeartPulse,
    title: "Стационарное лечение",
    description:
      "Процедуры, обследования и полная реабилитация после операций в комфортабельных условиях",
    gradient: "from-sky-500/10 to-sky-600/5",
    iconColor: "text-sky-400",
    bgIcon: "bg-sky-500/10",
    borderColor: "border-sky-500/10",
  },
  {
    icon: Scissors,
    title: "Хирургические услуги",
    description:
      "Общая, торакальная, гинекологическая, ЛОР, сосудистая, флебологическая и проктологическая хирургия",
    gradient: "from-teal-500/10 to-teal-600/5",
    iconColor: "text-teal-400",
    bgIcon: "bg-teal-500/10",
    borderColor: "border-teal-500/10",
  },
];

export function Directions() {
  return (
    <section id="directions" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Ambient lights */}
      <div className="ambient-light ambient-light-teal w-[500px] h-[500px] top-[-100px] right-[10%] opacity-30" />
      <div className="ambient-light ambient-light-emerald w-[400px] h-[400px] bottom-[10%] left-[-100px] opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/10">
              Направления
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Полный спектр{" "}
              <span className="text-gradient">медицинских услуг</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-lg text-slate-400">
              Диагностика, лечение и реабилитация для всей семьи — от первичной консультации до полного выздоровления
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
                    className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${dir.gradient} border ${dir.borderColor} hover:border-white/10 transition-colors overflow-hidden glass-card`}
                  >
                    <div className="absolute -top-4 -right-4 w-32 h-32 opacity-5">
                      <dir.icon className="w-full h-full text-white" />
                    </div>

                    <div className={`w-14 h-14 ${dir.bgIcon} rounded-2xl flex items-center justify-center mb-6 border border-white/5`}>
                      <dir.icon className={`w-7 h-7 ${dir.iconColor}`} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {dir.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {dir.description}
                    </p>

                    <div className="flex items-center gap-1 text-sm font-semibold text-slate-300 group-hover:text-primary-400 transition-colors">
                      Подробнее
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Spotlight>

        <RevealOnScroll delay={0.4} className="mt-16">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Современное оборудование", desc: "МРТ, КТ, УЗИ экспертного класса" },
              { label: "Опытные специалисты", desc: "Врачи с высшей категорией и учёными степенями" },
              { label: "Комфортные условия", desc: "Просторные кабинеты и уютная атмосфера" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="flex items-start gap-4 p-6 rounded-2xl glass-card hover:border-white/10 transition-colors"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-primary-500 shrink-0 shadow-lg shadow-primary-500/50" />
                <div>
                  <p className="font-semibold text-slate-200 text-sm">{feature.label}</p>
                  <p className="text-slate-500 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
