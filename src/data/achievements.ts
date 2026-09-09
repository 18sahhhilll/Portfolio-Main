export interface Achievement {
  id: number;
  title: string;
  category: string;
  result: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "MAHA-VEER",
    category: "Project competition",
    result: "1st prize — Winner, for \u201cBrain Bazaar\u201d",
  },
  {
    id: 2,
    title: "PRO-JIT",
    category: "Project competition",
    result: "2nd prize — Runner-up, for \u201cBrain Bazaar\u201d",
  },
  {
    id: 3,
    title: "Code Fiesta",
    category: "Bug bounty competition",
    result: "1st prize — Winner",
  },
];
