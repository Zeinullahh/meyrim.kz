"use client";

import { motion } from "framer-motion";
import { User, Award, GraduationCap, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

const doctors = [
  {
    name: "Филиппов Ю. А.",
    role: "Врач-рентгенолог, КТ",
    exp: "6 лет профессионального опыта",
    icon: User,
    gradient: "from-primary-500/20 to-sky-500/10",
    iconColor: "text-primary-400",
  },
  {
    name: "Ахметова А. К.",
    role: "Кардиолог, функциональная диагностика",
    exp: "Общий стаж 25 лет",
    icon: User,
    gradient: "from-medical-500/20 to-primary-500/10",
    iconColor: "text-medical-400",
  },
  {
    name: "Бейсенов К. Т.",
    role: "Уролог, к.м.н., доцент",
    exp: "29 лет опыта, высшая категория",
    icon: GraduationCap,
    gradient: "from-sky-500/20 to-medical-500/10",
    iconColor: "text-sky-400",
  },
  {
    name: "Утегенова Б. Ж.",
    role: "Сосудистый хирург, флеболог",
    exp: "22 года опыта",
    icon: Award,
    gradient: "from-primary-500/20 to-medical-500/10",
    iconColor: "text-primary-400",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 lg:py-32 bg-slate-900/50 relative overflow-hidden">
      <div className="ambient-light ambient-light-purple w-[500px] h-[500px] top-[20%] left-[-150px] opacity-40" />
      <div className="ambient-light ambient-light-teal w-[400px] h-[400px] bottom-[10%] right-[-100px] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <RevealOnScroll>
              <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/10">
                Специалисты
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Наши <span className="text-gradient">врачи</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="mt-4 text-lg text-slate-400">
                Опытные специалисты с многолетней практикой и высшими категориями
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.3}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors"
            >
              Все врачи
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.name}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/5 transition-shadow duration-500"
              >
                <div className={`relative h-64 bg-gradient-to-br ${doctor.gradient} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <doctor.icon className={`w-20 h-20 ${doctor.iconColor} opacity-50`} />
                  </motion.div>

                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />

                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold text-white border border-white/10">
                    {doctor.exp.split(",")[0]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary-400 mb-2">
                    {doctor.role}
                  </p>
                  <p className="text-sm text-slate-500">{doctor.exp}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-medical-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
