export interface PrioritiesType {
  id?: number;
  name?: string;
  color?: string;
}

export const Priorities: PrioritiesType[] = [
  { id: 1, name: "High", color: "#415d43" },
  { id: 2, name: "Medium", color: "#709775" },
  { id: 3, name: "Low", color: "#8fb996" },
];
