// Single source of truth for all site content.
// Edit this file to update the portfolio — components only render what is here.

export const profile = {
  name: "Ali Haider",
  title: "AI Engineer | Full-Stack Developer",
  titleDetail: "LLMs, RAG & AI Agents",
  location: "Lahore, Pakistan",
  email: "alihaidermalik08@gmail.com",
  phone: "+92 320 1484476",
  github: "https://github.com/AliHaiderMalik7",
  linkedin: "https://linkedin.com/in/alimalik7",
  experience: "5+ years",
  availability:
    "Open to full-time roles (remote, hybrid or onsite in Lahore) and freelance projects",
  tagline:
    "Full-Stack & AI Engineer building SaaS products, marketplaces and AI features with Next.js, Node.js and LLMs."
};

export const about = [
  "AI-focused full-stack engineer with 5+ years of experience shipping production web applications. I build SaaS platforms, marketplaces, CRMs and dashboards end to end, from database design to the UI.",
  "Recently my focus has been AI products: integrating LLM APIs, designing RAG pipelines that ground answers in real data, and building AI agents and automation.",
  "I also have strong experience with GIS and 3D visualization, including interactive maps and LiDAR point clouds in Cesium."
];

export const skills = [
  {
    group: "AI / LLM",
    items: [
      "LLM API integration (OpenAI)",
      "RAG pipelines",
      "Embeddings & semantic search",
      "Vector databases",
      "Prompt engineering & structured outputs",
      "AI agents & workflow automation"
    ]
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Redux / Redux Toolkit",
      "Tailwind CSS",
      "MUI",
      "AntD",
      "Bootstrap",
      "React-Bootstrap",
      "styled-components"
    ]
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "REST APIs",
      "Authentication",
      "Role-based access control",
      "Webhooks & third-party integrations"
    ]
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "Supabase", "MongoDB", "Firebase", "Convex"]
  },
  {
    group: "Payments",
    items: [
      "Stripe subscriptions",
      "One-time payments",
      "Stripe Connect",
      "Stripe webhooks",
      "PayPal"
    ]
  },
  {
    group: "Maps, GIS & 3D",
    items: [
      "Cesium",
      "Potree",
      "LiDAR point clouds (LAS/LAZ)",
      "MapLibre",
      "Mapbox",
      "OpenStreetMap",
      "PostGIS"
    ]
  }
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Simple Code AI",
    period: "Apr 2026 – Present",
    current: true,
    points: [
      "Build and ship AI-powered product features end to end with Next.js, React and Node.js.",
      "Integrate OpenAI LLM APIs into product workflows for AI-assisted features and automated content generation.",
      "Design RAG pipelines that ground LLM responses in domain-specific data, improving answer relevance and accuracy.",
      "Prototype AI features with a small cross-functional team and take them from concept to production."
    ]
  },
  {
    role: "Senior React.js Developer",
    company: "Oneclout",
    period: "Mar 2023 – Mar 2026",
    points: [
      "Built and maintained responsive web and mobile applications with React.js, Next.js and React Native.",
      "Integrated REST APIs with Redux Toolkit and optimized frontend performance.",
      "Implemented payment flows, including PayPal.",
      "Turned UX/UI designs into production-ready interfaces with Tailwind CSS, MUI and AntD."
    ]
  },
  {
    role: "MERN Stack Developer",
    company: "Carbonteq",
    period: "Jul 2021 – Feb 2023",
    points: [
      "Developed APIs, database schemas and third-party integrations with Node.js and Express.js.",
      "Built real-time, interactive map visualizations with MapLibre.",
      "Managed application state with Redux and Redux Toolkit."
    ]
  }
];

export const featuredProject = {
  name: "Cortex",
  label: "Featured — AI",
  role: "Creator & Full-Stack AI Developer",
  stack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "OpenAI",
    "Embeddings",
    "Vector database"
  ],
  description:
    "An AI platform combining RAG, AI agents and workflow automation.",
  points: [
    "Document ingestion pipeline that chunks files, creates embeddings and stores them in a vector database.",
    "Retrieval-grounded Q&A with source citations from the user's own documents.",
    "AI agents that use tools to complete multi-step tasks and trigger automated workflows.",
    "Structured outputs, validation, prompt design and cost control."
  ]
};

// `live` is only set where a real URL exists — no URL means no button.
export const projects = [
  {
    name: "Meetingful",
    tag: "AI",
    role: "Frontend Developer",
    stack: ["React", "Django", "OpenAI API"],
    description:
      "AI-powered meeting analyzer that turns conversations into insights, topics and automated reports."
  },
  {
    name: "VeriSwap",
    role: "MERN Stack Developer",
    live: "https://veriswap.com/",
    stack: ["React", "Firebase"],
    description:
      "Verified sports card trading platform where collectors can buy, sell and trade cards within a trusted network, with user accounts, secure trading and payment integration."
  },
  {
    name: "Rental CV",
    live: "https://rental-cv.vercel.app/",
    stack: ["React", "TypeScript", "Convex", "Stripe"],
    description: "SaaS platform with Stripe subscriptions."
  },
  {
    name: "Alpha Biomed Labs",
    subtitle: "Healthcare Platform",
    live: "https://staging-sync.alphabiomedlabs.com/",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    description: "Multi-role healthcare platform with five portals and payments."
  },
  {
    name: "Agriplot",
    role: "Lead Frontend & Maps Developer",
    live: "https://app.agriplot.earth/",
    stack: ["React", "PostgreSQL", "Maps"],
    description:
      "B2B digital platform helping farmers boost productivity with data collection, geospatial workflows, mapping tools and community features."
  },
  {
    name: "MCA CRM API",
    role: "Backend Developer",
    stack: ["Node.js", "Express.js"],
    description:
      "Backend for a Merchant Cash Advance CRM: deal lifecycle, payback scheduling, commissions, syndication, and role-based access for funders, ISOs and merchants."
  },
  {
    name: "3D LiDAR Viewer",
    role: "Frontend & 3D Maps Developer",
    stack: ["Cesium", "Potree"],
    description:
      "3D viewer combining Potree point cloud rendering with Cesium's globe. Supports drag-and-drop of .las/.laz/.potree files, and placing cameras and Wi-Fi devices inside 3D buildings."
  },
  {
    name: "UrbanForm",
    role: "Senior Frontend Developer",
    stack: [],
    description:
      "Platform for urban planning and spatial data visualization, helping stakeholders explore and analyze geographic planning data."
  },
  {
    name: "Mediconline EHR",
    role: "Frontend Developer",
    stack: [],
    description:
      "Health record system with secure patient data management, appointment scheduling and role-based access control."
  }
];

export const education = [
  {
    degree: "BS Computer Science",
    school: "University of Central Punjab",
    period: "2016 – 2020",
    note: "CGPA 3.06"
  },
  {
    degree: "Intermediate in Computer Science",
    school: "Punjab Group of Colleges, Lahore",
    period: "2014 – 2016",
    note: "1st Division"
  }
];
