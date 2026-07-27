import { motion } from "framer-motion";
import { experience, education, achievements } from "@/lib/portfolio-data";
import { SectionLabel } from "./About";
import { GraduationCap, Sparkles, Award } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="05" title="Path" kicker="Where I've been" />

        <div className="mt-16 grid grid-cols-12 gap-10">
          {experience.map((e, i) => (
            <motion.article
              key={e.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="col-span-12 grid grid-cols-12 gap-6 border-t border-[var(--ink)]/15 pt-10 md:col-span-12"
            >
              <div className="col-span-12 md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/55">
                  {e.period}
                </p>
                <p className="mt-2 text-sm text-[var(--ink)]/60">{e.location}</p>
              </div>
              <div className="col-span-12 md:col-span-6">
                <h3 className="font-[var(--font-display)] text-4xl leading-tight md:text-5xl">
                  {e.role}
                </h3>
                <p className="mt-2 text-lg text-[var(--accent)]">{e.org}</p>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--ink)]/75">
                  {e.body}
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 flex flex-wrap items-start gap-2 md:justify-end">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--ink)]/20 px-3 py-1 text-[11px] font-mono uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Education */}
        <div className="mt-32">
          <div className="flex items-baseline justify-between border-t border-[var(--ink)]/15 pt-6">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink)]/55">§ 06</span>
              <span className="font-[var(--font-display)] text-3xl italic md:text-4xl">Education</span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink)]/55">3 chapters</span>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {education.map((ed, i) => (
              <motion.div
                key={ed.degree + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-cursor="edu"
                className="group relative overflow-hidden rounded-3xl border border-[var(--ink)]/12 bg-[var(--card)] p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent)]/10 blur-2xl transition-opacity group-hover:opacity-70" />
                <GraduationCap className="h-6 w-6 text-[var(--accent)]" />
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/55">
                  {ed.period}
                </p>
                <h4 className="mt-3 font-[var(--font-display)] text-2xl leading-tight">
                  {ed.school}
                </h4>
                <p className="mt-2 text-sm text-[var(--ink)]/70">{ed.degree}</p>
                <p className="mt-1 text-xs text-[var(--ink)]/55">{ed.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/55">
              — Recognition
            </p>
            <h3 className="mt-4 font-[var(--font-display)] text-4xl leading-tight md:text-5xl">
              Certificates & small wins.
            </h3>
          </div>
          <ul className="col-span-12 md:col-span-8 grid gap-3">
            {achievements.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 border-t border-[var(--ink)]/15 py-4"
              >
                {i === 0 ? (
                  <Award className="mt-0.5 h-5 w-5 text-[var(--accent)]" />
                ) : (
                  <Sparkles className="mt-0.5 h-5 w-5 text-[var(--ink)]/50" />
                )}
                <span className="text-[15px] leading-relaxed">{a}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
