import {
  Clock3,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";

export default function ScheduleStats() {
  const stats = [
    {
      label: "Practice Hours",
      value: "32h",
      icon: Clock3,
      bg: "bg-[#E9FFFB]",
      color: "text-[#006C48]",
    },
    {
      label: "Available Slots",
      value: "12",
      icon: CalendarCheck,
      bg: "bg-[#FFF4F4]",
      color: "text-[#D74343]",
    },
    {
      label: "Occupancy",
      value: "94%",
      icon: TrendingUp,
      bg: "bg-[#FFF8E8]",
      color: "text-[#D9A000]",
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
              rounded-3xl
              p-6
              border
              border-[#F0EAE0]
            "
          >
            <div className="flex items-center gap-4">
              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  ${item.bg}
                `}
              >
                <Icon
                  size={24}
                  className={item.color}
                />
              </div>

              <div>
                <p className="text-sm text-[#8C706F]">
                  {item.label}
                </p>

                <h3 className="text-3xl font-black text-[#251818]">
                  {item.value}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}