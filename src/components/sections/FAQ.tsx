"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/providers/LanguageProvider";

export function FAQ() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs =
    lang === "ru"
      ? [
          {
            q: "Как записаться на приём?",
            a: "Вы можете записаться несколькими способами: позвонить по номеру +7 (7172) 91 02 10, нажать кнопку «Записаться» на сайте и заполнить форму, или написать нам в WhatsApp. Мы работаем без выходных с 8:00 до 20:00.",
          },
          {
            q: "Нужно ли приходить натощак на анализы?",
            a: "Для большинства лабораторных анализов рекомендуется сдача натощак (не менее 8 часов после последнего приёма пищи). Перед УЗИ органов брюшной полости также требуется натощак. При записи мы всегда сообщаем о необходимой подготовке.",
          },
          {
            q: "Какое оборудование используется в клинике?",
            a: "Мы используем современное оборудование экспертного класса: МРТ 1.5 Тесла, КТ 128 срезов, УЗИ аппараты премиум-класса, цифровой рентген, эндоскопические системы Olympus, а также собственную ПЦР-лабораторию.",
          },
          {
            q: "Принимаете ли вы по страховке?",
            a: "Да, мы сотрудничаем с ведущими страховыми компаниями Казахстана. Перед визитом рекомендуем уточнить условия покрытия у вашего страхового агента или позвонить нам для консультации.",
          },
          {
            q: "Есть ли у вас детские специалисты?",
            a: "Да, в клинике ведут приём педиатр, детский невролог, детский хирург, детский уролог и другие специалисты. У нас созданы комфортные условия для маленьких пациентов — отдельная детская зона и доброжелательный персонал.",
          },
          {
            q: "Сколько по времени занимает МРТ?",
            a: "Обычно МРТ-исследование занимает от 20 до 45 минут в зависимости от области исследования. Результаты и заключение выдаются в тот же день.",
          },
        ]
      : [
          {
            q: "Қабылдауға қалай жазылуға болады?",
            a: "Сіз бірнеше тәсілмен жазыла аласыз: +7 (7172) 91 02 10 нөміріне қоңырау шалу, сайттағы «Жазылу» батырмасын басу және пішінді толтыру немесе WhatsApp арқылы хабарлау. Біз демалыссіз 8:00-ден 20:00-ге дейін жұмыс істейміз.",
          },
          {
            q: "Талдауларға аш қарынмен келу керек пе?",
            a: "Көптеген зертханалық талдаулар үшін аш қарынмен тапсыру ұсынылады (тамақтанғаннан кейін кем дегенде 8 сағат). Іш қуысы мүшелерінің УДЗ-сы үшін де аш қарынмен келу қажет. Жазылған кезде біз әрқашан қажетті дайындық туралы хабарлаймыз.",
          },
          {
            q: "Клиникада қандай жабдықтар қолданылады?",
            a: "Біз сарапшылық сыныптағы заманауи жабдықтарды қолданамыз: МРТ 1.5 Тесла, КТ 128 қабат, премиум сыныптағы УДЗ аппараттары, сандық рентген, Olympus эндоскопиялық жүйелері, сондай-ақ өз ПЦР-зертханамыз.",
          },
          {
            q: "Сақтандыру бойынша қабылдайсыздар ма?",
            a: "Иә, біз Қазақстанның ірі сақтандыру компанияларымен ынтымақтасамыз. Келу алдында сақтандыру агентіңізден немесе бізге кеңес алу үшін қоңырау шалу арқылы қамту шарттарын нақтылауды ұсынамыз.",
          },
          {
            q: "Сіздерде балалар мамандары бар ма?",
            a: "Иә, клиникада педиатр, балалар неврологы, балалар хирургі, балалар урологы және басқа мамандар қабылдайды. Біз кішкентай науқастарға жайлы жағдай жасадық — бөлек балалар аймағы және мейірімді қызметкерлер.",
          },
          {
            q: "МРТ қанша уақыт алады?",
            a: "Әдетте МРТ-зерттеу зерттелетін аймаққа байланысты 20-дан 45 минутқа дейін созылады. Нәтижелер мен қорытынды сол күні беріледі.",
          },
        ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-500">
      <div className="ambient-light ambient-light-blue w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-25" />
      <div className="ambient-light ambient-light-teal w-[400px] h-[400px] bottom-[-100px] right-[-100px] opacity-20" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-200 dark:border-primary-500/10">
              {lang === "ru" ? "Частые вопросы" : "Жиі қойылатын сұрақтар"}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {lang === "ru" ? "Отвечаем на ваши " : "Сұрақтарыңызға "}
              <span className="text-gradient">{lang === "ru" ? "вопросы" : "жауап береміз"}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              {lang === "ru"
                ? "Если не нашли ответ — позвоните нам, мы всё расскажем"
                : "Жауап таппасаңыз — бізге қоңырау шалыңыз, біз бәрін айтып береміз"}
            </p>
          </RevealOnScroll>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <RevealOnScroll key={i} delay={i * 0.05}>
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-white dark:bg-slate-800 border-primary-200 dark:border-primary-500/20 shadow-lg shadow-primary-500/5"
                      : "bg-white dark:bg-white/5 border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 p-6 text-left"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400"
                          : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white text-base">
                      {faq.q}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="pl-14">
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll delay={0.3} className="mt-12">
          <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-r from-primary-50 dark:from-primary-500/5 to-medical-50 dark:to-medical-500/5 border border-primary-100 dark:border-primary-500/10">
            <HelpCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 shrink-0" />
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {lang === "ru" ? (
                <>
                  Остались вопросы? Звоните{" "}
                  <a href="tel:+77172910210" className="font-bold text-primary-600 dark:text-primary-400 hover:underline">
                    +7 (7172) 91 02 10
                  </a>
                </>
              ) : (
                <>
                  Сұрақтарыңыз қалды ма? Қоңырау шалыңыз{" "}
                  <a href="tel:+77172910210" className="font-bold text-primary-600 dark:text-primary-400 hover:underline">
                    +7 (7172) 91 02 10
                  </a>
                </>
              )}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
