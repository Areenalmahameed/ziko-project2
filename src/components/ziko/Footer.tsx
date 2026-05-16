import { Cpu, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border/50 mt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/20 blur-[120px] -translate-y-1/2" />
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-7 h-7 text-primary" />
              <span className="font-display text-2xl font-bold tracking-widest">ZIKO</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Smart Academic Guidance Robot — an AI-powered campus companion for the next
              generation of learners.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Team</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Rama Al-Amoudi</li>
              <li>Tala Al-Ezzah</li>
              <li>Layan Freihat</li>
              <li>Areen Almahamed</li>
              <li className="text-primary mt-3">Supervised by Dr. Musab Qteit</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">University</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Zarqa University<br />
              Faculty of Information Technology
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gradient-primary transition group"
                >
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>© 2026 ZIKO Project · Zarqa University</div>
          <div>Crafted with neon, code & curiosity.</div>
        </div>
      </div>
    </footer>
  );
}
