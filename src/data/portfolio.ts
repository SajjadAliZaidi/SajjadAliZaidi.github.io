export const profile = {
  name: "Sajjad Ali Zaidi",
  title: "Senior Full-Stack Software Engineer | AI/GenAI Systems",
  tagline:
    "Building applied AI systems — RAG pipelines, multi-agent orchestration, and production-grade full-stack platforms.",
  email: "sajjadalizaidi00@gmail.com",
  linkedin: "https://www.linkedin.com/in/syedmuhammadsajjad",
  github: "https://github.com/sajjadalizaidi",
  resumeUrl: "/Sajjad_Zaidi_Resume_AI_GenAI.pdf",
};

export const about = `Full-stack software engineer specializing in applied AI and GenAI systems — 
Retrieval-Augmented Generation (RAG) pipelines, multi-agent orchestration, and AWS Bedrock-powered 
services — backed by a strong full-stack foundation across React, Node.js, Ruby on Rails, and 
Java Spring Boot. I focus on shipping reliable, well-instrumented systems that pair modern LLM 
tooling with solid engineering fundamentals.`;

export const skills: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Ruby on Rails", "Java Spring Boot", "REST", "GraphQL"] },
  {
    category: "Cloud / AI",
    items: [
      "AWS Bedrock",
      "RAG",
      "Strands Agents",
      "Agent Squad",
      "AgentCore",
      "Guardrails",
    ],
  },
  { category: "Databases", items: ["PostgreSQL", "Redis"] },
];

export const certifications = [
  {
    name: "AWS Certified Generative AI Developer – Professional",
    code: "AIP-C01",
    issuer: "Amazon Web Services",
    year: "2025",
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "RAG Knowledge Assistant",
    description:
      "Production RAG pipeline over enterprise documents with hybrid search, reranking, and Bedrock-backed generation.",
    tech: ["AWS Bedrock", "TypeScript", "PostgreSQL", "pgvector"],
  },
  {
    title: "Multi-Agent Orchestrator",
    description:
      "Agent Squad + Strands routing framework coordinating specialist agents behind a single conversational surface.",
    tech: ["Strands Agents", "Agent Squad", "Node.js"],
  },
  {
    title: "GenAI Guardrails Toolkit",
    description:
      "Policy-driven safety layer for LLM apps: prompt shields, PII redaction, output validation, and telemetry.",
    tech: ["AgentCore", "Guardrails", "Python"],
  },
  {
    title: "Full-Stack Analytics Platform",
    description:
      "React + Rails dashboard with real-time metrics, role-based access, and background job orchestration.",
    tech: ["React", "Ruby on Rails", "Redis", "PostgreSQL"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Full-Stack Software Engineer",
    company: "Exper Labs",
    period: "Sept 2021 — Present",
    highlights: [
      "Lead engineer on applied AI/GenAI systems: RAG pipelines, multi-agent orchestration, and Bedrock-based services.",
      "Design and ship full-stack features across React front-ends and Node.js / Rails / Spring Boot back-ends.",
      "Own reliability, observability, and guardrails for production LLM workloads.",
    ],
  },
];
