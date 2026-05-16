import { motion } from "framer-motion";
import { Brain, ScanFace, MessageSquareText, Database, Eye } from "lucide-react";
import network from "@/assets/ai-network.jpg";
import { SectionHeader } from "./Section";

const items = [
  { icon: MessageSquareText, title: "NLP Chatbot", desc: "Natural language understanding for student queries." },
  { icon: ScanFace, title: "Face Recognition", desc: "Identifies faculty members instantly." },
  { icon: Brain, title: "Doctor Identification", desc: "Maps faces to professor profiles." },
  { icon: Database, title: "Image Dataset", desc: "Trained on a curated faculty dataset." },
  { icon: Eye, title: "OpenCV Pipeline", desc: "Real-time vision processing on the edge." },
];

export function AISection() {
  return (
    <section id="ai" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="AI & Recognition"
          title={<>The <span className="text-gradient">intelligence</span> behind ZIKO</>}
          description="Advanced computer vision and natural language processing combine to deliver a campus companion that thinks, sees and listens."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden glass-strong p-2"
          >
            <img
              src={network}
              alt="AI neural network visualization"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-3xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-2xl p-4">
                <div className="text-xs text-primary uppercase tracking-widest mb-1">Live AI</div>
                <div className="font-display text-lg">Vision + Language Models</div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass card-glow rounded-2xl p-5 flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 glow-purple">
                  <it.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold">{it.title}</h4>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
