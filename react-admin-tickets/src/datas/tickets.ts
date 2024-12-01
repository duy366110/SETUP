export interface TicketsType {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  assignee?: any;
  reporter?: any;
  createdAt?: Date;
  updatedAt?: Date;
  labels?: Array<string>;
  comments?: Array<any>;
}

export const Tickets: TicketsType[] = [
  {
    id: "TICKET-001",
    title: "Fix login page error",
    description:
      "Users cannot log in due to a server timeout error. Investigate and fix the issue.",
    status: "In Progress",
    priority: "High",
    assignee: {
      id: "USER-123",
      name: "John Doe",
      email: "john.doe@example.com",
    },
    reporter: {
      id: "USER-456",
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    createdAt: new Date("2024-11-30T09:00:00Z"),
    updatedAt: new Date("2024-12-01T15:00:00Z"),
    labels: ["bug", "login", "backend"],
    comments: [],
  },
  {
    id: "TICKET-002",
    title: "Add dark mode to settings",
    description: "Implement a dark mode toggle in the user settings page.",
    status: "Open",
    priority: "Medium",
    assignee: null,
    reporter: {
      id: "USER-456",
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    createdAt: new Date("2024-11-29T14:30:00Z"),
    updatedAt: new Date("2024-11-29T14:30:00Z"),
    labels: ["feature", "frontend", "UI/UX"],
    comments: [],
  },
  {
    id: "TICKET-003",
    title: "Optimize database queries",
    description:
      "Certain database queries are slow and causing performance issues. Optimize the query logic and indexes.",
    status: "Done",
    priority: "Critical",
    assignee: {
      id: "USER-789",
      name: "Alice Brown",
      email: "alice.brown@example.com",
    },
    reporter: {
      id: "USER-123",
      name: "John Doe",
      email: "john.doe@example.com",
    },
    createdAt: new Date("2024-11-15T08:15:00Z"),
    updatedAt: new Date("2024-11-20T17:45:00Z"),
    labels: ["performance", "database"],
    comments: [],
  },
  {
    id: "TICKET-004",
    title: "Update homepage banner",
    description:
      "Design and replace the banner on the homepage for the holiday season.",
    status: "Open",
    priority: "Low",
    assignee: null,
    reporter: {
      id: "USER-101",
      name: "Sarah Connor",
      email: "sarah.connor@example.com",
    },
    createdAt: new Date("2024-11-22T12:00:00Z"),
    updatedAt: new Date("2024-11-29T14:30:00Z"),
    labels: ["design", "frontend"],
    comments: [],
  },
  {
    id: "TICKET-005",
    title: "Migrate user data to new database",
    description: "Migrate all user records to the new PostgreSQL database.",
    status: "In Progress",
    priority: "Critical",
    assignee: {
      id: "USER-456",
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    reporter: {
      id: "USER-789",
      name: "Alice Brown",
      email: "alice.brown@example.com",
    },
    createdAt: new Date("2024-11-28T08:00:00Z"),
    updatedAt: new Date("2024-12-01T09:30:00Z"),
    labels: ["database", "migration"],
    comments: [],
  },
  {
    id: "TICKET-006",
    title: "Fix CSS alignment issue on mobile",
    description:
      "The footer on the mobile version is misaligned. Fix the styling to ensure proper layout.",
    status: "To Do",
    priority: "Medium",
    assignee: null,
    reporter: {
      id: "USER-234",
      name: "David Miller",
      email: "david.miller@example.com",
    },
    createdAt: new Date("2024-11-29T10:15:00Z"),
    updatedAt: new Date("2024-11-29T14:30:00Z"),
    labels: ["bug", "frontend", "CSS"],
    comments: [],
  },
  {
    id: "TICKET-007",
    title: "Add forgot password functionality",
    description:
      "Implement a 'Forgot Password' feature to allow users to reset their passwords.",
    status: "In Progress",
    priority: "High",
    assignee: {
      id: "USER-123",
      name: "John Doe",
      email: "john.doe@example.com",
    },
    reporter: {
      id: "USER-234",
      name: "David Miller",
      email: "david.miller@example.com",
    },
    createdAt: new Date("2024-11-25T11:45:00Z"),
    updatedAt: new Date("2024-11-30T17:15:00Z"),
    labels: ["feature", "authentication"],
    comments: [],
  },
  {
    id: "TICKET-008",
    title: "Write documentation for API endpoints",
    description:
      "Document all the available REST API endpoints with examples and use cases.",
    status: "Open",
    priority: "Low",
    assignee: {
      id: "USER-789",
      name: "Alice Brown",
      email: "alice.brown@example.com",
    },
    reporter: {
      id: "USER-101",
      name: "Sarah Connor",
      email: "sarah.connor@example.com",
    },
    createdAt: new Date("2024-11-10T08:30:00Z"),
    updatedAt: new Date("2024-11-29T14:30:00Z"),
    labels: ["documentation", "API"],
    comments: [],
  },
  {
    id: "TICKET-009",
    title: "Conduct penetration testing",
    description:
      "Test the application for security vulnerabilities and provide a detailed report.",
    status: "To Do",
    priority: "Critical",
    assignee: null,
    reporter: {
      id: "USER-567",
      name: "Michael Scott",
      email: "michael.scott@example.com",
    },
    createdAt: new Date("2024-11-18T14:00:00Z"),
    updatedAt: new Date("2024-11-29T14:30:00Z"),
    labels: ["security", "testing"],
    comments: [],
  },
  {
    id: "TICKET-010",
    title: "Optimize image loading on website",
    description:
      "Reduce image sizes and implement lazy loading for better performance.",
    status: "In Progress",
    priority: "Medium",
    assignee: {
      id: "USER-234",
      name: "David Miller",
      email: "david.miller@example.com",
    },
    reporter: {
      id: "USER-123",
      name: "John Doe",
      email: "john.doe@example.com",
    },
    createdAt: new Date("2024-11-20T09:30:00Z"),
    updatedAt: new Date("2024-11-25T15:45:00Z"),
    labels: ["performance", "frontend"],
    comments: [],
  },
];
