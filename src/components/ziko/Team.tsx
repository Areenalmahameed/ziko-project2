import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import rama from "@/assets/team/rama.png";
import tala from "@/assets/team/tala.png";
import areen from "@/assets/team/areen.jpeg";

const team: { name: string; role: string; photo?: string }[] = [
  { name: "Rama Al-Amoudi", role: "Team Member", photo: rama },
  { name: "Tala Al-Ezzah", role: "Team Member", photo: tala },
  { name: "Layan Freihat", role: "Team Member" },
  { name: "Areen Almahamed", role: "Team Member", photo: areen },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export function Team() {
  return (
    <section id="team" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Meet The Team"
          title={<>The minds behind <span className="text-gradient">ZIKO</span></>}
          description="A passionate team from Zarqa University — Faculty of Information Technology."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass card-glow rounded-3xl p-6 text-center relative overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="relative w-32 h-32 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-70 animate-pulse-glow" />
                <div className="absolute -inset-2 rounded-full border border-primary/30 animate-pulse-glow" />
                <div className="relative w-full h-full rounded-full bg-gradient-primary p-[3px]">
                  <div className="w-full h-full rounded-full overflow-hidden glass-strong flex items-center justify-center">
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <span className="font-display text-2xl font-bold text-gradient">
                        {initials(m.name)}
                      </span>
                    )}
                  </div>
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow:
                      "inset 0 0 30px oklch(0.72 0.22 250 / 0.6), 0 0 40px oklch(0.65 0.27 305 / 0.4)",
                  }}
                />
              </div>
              <h3 className="font-display text-lg font-semibold">{m.name}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                {m.role}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 max-w-2xl mx-auto text-center"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Supervisor</div>
          <h3 className="font-display text-2xl font-bold text-gradient">Dr. Musab Qteit</h3>
          <p className="text-muted-foreground mt-3">
            Zarqa University · Faculty of Information Technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}
