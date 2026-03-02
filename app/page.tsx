"use client";

import NavigationBar from "@/components/layout/NavigationBar";
import CertificatesSection from "@/components/sections/CertificatesSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      <NavigationBar />
      <HeroSection />
      <CertificatesSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
