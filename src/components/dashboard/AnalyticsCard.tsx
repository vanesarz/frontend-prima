export default function AnalyticsCard() {
  const bars = [
    "60%",
    "85%",
    "45%",
    "70%",
    "80%",
    "95%",
    "30%",
  ];

  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-8
        border
        border-[#F0EAE0]
        shadow-[0_4px_20px_rgba(255,107,107,0.08)]
        hover:-translate-y-1
        hover:shadow-[0_8px_24px_rgba(255,107,107,0.12)]
      "
    >
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <h3
            className="
              text-[28px]
              font-black
              text-[#251818]
            "
          >
            System Performance
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-[#8C706F]
            "
          >
            Patient acquisition vs Retention (Last 30 days)
          </p>
        </div>

        <select
          className="
            bg-[#FFF4F4]
            rounded-full
            px-4
            py-2
            text-sm
            font-medium
            text-[#584140]
            outline-none
          "
        >
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>

      {/* CHART */}
      <div
        className="
          h-72
          mt-8
          rounded-[20px]
          bg-[#FFF4F4]
          px-6
          pb-5
          flex
          items-end
          gap-4
          overflow-hidden
          relative
        "
      >
        {bars.map((height, index) => (
          <div
            key={index}
            className={`
              flex-1
              rounded-t-xl
              transition-all

              ${
                index % 2 === 0
                  ? "bg-[#FFB3B0]"
                  : "bg-[#79F3EA]"
              }
            `}
            style={{
              height,
            }}
          />
        ))}

        {/* watermark */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            pointer-events-none
          "
        >
          <span
            className="
              text-5xl
              font-black
              text-[#D9C7C6]
              opacity-20
            "
          >
          </span>
        </div>
      </div>

      {/* LEGEND */}
      <div className="flex gap-6 mt-5">
        <div className="flex items-center gap-2">
          <div
            className="
              w-3
              h-3
              rounded-full
              bg-[#FFB3B0]
            "
          />

          <span
            className="
              text-sm
              text-[#584140]
            "
          >
            New Patients
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="
              w-3
              h-3
              rounded-full
              bg-[#79F3EA]
            "
          />

          <span
            className="
              text-sm
              text-[#584140]
            "
          >
            Returning Patients
          </span>
        </div>
      </div>
    </div>
  );
}