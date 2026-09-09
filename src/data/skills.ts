export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C/C++", "C#", "SQL", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express.js", "ASP.NET", "Angular.js", "Django"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Oracle", "Supabase (PostgreSQL)"],
  },
  {
    category: "Developer Tools",
    items: ["Git / GitHub", "VS Code", "Eclipse", "Android Studio"],
  },
  {
    category: "Core CS",
    items: ["OOP", "Data Structures & Algorithms", "DBMS", "SDLC", "Agile"],
  },
];
