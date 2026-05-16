import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center mb-14"
    >
      <div className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-4">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
