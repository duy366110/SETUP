export interface IssueStatusType {
  bg?: string;
  id?: number;
  issueId?: number;
  name?: string;
  order?: number;
  title?: string;
}

export const IssueStatus: IssueStatusType[] = [
  {
    bg: "#f4f5f7",
    id: 1,
    issueId: 1,
    name: "New",
    order: 1,
    title: "New",
  },
  {
    bg: "#f4f5f7",
    id: 2,
    issueId: 1,
    name: "In progress",
    order: 2,
    title: "In progress",
  },
  {
    bg: "#f4f5f7",
    id: 3,
    issueId: 1,
    name: "Done",
    order: 3,
    title: "Done",
  },
];
