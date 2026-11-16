"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export function Nav() {
  const { locale, setLocale } = useLanguage();
  const t = getTranslation(locale);

  const navItems = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass rounded-full px-3.5 sm:px-5 py-2.5 flex items-center gap-1.5 sm:gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <a href="#top" className="flex items-center gap-2 pl-1 pr-1.5 sm:pr-3">
          <div className="p-1 size-7 rounded-lg bg-primary/20 ring-1 ring-primary/40 grid place-items-center">
            <Image src={logo} width={36} height={64} alt="logo" />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1 sm:gap-2 px-2 border-l border-white/10">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 lg:px-6 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
            >
              {n.label}
            </a>
          ))}
        </div>

        {/* Language Toggle */}
        <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-xs font-mono ml-auto md:ml-0">
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
              locale === "en"
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLocale("id")}
            className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
              locale === "id"
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Ganti ke Bahasa Indonesia"
          >
            ID
          </button>
        </div>

        <a
          href="https://t.me/mauluddin12z"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-primary-foreground hover:shadow-[0_0_30px_rgba(80,200,255,0.4)] transition-shadow whitespace-nowrap"
        >
          {t.nav.cta} <ArrowUpRight className="size-3.5" />
        </a>
      </nav>
    </header>
  );
}
