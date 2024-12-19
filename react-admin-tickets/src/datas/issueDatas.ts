export interface IssuesDatasType {
  assigne?: number,
  id?: number;
  issueId?: number;
  statusId?: number;
  title?: string;
  description?: string;
  label?: number;
  priority?: number;
  created_at?: Date;
  updated_at?: Date;
}

export const IssuesDatas: IssuesDatasType[] = [
  {
    assigne: 1,
    id: 1,
    issueId: 1,
    statusId: 1,
    title: "Server downtime affecting production environment",
    description:
      "The production server is experiencing frequent downtimes during peak hours, causing service interruptions for users.",
    label: 1,
    priority: 1,
    created_at: new Date("2024-12-10T14:30:00Z"),
    updated_at: new Date("2024-12-13T09:00:00Z"),
  },
  {
    assigne: 2,
    id: 2,
    issueId: 1,
    statusId: 1,
    title: "Outdated security patches on staging server",
    description:
      "The staging environment has multiple outdated security patches, posing potential vulnerabilities for testing purposes.",
    label: 2,
    priority: 2,
    created_at: new Date("2024-12-11T10:15:00Z"),
    updated_at: new Date("2024-12-13T09:15:00Z"),
  },
  {
    assigne: 1,
    id: 3,
    issueId: 1,
    statusId: 2,
    title: "Missing translations on the mobile app",
    description:
      "Several UI components on the mobile app are displayed in English instead of the user’s selected language.",
    label: 3,
    priority: 3,
    created_at: new Date("2024-12-09T16:45:00Z"),
    updated_at: new Date("2024-12-12T17:00:00Z"),
  },
  {
    assigne: 2,
    id: 4,
    issueId: 1,
    statusId: 2,
    title: "Slow database queries on analytics dashboard",
    description:
      "The analytics dashboard takes over 10 seconds to load data due to inefficient database queries.",
    label: 4,
    priority: 3,
    created_at: new Date("2024-12-10T09:00:00Z"),
    updated_at: new Date("2024-12-13T10:00:00Z"),
  },
  {
    assigne: 2,
    id: 5,
    issueId: 1,
    statusId: 3,
    title: "Bug in payment gateway integration",
    description:
      "Users are unable to complete transactions using the credit card option. Error code 502 is returned intermittently.",
    label: 8,
    priority: 2,
    created_at: new Date("2024-12-12T08:00:00Z"),
    updated_at: new Date("2024-12-13T11:30:00Z"),
  },
];
