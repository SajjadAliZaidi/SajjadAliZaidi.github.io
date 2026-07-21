import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.title}` },
      {
        name: "description",
        content:
          "Portfolio of a Senior Full-Stack Software Engineer specializing in applied AI/GenAI systems: RAG, multi-agent orchestration, and AWS Bedrock.",
      },
      { property: "og:title", content: `${profile.name} — ${profile.title}` },
      {
        property: "og:description",
        content:
          "Applied AI/GenAI systems engineer — RAG, multi-agent orchestration, AWS Bedrock, and full-stack platforms.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
