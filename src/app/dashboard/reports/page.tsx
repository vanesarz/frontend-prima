import {
  Sidebar,
  Topbar,
} from "@/components/dashboard";

import {
  ReportsHeader,
  AnalyticsOverview,
  PerformanceMetrics,
  ActivityHub,
} from "@/components/dashboard/reports";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <div className="p-8 space-y-8">
          <ReportsHeader />

          <AnalyticsOverview />

          <PerformanceMetrics />

          <ActivityHub />
        </div>
      </div>
    </main>
  );
}