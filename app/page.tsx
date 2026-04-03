import Chatbot from "@/components/Chatbot";
import NavigationBar from "@/components/layout/NavigationBar";
import CertificatesSection from "@/components/sections/CertificatesSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      <div
        className="fixed top-0 w-full h-6/12 bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-20"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #282828 0%, rgba(255, 255, 255, 0) 70%)",
          maskImage:
            "linear-gradient(to bottom, #282828 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(2px)",
        }}
      />
      <NavigationBar />
      <HeroSection />
      <ProjectsSection />
      <CertificatesSection />
      <SkillsSection />
      <Chatbot />
    </main>
  );
}
