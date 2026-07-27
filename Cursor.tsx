import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>("");
  const [hover, setHover] = useState(false);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      const el = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (el) {
        setHover(true);
        setLabel(el.getAttribute("data-cursor") || "");
      } else {
        setHover(false);
        setLabel("");
      }
    };
    let raf = 0;
    const loop = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.18;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${pos.current.rx}px, ${pos.current.ry}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
      </div>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-[var(--ink)]/40 transition-all duration-300 ease-out ${
            hover ? "h-16 w-16 bg-[var(--ink)] text-[var(--paper)]" : "h-8 w-8"
          }`}
        >
          {hover && label && (
            <span className="text-[10px] font-medium tracking-wider uppercase">{label}</span>
          )}
        </div>
      </div>
    </>
  );
}
