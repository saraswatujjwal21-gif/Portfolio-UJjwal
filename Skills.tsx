import { motion } from "framer-motion";
import { skills } from "@/lib/portfolio-data";
import { SectionLabel } from "./About";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="03" title="Craft" kicker="What I use" />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/55">
                — {cat.group}
              </h3>
              <ul className="mt-4 space-y-1.5 text-[15px] text-[var(--ink)]/85">
                {cat.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
