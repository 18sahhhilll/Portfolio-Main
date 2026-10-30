export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL", "Python", "C#"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "Django REST Framework",
      "Spring Boot",
      "ASP.NET",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Oracle", "PostgreSQL (PostGIS)"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "Eclipse"],
  },
  {
    category: "Core CS Concepts",
    items: ["OOP", "Data Structures & Algorithms", "DBMS", "SDLC", "Agile"],
  },
];
