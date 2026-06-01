"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "ru" | "kk";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    nav_directions: "Направления",
    nav_doctors: "Врачи",
    nav_about: "О клинике",
    nav_contacts: "Контакты",
    hero_badge: "Национальная аккредитация — высшая категория",
    hero_title_1: "Медицинский",
    hero_title_2: "центр",
    hero_title_3: "Мейірім",
    hero_desc:
      "Современная многопрофильная клиника в центре Астаны. Диагностика, консультации, стационар и хирургия — всё под одной крышей.",
    hero_cta_call: "Записаться на приём",
    hero_cta_services: "Услуги и цены",
    hero_stat_specialties: "25+ специальностей",
    hero_stat_schedule: "Пн–Сб: 8:00–20:00",
    hero_stat_patients: "Пациентов в год",
    hero_stat_area: "Кв. м площади",
    hero_stat_experience: "Лет опыта",
    hero_founded: "Год основания",
    hero_telemedicine: "Телемедицина",
    directions_tag: "Направления",
    directions_title_1: "Полный спектр",
    directions_title_2: "медицинских услуг",
    directions_subtitle:
      "Диагностика, лечение и реабилитация для всей семьи — от первичной консультации до полного выздоровления",
    dir_consultation: "Консультативные услуги",
    dir_consultation_desc:
      "Команда лучших специалистов столицы более чем по 25 направлениям для взрослых и детей",
    dir_diagnostic: "Диагностика",
    dir_diagnostic_desc:
      "УЗИ, Допплер, МРТ, КТ, рентген, Холтер, СМАД, колоноскопия, гастроскопия и лаборатория",
    dir_stationary: "Стационарное лечение",
    dir_stationary_desc:
      "Процедуры, обследования и полная реабилитация после операций в комфортабельных условиях",
    dir_surgery: "Хирургические услуги",
    dir_surgery_desc:
      "Общая, торакальная, гинекологическая, ЛОР, сосудистая, флебологическая и проктологическая хирургия",
    dir_more: "Подробнее",
    feat_equipment: "Современное оборудование",
    feat_equipment_desc: "МРТ, КТ, УЗИ экспертного класса",
    feat_doctors: "Опытные специалисты",
    feat_doctors_desc: "Врачи с высшей категорией и учёными степенями",
    feat_comfort: "Комфортные условия",
    feat_comfort_desc: "Просторные кабинеты и уютная атмосфера",
    doctors_tag: "Специалисты",
    doctors_title_1: "Наши",
    doctors_title_2: "врачи",
    doctors_subtitle:
      "Опытные специалисты с многолетней практикой и высшими категориями",
    doctors_all: "Все врачи",
    doc_philippov: "Филиппов Ю. А.",
    doc_philippov_role: "Врач-рентгенолог, КТ",
    doc_philippov_exp: "6 лет профессионального опыта",
    doc_akhmetova: "Ахметова А. К.",
    doc_akhmetova_role: "Кардиолог, функциональная диагностика",
    doc_akhmetova_exp: "Общий стаж 25 лет",
    doc_beisenov: "Бейсенов К. Т.",
    doc_beisenov_role: "Уролог, к.м.н., доцент",
    doc_beisenov_exp: "29 лет опыта, высшая категория",
    doc_utegenova: "Утегенова Б. Ж.",
    doc_utegenova_role: "Сосудистый хирург, флеболог",
    doc_utegenova_exp: "22 года опыта",
    about_tag: "О клинике",
    about_title_1: "Халық сенімі",
    about_title_2: "— табыстың кілті",
    about_subtitle:
      "Народное доверие — ключ к успеху. Клиника «Мейірім» стремится стать высокотехнологичной клиникой международного уровня.",
    about_stat_founded: "Год основания",
    about_stat_patients: "Посетителей в год",
    about_stat_specialties: "Специальностей",
    about_stat_stationary: "Стационарных пациентов",
    about_timeline_title: "История развития",
    about_timeline_2004: "Основание медицинского центра «Мейірім»",
    about_timeline_2020:
      "Присвоено звание «Лидер в сфере медицины». Создан уникальный телемедицинский центр. Открыта собственная ПЦР-лаборатория.",
    about_timeline_2022: "Создан Центр компетенций в области МРТ и КТ диагностики",
    about_timeline_2023: "Получена национальная аккредитация высшей категории",
    about_mission_innovation: "Инновации",
    about_mission_innovation_desc: "Современное оборудование и передовые методы лечения",
    about_mission_access: "Доступность",
    about_mission_access_desc: "Качественная медицинская помощь по доступным ценам",
    about_mission_tele: "Телемедицина",
    about_mission_tele_desc: "Уникальный телемедицинский центр в Казахстане",
    contact_tag: "Контакты",
    contact_title_1: "Свяжитесь с",
    contact_title_2: "нами",
    contact_subtitle:
      "Запишитесь на приём по телефону или приходите лично — мы всегда рады помочь",
    contact_phone: "Телефон",
    contact_phone_desc: "Звоните для записи на приём",
    contact_address: "Адрес",
    contact_address_desc: "Центр города, развитая инфраструктура",
    contact_schedule: "График работы",
    contact_schedule_desc: "Вс: 9:00 – 17:00",
    contact_cta: "Позвонить и записаться",
    contact_map_label: "Адрес клиники",
    contact_map_parking: "Центр города, удобная парковка",
    footer_services: "Услуги",
    footer_about: "О клинике",
    footer_contacts: "Контакты",
    footer_copy: "© 2024 Медицинский центр «Мейірім». Все права защищены.",
    footer_tagline: "Создано с заботой о пациентах",
    header_schedule: "Пн–Сб 8:00–20:00",
    header_book: "Записаться",
    fab_title: "Записаться на приём",
    marquee_specialties: "25+ специальностей",
    marquee_care: "Забота о пациентах",
    marquee_accreditation: "Национальная аккредитация",
    marquee_schedule: "Пн–Сб: 8:00–20:00",
    marquee_category: "Высшая категория",
    marquee_patients: "200 000+ пациентов",
  },
  kk: {
    nav_directions: "Бағыттар",
    nav_doctors: "Дәрігерлер",
    nav_about: "Клиника туралы",
    nav_contacts: "Байланыс",
    hero_badge: "Ұлттық аккредитация — жоғары санат",
    hero_title_1: "Медициналық",
    hero_title_2: "орталық",
    hero_title_3: "Мейірім",
    hero_desc:
      "Астананың орталығында заманауи көппрофильді клиника. Диагностика, консультация, стационар және хирургия — бәрі бір шатырдың астында.",
    hero_cta_call: "Қабылдауға жазылу",
    hero_cta_services: "Қызметтер мен бағалар",
    hero_stat_specialties: "25+ мамандық",
    hero_stat_schedule: "Дс–Сб: 8:00–20:00",
    hero_stat_patients: "Жылдық науқастар",
    hero_stat_area: "Шаршы метр ауданы",
    hero_stat_experience: "Жыл тәжірибе",
    hero_founded: "Құрылған жылы",
    hero_telemedicine: "Телемедицина",
    directions_tag: "Бағыттар",
    directions_title_1: "Медициналық қызметтердің",
    directions_title_2: "толық спектрі",
    directions_subtitle:
      "Барлық отбасыға арналған диагностика, емдеу және реабилитация — алғашқы консультациядан толық сауығуға дейін",
    dir_consultation: "Кеңес беру қызметтері",
    dir_consultation_desc:
      "Астананың үздік мамандарының командасы 25-тен астам бағыт бойынша ересектер мен балаларға",
    dir_diagnostic: "Диагностика",
    dir_diagnostic_desc:
      "УДЗ, Допплер, МРТ, КТ, рентген, Холтер, СМАД, колоноскопия, гастроскопия және зертхана",
    dir_stationary: "Стационарлық емдеу",
    dir_stationary_desc:
      "Жайлы жағдайларда операциядан кейінгі процедуралар, тексерулер және толық реабилитация",
    dir_surgery: "Хирургиялық қызметтер",
    dir_surgery_desc:
      "Жалпы, торакальды, гинекологиялық, ЛОР, қан тамырлары, флебологиялық және проктологиялық хирургия",
    dir_more: "Толығырақ",
    feat_equipment: "Заманауи жабдықтар",
    feat_equipment_desc: "Сарапшылық сыныптағы МРТ, КТ, УДЗ",
    feat_doctors: "Тәжірибелі мамандар",
    feat_doctors_desc: "Жоғары санатты және ғылыми дәрежелі дәрігерлер",
    feat_comfort: "Жайлы жағдайлар",
    feat_comfort_desc: "Кең кабинеттер мен ыңғайлы атмосфера",
    doctors_tag: "Мамандар",
    doctors_title_1: "Біздің",
    doctors_title_2: "дәрігерлеріміз",
    doctors_subtitle:
      "Көпжылдық тәжірибесі мен жоғары санаты бар тәжірибелі мамандар",
    doctors_all: "Барлық дәрігерлер",
    doc_philippov: "Филиппов Ю. А.",
    doc_philippov_role: "Рентгенолог дәрігер, КТ",
    doc_philippov_exp: "6 жыл кәсіби тәжірибе",
    doc_akhmetova: "Ахметова А. К.",
    doc_akhmetova_role: "Кардиолог, функционалдық диагностика",
    doc_akhmetova_exp: "Жалпы өтілі 25 жыл",
    doc_beisenov: "Бейсенов К. Т.",
    doc_beisenov_role: "Уролог, мед. ғ.к., доцент",
    doc_beisenov_exp: "29 жыл тәжірибе, жоғары санат",
    doc_utegenova: "Утегенова Б. Ж.",
    doc_utegenova_role: "Қан тамырлары хирургі, флеболог",
    doc_utegenova_exp: "22 жыл тәжірибе",
    about_tag: "Клиника туралы",
    about_title_1: "Халық сенімі",
    about_title_2: "— табыстың кілті",
    about_subtitle:
      "Халық сенімі — табыстың кілті. «Мейірім» клиникасы халықаралық деңгейдегі жоғары технологиялық клиникаға айналуға ұмтылады.",
    about_stat_founded: "Құрылған жылы",
    about_stat_patients: "Жылдық келушілер",
    about_stat_specialties: "Мамандықтар",
    about_stat_stationary: "Стационарлық науқастар",
    about_timeline_title: "Даму тарихы",
    about_timeline_2004: "«Мейірім» медициналық орталығының құрылуы",
    about_timeline_2020:
      "«Медицина саласындағы көшбасшы» атағы берілді. Бірегей телемедициналық орталық құрылды. Өз ПЦР-зертханасы ашылды.",
    about_timeline_2022: "МРТ және КТ диагностикасы бойынша құзыреттілік орталығы құрылды",
    about_timeline_2023: "Ұлттық аккредитация (жоғары санат) алынды",
    about_mission_innovation: "Инновациялар",
    about_mission_innovation_desc: "Заманауи жабдықтар және озық емдеу әдістері",
    about_mission_access: "Қолжетімділік",
    about_mission_access_desc: "Қолжетімді бағада сапалы медициналық көмек",
    about_mission_tele: "Телемедицина",
    about_mission_tele_desc: "Қазақстандағы бірегей телемедициналық орталық",
    contact_tag: "Байланыс",
    contact_title_1: "Бізбен",
    contact_title_2: "байланысыңыз",
    contact_subtitle:
      "Телефон бойынша қабылдауға жазылыңыз немесе жеке келіңіз — біз әрдайым көмектесуге қуаныштымыз",
    contact_phone: "Телефон",
    contact_phone_desc: "Қабылдауға жазылу үшін қоңырау шалыңыз",
    contact_address: "Мекенжай",
    contact_address_desc: "Қала орталығы, дамыған инфрақұрылым",
    contact_schedule: "Жұмыс кестесі",
    contact_schedule_desc: "Жс: 9:00 – 17:00",
    contact_cta: "Қоңырау шалу және жазылу",
    contact_map_label: "Клиника мекенжайы",
    contact_map_parking: "Қала орталығы, ыңғайлы парковка",
    footer_services: "Қызметтер",
    footer_about: "Клиника туралы",
    footer_contacts: "Байланыс",
    footer_copy: "© 2024 «Мейірім» медициналық орталығы. Барлық құқықтар қорғалған.",
    footer_tagline: "Науқастарға қамқорлықпен жасалды",
    header_schedule: "Дс–Сб 8:00–20:00",
    header_book: "Жазылу",
    fab_title: "Қабылдауға жазылу",
    marquee_specialties: "25+ мамандық",
    marquee_care: "Науқастарға қамқорлық",
    marquee_accreditation: "Ұлттық аккредитация",
    marquee_schedule: "Дс–Сб: 8:00–20:00",
    marquee_category: "Жоғары санат",
    marquee_patients: "200 000+ науқас",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "ru",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("ru");
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && (saved === "ru" || saved === "kk")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
