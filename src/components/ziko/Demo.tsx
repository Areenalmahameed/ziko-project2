import { motion } from "framer-motion";
import { Play, Navigation, Mic, ShieldAlert } from "lucide-react";
import { SectionHeader } from "./Section";

const demos = [
  { icon: Navigation, title: "Movement Demo", desc: "Watch ZIKO navigate autonomously." },
  { icon: Mic, title: "Voice Interaction", desc: "Real conversation with the chatbot." },
  { icon: ShieldAlert, title: "Obstacle Detection", desc: "Live sensor-based avoidance." },
];

export function Demo() {
  return (
    <section id="demo" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Demo Video"
          title={<>See <span className="text-gradient">ZIKO</span> in action</>}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl overflow-hidden mb-8 relative aspect-video flex items-center justify-center group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center glow-blue group-hover:scale-110 transition">
              <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
            </div>
            <div className="mt-6 text-muted-foreground">Demo video coming soon</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {demos.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass card-glow rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <d.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-semibold">{d.title}</div>
                <div className="text-xs text-muted-foreground">{d.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
