import { stats } from "@/data/dashboard";

export default function StatsSection() {
  return (
    <section
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-6
      "
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-[#F0EAE0]
              shadow-[0_4px_20px_rgba(255,107,107,0.08)]
              transition-all
              hover:-translate-y-1
              hover:shadow-[0_8px_24px_rgba(255,107,107,0.12)]
            "
          >
            {/* TOP */}
            <div className="flex items-start justify-between">
              <div
                className={`
                  w-12
                  h-12
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  shrink-0
                  ${stat.iconBg}
                `}
              >
                <Icon
                  size={20}
                  strokeWidth={2.2}
                />
              </div>

              <span
                className="
                  text-xs
                  font-bold
                  tracking-wide
                  text-[#006C48]
                "
              >
                {stat.growth}
              </span>
            </div>

            {/* CONTENT */}
            <div className="mt-6">
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.12em]
                  font-semibold
                  text-[#8C706F]
                "
              >
                {stat.title}
              </p>

              <h3
                className="
                  mt-2
                  text-[38px]
                  leading-none
                  font-black
                  text-[#251818]
                "
              >
                {stat.value}
              </h3>
            </div>
          </div>
        );
      })}
    </section>
  );
}