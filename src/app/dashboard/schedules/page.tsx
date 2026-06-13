import {
  Sidebar,
  Topbar,
} from "@/components/dashboard";

import {
  ScheduleHeader,
  WeeklySchedule,
  ScheduleStats,
  ScheduleCard,
} from "@/components/dashboard/schedules";

import { schedules } from "@/data/schedule";

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <div className="p-8 space-y-8">
          <ScheduleHeader />

          <ScheduleStats />

          <WeeklySchedule />

          <section className="bg-white rounded-3xl border border-[#F0EAE0] p-6">
            <h2 className="text-xl font-bold text-[#2B2B2B] mb-6">
              Upcoming Practice Schedule
            </h2>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {schedules.map((schedule) => (
                <ScheduleCard
                  key={schedule.id}
                  title={schedule.title}
                  time={schedule.time}
                  clinic={schedule.clinic}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}