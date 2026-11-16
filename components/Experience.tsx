import { experience } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline of compounding craft."
          sub="±3 years of freelance engineering across web applications, enterprise platforms, and academic AI research."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-white/10 to-transparent" />

          <div className="space-y-12">
            {experience.map((e, i) => (
              <div
                key={e.role}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${
                  i % 2 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 size-3 rounded-full bg-primary ring-4 ring-background ring-glow" />

                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2
                      ? "md:pr-12"
                      : "md:pl-12 md:col-start-2"
                  } [direction:ltr]`}
                >
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors">
                    <div className="text-xs font-mono text-primary mb-2 inline-flex items-center gap-1.5">
                      <Calendar className="size-3" /> {e.period}
                    </div>

                    <h3 className="font-display text-2xl font-bold">
                      {e.role}
                    </h3>

                    <div className="text-muted-foreground mb-4">
                      {e.company}
                    </div>

                    <ul className="space-y-2">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />{" "}
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}