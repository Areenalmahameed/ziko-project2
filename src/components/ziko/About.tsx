import { motion } from "framer-motion";
import { Brain, Camera, Compass, Mic, Radar } from "lucide-react";
import { SectionHeader } from "./Section";

const pillars = [
  { icon: Brain, label: "AI Core", desc: "Intelligent decision making engine." },
  { icon: Camera, label: "Vision", desc: "Recognizes faces and surroundings." },
  { icon: Compass, label: "Navigation", desc: "Autonomous indoor pathfinding." },
  { icon: Mic, label: "Voice", desc: "Natural NLP-driven conversations." },
  { icon: Radar, label: "Sensors", desc: "Ultrasonic & LIDAR awareness." },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="About The Project"
          title={<>An <span className="text-gradient">AI companion</span> for the modern campus</>}
          description="ZIKO is an AI-powered smart campus robot developed to improve student experience inside university grounds. It assists students by providing academic guidance, recognizing faculty members through image recognition, and interacting naturally through NLP-based chatbot communication."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass card-glow rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 glow-blue">
                <p.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{p.label}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
