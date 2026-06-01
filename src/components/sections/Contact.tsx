"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/providers/LanguageProvider";

export function Contact({ onBook }: { onBook?: () => void }) {
  const { t, lang } = useLanguage();

  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  const InstagramIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact_phone"),
      content: "+7 (7172) 91 02 10",
      href: "tel:+77172910210",
      description: t("contact_phone_desc"),
    },
    {
      icon: MapPin,
      title: t("contact_address"),
      content: "г. Астана, ул. Сыганак, 19",
      href: "#",
      description: t("contact_address_desc"),
    },
    {
      icon: Clock,
      title: t("contact_schedule"),
      content: "Пн–Сб: 8:00 – 20:00",
      href: "#",
      description: t("contact_schedule_desc"),
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      content: "+7 (701) 217 59 04",
      href: "https://wa.me/77012175904",
      description: lang === "ru" ? "Напишите нам в WhatsApp" : "WhatsApp-қа жазыңыз",
    },
    {
      icon: InstagramIcon,
      title: "Instagram",
      content: "@meyrim_mediker",
      href: "https://www.instagram.com/meyrim_mediker/",
      description: lang === "ru" ? "Следите за нами в Instagram" : "Instagram-да бізді қадағалаңыз",
    },
  ];

  return (
    <section id="contacts" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      <div className="ambient-light ambient-light-teal w-[500px] h-[500px] bottom-[-100px] right-[-100px] opacity-30" />
      <div className="ambient-light ambient-light-emerald w-[400px] h-[400px] top-[10%] left-[-100px] opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <RevealOnScroll>
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-200 dark:border-primary-500/10">
                {t("contact_tag")}
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {t("contact_title_1")}{" "}
                <span className="text-gradient">{t("contact_title_2")}</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-md">
                {t("contact_subtitle")}
              </p>
            </RevealOnScroll>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <RevealOnScroll key={item.title} delay={0.1 * i}>
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-5 p-5 rounded-2xl bg-white dark:glass-card border border-slate-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-500/20 hover:shadow-lg dark:hover:shadow-primary-500/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 dark:from-primary-500/10 to-medical-100 dark:to-medical-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:from-primary-200 dark:group-hover:from-primary-500/20 group-hover:to-medical-200 dark:group-hover:to-medical-500/20 transition-colors border border-black/5 dark:border-white/5">
                      <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-400 dark:text-slate-400 mb-0.5">{item.title}</p>
                      <p className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {item.content}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 transition-colors shrink-0 mt-1" />
                  </motion.a>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={0.5} className="mt-10">
              <MagneticButton strength={0.15}>
                <button
                  onClick={onBook}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-semibold rounded-full shadow-xl shadow-primary-600/25 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  {t("contact_cta")}
                </button>
              </MagneticButton>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.3} direction="left">
            <div className="relative">
              <div className="aspect-square lg:aspect-auto lg:h-[640px] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                <iframe
                  src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A51.125935%2C%22lon%22%3A71.47256%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22astana%22%7D%2C%22org%22%3A%2270000001032386145%22%7D"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  title="2GIS Map"
                  className="absolute inset-0"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 z-10"
                >
                  <div className="bg-white/90 dark:glass-card backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-black/5 dark:border-white/10">
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      {t("contact_map_label")}
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      г. Астана, ул. Сыганак, 19
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {t("contact_map_parking")}
                    </p>
                    <a
                      href="https://2gis.kz/astana/firm/70000001032386145"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {lang === "ru" ? "Открыть в 2GIS" : "2GIS-те ашу"}
                    </a>
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
