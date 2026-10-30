export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ChargeNearby ⚡",
    summary:
      "Community-powered emergency EV charging discovery platform connecting drivers to verified private hosts.",
    description:
      "A full-stack emergency EV charging discovery and booking platform connecting stranded EV drivers with verified private hosts in Pune. Features Haversine geospatial radius search, reachability triage, a transactional booking state machine with concurrency locking, confidential address gating, and interactive OpenAPI documentation. Monorepo architecture supporting both a React web portal and an Expo React Native mobile client.",
    tech: [
      "Python",
      "Django REST Framework",
      "React",
      "React Native",
      "TypeScript",
      "PostgreSQL",
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
      "A full-stack MERN platform where developers create profiles, post project ideas, and get matched with teammates by skill. Built a scalable MongoDB schema and RESTful API for user and workspace management, JWT authentication, real-time chat with Socket.io, and a reusable React component architecture.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/18sahhhilll/DevCollab",
    demo: "https://developer-collaboration-hub.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Password Strength Analyzer",
    summary: "A privacy-first password auditing tool that runs entirely client-side.",
    description:
      "A password security tool with real-time entropy visualization and crack-time estimates across three attack models — online, offline, and GPU-assisted. Includes pattern and dictionary-word detection. Everything is computed in the browser, with no backend and no data leaving the device.",
    tech: ["React", "TypeScript", "Vite", "Recharts", "Tailwind CSS"],
    github: "https://github.com/18sahhhilll/password-strength-analyzer-main",
    demo: "https://password-strength-analyzer-main.vercel.app/",
  },
  {
    id: 4,
    title: "Habit Tracker App",
    summary: "A habit tracker built for a college project brief, with live sync via Supabase.",
    description:
      "A habit-tracking application built for a project-based learning brief, using Supabase for authentication and real-time PostgreSQL sync. Visualizes daily progress across good and bad habits with dynamic charts and a responsive UI.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/18sahhhilll/RoutineX-Main",
    demo: "https://routine-x-main.vercel.app/",
  },
  {
    id: 5,
    title: "Brain Bazaar",
    summary: "An AI-assisted study platform — 1st prize at MAHA-VEER, runner-up at PRO-JIT.",
    description:
      "A study assistant that generates MCQ tests and summaries from uploaded material, plus syllabus-management tools. Backend text processing in Python with an interactive jQuery frontend. Won 1st prize at MAHA-VEER and was runner-up at PRO-JIT.",
    tech: ["Python", "jQuery"],
    github: "https://github.com/SturdyKnight/brainbazaar",
  },
  {
    id: 6,
    title: "Pizza Delivery Web App",
    summary: "A full-stack ordering system with auth, cart logic, and live pricing.",
    description:
      "A pizza ordering system with user authentication, dynamic menu management, cart operations, and real-time pricing calculations, backed by a SQL database.",
    tech: ["C#", "ASP.NET", "SQL", "HTML/CSS"],
    github: "https://github.com/18sahhhilll/Razor-Pizza",
  },
];
