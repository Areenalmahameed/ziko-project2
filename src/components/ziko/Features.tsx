import { motion } from "framer-motion";
import {
  ShieldAlert, AudioLines, Bot, Navigation, Map, UserCheck,
  Activity, Wifi, Zap,
} from "lucide-react";
import { SectionHeader } from "./Section";

const features = [
  { icon: ShieldAlert, title: "Obstacle Detection", desc: "Avoids collisions in real time using ultrasonic + LIDAR fusion." },
  { icon: AudioLines, title: "Voice Interaction", desc: "Speak naturally — ZIKO listens and responds clearly." },
  { icon: Bot, title: "NLP Chatbot", desc: "Understands student queries and answers with context." },
  { icon: Navigation, title: "Autonomous Movement", desc: "Self-driving mobility across campus halls." },
  { icon: Map, title: "Smart Navigation", desc: "Guides students to lecture halls, labs and offices." },
  { icon: UserCheck, title: "Faculty Recognition", desc: "Identifies professors and doctors via vision AI." },
  { icon: Activity, title: "Sensor-Based Detection", desc: "Continuous environmental awareness." },
  { icon: Wifi, title: "Internet Connectivity", desc: "Cloud-connected for live information." },
  { icon: Zap, title: "Real-Time Assistance", desc: "Instant responses with low-latency processing." },
];

export function Features() {
  return (
    <section id="features" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Robot Features"
          title={<>Capabilities that feel <span className="text-gradient">truly futuristic</span></>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass card-glow rounded-3xl p-7 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 glow-purple">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
