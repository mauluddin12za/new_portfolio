import Image from "next/image";

import portrait from "@/assets/hidayat-portrait.png";

import { SectionHeader } from "./SectionHeader";
import { Pill } from "./Pill";

import { MapPin, Globe, Coffee, Users, Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 relative">
          <div className="aspect-4/5 rounded-3xl overflow-hidden glass relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-violet-500/10" />
            <Image
              src={portrait}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 max-w-[220px]">
            <Quote className="size-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              &ldquo;Make it correct, make it clear, then make it fast &mdash; in that
              order.&rdquo;
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <SectionHeader
            eyebrow="About"
            title="Half engineer. Half craftsman. Fully obsessed."
          />

          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              I started writing code at 15, breaking things until they worked.
              Today I build products that real teams depend on — from the
              database schema to the last hover state.
            </p>

            <p>
              I care about the boring fundamentals: types you can trust,
              observability that tells the truth, and interfaces that respect
              your time. I believe the best engineering is invisible — it just
              feels right.
            </p>

            <p>
              Currently completing a Master of Computer Science at Sriwijaya
              University, researching adaptive facial image restoration using CNN
              and U-Net — blending academic depth with production engineering.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Pill icon={MapPin} label="Palembang, Indonesia" />
            <Pill icon={Globe} label="Open to remote · global" />
            <Pill icon={Coffee} label="Coffee enthusiast" />
            <Pill icon={Users} label="ML / AI Researcher" />
          </div>
        </div>
      </div>
    </section>
  );
}
