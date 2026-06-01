"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";

const contactInfo = [
  {
    icon: Phone,
    title: "Телефон",
    content: "+7 (7172) 91 02 10",
    href: "tel:+77172910210",
    description: "Звоните для записи на приём",
  },
  {
    icon: MapPin,
    title: "Адрес",
    content: "г. Астана, ул. Сыганак, 19",
    href: "#",
    description: "Центр города, развитая инфраструктура",
  },
  {
    icon: Clock,
    title: "График работы",
    content: "Пн–Сб: 8:00 – 20:00",
    href: "#",
    description: "Вс: 9:00 – 17:00",
  },
];

export function Contact() {
  return (
    <section id="contacts" className="py-24 lg:py-32 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="ambient-light ambient-light-teal w-[500px] h-[500px] bottom-[-100px] right-[-100px] opacity-30" />
      <div className="ambient-light ambient-light-emerald w-[400px] h-[400px] top-[10%] left-[-100px] opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealOnScroll>
              <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/10">
                Контакты
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Свяжитесь с <span className="text-gradient">нами</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-lg text-slate-400 mb-10 max-w-md">
                Запишитесь на приём по телефону или приходите лично — мы всегда рады помочь
              </p>
            </RevealOnScroll>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <RevealOnScroll key={item.title} delay={0.1 * i}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-5 p-5 rounded-2xl glass-card hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500/10 to-medical-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:from-primary-500/20 group-hover:to-medical-500/20 transition-colors border border-white/5">
                      <item.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-500 mb-0.5">{item.title}</p>
                      <p className="text-base font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {item.content}
                      </p>
                      <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-primary-500 transition-colors shrink-0 mt-1" />
                  </motion.a>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={0.5} className="mt-10">
              <MagneticButton strength={0.15}>
                <a
                  href="tel:+77172910210"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-full shadow-xl shadow-primary-500/20 hover:shadow-2xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Позвонить и записаться
                </a>
              </MagneticButton>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.3} direction="left">
            <div className="relative">
              <div className="aspect-square lg:aspect-auto lg:h-[640px] rounded-3xl bg-gradient-to-br from-slate-900 via-primary-900/20 to-slate-900 border border-white/5 overflow-hidden relative">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id="mapGridDark" width="60" height="60" patternUnits="userSpaceOnUse">
                          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#14b8a6" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mapGridDark)" />
                    </svg>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="relative"
                    >
                      <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-xl shadow-primary-500/30">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-500 rotate-45 -z-10" />
                    </motion.div>
                  </motion.div>

                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <motion.path
                      d="M50 200 Q150 100 200 200 T350 200"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                      opacity="0.3"
                    />
                    <motion.path
                      d="M80 300 Q200 200 250 300 T380 280"
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.3 }}
                      opacity="0.2"
                    />
                  </svg>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="glass-card rounded-2xl p-6 shadow-lg">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Адрес клиники
                    </p>
                    <p className="text-lg font-bold text-white">
                      г. Астана, ул. Сыганак, 19
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Центр города, удобная парковка
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
