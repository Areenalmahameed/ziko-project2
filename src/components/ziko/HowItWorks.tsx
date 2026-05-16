import { motion } from "framer-motion";
import { Power, Cpu, Radar, Camera, Brain, MessageSquare, Navigation } from "lucide-react";
import { SectionHeader } from "./Section";

const steps = [
  { icon: Power, title: "Power ON", desc: "ZIKO awakens with a soft neon pulse." },
  { icon: Cpu, title: "Boot System", desc: "Raspberry Pi initializes the core OS." },
  { icon: Radar, title: "Sensor Sweep", desc: "Ultrasonic & LIDAR begin scanning." },
  { icon: Camera, title: "Vision Active", desc: "Camera maps the environment." },
  { icon: Brain, title: "AI Processing", desc: "Inputs analyzed by AI models." },
  { icon: MessageSquare, title: "NLP Listens", desc: "Chatbot receives commands." },
  { icon: Navigation, title: "Respond & Move", desc: "Robot navigates and assists." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="How It Works"
          title={<>From boot to <span className="text-gradient">brilliance</span></>}
          description="A streamlined pipeline that takes ZIKO from a still machine to an active campus assistant in seconds."
        />

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:text-right md:pr-12 md:pl-0 px-0 w-full"
                     style={{ textAlign: i % 2 === 0 ? "right" : "left" }}>
                  <div className={`glass card-glow rounded-2xl p-6 inline-block max-w-md ${i % 2 !== 0 ? "md:ml-12" : ""}`}>
                    <div className="text-xs uppercase tracking-widest text-primary mb-1">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center glow-blue shrink-0">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
