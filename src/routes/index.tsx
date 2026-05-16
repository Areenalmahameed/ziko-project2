import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/ziko/navbar";
import { Hero } from "@/components/ziko/Hero";
import { About } from "@/components/ziko/About";
import { Components } from "@/components/ziko/Components";
import { Features } from "@/components/ziko/Features";
import { HowItWorks } from "@/components/ziko/HowItWorks";
import { AISection } from "@/components/ziko/AISection";
import { Demo } from "@/components/ziko/Demo";
import { Gallery } from "@/components/ziko/Gallery";
import { Team } from "@/components/ziko/Team";
import { Footer } from "@/components/ziko/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ZIKO — Smart Academic Guidance Robot" },
      {
        name: "description",
        content:
          "ZIKO is an AI-powered smart campus robot that helps university students navigate, identify faculty, and interact through NLP and computer vision.",
      },
      { property: "og:title", content: "ZIKO — Smart Academic Guidance Robot" },
      {
        property: "og:description",
        content: "AI-Powered Smart Robot for Assistance & Navigation.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Components />
        <Features />
        <HowItWorks />
        <AISection />
        <Demo />
        <Gallery />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
