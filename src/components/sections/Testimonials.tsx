"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/providers/LanguageProvider";

const testimonialsRu = [
  {
    name: "Айгуль К.",
    text: "Проходила МРТ позвоночника в Мейрим. Оборудование новейшее, врач подробно объяснил результаты. Записалась на приём через WhatsApp — очень удобно!",
    rating: 5,
    service: "МРТ диагностика",
  },
  {
    name: "Бауыржан Т.",
    text: "Обращался к кардиологу Ахметовой А.К. — профессионал высочайшего класса. Назначила эффективное лечение, через две недели самочувствие значительно улучшилось.",
    rating: 5,
    service: "Кардиология",
  },
  {
    name: "Динара М.",
    text: "Вела ребёнка к педиатру. Очень понравилась атмосфера в клинике — чисто, светло, персонал вежливый. Детская зона отлично оборудована.",
    rating: 5,
    service: "Педиатрия",
  },
  {
    name: "Ерлан С.",
    text: "Делал колоноскопию под седацией. Всё прошло безболезненно, персонал заботливый. Отдельное спасибо анестезиологу!",
    rating: 5,
    service: "Эндоскопия",
  },
  {
    name: "Гульнар А.",
    text: "Пользуюсь услугами Мейрим уже 5 лет. Проверяю здоровье раз в год — всегда всё на высшем уровне. Рекомендую всей семьёй.",
    rating: 5,
    service: "Диспансеризация",
  },
];

const testimonialsKk = [
  {
    name: "Айгүл К.",
    text: "Мейримде омыртқаның МРТ-сын тапсырдым. Жабдық ең заманауи, дәрігер нәтижелерді егжей-тегжейлі түсіндірді. WhatsApp арқылы қабылдауға жазылдым — өтте ыңғайлы!",
    rating: 5,
    service: "МРТ диагностикасы",
  },
  {
    name: "Бауыржан Т.",
    text: "Кардиолог Ахметова А.К.-ға жүгіндім — ең жоғары дәрежедегі маман. Тиімді ем тағайындады, екі аптадан кейін өзімді айтарлықтай жақсы сезіндім.",
    rating: 5,
    service: "Кардиология",
  },
  {
    name: "Динара М.",
    text: "Баламды педиатрға апардым. Клиникадағы атмосфера өте ұнады — таза, жарық, қызметкерлер сыпайы. Балалар аймағы керемет жабдықталған.",
    rating: 5,
    service: "Педиатрия",
  },
  {
    name: "Ерлан С.",
    text: "Седациямен колоноскопия жасаттым. Барлығы ауырсыз өтті, қызметкерлер қамқор. Анестезиологқа бөлек рахмет!",
    rating: 5,
    service: "Эндоскопия",
  },
  {
    name: "Гүлнар А.",
    text: "Мейрим қызметтерін 5 жыл бойы пайдаланамын. Жылына бір рет денсаулығымды тексеремін — әрқашан ең жоғары деңгейде. Бүкіл отбасыммен ұсынамын.",
    rating: 5,
    service: "Диспансеризация",
  },
];

export function Testimonials() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const testimonials = lang === "ru" ? testimonialsRu : testimonialsKk;

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-500">
      <div className="ambient-light ambient-light-purple w-[500px] h-[500px] top-[-100px] right-[-100px] opacity-30" />
      <div className="ambient-light ambient-light-teal w-[400px] h-[400px] bottom-[-100px] left-[-100px] opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-200 dark:border-primary-500/10">
              {lang === "ru" ? "Отзывы пациентов" : "Науқастардың пікірлері"}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {lang === "ru" ? "Доверие " : "Сенім "}
              <span className="text-gradient">{lang === "ru" ? "тысяч пациентов" : "мыңдаған науқас"}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              {lang === "ru"
                ? "Каждый отзыв — это история здоровья и благодарности"
                : "Әрбір пікір — бұл денсаулық пен алғыс тарихы"}
            </p>
          </RevealOnScroll>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden"
            >
              {/* Quote icon bg */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary-500/5 dark:text-primary-400/5" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-xl lg:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-medium">
                «{testimonials[active].text}»
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-lg">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {testimonials[active].service}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-8 h-2 bg-primary-500"
                    : "w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* Stats bar */}
          <RevealOnScroll delay={0.3} className="mt-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: "4.9", label: lang === "ru" ? "Средний рейтинг" : "Орташа рейтинг" },
                { value: "2 000+", label: lang === "ru" ? "Отзывов" : "Пікірлер" },
                { value: "97%", label: lang === "ru" ? "Рекомендуют" : "Ұсынады" },
                { value: "20+", label: lang === "ru" ? "Лет доверия" : "Жыл сенім" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5"
                >
                  <p className="text-2xl lg:text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
