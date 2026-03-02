"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "@/data/socialLinks";

export default function HeroSection() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hello,
            <br />
            I’m <span className="text-primary">Hidayat Mauluddin</span>
          </h1>

          <p className="text-secondary md:mt-8 leading-relaxed max-w-xl">
            I am a Fullstack Web Developer specializing in building scalable,
            high-performance web applications using modern technologies such as
            HTML, CSS, JavaScript, Node.js, Express.js and Next.js.
          </p>

          <div className="flex items-center gap-6 mt-12 flex-wrap">
            <a
              href="mailto:mauludindayat@gmail.com"
              className="bg-primary hover:bg-primary-dark px-8 py-4 rounded-md font-medium text-white transition duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
              aria-label="Send email to Hidayat Mauluddin"
            >
              Contact Me
            </a>

            <div className="flex gap-4 text-secondary">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name}`}
                  className="flex w-10 h-10 items-center justify-center gap-2 hover:text-primary transition duration-300"
                >
                  <FontAwesomeIcon icon={icon} size="xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:flex hidden relative justify-center items-center">
          <Image
            src="/Eclipse.svg"
            alt="Eclipse"
            width={1000}
            height={1000}
            priority
          />

          <Image
            src="/EclipseBackground.svg"
            alt="Eclipse Background"
            width={1000}
            height={1000}
            className="absolute inset-0"
            priority
          />

          <Image
            src="/photo.png"
            alt="Hidayat Mauluddin"
            width={500}
            height={500}
            className="absolute scale-x-[-1]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
