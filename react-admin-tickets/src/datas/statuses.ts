export interface StatusType {
  id?: number;
  value?: string;
  name?: string;
  color?: string;
}

export const Statuses: StatusType[] = [
  { id: 1, value: "PROGRESS", name: "In Progress", color: "#90e0ef" },
  { id: 2, value: "COMPLETED", name: "Completed", color: "#48cae4" },
  { id: 3, value: "PEDING", name: "Pending", color: "#0096c7" },
  { id: 4, value: "TODO", name: "To Do", color: "#e9edc9" },
  { id: 5, value: "DONE", name: "Done", color: "#ccd5ae" },
  { id: 6, value: "CLOSE", name: "Close", color: "#a8dadc" },
  { id: 7, value: "OPEN", name: "Open", color: "#457b9d" },
];
