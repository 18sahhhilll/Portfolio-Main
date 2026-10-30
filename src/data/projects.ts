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
    title: "ChargeNearby",
    summary:
      "Community-powered emergency EV charging discovery platform connecting drivers to verified private hosts.",
    description:
      "Full-stack emergency EV charging discovery platform for India featuring a Django REST Framework API, JWT auth, role-based permissions, and PostGIS geospatial nearby search. Implemented a transactional booking state machine with atomic row locks to prevent double-booking and privacy-gated address reveals; shipped both React web and React Native mobile clients.",
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
      "Architected a full-stack MERN collaboration platform with a scalable MongoDB schema and RESTful APIs. Implemented JWT authentication and real-time communication with Socket.io, along with reusable React components and an intuitive workspace management interface.",
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
      "Developed an AI-assisted study platform that auto-generates MCQ tests and study summaries from uploaded content. Implemented backend text processing in Python with an interactive jQuery-based frontend. Won 1st prize at MAHA-VEER and 2nd prize at PRO-JIT.",
    tech: ["Python", "jQuery", "HTML/CSS"],
    github: "https://github.com/SturdyKnight/brainbazaar",
    featured: true,
  },
  {
    id: 4,
    title: "Password Strength Analyzer",
    summary: "A privacy-first password auditing tool that runs entirely client-side.",
    description:
      "A password security tool with real-time entropy visualization and crack-time estimates across three attack models — online, offline, and GPU-assisted. Includes pattern and dictionary-word detection. Everything is computed in the browser, with no backend and no data leaving the device.",
    tech: ["React", "TypeScript", "Vite", "Recharts", "Tailwind CSS"],
    github: "https://github.com/18sahhhilll/password-strength-analyzer-main",
    demo: "https://password-strength-analyzer-main.vercel.app/",
  },
  {
    id: 5,
    title: "Habit Tracker App",
    summary: "A habit tracker built for a college project brief, with live sync via Supabase.",
    description:
      "Developed a secure full-stack habit tracking application using Supabase Authentication and real-time PostgreSQL synchronization. Built reusable TypeScript React components with optimized state management and interactive progress tracking.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/18sahhhilll/RoutineX-Main",
    demo: "https://routine-x-main.vercel.app/",
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
