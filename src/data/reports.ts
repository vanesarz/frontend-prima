export type ActivityLog = {
  id: number;
  title: string;
  description: string;
  time: string;
  type: "success" | "warning" | "review";
};

export const analyticsStats = {
  coverage: "88.4%",
  growth: "+12%",
  reviewScore: "4.8",
};

export const queueMetrics = [
  {
    name: "General Consultation",
    wait: "12 min",
    progress: 45,
  },
  {
    name: "Emergency Care",
    wait: "4 min",
    progress: 15,
  },
  {
    name: "Specialized Lab Tests",
    wait: "32 min",
    progress: 85,
  },
  {
    name: "Pediatrics",
    wait: "18 min",
    progress: 60,
  },
];

export const activityLogs: ActivityLog[] = [
  {
    id: 1,
    title: "Immunization Batch #4421 Processed",
    description: "242 children vaccinated in Sector B",
    time: "2m ago",
    type: "success",
  },
  {
    id: 2,
    title: "High Demand: Pediatric Clinic",
    description: "Queue length exceeding target (20+ patients)",
    time: "15m ago",
    type: "warning",
  },
  {
    id: 3,
    title: "New 5-Star Review",
    description:
      "The check-in process was incredibly smooth and painless.",
    time: "1h ago",
    type: "review",
  },
];