export interface ExperienceEntry {
  id: number;
  title: string;
  org: string;
  location?: string;
  period: string;
  points: string[];
  type: "work" | "education";
}

export const experience: ExperienceEntry[] = [
  {
    id: 1,
    title: "Artificial Intelligence Intern",
    org: "Nanosoftrd",
    period: "Feb 2026 – Apr 2026",
    points: [
      "Worked on AI-based car safety systems to enhance driver assistance features",
      "Analyzed vehicle sensor data for safety monitoring and detection logic",
      "Contributed to development of intelligent automotive safety mechanisms",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Java Training Program",
    org: "Anudip Foundation",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Trained in Core Java fundamentals — OOP, exceptions, collections, and JDBC",
      "Implemented CRUD operations using JDBC and MySQL across 5+ practice modules",
      "Managed 100+ records, ensuring reliable data storage and retrieval",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "Web Development Intern",
    org: "My Job Grow",
    location: "Hybrid",
    period: "Nov 2024 – Dec 2024",
    points: [
      "Built responsive React interfaces for 3+ pages, ensuring cross-device compatibility",
      "Integrated REST APIs to connect frontend components with backend services",
      "Enabled real-time data updates, improving application performance",
    ],
    type: "work",
  },
  {
    id: 4,
    title: "Software Development Intern",
    org: "eMsys Solutions",
    period: "Jun 2023 – Jul 2023",
    points: [
      "Developed internal web modules using C#, ASP.NET, and HTML",
      "Integrated Oracle and MySQL databases to support backend operations",
      "Implemented business logic across multiple application modules",
    ],
    type: "work",
  },
  {
    id: 5,
    title: "BE, Computer Engineering",
    org: "Dr. D. Y. Patil Technical Campus",
    location: "Pune",
    period: "Aug 2024 – Jul 2027",
    points: [
      "Focus on software development, web technologies, and data structures",
    ],
    type: "education",
  },
  {
    id: 6,
    title: "Diploma, Computer Engineering",
    org: "Mahavir Polytechnic",
    location: "Nashik",
    period: "Dec 2021 – Aug 2024",
    points: [
      "Built a foundation in programming, databases, and web development",
    ],
    type: "education",
  },
];
