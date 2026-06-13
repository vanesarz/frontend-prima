import {
  CheckCircle2,
  Clock3,
  CalendarCheck,
} from "lucide-react";

export default function AppointmentStats() {
  const stats = [
    {
      label: "Pending",
      value: 5,
      icon: Clock3,
      bg: "bg-[#FFF1F1]",
    },
    {
      label: "Confirmed",
      value: 18,
      icon: CalendarCheck,
      bg: "bg-[#E8FFFC]",
    },
    {
      label: "Completed",
      value: 34,
      icon: CheckCircle2,
      bg: "bg-[#EAFBF3]",
    },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              bg-white
              border
              border-[#F0EAE0]
              rounded-3xl
              p-6
            "
          >
            <div
              className={`${item.bg} w-14 h-14 rounded-2xl flex items-center justify-center`}
            >
              <Icon size={24} />
            </div>

            <h3 className="text-3xl font-bold mt-4">
              {item.value}
            </h3>

            <p className="text-[#7D6D6D]">
              {item.label}
            </p>
          </div>
        );
      })}
    </section>
  );
}