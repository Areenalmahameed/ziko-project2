import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImagePlus } from "lucide-react";
import { SectionHeader } from "./Section";
import zikoRobot from "@/assets/gallery/ziko-robot.jpg";
import components from "@/assets/gallery/components.jpg";
import chassis from "@/assets/gallery/chassis.jpg";
import wiring from "@/assets/gallery/wiring.jpg";
import raspberry from "@/assets/gallery/raspberry.jpg";

type Span = "tall" | "wide" | "normal" | "large";

type Photo = {
  src?: string;
  label: string;
  caption?: string;
  span?: Span;
  fit?: "cover" | "contain";
};

const photos: Photo[] = [
  { src: zikoRobot, label: "ZIKO In The Lab", caption: "Live wiring on the chassis — sensors, battery & control boards", span: "tall" },
  { src: components, label: "Core Components", caption: "Motors, Pi, gearbox & wiring laid out", span: "wide" },
  { src: raspberry, label: "Brain & Vision", caption: "Raspberry Pi 4 paired with the camera module", span: "normal" },
  { src: chassis, label: "Chassis Assembly", caption: "4-wheel drive base with jumper harness", span: "large" },
];

const spanClass: Record<Span, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  large: "sm:col-span-2 sm:row-span-2",
  normal: "",
};

export function Gallery() {
  const [active, setActive] = useState<Photo | null>(null);

  return (
    <section id="gallery" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Gallery"
          title={<>The <span className="text-gradient">making of</span> ZIKO</>}
          description="Real snapshots from design, assembly, wiring and field testing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-[200px] gap-5">
          {photos.map((p, i) => (
            <motion.button
              type="button"
              key={p.label + i}
              onClick={() => p.src && setActive(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className={`group relative glass card-glow rounded-2xl overflow-hidden text-left ${spanClass[p.span ?? "normal"]}`}
            >
              {p.src ? (
                <>
                  {p.fit === "contain" && (
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, oklch(0.65 0.27 305 / 0.35), transparent 65%), radial-gradient(circle at 30% 70%, oklch(0.72 0.22 250 / 0.3), transparent 60%)",
                      }}
                    />
                  )}
                  <img
                    src={p.src}
                    alt={p.label}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                      p.fit === "contain" ? "object-contain p-6" : "object-cover"
                    }`}
                  />
                </>
              ) : (
                <div className="absolute inset-0 grid-bg flex flex-col items-center justify-center text-muted-foreground">
                  <ImagePlus className="w-8 h-8 mb-2 text-primary/70" />
                  <span className="text-xs uppercase tracking-widest">Upload photo</span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow:
                    "inset 0 0 60px oklch(0.72 0.22 250 / 0.35), inset 0 0 120px oklch(0.65 0.27 305 / 0.25)",
                }}
              />
              <div className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-primary glass px-2 py-1 rounded-full">
                #{String(i + 1).padStart(2, "0")}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-display text-lg font-semibold">{p.label}</div>
                {p.caption && (
                  <div className="text-xs text-muted-foreground mt-1">{p.caption}</div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full glass-strong rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-primary/20 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              {active.src && (
                <img src={active.src} alt={active.label} className="w-full max-h-[75vh] object-contain bg-black/40" />
              )}
              <div className="p-6">
                <div className="font-display text-2xl font-semibold">{active.label}</div>
                {active.caption && (
                  <div className="text-muted-foreground mt-1">{active.caption}</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
