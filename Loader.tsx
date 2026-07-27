import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1700);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--ink)] text-[var(--paper)]"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1] } }}
        >
          <div className="w-[min(80vw,520px)] flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 overflow-hidden rounded-full p-1 border border-white/20 bg-black/50 shadow-2xl"
            >
              <img
                src="/logo.jpg"
                alt="Ujjwal Saraswat Logo"
                className="h-20 w-20 rounded-full object-cover shadow-lg"
              />
            </motion.div>
            <div className="w-full flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.3em] opacity-70">
              <span>Ujjwal Saraswat</span>
              <span>Portfolio · 2026</span>
            </div>
            <div className="mt-8 font-[var(--font-display)] text-[13vw] leading-[0.9] md:text-[8vw]">
              <motion.span
                key={pct}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="tabular-nums"
              >
                {String(pct).padStart(3, "0")}
              </motion.span>
            </div>
            <div className="mt-6 h-px w-full bg-white/15 overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
