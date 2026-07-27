import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { nav } from "@/lib/portfolio-data";
import { ThemeToggle } from "./ThemeToggle";
import { Command } from "lucide-react";

export function Nav({ onOpenCmd }: { onOpenCmd: () => void }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [last, setLast] = useState(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    setProgress(max > 0 ? y / max : 0);
    setScrolled(y > 20);
    if (y > last && y > 120) setHidden(true);
    else setHidden(false);
    setLast(y);
  });

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0, 1] }}
        className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4"
      >
        <div
          className={`glass flex items-center gap-1 rounded-full px-2 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)] transition-all ${
            scrolled ? "scale-[0.98]" : ""
          }`}
        >
          <a
            href="#hero"
            data-cursor="home"
            className="mx-1.5 flex items-center gap-2 rounded-full p-1 hover:opacity-90 transition-opacity"
            title="Ujjwal Saraswat — Home"
          >
            <img
              src="/logo.jpg"
              alt="Ujjwal Saraswat Monogram Logo"
              className="h-7 w-7 rounded-full object-cover ring-1 ring-[var(--ink)]/20 shadow-sm transition-transform hover:scale-105"
            />
            <span className="hidden font-[var(--font-display)] text-base font-semibold italic tracking-tight sm:inline">
              US
            </span>
          </a>
          <nav className="flex items-center">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                data-cursor="jump"
                className="group relative rounded-full px-3 py-1.5 text-[13px] font-medium text-[var(--ink)]/80 hover:text-[var(--ink)] transition-colors"
              >
                <span className="relative">
                  {n.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-[var(--ink)] transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
                </span>
              </a>
            ))}
          </nav>
          <button
            onClick={onOpenCmd}
            data-cursor="⌘K"
            className="ml-1 hidden items-center gap-1.5 rounded-full border border-[var(--ink)]/15 px-3 py-1.5 text-[11px] font-mono text-[var(--ink)]/70 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors md:inline-flex"
          >
            <Command className="h-3 w-3" />K
          </button>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>
      </motion.header>
      <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-[var(--accent)] origin-left"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </>
  );
}
