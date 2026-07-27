import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Magnetic } from "../Magnetic";
import { profile } from "@/lib/portfolio-data";
import ujjwalPhoto from "@/assets/ujjwal.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden pt-28 pb-16 grain"
    >
      {/* floating blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-[420px] w-[420px] rounded-full blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 42 / 0.28), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-[520px] w-[520px] rounded-full blur-3xl animate-float-slow"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.15 260 / 0.22), transparent 60%)",
          animationDelay: "-3s",
        }}
      />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* meta row */}
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/60">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.jpg"
              alt="Ujjwal Saraswat Monogram Logo"
              className="h-7 w-7 rounded-full object-cover border border-[var(--ink)]/20 shadow-sm"
            />
            <span>◆ Portfolio · UJJWAL SARASWAT</span>
          </div>
          <span className="hidden sm:inline">Gurgaon · IST {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</span>
          <span>2026 —</span>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-6">
          {/* Left title */}
          <div className="col-span-12 md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="text-sm text-[var(--ink)]/60"
            >
              Ujjwal Saraswat — {profile.role.toLowerCase()}, based in {profile.location}.
            </motion.p>
            <h1 className="mt-6 font-[var(--font-display)] text-[clamp(3.2rem,10vw,10rem)] leading-[0.92] tracking-[-0.02em]">
              <Reveal delay={0.05}>I design</Reveal>
              <Reveal delay={0.18}>
                <span>&nbsp;&amp; build</span>
                <span className="italic text-[var(--accent)]"> quiet</span>
              </Reveal>
              <Reveal delay={0.32}>software.</Reveal>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="mt-8 max-w-xl text-[17px] leading-relaxed text-[var(--ink)]/75"
            >
              {profile.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href={profile.resumeUrl}
                  download="Ujjwal_Saraswat_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="download"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-medium text-[var(--paper)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-transform hover:scale-[1.02]"
                >
                  <Download className="h-4 w-4" />
                  Download Résumé
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="#contact"
                  data-cursor="say hi"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium underline underline-offset-4 decoration-[var(--ink)]/30 hover:decoration-[var(--ink)]"
                >
                  Get in touch
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-10 flex items-center gap-5 text-[var(--ink)]/70"
            >
              <a href={profile.github} data-cursor="github" className="hover:text-[var(--ink)] transition-colors"><Github className="h-5 w-5" /></a>
              <a href={profile.linkedin} data-cursor="linkedin" className="hover:text-[var(--ink)] transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href={`mailto:${profile.email}`} data-cursor="email" className="hover:text-[var(--ink)] transition-colors"><Mail className="h-5 w-5" /></a>
              <span className="ml-2 h-px w-16 bg-[var(--ink)]/20" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em]">Available for internships</span>
            </motion.div>
          </div>

          {/* Right profile card */}
          <div className="col-span-12 md:col-span-4">
            <motion.div
              style={{ y, scale }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative mx-auto mt-2 aspect-[3/4] max-w-sm"
            >
              <div className="absolute inset-0 -rotate-3 rounded-[24px] border border-[var(--ink)]/10 bg-[var(--paper-2)]" />
              <div className="glass absolute inset-0 rotate-1 overflow-hidden rounded-[24px] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)]">
                <img
                  src={ujjwalPhoto}
                  alt="Portrait of Ujjwal Saraswat"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-[var(--paper)]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] drop-shadow">
                    Ujjwal · CSE '28
                  </div>
                  <div className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-mono backdrop-blur">
                    ● live
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--paper)] shadow-xl animate-spin-slow">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-current font-mono text-[10px] uppercase tracking-[0.3em]">
                    <textPath href="#circle">
                      Full-stack · Motion · Django · React ·
                    </textPath>
                  </text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 flex items-center justify-between border-t border-[var(--ink)]/10 pt-4 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--ink)]/60"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span>01 / 07</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.2, 0.7, 0, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
