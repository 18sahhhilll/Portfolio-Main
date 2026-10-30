export interface ProjectBreakdown {
  problem: string;
  approach: string;
  challenge: string;
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  breakdown?: ProjectBreakdown;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ChargeNearby",
    summary:
      "Community-powered emergency EV charging discovery platform connecting drivers to verified private hosts.",
    description:
      "A full-stack emergency EV charging discovery platform connecting stranded electric vehicle drivers with verified private hosts in Pune. Shipped as a monorepo featuring a Django REST backend, React web portal, and Expo React Native mobile client.",
    breakdown: {
      problem:
        "Stranded EV drivers facing battery depletion lack emergency charging access, while private residential charger owners underutilize equipment due to safety and privacy concerns.",
      approach:
        "Built a peer-to-peer discovery and dispatch engine matching drivers by connector compatibility and driving radius, backed by interactive OpenAPI documentation and cross-platform clients.",
      challenge:
        "Engineered atomic row locks (select_for_update) to prevent concurrent double-booking conflicts on chargers, and built privacy-gated address reveals where host coordinates remain hidden until booking confirmation.",
    },
    tech: [
      "Django REST Framework",
      "PostgreSQL (PostGIS)",
      "React",
      "React Native",
      "Python",
      "TypeScript",
      "Tailwind CSS",
      "Expo",
    ],
    github: "https://github.com/18sahhhilll/Charge-Nearby",
    featured: true,
  },
  {
    id: 2,
    title: "DevCollab Hub",
    summary: "A collaboration platform for developers to find teammates by skill and ship together.",
    description:
      "A full-stack collaboration platform where developers create profiles, discover teammates matched by technical skillset, and coordinate projects in dedicated shared workspaces.",
    breakdown: {
      problem:
        "Solo developers and engineering students struggle to find skilled teammates across fragmented forums and lack integrated tools to manage project lifecycles.",
      approach:
        "Architected a centralized MERN platform with normalized MongoDB data schemas, RESTful APIs, JWT authentication, and interactive team workspaces.",
      challenge:
        "Orchestrated low-latency bi-directional communication using Socket.io event pipelines, ensuring real-time message broadcasting and synchronized online presence across workspaces without socket memory leaks.",
    },
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/18sahhhilll/DevCollab",
    demo: "https://developer-collaboration-hub.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Brain Bazaar",
    summary: "An AI-assisted study platform — 1st prize at MAHA-VEER, runner-up at PRO-JIT.",
    description:
      "An automated study platform that parses educational material to synthesize diagnostic MCQ assessments and revision notes. Awarded 1st prize at MAHA-VEER and 2nd prize at PRO-JIT.",
    breakdown: {
      problem:
        "Students spend excessive hours manually drafting revision summaries and practice quizzes from lengthy course materials before exam periods.",
      approach:
        "Created a text-processing pipeline in Python coupled with an interactive web frontend to parse documents, extract key concepts, and structure assessments.",
      challenge:
        "Optimized NLP parsing heuristics to reliably handle heterogeneous text formatting and automatically generate plausible, non-trivial MCQ distractors with accurate answer keys.",
    },
    tech: ["Python", "jQuery", "HTML5", "CSS3"],
    github: "https://github.com/SturdyKnight/brainbazaar",
    featured: true,
  },
  {
    id: 4,
    title: "Password Strength Analyzer",
    summary: "A privacy-first password auditing tool that runs entirely client-side.",
    description:
      "A client-side security auditing tool offering real-time entropy calculation, pattern-matching inspection, and hardware-specific crack-time estimation across multiple attack vectors.",
    breakdown: {
      problem:
        "Most password audit tools rely on superficial length checks or risk user security by sending plaintext credentials over networks to external validation servers.",
      approach:
        "Engineered a zero-network, 100% in-browser evaluator computing Shannon entropy, common dictionary matches, and substitution detection in real time.",
      challenge:
        "Accurately modeled attack surface algorithms across three distinct threat scenarios (online throttled, offline single-core, and distributed GPU hashcat rigs) entirely within client memory with zero latency.",
    },
    tech: ["React", "TypeScript", "Vite", "Recharts", "Tailwind CSS"],
    github: "https://github.com/18sahhhilll/password-strength-analyzer-main",
    demo: "https://password-strength-analyzer-main.vercel.app/",
  },
  {
    id: 5,
    title: "Habit Tracker App",
    summary: "A habit tracker built for a college project brief, with live sync via Supabase.",
    description:
      "A habit-tracking application featuring dynamic streak analytics, real-time database synchronization, and responsive progress dashboards.",
    breakdown: {
      problem:
        "Habit trackers frequently experience data divergence between local and remote state when users log streaks across multiple devices.",
      approach:
        "Built a modular React architecture backed by Supabase Authentication and real-time PostgreSQL synchronization with optimistic state updates.",
      challenge:
        "Designed PostgreSQL Row Level Security (RLS) policies guaranteeing multi-tenant isolation, combined with optimistic local state dispatch to eliminate visual stutter during offline-to-online reconciliation.",
    },
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/18sahhhilll/RoutineX-Main",
    demo: "https://routine-x-main.vercel.app/",
  },
  {
    id: 6,
    title: "Pizza Delivery Web App",
    summary: "A full-stack ordering system with auth, cart logic, and live pricing.",
    description:
      "An end-to-end food ordering platform featuring role-based authentication, dynamic catalogue administration, relational cart state, and order tracking.",
    breakdown: {
      problem:
        "E-commerce ordering portals are prone to client-side cart tampering, inconsistent total calculation during promotions, and abandoned database writes.",
      approach:
        "Architected an enterprise ASP.NET backend utilizing transactional relational schemas across SQL databases (Oracle & MySQL) for atomic checkout workflows.",
      challenge:
        "Enforced strict server-side price reconciliation and atomic database transaction boundaries to prevent price manipulation and maintain inventory integrity under concurrent checkout requests.",
    },
    tech: ["C#", "ASP.NET", "SQL", "HTML5", "CSS3"],
    github: "https://github.com/18sahhhilll/Razor-Pizza",
  },
];
