export interface TicketsType {
  id?: number;
  title?: string;
  description?: string;
  status?: number;
  priority?: number;
  assignee?: any;
  reporter?: any;
  createdAt?: Date;
  updatedAt?: Date;
  labels?: Array<string>;
}

export const Tickets: TicketsType[] = [
  {
    id: 1,
    title: "Fix login page error",
    description:
      "Users cannot log in due to a server timeout error. Investigate and fix the issue.",
    status: 1,
    priority: 1,
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
  },
  {
    id: 2,
    title: "Add dark mode to settings",
    description: "Implement a dark mode toggle in the user settings page.",
    status: 2,
    priority: 2,
    assignee: null,
    reporter: {
      id: "USER-456",
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    createdAt: new Date("2024-11-29T14:30:00Z"),
    updatedAt: new Date("2024-11-29T14:30:00Z"),
    labels: ["feature", "frontend", "UI/UX"],
  },
  {
    id: 3,
    title: "Optimize database queries",
    description:
      "Certain database queries are slow and causing performance issues. Optimize the query logic and indexes.",
    status: 3,
    priority: 3,
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
  },
  {
    id: 4,
    title: "Update homepage banner",
    description:
      "Design and replace the banner on the homepage for the holiday season.",
    status: 4,
    priority: 4,
    assignee: null,
    reporter: {
      id: "USER-101",
      name: "Sarah Connor",
      email: "sarah.connor@example.com",
    },
    createdAt: new Date("2024-11-22T12:00:00Z"),
    updatedAt: new Date("2024-11-29T14:30:00Z"),
    labels: ["design", "frontend"],
  },
  {
    id: 5,
    title: "Migrate user data to new database",
    description: "Migrate all user records to the new PostgreSQL database.",
    status: 5,
    priority: 1,
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
  },
  {
    id: 6,
    title:
      "Fix CSS alignment issue on mobile The footer on the mobile version is misaligned. Fix the styling to ensure proper layout. The footer on the mobile version is misaligned. Fix the styling to ensure proper layout. The footer on the mobile version is misaligned. Fix the styling to ensure proper layout.",
    description:
      "The footer on the mobile version is misaligned. Fix the styling to ensure proper layout.",
    status: 6,
    priority: 2,
    assignee: null,
    reporter: {
      id: "USER-234",
      name: "David Miller",
      email: "david.miller@example.com",
    },
    createdAt: new Date("2024-11-29T10:15:00Z"),
    updatedAt: new Date("2024-11-29T14:30:00Z"),
    labels: ["bug", "frontend", "CSS"],
  },
  {
    id: 7,
    title: "Add forgot password functionality",
    description:
      "Implement a 'Forgot Password' feature to allow users to reset their passwords.",
    status: 7,
    priority: 3,
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
  },
  {
    id: 8,
    title: "Write documentation for API endpoints",
    description:
      "Document all the available REST API endpoints with examples and use cases.",
    status: 3,
    priority: 4,
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
  },
  {
    id: 9,
    title: "Conduct penetration testing",
    description:
      "Test the application for security vulnerabilities and provide a detailed report.",
    status: 5,
    priority: 3,
    assignee: null,
    reporter: {
      id: "USER-567",
      name: "Michael Scott",
      email: "michael.scott@example.com",
    },
    createdAt: new Date("2024-11-18T14:00:00Z"),
    updatedAt: new Date("2024-11-29T14:30:00Z"),
    labels: ["security", "testing"],
  },
  {
    id: 10,
    title: "Optimize image loading on website",
    description:
      "Reduce image sizes and implement lazy loading for better performance.",
    status: 7,
    priority: 2,
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
  },
];
