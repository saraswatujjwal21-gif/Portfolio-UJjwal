import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/portfolio-data";

const chapters = [
  { yr: "2023", t: "Finished Class XII (Science) and started chasing computer science full-time." },
  { yr: "2024", t: "Joined B.Tech CSE at DPG College. Fell for algorithms, then for the web." },
  { yr: "2025", t: "Shipped a Django job portal and Karunna. Interned at Void Service for three months." },
  { yr: "Today", t: "Third-year student, building small things carefully — chasing internships that value craft." },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32">

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="02" title="About" kicker="A short story" />

        <div className="mt-14 grid grid-cols-12 gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="col-span-12 font-[var(--font-display)] text-[clamp(2.4rem,6vw,5.5rem)] leading-[1] tracking-[-0.02em] text-balance md:col-span-8"
          >
            I build software the way <span className="italic text-[var(--accent)]">editors</span> shape a good essay —
            everything cut back until only the useful, beautiful parts remain.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="col-span-12 space-y-4 text-[15px] leading-relaxed text-[var(--ink)]/75 md:col-span-4"
          >
            <p>
              I'm a third-year CS student in Gurgaon obsessed with the invisible craft — how a
              button feels, how a page loads, how a database query holds up under pressure.
            </p>
            <p>
              I've built full-stack platforms in Django, shipped a sustainability app with a
              rewards economy, and spent a summer inside a real engineering team at Void Service.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink)]/55">
              Currently learning: systems design & motion engineering.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/50">
              — Timeline
            </p>
          </div>
          <ol className="col-span-12 md:col-span-9 relative border-l border-[var(--ink)]/15 pl-8">
            {chapters.map((c, i) => (
              <motion.li
                key={c.yr}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-[35px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--paper)]" />
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/55">
                  {c.yr}
                </div>
                <p className="mt-2 font-[var(--font-display)] text-2xl leading-snug text-[var(--ink)] md:text-3xl">
                  {c.t}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Stats marquee */}
        <div className="mt-28 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-t border-[var(--ink)]/15 pt-4"
            >
              <div className="font-[var(--font-display)] text-5xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)]/60">
                {s.v}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function SectionLabel({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-t border-[var(--ink)]/15 pt-6">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink)]/55">
          § {index}
        </span>
        <span className="font-[var(--font-display)] text-3xl italic md:text-4xl">{title}</span>
      </div>
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink)]/55">
        {kicker}
      </span>
    </div>
  );
}
