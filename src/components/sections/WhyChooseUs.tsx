"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Microscope,
  ShieldCheck,
  Clock,
  HeartHandshake,
  Stethoscope,
  Building2,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/providers/LanguageProvider";

export function WhyChooseUs() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const features =
    lang === "ru"
      ? [
          {
            icon: Microscope,
            title: "Современное оборудование",
            desc: "МРТ 1.5 Тесла, КТ 128 срезов, УЗИ экспертного класса, цифровой рентген и собственная ПЦР-лаборатория.",
          },
          {
            icon: ShieldCheck,
            title: "Национальная аккредитация",
            desc: "Высшая категория аккредитации. Строгий контроль качества на всех этапах диагностики и лечения.",
          },
          {
            icon: Clock,
            title: "Быстрая запись и результаты",
            desc: "Запись на приём в день обращения. Результаты анализов — в тот же день или на следующий.",
          },
          {
            icon: HeartHandshake,
            title: "Комплексный подход",
            desc: "От первичной консультации до полного выздоровления — всё в одном месте. Никаких очередей в разные клиники.",
          },
          {
            icon: Stethoscope,
            title: "25+ специальностей",
            desc: "Команда врачей с высшими категориями, кандидатами и докторами медицинских наук.",
          },
          {
            icon: Building2,
            title: "Комфортные условия",
            desc: "Просторные кабинеты, уютная атмосфера, бесплатный Wi-Fi, зона ожидания с напитками.",
          },
        ]
      : [
          {
            icon: Microscope,
            title: "Заманауи жабдықтар",
            desc: "МРТ 1.5 Тесла, КТ 128 қабат, сарапшылық сыныптағы УДЗ, сандық рентген және өз ПЦР-зертханасы.",
          },
          {
            icon: ShieldCheck,
            title: "Ұлттық аккредитация",
            desc: "Аккредитацияның жоғары санаты. Диагностика және емдеудің барлық кезеңдерінде сапаның қатаң бақылауы.",
          },
          {
            icon: Clock,
            title: "Жылдам жазылу және нәтижелер",
            desc: "Байланыс күні қабылдауға жазылу. Анализ нәтижелері — сол күні немесе келесі күні.",
          },
          {
            icon: HeartHandshake,
            title: "Кешенді тәсіл",
            desc: "Алғашқы консультациядан толық сауығуға дейін — бәрі бір жерде. Әртүрлі клиникаларға кезек күтпейді.",
          },
          {
            icon: Stethoscope,
            title: "25+ мамандық",
            desc: "Жоғары санатты, медицина ғылымдарының кандидаттары мен докторлары бар дәрігерлер тобы.",
          },
          {
            icon: Building2,
            title: "Жайлы жағдайлар",
            desc: "Кең кабинеттер, ыңғайлы атмосфера, тегін Wi-Fi, сусындар бар күту аймағы.",
          },
        ];

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="ambient-light ambient-light-teal w-[600px] h-[600px] top-[-200px] right-[-100px] opacity-20" />
      <div className="ambient-light ambient-light-emerald w-[500px] h-[500px] bottom-[-100px] left-[-100px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealOnScroll>
              <span className="inline-block px-4 py-1.5 bg-medical-100 dark:bg-medical-500/10 text-medical-700 dark:text-medical-400 text-sm font-semibold rounded-full mb-4 border border-medical-200 dark:border-medical-500/10">
                {lang === "ru" ? "Преимущества" : "Артықшылықтар"}
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {lang === "ru" ? "Почему выбирают " : "Неліктен таңдайды "}
                <span className="text-gradient">Мейрим</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                {lang === "ru"
                  ? "Мы не просто лечим — мы заботимся о вашем здоровье на каждом этапе. Современные технологии, опытные врачи и внимательный персонал создают уникальный опыт медицинского обслуживания."
                  : "Біз тек емдемейміз — біз денсаулығыңыздың әрбір кезеңінде қамқорлық жасаймыз. Заманауи технологиялар, тәжірибелі дәрігерлер және мұқият қызметкерлер медициналық қызмет көрсетудің бірегей тәжірибесін жасайды."}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3} className="mt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-primary-50 dark:from-primary-500/5 to-medical-50 dark:to-medical-500/5 border border-primary-100 dark:border-primary-500/10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-medical-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/20 shrink-0">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-lg">
                    {lang === "ru" ? "Гарантия качества" : "Сапа кепілі"}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {lang === "ru"
                      ? "Национальная аккредитация высшей категории подтверждает наш стандарт"
                      : "Жоғары санаттың ұлттық аккредитациясы біздің стандартты растайды"}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div ref={ref} className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl bg-slate-50 dark:glass-card border border-slate-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 dark:from-primary-500/10 to-medical-100 dark:to-medical-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary-200 dark:group-hover:from-primary-500/20 group-hover:to-medical-200 dark:group-hover:to-medical-500/20 transition-colors border border-black/5 dark:border-white/5">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
