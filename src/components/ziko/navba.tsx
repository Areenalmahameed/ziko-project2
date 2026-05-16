import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#components", label: "Components" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it Works" },
  { href: "#ai", label: "AI System" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Team" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative">
            <Cpu className="w-7 h-7 text-primary" />
            <div className="absolute inset-0 blur-md bg-primary/40 group-hover:bg-primary/70 transition" />
          </div>
          <span className="font-display text-xl font-bold tracking-widest">
            ZIKO
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-primary hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#demo"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold glow-blue hover:scale-105 transition"
        >
          Watch Demo
        </a>
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-strong mt-3 mx-6 rounded-2xl p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground/80 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
