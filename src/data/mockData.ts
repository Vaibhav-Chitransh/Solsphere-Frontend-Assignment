import type { Ticket, TicketPriority, TicketStatus } from "@/types/ticket.ts";

export const mockTickets: Ticket[] = [
  {
    id: "TKT-1001",
    title: "Login failure on Safari for SSO users",
    customer: "Acme Corp",
    customerEmail: "support@acmecorp.com",
    priority: "High",
    status: "Open",
    createdAt: "2025-05-01T10:15:00Z",
    updatedAt: "2025-05-01T14:30:00Z",
    description:
      "Users experiencing redirect loop during SSO login on Safari browsers. Happens only with enterprise accounts.",
    category: "Authentication",
  },
  {
    id: "TKT-1002",
    title: "Dashboard data not refreshing",
    customer: "TechInnovate LLC",
    customerEmail: "help@techinnovate.com",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2025-04-29T08:22:00Z",
    updatedAt: "2025-05-01T09:15:00Z",
    description:
      "Analytics dashboard data is stale and not updating with new information despite refreshing the page.",
    category: "Dashboard",
  },
  {
    id: "TKT-1003",
    title: "Email notifications not sent",
    customer: "Bright Solutions",
    customerEmail: "contact@brightsol.com",
    priority: "High",
    status: "Open",
    createdAt: "2025-05-03T12:10:00Z",
    updatedAt: "2025-05-03T12:15:00Z",
    description:
      "System fails to send notification emails after scheduled jobs run.",
    category: "Notifications",
  },
  {
    id: "TKT-1004",
    title: "Payment processing timeout",
    customer: "RetailVerse",
    customerEmail: "billing@retailverse.com",
    priority: "Urgent",
    status: "In Progress",
    createdAt: "2025-05-02T15:30:00Z",
    updatedAt: "2025-05-03T08:00:00Z",
    description:
      "Multiple customers report failed payments due to request timeout errors.",
    category: "Payments",
  },
  {
    id: "TKT-1005",
    title: "Broken image links on homepage",
    customer: "Visionary Designs",
    customerEmail: "web@visionary.com",
    priority: "Low",
    status: "Closed",
    createdAt: "2025-04-28T09:00:00Z",
    updatedAt: "2025-04-30T10:45:00Z",
    description:
      "Images on the homepage not loading due to broken URLs after recent deployment.",
    category: "Frontend",
  },
  {
    id: "TKT-1006",
    title: "Mobile app crash on startup",
    customer: "GoRide",
    customerEmail: "support@goride.com",
    priority: "Urgent" as TicketPriority,
    status: "Resolved" as TicketStatus,
    createdAt: "2025-04-30T11:25:00Z",
    updatedAt: "2025-05-01T17:00:00Z",
    description:
      "Android users report app crashing immediately on startup after update.",
    category: "Mobile",
  },
  {
    id: "TKT-1007",
    title: "User profile update fails",
    customer: "DataFlex",
    customerEmail: "admin@dataflex.io",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-05-02T13:45:00Z",
    updatedAt: "2025-05-02T13:45:00Z",
    description: "User profile changes are not saved and revert on refresh.",
    category: "User Management",
  },
  {
    id: "TKT-1008",
    title: "PDF export generates blank pages",
    customer: "InsightX",
    customerEmail: "support@insightx.ai",
    priority: "Low",
    status: "In Progress",
    createdAt: "2025-05-01T10:00:00Z",
    updatedAt: "2025-05-03T09:20:00Z",
    description:
      "Reports exported to PDF are mostly blank with missing data tables.",
    category: "Export",
  },
  {
    id: "TKT-1009",
    title: "Search functionality returns no results",
    customer: "CloudNetics",
    customerEmail: "team@cloudnetics.com",
    priority: "Medium",
    status: "Resolved",
    createdAt: "2025-04-27T16:00:00Z",
    updatedAt: "2025-04-28T10:10:00Z",
    description: "Search bar yields no results even for known existing items.",
    category: "Search",
  },
  {
    id: "TKT-1010",
    title: "Language selector not switching content",
    customer: "GlobaReach",
    customerEmail: "info@globareach.org",
    priority: "Low",
    status: "Closed",
    createdAt: "2025-04-25T08:10:00Z",
    updatedAt: "2025-04-26T14:00:00Z",
    description:
      "Switching languages in the UI does not reload translated content.",
    category: "Localization",
  },
  {
    id: "TKT-1011",
    title: "Slow loading times on reports page",
    customer: "EcoAnalytics",
    customerEmail: "reports@ecoanalytics.com",
    priority: "High",
    status: "In Progress",
    createdAt: "2025-05-03T10:45:00Z",
    updatedAt: "2025-05-04T11:30:00Z",
    description:
      "Report generation takes over 20 seconds, impacting user experience.",
    category: "Performance",
  },
  {
    id: "TKT-1012",
    title: "Dark mode theme missing",
    customer: "Creative Hive",
    customerEmail: "support@creativehive.co",
    priority: "Low",
    status: "Open",
    createdAt: "2025-05-03T18:20:00Z",
    updatedAt: "2025-05-03T18:25:00Z",
    description: "Dark mode option removed after latest update.",
    category: "UI",
  },
  {
    id: "TKT-1013",
    title: "Two-factor authentication not triggering SMS",
    customer: "SecureVault",
    customerEmail: "auth@securevault.io",
    priority: "Urgent",
    status: "In Progress",
    createdAt: "2025-05-01T07:45:00Z",
    updatedAt: "2025-05-01T08:30:00Z",
    description:
      "Users not receiving SMS code for 2FA, blocking access to admin panel.",
    category: "Security",
  },
  {
    id: "TKT-1014",
    title: "Data sync delay between mobile and web",
    customer: "SyncroSoft",
    customerEmail: "dev@syncrosoft.com",
    priority: "Medium",
    status: "Resolved",
    createdAt: "2025-04-30T10:50:00Z",
    updatedAt: "2025-05-02T12:00:00Z",
    description:
      "Data updates on mobile take several minutes to reflect on the web app.",
    category: "Synchronization",
  },
  {
    id: "TKT-1015",
    title: "Auto-logout happening too frequently",
    customer: "LawTrack",
    customerEmail: "compliance@lawtrack.org",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-05-04T14:40:00Z",
    updatedAt: "2025-05-04T15:00:00Z",
    description:
      "Sessions expire within 5 minutes of inactivity instead of configured 30 minutes.",
    category: "Session",
  },
  {
    id: "TKT-1016",
    title: "File upload limit too restrictive",
    customer: "MediaWorks",
    customerEmail: "upload@mediaworks.tv",
    priority: "Low",
    status: "Closed",
    createdAt: "2025-04-26T13:00:00Z",
    updatedAt: "2025-04-27T11:00:00Z",
    description: "Upload limit of 10MB is too small for most media files.",
    category: "Storage",
  },
  {
    id: "TKT-1017",
    title: "Incorrect currency conversion on checkout",
    customer: "GlobalMart",
    customerEmail: "support@globalmart.com",
    priority: "High",
    status: "In Progress",
    createdAt: "2025-05-03T11:10:00Z",
    updatedAt: "2025-05-05T08:00:00Z",
    description:
      "Final price displayed in EUR does not match current exchange rate.",
    category: "E-Commerce",
  },
  {
    id: "TKT-1018",
    title: "Custom roles not applied correctly",
    customer: "TaskBridge",
    customerEmail: "admin@taskbridge.com",
    priority: "Medium",
    status: "Resolved",
    createdAt: "2025-05-01T09:30:00Z",
    updatedAt: "2025-05-03T10:00:00Z",
    description:
      "Permissions not updated after editing user roles in admin panel.",
    category: "Authorization",
  },
  {
    id: "TKT-1019",
    title: "Live chat widget not appearing",
    customer: "QuickAssist",
    customerEmail: "chat@quickassist.co",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-05-05T07:00:00Z",
    updatedAt: "2025-05-05T07:10:00Z",
    description: "Live chat icon is missing from help center on some browsers.",
    category: "Support",
  },
  {
    id: "TKT-1020",
    title: "Admin panel graphs not rendering",
    customer: "FinanceIQ",
    customerEmail: "tools@financeiq.com",
    priority: "High",
    status: "In Progress",
    createdAt: "2025-05-04T16:30:00Z",
    updatedAt: "2025-05-05T09:45:00Z",
    description:
      "Graphs in admin dashboard show blank due to charting library error.",
    category: "Visualization",
  },
  {
    id: "TKT-1021",
    title: "Unexpected logout after password reset",
    customer: "HealthNet",
    customerEmail: "it@healthnet.org",
    priority: "High",
    status: "Resolved",
    createdAt: "2025-04-30T14:00:00Z",
    updatedAt: "2025-05-01T12:00:00Z",
    description:
      "Users are logged out from all sessions immediately after password reset.",
    category: "Authentication",
  },
];

export function getTickets(): Ticket[] {
  return mockTickets;
}

export function getTicketById(id: string): Ticket | undefined {
  return mockTickets.find((ticket) => ticket.id === id);
}

export function updateTicketStatus(
  id: string,
  newStatus: TicketStatus
): Ticket | undefined {
  const ticket = mockTickets.find((ticket) => ticket.id === id);
  if (ticket) {
    ticket.status = newStatus;
    ticket.updatedAt = new Date().toISOString();
  }
  return ticket;
}

export function updateTicketPriority(
  id: string,
  newPriority: TicketPriority
): Ticket | undefined {
  const ticket = mockTickets.find((ticket) => ticket.id === id);
  if (ticket) {
    ticket.priority = newPriority;
    ticket.updatedAt = new Date().toISOString();
  }
  return ticket;
}
