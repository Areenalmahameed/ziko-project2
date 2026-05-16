import { motion } from "framer-motion";
import { Play, Sparkles, Users } from "lucide-react";
import robot from "@/assets/ziko-hero.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden scanlines">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />

      <div className="container mx-auto px-6 relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Graduation Project · 2026
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05] mb-6">
            <span className="text-gradient">ZIKO</span>
            <br />
            <span className="text-foreground">Smart Academic</span>
            <br />
            <span className="text-foreground/80 text-4xl md:text-5xl">Guidance Robot</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            AI-powered intelligent assistant designed to help university students navigate
            campus, identify faculty members, and interact naturally using advanced AI and
            NLP technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold glow-blue hover:scale-105 transition"
            >
              <Play className="w-4 h-4" /> Watch Demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-semibold hover:border-primary/50 transition"
            >
              <Sparkles className="w-4 h-4" /> Explore Features
            </a>
            <a
              href="#team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-semibold hover:border-accent/50 transition"
            >
              <Users className="w-4 h-4" /> Meet The Team
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "AI", l: "Powered" },
              { v: "NLP", l: "Chatbot" },
              { v: "360°", l: "Awareness" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full border border-primary/30 animate-pulse-glow animate-orbit" />
            <div className="absolute w-[500px] h-[500px] rounded-full border border-accent/20 animate-orbit-rev" />
            <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/10 animate-orbit" />
          </div>
          <img
            src={robot}
            alt="ZIKO smart academic guidance robot"
            width={520}
            height={650}
            className="relative z-10 w-[80%] max-w-[520px] animate-float neon-flicker"
          />
        </motion.div>
      </div>
    </section>
  );
}
