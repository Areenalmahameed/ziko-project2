import { motion } from "framer-motion";
import {
  Cpu, CircuitBoard, Radar, Camera, Cog, Battery, Mic, ScanLine,
  Code2, Eye, MessageSquare, Terminal, Sparkles, Bot, Box, Hammer,
} from "lucide-react";
import { SectionHeader } from "./Section";

const hardware = [
  { icon: Cpu, name: "Raspberry Pi 4", desc: "Main processing brain." },
  { icon: CircuitBoard, name: "Arduino Uno", desc: "Low-level motor control." },
  { icon: Radar, name: "Ultrasonic Sensors", desc: "Obstacle distance sensing." },
  { icon: Camera, name: "Camera Module", desc: "Vision and recognition." },
  { icon: Cog, name: "Motors & Driver", desc: "Smooth autonomous movement." },
  { icon: Battery, name: "12V Battery", desc: "Reliable mobile power." },
  { icon: Mic, name: "Speaker & Mics", desc: "Voice in/out system." },
  { icon: ScanLine, name: "RPLIDAR", desc: "360° spatial mapping." },
];

const software = [
  { icon: Code2, name: "Python", desc: "Core robot logic." },
  { icon: Eye, name: "OpenCV", desc: "Real-time computer vision." },
  { icon: MessageSquare, name: "NLP Engine", desc: "Natural conversation." },
  { icon: Terminal, name: "Arduino IDE", desc: "Firmware development." },
  { icon: Sparkles, name: "AI Recognition", desc: "Trained vision models." },
  { icon: Bot, name: "Chatbot System", desc: "Student Q&A interface." },
  { icon: Box, name: "Fusion 360", desc: "Mechanical 3D design." },
  { icon: Hammer, name: "Tinkercad", desc: "Circuit prototyping." },
];

function Card({ icon: Icon, name, desc, i }: { icon: any; name: string; desc: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="glass card-glow rounded-2xl p-5 group"
    >
      <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition">
        <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition" />
      </div>
      <h4 className="font-semibold mb-1">{name}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

export function Components() {
  return (
    <section id="components" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="System Components"
          title={<>Built on <span className="text-gradient">premium hardware & software</span></>}
          description="Every part of ZIKO is engineered for reliability — from the silicon brain to the algorithms running on top."
        />

        <div className="mb-12">
          <h3 className="font-display text-2xl mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gradient-primary rounded-full" /> Hardware
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hardware.map((c, i) => <Card key={c.name} {...c} i={i} />)}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gradient-primary rounded-full" /> Software
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {software.map((c, i) => <Card key={c.name} {...c} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
