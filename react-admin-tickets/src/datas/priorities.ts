export interface PriorityType {
  id?: number;
  name?: string;
  color?: string;
}

export const Priorities: PriorityType[] = [
  { id: 1, name: "High", color: "#88d4ab" },
  { id: 2, name: "Medium", color: "#67b99a" },
  { id: 3, name: "Low", color: "#56ab91" },
  { id: 4, name: "Critical", color: "#99e2b4" },
];
