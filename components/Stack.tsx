"use client";

import { stack } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

export function Stack() {
  const { locale } = useLanguage();
  const t = getTranslation(locale);
  const groups = Array.from(new Set(stack.map((s) => s.group)));

  return (
    <section id="stack" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          sub={t.stack.sub}
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {stack.map((s) => (
            <div
              key={s.name}
              className="group glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 hover:bg-white/4 transition-all"
            >
              <div className="size-11 p-2 grid place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 group-hover:ring-primary/50 transition">
                <Image
                  src={s.icon}
                  width={48}
                  height={48}
                  alt={s.name}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.group}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {groups.map((g) => (
            <span
              key={g}
              className="text-xs font-mono px-3 py-1 rounded-full glass text-muted-foreground"
            >
              #{g.toLowerCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
