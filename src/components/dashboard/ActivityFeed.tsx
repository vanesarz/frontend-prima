import Image from "next/image";
import { activities } from "@/data/dashboard";

export default function ActivityFeed() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-[#F0EAE0]
        shadow-[0_4px_20px_rgba(255,107,107,0.08)]
        p-8
        h-full
        flex
        flex-col
        hover:-translate-y-1
        hover:shadow-[0_8px_24px_rgba(255,107,107,0.12)]
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h3
          className="
            text-[28px]
            font-black
            text-[#251818]
          "
        >
          Recent Activity
        </h3>

        <button
          className="
            text-sm
            font-semibold
            text-[#D74343]
            hover:underline
          "
        >
          View All
        </button>
      </div>

      {/* ACTIVITIES */}
      <div className="flex-1 space-y-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="
              flex
              gap-4
              group
            "
          >
            {/* AVATAR */}
            <div className="relative shrink-0">
              <Image
                src={activity.image}
                alt={activity.name}
                width={48}
                height={48}
                className="
                  rounded-full
                  border
                  border-[#F0EAE0]
                  object-cover
                  group-hover:border-[#79F3EA]
                  transition-all
                "
              />

              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  w-4
                  h-4
                  rounded-full
                  bg-[#79F3EA]
                  border-2
                  border-white
                "
              />
            </div>

            {/* CONTENT */}
            <div>
              <p
                className="
                  text-sm
                  text-[#251818]
                  leading-relaxed
                "
              >
                <span className="font-bold">
                  {activity.name}
                </span>{" "}
                {activity.action}
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#8C706F]
                "
              >
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ADMIN TIP */}
      <div
        className="
          mt-8
          border-t
          border-[#F0EAE0]
          pt-6
        "
      >
        <div
          className="
            flex
            gap-4
            items-start
            bg-[#FFF4F4]
            rounded-2xl
            p-4
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-[#79F3EA]
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            ✨
          </div>

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#006F69]
              "
            >
              Admin Tip
            </p>

            <p
              className="
                mt-1
                text-sm
                text-[#584140]
              "
            >
              Review the top specialization reports to
              optimize clinic staffing for next week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}