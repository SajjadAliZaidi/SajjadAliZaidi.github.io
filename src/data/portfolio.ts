import { Code, Server, Cloud, Database, BrainCircuit, Rocket, Trophy, Briefcase, GraduationCap } from "lucide-react";

export const profile = {
  name: "Sajjad Ali Zaidi",
  title: "Senior Full-Stack Software Engineer | AI/GenAI Systems",
  tagline:
    "I build production web platforms, and increasingly, the AI systems that run inside them.",
  email: "sajjadalizaidi00@gmail.com",
  linkedin: { label: "linkedin.com/in/syedmuhammadsajjad", value: "https://www.linkedin.com/in/syedmuhammadsajjad" },
  github: { label: "github.com/sajjadalizaidi", value: "https://github.com/sajjadalizaidi" },
  resumeUrl: "/Sajjad_Zaidi_Resume_AI_GenAI.pdf",
};

export const about = `I'm a full-stack engineer with 5+ years of experience shipping production platforms, now focused on applied AI, RAG pipelines, multi-agent orchestration, and Bedrock-based systems that actually go into production rather than staying a demo.

My foundation is full-stack: React and TypeScript on the frontend, Ruby on Rails, Node.js, and Java Spring Boot on the backend, PostgreSQL and Redis underneath. That foundation is what lets me take an AI feature from "cool idea" to something that survives real traffic, real edge cases, and real users.

I currently work as a Senior Full-Stack Software Engineer at Exper Labs, where I own core modules across a booking and rewards platform, mentor junior engineers, and lead teams through both legacy migrations and new 0-to-1 builds.`;

export const skills = [
  {
    category: "Frontend",
    icon: Code,
    items: ["React", "TypeScript"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Ruby on Rails", "Java Spring Boot"],
  },
  {
    category: "Cloud/AI",
    icon: Cloud,
    items: ["AWS Bedrock", "RAG pipelines", "multi-agent orchestration (Strands Agents, Agent Squad, AgentCore)", "Guardrails"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "Redis"],
  },
];

export const certifications = [
  {
    title: "AWS Certified Generative AI Developer – Professional (AIP-C01)",
    issuer: "Amazon Web Services",
    icon: BrainCircuit,
  },
];

export const projects = [
  {
    title: "AskYourPages",
    description: "Full-stack RAG app that lets users upload PDF books and ask questions about them, getting AI answers with page-level citations.",
    tags: ["TypeScript", "React", "RAG"],
    githubUrl: null,
    liveUrl: null,
    internalUrl: "/projects/askyourpages",
  },
  {
    title: "Booking Automation System",
    description: "Fixed race conditions in a reservation platform's automation engine, raising success rate from ~65% to 90%+ by redesigning the retry and state-reconciliation logic.",
    tags: ["Ruby on Rails", "React"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: "LinkedIn CRM Tool",
    description: "0-to-1 internal CRM built for a BD team to manage LinkedIn outreach and relationships.",
    tags: ["TypeScript", "Next.js", "Supabase", "Vercel"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: "Padel Tournament Platform",
    description: "0-to-1 platform for managing padel tournaments, brackets, scheduling, and results.",
    tags: ["TypeScript", "React", "Vite", "Tailwind", "MUI", "Python/FastAPI", "SQLAlchemy", "MySQL", "Firebase Hosting", "GitHub Actions"],
    githubUrl: null,
    liveUrl: "https://lake-city-cpt.web.app/",
    internalUrl: "/projects/padel-tournament",
  },
  {
    title: "Content Moderation Extension",
    description: "Manifest V3 Chrome extension for real-time, client-side image classification using the Claude API.",
    tags: ["Chrome Extension (Manifest V3)", "Claude API", "TensorFlow"],
    githubUrl: null,
    liveUrl: null,
  },
];

export const experience = [
  {
    role: "Senior Full-Stack Software Engineer",
    company: "Exper Labs",
    period: "Sept 2021 — present",
    description: [
      "Integrate LLM-backed agents to automate tasks, generate structured content, and orchestrate workflows.",
      "Led internal learning sessions on AWS Bedrock, RAG architecture, Prompt Management, and Guardrails following AWS GenAI certification.",
      "Own core modules of a multi-application platform consisting of customer website, employee portal, and partner portal built with Ruby on Rails, React, and Java Spring Boot.",
      "Maintained both legacy and its in-progress migration systems running in parallel, studying legacy behavior, porting pages and features to the new stack, and testing, deploying, and monitoring rollouts.",
      "Work across frontend and backend teams, designing and shipping production-grade full-stack features end-to-end using TypeScript, React, Node.js, and REST APIs, from UI to persistence.",
      "Contributed to backend services within a Java Spring Boot microservices architecture by building complex workflows and full CRUD REST APIs, and leading data migrations alongside full-stack integration work.",
      "Independently rebuilt one of four parallel in-house automation systems, replacing a third-party solution and raising its success rate from ~65% to 90%+.",
      "Received Dashing Debut Award for leading the QA for a major feature launch within 4 months of joining.",
      "Supported junior devs through mentorship while performing hands-on QA to validate new features before release."
    ],
  },
  {
    role: "Software Engineer",
    company: "Menace Studio",
    period: "Feb 2021 — Aug 2021",
    description: [
      "Worked as a JavaScript developer with hands-on AWS (Amplify, CodeCommit, EC2, Lambda) and GCP (Firebase SDK, Identity Platform).",
      "Built a multi-tenant GCP-based demo application using ReactJS, deepening core JavaScript fluency.",
      "Published technical articles on Medium and Dev.to on building Chrome extensions with React."
    ],
  },
];

export const education = [
  {
    degree: "BSCS",
    institution: "FAST (NUCES), Lahore",
    period: "2017 — 2021",
  }
];
