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
    bg: "#F1F9F6",
    id: 1,
    issueId: 1,
    name: "New",
    order: 1,
    title: "New",
  },
  {
    bg: "#F1F9F6",
    id: 2,
    issueId: 1,
    name: "In progress",
    order: 2,
    title: "In progress",
  },
  {
    bg: "#F1F9F6",
    id: 3,
    issueId: 1,
    name: "Done",
    order: 3,
    title: "Done",
  },
];
