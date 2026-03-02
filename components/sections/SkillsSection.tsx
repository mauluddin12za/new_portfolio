"use client";

import { skills } from "@/data/skills";
import Container from "../layout/Container";
import SkillCard from "../SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SkillsSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="Skills" className="py-24 px-6 border-t border-white/10">
      <Container>
        <h2 data-aos="fade-up" className="text-4xl font-bold text-white mb-12">
          Skills
        </h2>
        <div
          data-aos="fade-up"
          className="grid md:grid-cols-8 grid-cols-2 gap-8 mb-8"
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              image={skill.image}
              title={skill.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
