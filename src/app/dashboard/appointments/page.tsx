import {
  Sidebar,
  Topbar,
} from "@/components/dashboard";

import {
  AppointmentHeader,
  AppointmentFilters,
  AppointmentStats,
  AppointmentTable,
} from "@/components/dashboard/appointments";

export default function AppointmentsPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <div className="p-8 space-y-8">
          <AppointmentHeader />

          <AppointmentFilters />

          <AppointmentStats />

          <AppointmentTable />
        </div>
      </div>
    </main>
  );
}