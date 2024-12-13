export const Board: any = [
  {
    id: 1,
    keys: ["new", "inprogress", "done"],
    new: [
      {
        id: "ISSUE-001",
        title: "Server downtime affecting production environment",
        description:
          "The production server is experiencing frequent downtimes during peak hours, causing service interruptions for users.",
        type: "Open",
        priority: "High",
        status: "Open",
        created_at: "2024-12-10T14:30:00Z",
        updated_at: "2024-12-13T09:00:00Z",
        assigned_to: {
          id: "EMP-101",
          name: "Nguyen Van A",
          role: "System Administrator",
        },
        tags: ["server", "downtime", "critical"],
      },
      {
        id: "ISSUE-003",
        title: "Outdated security patches on staging server",
        description:
          "The staging environment has multiple outdated security patches, posing potential vulnerabilities for testing purposes.",
        type: "Security",
        priority: "Medium",
        status: "Open",
        created_at: "2024-12-11T10:15:00Z",
        updated_at: "2024-12-13T09:15:00Z",
        assigned_to: {
          id: "EMP-103",
          name: "Pham Van C",
          role: "Security Analyst",
        },
        tags: ["security", "patch", "vulnerability"],
      },
      {
        id: "ISSUE-005",
        title: "Missing translations on the mobile app",
        description:
          "Several UI components on the mobile app are displayed in English instead of the user’s selected language.",
        type: "UI/UX",
        priority: "Open",
        status: "Backlog",
        created_at: "2024-12-09T16:45:00Z",
        updated_at: "2024-12-12T17:00:00Z",
        assigned_to: {
          id: "EMP-105",
          name: "Vo Van E",
          role: "Mobile Developer",
        },
        tags: ["ui", "translation", "language"],
      },
    ],
    inprogress: [
      {
        id: "ISSUE-004",
        title: "Slow database queries on analytics dashboard",
        description:
          "The analytics dashboard takes over 10 seconds to load data due to inefficient database queries.",
        type: "Performance",
        priority: "High",
        status: "In Progress",
        created_at: "2024-12-10T09:00:00Z",
        updated_at: "2024-12-13T10:00:00Z",
        assigned_to: {
          id: "EMP-104",
          name: "Le Thi D",
          role: "Database Administrator",
        },
        tags: ["performance", "database", "optimization"],
      },
      {
        id: "ISSUE-002",
        title: "Bug in payment gateway integration",
        description:
          "Users are unable to complete transactions using the credit card option. Error code 502 is returned intermittently.",
        type: "Software",
        priority: "Critical",
        status: "In Progress",
        created_at: "2024-12-12T08:00:00Z",
        updated_at: "2024-12-13T11:30:00Z",
        assigned_to: {
          id: "EMP-102",
          name: "Tran Thi B",
          role: "Backend Developer",
        },
        tags: ["payment", "gateway", "bug"],
      },
    ],
    done: [],
  },
];
