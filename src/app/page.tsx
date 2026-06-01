"use client";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Directions } from "@/components/sections/Directions";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { Doctors } from "@/components/sections/Doctors";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingActionButton } from "@/components/ui/FloatingActionButton";

export default function Home() {
  return (
    <main className="relative bg-slate-950">
      <ScrollProgress />
      <Header />
      <Hero />
      <MarqueeStrip />
      <Directions />
      <Doctors />
      <About />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </main>
  );
}
