"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Directions } from "@/components/sections/Directions";
import { Doctors } from "@/components/sections/Doctors";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingActionButton } from "@/components/ui/FloatingActionButton";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";
import { BackToTop } from "@/components/ui/BackToTop";
import { AppointmentModal } from "@/components/ui/AppointmentModal";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <main className="relative min-h-screen transition-colors duration-500" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
          <MouseSpotlight />
          <ScrollProgress />
          <Header onBook={() => setIsModalOpen(true)} />
          <Hero onBook={() => setIsModalOpen(true)} />
          <MarqueeStrip />
          <TrustStrip />
          <Directions />
          <WhyChooseUs />
          <Doctors />
          <Testimonials />
          <FAQ />
          <About />
          <Contact onBook={() => setIsModalOpen(true)} />
          <Footer />
          <FloatingActionButton onBook={() => setIsModalOpen(true)} />
          <BackToTop />
          <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
}
