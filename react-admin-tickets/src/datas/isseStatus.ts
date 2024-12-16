export interface IssueStatusType {
  bg?: string;
  boardId?: number;
  id?: number;
  order?: number;
  title?: string;
  
}

export const IssueStatus: IssueStatusType[] = [
  {
    bg: "#f4f5f7",
    boardId: 1,
    id: 1,
    order: 1,
    title: "New",
    
  },
  {
    boardId: 1,
    bg: "#f4f5f7",
    id: 2,
    order: 2,
    title: "In progress",
    
  },
  {
    bg: "#f4f5f7",
    boardId: 1,
    id: 3,
    order: 3,
    title: "Done",
  },
];
