"use client";

import Image from "next/image";

import portrait from "@/assets/hidayat-portrait.png";

import { FloatChip } from "./FloatChip";

import {
  ArrowUpRight,
  Code2,
  Database,
  BrainCircuit,
  Rocket,
  PhoneForwardedIcon,
} from "lucide-react";

import { contacts } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 md:pt-42 pb-24 overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 noise" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="relative flex size-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for Full-Stack Web Development Projects
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Crafting fast, scalable,
            <span className="text-gradient"> production-grade</span>
            <br />
            web applications.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I&apos;m{" "}
            <span className="text-foreground font-medium">
              Hidayat Mauluddin
            </span>{" "}
            - a Full-Stack Web Developer building scalable and high-performance
            web applications with Next.js, React, Node.js, and MySQL.
            Specialized in secure backend architecture, REST APIs, and
            AI-powered integrations that create smarter digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-[0_0_40px_rgba(80,200,255,0.45)] transition-all"
            >
              View Selected Work <ArrowUpRight className="size-4" />
            </a>

            <a
              href="https://t.me/mauluddin12z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <PhoneForwardedIcon className="size-4" /> Get in Touch
            </a>

            <div className="flex items-center gap-1 ml-2">
              {Object.values(contacts).map((contact, i) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={i}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact.label}
                    className="size-10 grid place-items-center rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="lg:col-span-5 relative animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/40 via-primary/10 to-transparent blur-3xl" />

            <div className="absolute inset-8 rounded-full border border-primary/30 ring-glow" />

            <div className="absolute inset-12 rounded-full bg-surface">
              <Image
                src={portrait}
                alt="Portrait of Hidayat Mauluddin"
                width={1024}
                height={1024}
                className="w-full h-full object-contain scale-135 -translate-y-6"
                priority
              />
            </div>

            <FloatChip
              className="top-4 -left-2"
              delay="0s"
              icon={Code2}
              label="TypeScript"
            />

            <FloatChip
              className="top-1/3 -right-4"
              delay=".6s"
              icon={Database}
              label="MySQL"
            />

            <FloatChip
              className="bottom-12 -left-6"
              delay="1.2s"
              icon={BrainCircuit}
              label="AI Integration"
            />

            <FloatChip
              className="bottom-2 right-6"
              delay="1.8s"
              icon={Rocket}
              label="Next.js"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
