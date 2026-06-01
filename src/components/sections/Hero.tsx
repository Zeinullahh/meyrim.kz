"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight, Shield, Clock, Users, Building2 } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden gradient-animated"
    >
      {/* Ambient light orbs */}
      <div className="ambient-light ambient-light-teal w-[600px] h-[600px] top-[-100px] left-[-100px] opacity-60" />
      <div className="ambient-light ambient-light-emerald w-[500px] h-[500px] top-[20%] right-[-150px] opacity-50" />
      <div className="ambient-light ambient-light-blue w-[400px] h-[400px] bottom-[-50px] left-[30%] opacity-40" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-400 border border-white/10">
                <Shield className="w-4 h-4" />
                Национальная аккредитация — высшая категория
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              Медицинский{" "}
              <span className="relative inline-block">
                <span className="text-gradient">центр</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <motion.path
                    d="M2 8C40 2 80 2 100 5C120 8 160 8 198 4"
                    stroke="#14b8a6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  />
                </svg>
              </span>
              <br />
              <span className="text-white">Мейрим</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-lg leading-relaxed"
            >
              Современная многопрофильная клиника в центре Астаны.
              Диагностика, консультации, стационар и хирургия — всё под одной крышей.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton strength={0.2}>
                <a
                  href="tel:+77172910210"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-full shadow-xl shadow-primary-500/20 hover:shadow-2xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Записаться на приём
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <a
                href="#directions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-slate-300 font-semibold rounded-full border border-white/10 hover:border-primary-500/30 hover:text-white transition-all duration-300"
              >
                Услуги и цены
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Clock, text: "Пн–Сб: 8:00–20:00" },
                { icon: Users, text: "25+ специальностей" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-slate-500">
                  <item.icon className="w-4 h-4 text-primary-500" />
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Stats Cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative glass-card rounded-3xl p-8 shadow-2xl shadow-black/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-primary-500/10 to-transparent rounded-2xl border border-white/5">
                    <AnimatedCounter end={25} suffix="+" className="text-4xl lg:text-5xl text-primary-400" label="Специальностей" labelClassName="text-slate-500" />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-medical-500/10 to-transparent rounded-2xl border border-white/5">
                    <AnimatedCounter end={200} suffix="K+" className="text-4xl lg:text-5xl text-medical-400" label="Пациентов в год" labelClassName="text-slate-500" />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-sky-500/10 to-transparent rounded-2xl border border-white/5">
                    <AnimatedCounter end={5023} suffix="" className="text-4xl lg:text-5xl text-sky-400" label="Кв. м площади" labelClassName="text-slate-500" />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-primary-500/10 to-transparent rounded-2xl border border-white/5">
                    <AnimatedCounter end={20} suffix="" className="text-4xl lg:text-5xl text-primary-400" label="Лет опыта" labelClassName="text-slate-500" />
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">2004</p>
                    <p className="text-xs text-slate-400">Год основания</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-4 shadow-xl shadow-primary-500/20 text-white"
              >
                <p className="text-sm font-bold">24/7</p>
                <p className="text-xs opacity-80">Телемедицина</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <motion.path
            d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 70C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#020617"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </svg>
      </div>
    </section>
  );
}
