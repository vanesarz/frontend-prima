"use client";

const specializations = [
  {
    name: "General Medicine",
    value: 42,
    color: "bg-[#FF6B6B]",
  },
  {
    name: "Pediatrics",
    value: 28,
    color: "bg-[#006A65]",
  },
  {
    name: "Mental Health",
    value: 15,
    color: "bg-[#00B179]",
  },
];

export default function SpecializationCard() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        border
        border-[#F0EAE0]
        shadow-[0_4px_20px_rgba(255,107,107,0.08)]
        hover:-translate-y-1
        hover:shadow-[0_8px_24px_rgba(255,107,107,0.12)]
      "
    >
      <h4
        className="
          text-[18px]
          font-bold
          text-[#251818]
          mb-6
        "
      >
        Specialization Distribution
      </h4>

      <div className="space-y-5">
        {specializations.map((item) => (
          <div key={item.name}>
            {/* LABEL */}
            <div
              className="
                flex
                justify-between
                items-center
                mb-2
              "
            >
              <span
                className="
                  text-sm
                  font-medium
                  text-[#251818]
                "
              >
                {item.name}
              </span>

              <span
                className="
                  text-xs
                  font-semibold
                  text-[#584140]
                "
              >
                {item.value}%
              </span>
            </div>

            {/* PROGRESS */}
            <div
              className="
                w-full
                h-3
                bg-[#F5EDED]
                rounded-full
                overflow-hidden
              "
            >
              <div
                className={`
                  h-full
                  rounded-full
                  ${item.color}
                `}
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}