"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { useLanguage } from "@/providers/LanguageProvider";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const doctorsData = {
  ru: [
    { name: "Балшыкбай Орынбек Мерекеұлы", role: "Пластический хирург", img: "/images/doctors/balshykbay.png" },
    { name: "Оспанов Болат Мажитович", role: "Врач-уролог", img: "/images/doctors/ospannov.png" },
    { name: "Шаймарданова Райхан Рухоллиқызы", role: "МРТ, КТ, врач-рентгенолог, высшая категория", img: "/images/doctors/shaimardanova.png" },
    { name: "Кожахметова Алия Еркебулановна", role: "Акушер-гинеколог", img: "/images/doctors/kozhakhmetova.png" },
    { name: "Саркулова Фарида Сакуашовна", role: "Дерматолог, высшая категория", img: "/images/doctors/sarkulova.png" },
    { name: "Бейсенов Куандык Турлыгулович", role: "Врач-уролог высшей категории", img: "/images/doctors/beisenov.png" },
    { name: "Темиргалиева Гульнар Шахмиевна", role: "Эндокринолог", img: "/images/doctors/temirgalieva.png" },
    { name: "Нишанбаева Рабига Кубеевна", role: "Врач-офтальмолог высшей категории", img: "/images/doctors/nishanbaeva.png" },
    { name: "Токтамысова Галия Аскаровна", role: "Терапевт высшей категории", img: "/images/doctors/toktamys.png" },
    { name: "Рамазанов Бекжан Бауыржанұлы", role: "Пластический хирург", img: "/images/doctors/ramazanov.png" },
    { name: "Ахметова Алия Каиргалиқызы", role: "Кардиолог, функциональная диагностика", img: "/images/doctors/akhmetova.png" },
    { name: "Карибаева Сауле Мамытбекқызы", role: "Врач-невролог, высшая категория", img: "/images/doctors/karibayeva.png" },
    { name: "Мукашев Ермек Толеуханович", role: "Врач-травматолог, высшая категория", img: "/images/doctors/mukashev.png" },
    { name: "Утегенова Бибигуль Жарылкасынқызы", role: "Сосудистый хирург, флеболог", img: "/images/doctors/utegenova.png" },
  ],
  kk: [
    { name: "Балшыкбай Орынбек Мерекеұлы", role: "Пластикалық хирург", img: "/images/doctors/balshykbay.png" },
    { name: "Оспанов Болат Мажитович", role: "Уролог дәрігері", img: "/images/doctors/ospannov.png" },
    { name: "Шаймарданова Райхан Рухоллиқызы", role: "МРТ,КТ,рентген дәрігері, жоғары санатты", img: "/images/doctors/shaimardanova.png" },
    { name: "Кожахметова Алия Еркебулановна", role: "Акушер-гинеколог", img: "/images/doctors/kozhakhmetova.png" },
    { name: "Саркулова Фарида Сакуашовна", role: "Дерматолог, жоғары санатты", img: "/images/doctors/sarkulova.png" },
    { name: "Бейсенов Куандык Турлыгулович", role: "Уролог дәрігер, жоғарғы санат", img: "/images/doctors/beisenov.png" },
    { name: "Темиргалиева Гульнар Шахмиевна", role: "Эндокринолог", img: "/images/doctors/temirgalieva.png" },
    { name: "Нишанбаева Рабига Кубеевна", role: "Офтальмолог, жоғары санатты", img: "/images/doctors/nishanbaeva.png" },
    { name: "Токтамысова Галия Аскаровна", role: "Терапевт, жоғары санатты", img: "/images/doctors/toktamys.png" },
    { name: "Рамазанов Бекжан Бауыржанұлы", role: "Пластикалық хирург", img: "/images/doctors/ramazanov.png" },
    { name: "Ахметова Алия Каиргалиқызы", role: "Кардиолог, функционалды диагностика", img: "/images/doctors/akhmetova.png" },
    { name: "Карибаева Сауле Мамытбекқызы", role: "Невропатолог дәрігері, жоғары санатты", img: "/images/doctors/karibayeva.png" },
    { name: "Мукашев Ермек Толеуханович", role: "Травматолог дәрігері, жоғары санатты", img: "/images/doctors/mukashev.png" },
    { name: "Утегенова Бибигуль Жарылкасынқызы", role: "Қан тамырлары хирургы, флеболог", img: "/images/doctors/utegenova.png" },
  ],
};

export function Doctors() {
  const { lang } = useLanguage();
  const doctors = doctorsData[lang];
  const [showAll, setShowAll] = useState(false);
  const initialCount = 4;
  const visibleDoctors = showAll ? doctors : doctors.slice(0, initialCount);

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4 border border-primary-200">
              {lang === "ru" ? "Специалисты" : "Мамандар"}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {lang === "ru" ? "Наша " : "Біздің "}
              <span className="text-gradient">{lang === "ru" ? "команда" : "команда"}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-base text-slate-500">
              {lang === "ru"
                ? "Опытные специалисты с многолетней практикой и высшими категориями"
                : "Көпжылдық тәжірибесі мен жоғары санаты бар тәжірибелі мамандар"}
            </p>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleDoctors.map((doctor) => (
              <StaggerItem key={doctor.name}>
                <motion.div
                  layout
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-shadow duration-500 border border-slate-100"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                    <Image
                      src={doctor.img}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5 leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-primary-600 font-medium leading-tight">
                      {doctor.role}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>

        <RevealOnScroll delay={0.2} className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full hover:border-primary-300 hover:text-primary-700 transition-all duration-300 shadow-sm"
          >
            {showAll
              ? (lang === "ru" ? "Свернуть" : "Жию")
              : (lang === "ru" ? "Все врачи" : "Барлық дәрігерлер")}
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
