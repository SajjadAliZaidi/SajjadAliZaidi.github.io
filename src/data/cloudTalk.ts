export const cloudTalk = {
  meta: {
    title: "How to Become a Platform-Independent Cloud Engineer | Sajjad Ali Zaidi",
    description:
      "Slides, a multi-cloud cheat sheet (AWS, Azure, GCP) and free learning resources from Sajjad Ali Zaidi's guest lecture at FAST NUCES Lahore.",
    url: "https://sajjadalizaidi.github.io/cs-nuces-lhr-cloud-talk-2026",
  },

  header: {
    label: "Guest lecture · FAST NUCES Lahore · October 2026",
    title: "How to Become a Platform-Independent Cloud Engineer",
    subtitle: "Slides, cheat sheet and free resources from the talk.",
    speaker: "Sajjad Ali Zaidi · Senior Full-Stack Engineer, Exper Labs",
  },

  slides: {
    url: "https://docs.google.com/presentation/d/1taj7VBAwFfqGPF7UtUQ3xypIccvd0ZMS",
    embedUrl:
      "https://docs.google.com/presentation/d/1taj7VBAwFfqGPF7UtUQ3xypIccvd0ZMS/embed?start=false&loop=false",
    embedTitle:
      "Slides: How to Become a Platform-Independent Cloud Engineer (Google Slides preview)",
  },

  bigIdea: {
    callout:
      "Cloud providers mostly rename the same building blocks. Learn the concept once and you can use it anywhere.",
    blocks: [
      "Compute",
      "Storage",
      "Networking",
      "Identity",
      "Databases",
      "Messaging",
      "Observability",
      "Managed AI",
    ],
  },

  providers: ["AWS", "Azure", "GCP"] as const,

  cheatSheet: [
    { concept: "Virtual machines", aws: "EC2", azure: "Virtual Machines", gcp: "Compute Engine" },
    {
      concept: "Serverless functions",
      aws: "Lambda",
      azure: "Azure Functions",
      gcp: "Cloud Run functions",
    },
    {
      concept: "Serverless containers",
      aws: "Fargate / App Runner",
      azure: "Container Apps",
      gcp: "Cloud Run",
    },
    { concept: "Managed Kubernetes", aws: "EKS", azure: "AKS", gcp: "GKE" },
    { concept: "Object storage", aws: "S3", azure: "Blob Storage", gcp: "Cloud Storage" },
    { concept: "Block storage", aws: "EBS", azure: "Managed Disks", gcp: "Persistent Disk" },
    { concept: "Private network", aws: "VPC", azure: "VNet", gcp: "VPC" },
    {
      concept: "Identity and access",
      aws: "IAM",
      azure: "Entra ID + Azure RBAC",
      gcp: "Cloud IAM",
    },
    {
      concept: "Relational DB",
      aws: "RDS / Aurora",
      azure: "Azure SQL / Database for PostgreSQL",
      gcp: "Cloud SQL / AlloyDB",
    },
    { concept: "NoSQL", aws: "DynamoDB", azure: "Cosmos DB", gcp: "Firestore / Bigtable" },
    {
      concept: "Queues / pub-sub",
      aws: "SQS / SNS",
      azure: "Service Bus / Event Grid",
      gcp: "Pub/Sub",
    },
    {
      concept: "Monitoring and logs",
      aws: "CloudWatch",
      azure: "Azure Monitor",
      gcp: "Cloud Monitoring / Logging",
    },
    {
      concept: "Native IaC",
      aws: "CloudFormation / CDK",
      azure: "ARM / Bicep",
      gcp: "Infrastructure Manager",
    },
    { concept: "Data warehouse", aws: "Redshift", azure: "Synapse / Fabric", gcp: "BigQuery" },
    { concept: "CDN", aws: "CloudFront", azure: "Front Door", gcp: "Cloud CDN" },
    { concept: "GenAI platform", aws: "Bedrock", azure: "Azure AI Foundry", gcp: "Vertex AI" },
  ],

  storeExample: {
    intro: "Same architecture, nine components, three sets of names.",
    rows: [
      { concept: "DNS", aws: "Route 53", azure: "Azure DNS", gcp: "Cloud DNS" },
      { concept: "CDN", aws: "CloudFront", azure: "Front Door", gcp: "Cloud CDN" },
      {
        concept: "Storefront (static frontend)",
        aws: "S3 static hosting",
        azure: "Static Web Apps",
        gcp: "Firebase Hosting",
      },
      {
        concept: "API (cart, checkout)",
        aws: "ECS Fargate",
        azure: "Container Apps",
        gcp: "Cloud Run",
      },
      {
        concept: "Database",
        aws: "RDS PostgreSQL",
        azure: "Azure Database for PostgreSQL",
        gcp: "Cloud SQL",
      },
      { concept: "Auth", aws: "Cognito", azure: "Entra External ID", gcp: "Identity Platform" },
      { concept: "Product images", aws: "S3", azure: "Blob Storage", gcp: "Cloud Storage" },
      { concept: "Order queue", aws: "SQS", azure: "Service Bus", gcp: "Pub/Sub" },
      {
        concept: "Email worker",
        aws: "Lambda + SES",
        azure: "Functions + Communication Services",
        gcp: "Cloud Run functions + SendGrid/Mailgun*",
      },
    ],
    footnote:
      "*GCP has no built-in email sending service, so the worker uses a third party such as SendGrid or Mailgun.",
  },

  differences: {
    items: [
      {
        title: "The basic container",
        body: "AWS uses Accounts, GCP uses Projects, Azure uses subscriptions and resource groups.",
      },
      {
        title: "Network scope",
        body: "An AWS VPC is regional, a GCP VPC is global.",
      },
    ],
    takeaway: "Service names map easily. Defaults and boundaries don't. Check those first.",
  },

  skillStack: {
    skills: [
      "Linux and shell",
      "Networking (DNS, CIDR, TLS, load balancing)",
      "Docker and Kubernetes",
      "Terraform / OpenTofu",
      "CI/CD (GitHub Actions)",
      "Observability (OpenTelemetry)",
      "Security (least privilege, secrets)",
      "Cost awareness (FinOps)",
    ],
    callout: "Set a budget alert before you launch anything.",
  },

  roadmap: [
    "Learn the fundamentals (the portable skill stack)",
    "Go deep on one cloud first",
    "Map that knowledge to a second cloud using the cheat sheet",
    "Build, deploy and break things on free tiers (DigitalOcean and Cloudflare are easy places to start)",
    "Certify once you have hands-on experience, not before",
  ],

  resources: [
    { title: "AWS Skill Builder", href: "https://skillbuilder.aws" },
    { title: "Microsoft Learn", href: "https://learn.microsoft.com/training" },
    { title: "Google Cloud Skills Boost", href: "https://www.cloudskillsboost.google" },
    { title: "Azure for Students", href: "https://azure.microsoft.com/free/students" },
    { title: "GitHub Student Developer Pack", href: "https://education.github.com/pack" },
  ],

  stories: [
    {
      title: "The $30,000 Bedrock bill",
      source: "The Register",
      href: "https://www.theregister.com/ai-ml/2026/05/18/surprise-ai-bills-leave-aws-and-google-cloud-users-aghast/5241348",
    },
    {
      title: "PocketOS production database deletion",
      source: "Tom's Hardware",
      href: "https://www.tomshardware.com/tech-industry/artificial-intelligence/claude-powered-ai-coding-agent-deletes-entire-company-database-in-9-seconds-backups-zapped-after-cursor-tool-powered-by-anthropics-claude-goes-rogue",
    },
    {
      title: "OpenAI and Hugging Face incident",
      source: "OpenAI",
      href: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/",
    },
    {
      title: "Hugging Face technical timeline",
      source: "Hugging Face",
      href: "https://huggingface.co/blog/agent-intrusion-technical-timeline",
    },
    {
      title: "OpenAI's multi-cloud deals",
      source: "Built In",
      href: "https://builtin.com/articles/openai-cloud-deals",
    },
    {
      title: "Anthropic, Microsoft and NVIDIA partnership",
      source: "Anthropic",
      href: "https://www.anthropic.com/news/microsoft-nvidia-anthropic-announce-strategic-partnerships",
    },
  ],

  footerNote: {
    text: "Questions after the talk?",
    linkLabel: "Reach out on LinkedIn.",
  },
};

export type ProviderRow = (typeof cloudTalk.cheatSheet)[number];
