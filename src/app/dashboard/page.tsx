import {
  Sidebar,
  Topbar,
  StatsSection,
  AnalyticsCard,
  ActivityFeed,
  SpecializationCard,
  AlertCard,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <div className="p-8">
          <StatsSection />

          <div className="grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-8 space-y-6">
              <AnalyticsCard />

              <div className="grid grid-cols-2 gap-6">
                <SpecializationCard />
                <AlertCard />
              </div>
            </div>

            <div className="col-span-4">
              <ActivityFeed />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}