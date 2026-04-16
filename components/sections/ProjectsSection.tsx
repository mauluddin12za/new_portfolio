"use client";

import { useEffect, useState } from "react";
import Container from "../layout/Container";
import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsSection() {
  const INITIAL_COUNT = 3;
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_COUNT);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="Projects" className="py-24 px-6 border-t border-white/10">
      <Container>
        <h2 data-aos="fade-up" className="text-4xl font-bold text-white mb-12">
          Projects
        </h2>
        <div data-aos="fade-up" className="grid md:grid-cols-3 gap-8 mb-8">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              links={project.links}
              liveDemo={project.liveDemo}
            />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div data-aos="fade-up" className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-md bg-primary text-white font-medium hover:bg-primaryDark transition duration-300"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
