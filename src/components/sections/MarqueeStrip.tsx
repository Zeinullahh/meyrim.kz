"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Star, Heart, Shield, Clock, Award, Users } from "lucide-react";

const items = [
  { text: "25+ специальностей", icon: Star },
  { text: "Забота о пациентах", icon: Heart },
  { text: "Национальная аккредитация", icon: Shield },
  { text: "Пн–Сб: 8:00–20:00", icon: Clock },
  { text: "Высшая категория", icon: Award },
  { text: "200 000+ пациентов", icon: Users },
];

export function MarqueeStrip() {
  return (
    <section className="py-6 bg-gradient-to-r from-primary-900/40 via-primary-800/30 to-primary-900/40 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/50" />
      <Marquee speed={40} className="relative py-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 mx-8">
            <item.icon className="w-5 h-5 text-primary-400" />
            <span className="text-lg font-bold text-white/80 tracking-wide">
              {item.text}
            </span>
            <span className="text-primary-600 mx-4">•</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
