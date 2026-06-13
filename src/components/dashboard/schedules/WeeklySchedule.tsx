import ScheduleCard from "./ScheduleCard";

const week = [
  {
    day: "Monday",
    schedules: [
      {
        title: "Morning",
        time: "08:00 - 12:00",
        clinic: "General Clinic",
      },
    ],
  },
  {
    day: "Tuesday",
    schedules: [
      {
        title: "Morning",
        time: "08:00 - 12:00",
        clinic: "General Clinic",
      },
      {
        title: "Evening",
        time: "16:00 - 20:00",
        clinic: "Online Consultation",
      },
    ],
  },
  {
    day: "Wednesday",
    schedules: [],
  },
  {
    day: "Thursday",
    schedules: [
      {
        title: "Morning",
        time: "08:00 - 12:00",
        clinic: "General Clinic",
      },
    ],
  },
  {
    day: "Friday",
    schedules: [
      {
        title: "Night",
        time: "19:00 - 21:00",
        clinic: "Emergency Call",
      },
    ],
  },
];

export default function WeeklySchedule() {
  return (
    <section className="grid lg:grid-cols-5 gap-6">
      {week.map((day) => (
        <div key={day.day}>
          <h3
            className="
              font-bold
              text-center
              mb-4
              text-[#251818]
            "
          >
            {day.day}
          </h3>

          <div className="space-y-4">
            {day.schedules.length > 0 ? (
              day.schedules.map((schedule) => (
                <ScheduleCard
                  key={`${day.day}-${schedule.time}`}
                  {...schedule}
                />
              ))
            ) : (
              <div
                className="
                  border-2
                  border-dashed
                  border-[#E5DCDC]
                  rounded-3xl
                  p-8
                  text-center
                  text-[#A08C8B]
                "
              >
                No Schedule
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}