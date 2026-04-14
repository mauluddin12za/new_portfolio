"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import ProjectDetail from "./ProjectDetail";
import { useState } from "react";
import Card from "./Card";

type ProjectCardProps = {
  title: string;
  description?: string;
  techStack?: string[];
  image?: string;
  github?: {
    label: string;
    url: string;
  }[];
  liveDemo?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card>
        <div className="flex flex-col h-full">
          {/* IMAGE */}
          {props.image && (
            <div className="w-full relative overflow-hidden rounded-t-xl group/image">
              <Image
                src={props.image}
                alt={props.title}
                width={1000}
                height={1000}
                className="object-cover rounded-t-xl transition-transform duration-300 group-hover/image:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
            </div>
          )}

          {/* INFO */}
          <div className="mt-5 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {props.title}
              </h3>

              {props.description && (
                <p className="text-secondary text-sm mb-2 line-clamp-3">
                  {props.description}
                </p>
              )}

              {props.techStack && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {props.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 items-center border-t border-secondary/20 pt-4 mt-4 ">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-primary text-sm font-medium hover:underline"
              >
                View Details
              </button>
              {props.github && props.github.length > 0 && (
                <div className="relative group">
                  <button className="text-primary text-sm font-medium hover:underline">
                    GitHub ▴
                  </button>

                  <div className="absolute bottom-full mb-2 w-36 bg-card border border-secondary/20 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
                    {props.github.map((repo) => (
                      <Link
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        className="block px-4 py-2 text-sm text-white bg-surface hover:bg-background transition"
                      >
                        {repo.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {props.liveDemo && (
                <Link
                  href={props.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectDetail {...props} />
      </Modal>
    </>
  );
}
