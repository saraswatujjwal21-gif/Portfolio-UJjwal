import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Cursor } from "@/components/portfolio/Cursor";
import { Loader } from "@/components/portfolio/Loader";
import { Nav } from "@/components/portfolio/Nav";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { Hero } from "@/components/portfolio/sections/Hero";
import { About } from "@/components/portfolio/sections/About";
import { Skills } from "@/components/portfolio/sections/Skills";
import { Experience } from "@/components/portfolio/sections/Experience";
import { Contact } from "@/components/portfolio/sections/Contact";
import { Footer } from "@/components/portfolio/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ujjwal Saraswat — Full-Stack Developer & CS Student" },
      {
        name: "description",
        content:
          "Portfolio of Ujjwal Saraswat, a third-year Computer Science student and full-stack developer crafting Django, React and JavaScript web experiences from Gurgaon.",
      },
      { property: "og:title", content: "Ujjwal Saraswat — Portfolio" },
      {
        property: "og:description",
        content:
          "Full-stack developer & CS undergrad in Gurgaon. Django, React, JavaScript. Currently open to internships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ujjwal Saraswat — Portfolio" },
      {
        name: "twitter:description",
        content: "Full-stack developer & CS student — portfolio, projects, résumé.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [cmdOpen, setCmdOpen] = useState(false);
  return (
    <>
      <Loader />
      <SmoothScroll />
      <Cursor />
      <Nav onOpenCmd={() => setCmdOpen(true)} />
      <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
