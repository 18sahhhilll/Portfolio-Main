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
    title: "Web Development Intern",
    org: "My Job Grow",
    location: "Nashik, Maharashtra (Hybrid)",
    period: "Nov 2024 – Dec 2024",
    points: [
      "Developed responsive, component-based React applications and integrated REST APIs to build scalable, maintainable, and high-performance web interfaces.",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Software Development Intern",
    org: "eMsys Solutions",
    location: "Nashik, Maharashtra",
    period: "Jun 2023 – Jul 2023",
    points: [
      "Developed internal web applications using C#, ASP.NET, and SQL databases (Oracle & MySQL), implementing business logic and optimizing database operations.",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "BE in Computer Engineering",
    org: "Dr. D. Y. Patil Technical Campus",
    location: "Pune, Maharashtra",
    period: "Aug 2024 – Jul 2027",
    points: [
      "Focus on software engineering, distributed systems, web architectures, and advanced data structures.",
    ],
    type: "education",
  },
  {
    id: 4,
    title: "Diploma in Computer Engineering",
    org: "Mahavir Polytechnic",
    location: "Nashik, Maharashtra",
    period: "Dec 2021 – Aug 2024",
    points: [
      "Built a solid foundation in computer programming, relational databases, and object-oriented design.",
    ],
    type: "education",
  },
];
