"use client";
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DailyReportSection from "@/components/sections/DailyReportSection";
import DashboardSection from "@/components/sections/DashboardSection";
import CtaSection from "@/components/sections/CtaSection";
import WaitlistModal from "@/components/ui/WaitlistModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      
      <main>
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <FeaturesSection />
        <DailyReportSection />
        <DashboardSection />
        <CtaSection onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <Footer />
      
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
