import { Mail, Linkedin, Calendar, MapPin } from "lucide-react";

import { ContactItem } from "./ContactItem";
import { contacts } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-5xl relative">
        <div className="absolute inset-0 -z-10 rounded-4xl bg-linear-to-br from-primary/20 via-transparent to-violet-500/10 blur-3xl" />

        <div className="glass rounded-4xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs mb-6">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              Currently accepting new projects
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
              Let&apos;s build something{" "}
              <span className="text-gradient">worth shipping.</span>
            </h2>

            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Have a product idea, an open role, or a thorny engineering
              problem? I read every message and reply within 24 hours.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={contacts.mail.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground hover:shadow-[0_0_50px_rgba(80,200,255,0.5)] transition-all"
              >
                <Mail className="size-4" /> mauludindayat@gmail.com
              </a>

              <a
                href={contacts.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium hover:bg-white/10 transition-colors"
              >
                <Linkedin className="size-4" /> Connect on LinkedIn
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <ContactItem
                icon={Mail}
                label="Email"
                value={contacts.mail.email}
              />
              <ContactItem
                icon={MapPin}
                label="Based in"
                value="Palembang, ID"
              />
              <ContactItem
                icon={Calendar}
                label="Response"
                value="Within 24 hours"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
