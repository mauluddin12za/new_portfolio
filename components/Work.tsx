"use client";

import { projects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Sparkles, ArrowUpRight, Code2, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

export function Work() {
  const { locale } = useLanguage();
  const t = getTranslation(locale);

  return (
    <section id="work" className="py-28 px-6">
      <div className="mx-auto md:max-w-7xl">
        <SectionHeader
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          sub={t.work.sub}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const projectI18n =
              t.work.projects[p.title as keyof typeof t.work.projects];
            const tag = projectI18n?.tag || p.tag;
            const blurb = projectI18n?.blurb || p.blurb;

            return (
              <article
                key={p.title}
                className="group relative rounded-3xl glass p-3 md:p-6 overflow-hidden hover:border-primary/30 transition-colors"
              >
                <div
                  className={`absolute -top-24 -right-24 size-72 rounded-full bg-linear-to-br ${p.accent} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative">
                  <div className="relative aspect-16/8 overflow-hidden rounded-3xl">
                    <Image
                      src={p.image}
                      alt={`${p.title} project preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 md:p-6">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        <Sparkles className="size-3 text-primary" /> {tag}
                      </span>
                      <span className="font-mono">{p.year}</span>
                    </div>

                    <h3 className="font-display text-3xl font-bold mb-3 group-hover:text-gradient transition-all">
                      {p.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {blurb}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 border border-white/5 text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-end gap-3.5 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        {p.links && p.links.length > 1 ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                                <Code2 className="size-4" /> {t.work.code}{" "}
                                <ChevronDown className="size-3" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              {p.links.map((c) => (
                                <DropdownMenuItem key={c.label} asChild>
                                  <a
                                    href={c.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer"
                                  >
                                    <Code2 className="size-3.5 mr-2 text-muted-foreground" />{" "}
                                    {c.label}
                                  </a>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : p.links && p.links.length === 1 ? (
                          <a
                            href={p.links[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                          >
                            <Code2 className="size-4" />{" "}
                            {p.links[0].label || t.work.code}
                          </a>
                        ) : null}
                        <a
                          href={p.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                        >
                          {t.work.liveDemo}{" "}
                          <ArrowUpRight className="size-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
