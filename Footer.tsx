import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--ink)]/15 bg-[var(--paper)] py-14">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Ujjwal Saraswat Monogram Logo"
                className="h-8 w-8 rounded-full object-cover border border-[var(--ink)]/20 shadow-sm"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/50">
                UJJWAL SARASWAT
              </p>
            </div>
            <p className="mt-3 max-w-md font-[var(--font-display)] text-3xl leading-tight md:text-4xl">
              Set in <span className="italic">Instrument Serif</span> & Inter Tight. Built with
              React, Tailwind, Framer Motion and Lenis. Handmade in Gurgaon.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href={profile.github} data-cursor="github" className="hover:text-[var(--accent)] transition-colors"><Github className="h-5 w-5" /></a>
            <a href={profile.linkedin} data-cursor="linkedin" className="hover:text-[var(--accent)] transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href={`mailto:${profile.email}`} data-cursor="email" className="hover:text-[var(--accent)] transition-colors"><Mail className="h-5 w-5" /></a>
            <a
              href="#hero"
              data-cursor="top"
              className="ml-2 inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/20 px-4 py-2 text-xs font-medium hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
            >
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--ink)]/10 pt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink)]/55 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Ujjwal Saraswat — All rights reserved.</span>
          <span>v1.0 · Portfolio</span>
        </div>
      </div>
    </footer>
  );
}
