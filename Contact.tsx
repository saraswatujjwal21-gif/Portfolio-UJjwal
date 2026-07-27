import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { Magnetic } from "../Magnetic";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)] py-24 md:py-32 grain"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.16 45 / 0.35), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full blur-3xl animate-float-slow"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.15 260 / 0.35), transparent 60%)",
          animationDelay: "-4s",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-baseline justify-between border-t border-white/15 pt-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">§ 07</span>
            <span className="font-[var(--font-display)] text-3xl italic md:text-4xl">Contact</span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            Let's build
          </span>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-[var(--font-display)] text-[clamp(2.6rem,8vw,7rem)] leading-[0.95] tracking-[-0.02em]"
            >
              Have an idea?<br />
              <span className="italic text-[var(--accent)]">Let's talk.</span>
            </motion.h2>
            <p className="mt-6 max-w-md text-white/70">
              Open to internship offers, freelance gigs and student collaborations. I usually
              reply within a day.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <a
                href={`mailto:${profile.email}`}
                data-cursor="email"
                className="group flex items-center gap-3 text-white/80 hover:text-white transition"
              >
                <Mail className="h-4 w-4" />
                <span className="border-b border-white/20 group-hover:border-white">{profile.email}</span>
              </a>
              <a
                href={profile.github}
                data-cursor="github"
                className="group flex items-center gap-3 text-white/80 hover:text-white transition"
              >
                <Github className="h-4 w-4" />
                <span className="border-b border-white/20 group-hover:border-white">
                  github.com/saraswatujjwal21
                </span>
              </a>
              <a
                href={profile.linkedin}
                data-cursor="linkedin"
                className="group flex items-center gap-3 text-white/80 hover:text-white transition"
              >
                <Linkedin className="h-4 w-4" />
                <span className="border-b border-white/20 group-hover:border-white">
                  linkedin.com/in/saraswatujjwal21
                </span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
              const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
            }}
            className="col-span-12 space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:col-span-5"
          >
            <Field name="name" label="Your name" placeholder="Jane Doe" />
            <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your idea…"
                className="w-full resize-none border-b border-white/20 bg-transparent py-2 text-sm outline-none placeholder:text-white/30 focus:border-[var(--accent)]"
              />
            </div>
            <Magnetic>
              <button
                type="submit"
                data-cursor="send"
                className="group mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--paper)] px-6 py-3 text-sm font-medium text-[var(--ink)]"
              >
                {sent ? "Opening mail…" : "Send message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Magnetic>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full border-b border-white/20 bg-transparent py-2 text-sm outline-none placeholder:text-white/30 focus:border-[var(--accent)]"
      />
    </div>
  );
}
