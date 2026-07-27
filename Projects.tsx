import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { SectionLabel } from "./About";

export function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="04" title="Selected Work" kicker={`${projects.length} shipped`} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 max-w-2xl font-[var(--font-display)] text-3xl leading-tight md:text-5xl"
        >
          Every project is a small argument about how software could feel.
        </motion.p>
      </div>

      <div className="mt-20">
        {projects.map((p, i) => (
          <ProjectPanel key={p.id} project={p} idx={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectPanel({ project, idx }: { project: (typeof projects)[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div
      ref={ref}
      className="sticky top-0 flex min-h-[100svh] items-center px-6 md:px-10"
      style={{ top: `${idx * 20}px` }}
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-8">
        {/* Visual */}
        <motion.div
          style={{ y }}
          className="col-span-12 md:col-span-7 relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[var(--ink)]/10 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)]"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${project.accent}, transparent 55%), linear-gradient(135deg, var(--paper-2), var(--paper))`,
            }}
          />
          <div className="absolute inset-8 rounded-2xl border border-[var(--ink)]/10 bg-[var(--paper)]/60 backdrop-blur-md p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--ink)]/55">
              <span>◆ {project.n} · Case study</span>
              <span>{project.year}</span>
            </div>
            <div>
              <div className="font-[var(--font-display)] text-6xl leading-none md:text-8xl">
                {project.title}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--ink)]/15 bg-[var(--paper)]/70 px-3 py-1 text-[11px] font-mono uppercase tracking-wider"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[var(--ink)]/60">
              <span>{project.tag}</span>
              <span className="font-mono">{String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center gap-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            Project · {project.n}
          </span>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--ink)]/50">Problem</p>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink)]/80">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--ink)]/50">Solution</p>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink)]/80">{project.solution}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--ink)]/50">Highlights</p>
            <ul className="mt-2 space-y-1.5 text-[14px] text-[var(--ink)]/80">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="text-[var(--accent)]">→</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2 flex gap-3">
            <a
              href={project.live}
              data-cursor="visit"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--paper)] hover:opacity-90 transition"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={project.repo}
              data-cursor="code"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/20 px-5 py-2.5 text-sm font-medium hover:bg-[var(--ink)]/5 transition"
            >
              <Github className="h-4 w-4" /> Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
