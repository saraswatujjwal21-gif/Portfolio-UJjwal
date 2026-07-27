import { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { profile, nav } from "@/lib/portfolio-data";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (o: boolean) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a section, download resume, get in touch…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {nav.map((n) => (
            <CommandItem key={n.id} onSelect={() => go(n.id)}>
              <ArrowRight className="mr-2 h-4 w-4" /> {n.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Contact">
          <CommandItem onSelect={() => window.open(`mailto:${profile.email}`)}>
            <Mail className="mr-2 h-4 w-4" /> Email {profile.email}
          </CommandItem>
          <CommandItem onSelect={() => window.open(profile.github, "_blank")}>
            <Github className="mr-2 h-4 w-4" /> GitHub
          </CommandItem>
          <CommandItem onSelect={() => window.open(profile.linkedin, "_blank")}>
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => window.open(profile.resumeUrl, "_blank")}>
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
