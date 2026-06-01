"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Award, Microscope, Building } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 2004, suffix: "", label: "Год основания", icon: Building },
  { value: 200, suffix: "K+", label: "Посетителей в год", icon: TrendingUp },
  { value: 25, suffix: "", label: "Специальностей", icon: Microscope },
  { value: 800, suffix: "", label: "Стационарных пациентов", icon: Award },
];

const timeline = [
  { year: "2004", text: "Основание медицинского центра «Мейрим»" },
  {
    year: "2020",
    text: "Присвоено звание «Лидер в сфере медицины». Создан уникальный телемедицинский центр. Открыта собственная ПЦР-лаборатория.",
  },
  {
    year: "2022",
    text: "Создан Центр компетенций в области МРТ и КТ диагностики",
  },
  {
    year: "2023",
    text: "Получена национальная аккредитация высшей категории",
  },
];

export function About() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="ambient-light ambient-light-emerald w-[600px] h-[600px] top-[-200px] left-[20%] opacity-20" />
      <div className="ambient-light ambient-light-blue w-[500px] h-[500px] bottom-[-100px] right-[10%] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-medical-500/10 text-medical-400 text-sm font-semibold rounded-full mb-4 border border-medical-500/10">
              О клинике
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-gradient">Халық сенімі</span> — табыстың кілті
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-lg text-slate-400">
              Народное доверие — ключ к успеху. Клиника «Мейрим» стремится стать высокотехнологичной клиникой международного уровня.
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded-xl mb-4 border border-white/10">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl lg:text-5xl text-white"
                    label={stat.label}
                    labelClassName="text-slate-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              История развития
            </h3>
          </RevealOnScroll>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/30 via-primary-500/20 to-transparent" />

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                      className="w-4 h-4 bg-primary-500 rounded-full border-4 border-slate-950 shadow-lg shadow-primary-500/30"
                    />
                  </div>

                  <div
                    className={`ml-20 lg:ml-0 lg:w-1/2 ${
                      isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-bold rounded-lg mb-2 border border-primary-500/10">
                      {item.year}
                    </span>
                    <p className="text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 grid sm:grid-cols-3 gap-6">
          {[
            { title: "Инновации", desc: "Современное оборудование и передовые методы лечения" },
            { title: "Доступность", desc: "Качественная медицинская помощь по доступным ценам" },
            { title: "Телемедицина", desc: "Уникальный телемедицинский центр в Казахстане" },
          ].map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl glass-card hover:border-primary-500/20 hover:bg-primary-500/5 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
