"use client";

import { contacts } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLanguage();
  const t = getTranslation(locale);

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-md bg-primary/20 ring-1 ring-primary/40 grid place-items-center">
            <span className="font-display font-bold text-primary text-xs">
              H
            </span>
          </div>

          <span>{t.footer.text}</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={contacts.mail.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {contacts.mail.label}
          </a>
          <a
            href={contacts.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {contacts.github.label}
          </a>
          <a
            href={contacts.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {contacts.linkedin.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
