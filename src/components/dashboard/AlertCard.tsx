"use client";

export default function AlertCard() {
  return (
    <div
      className="
        bg-[#FF6B6B]
        rounded-3xl
        p-6
        text-white
        flex
        flex-col
        justify-between
        hover:-translate-y-1
        hover:shadow-[0_8px_24px_rgba(255,107,107,0.12)]
      "
    >
      <div>
        <h3
          className="
            text-2xl
            font-black
          "
        >
          System Alert
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-white/90
          "
        >
          Server load is slightly higher than usual
          (72%). Optimal performance is maintained.
        </p>
      </div>

      <button
        className="
          mt-8
          h-12
          rounded-full
          bg-white/20
          hover:bg-white/30
          transition
          font-semibold
          backdrop-blur-sm
        "
      >
        Run Diagnostics
      </button>
    </div>
  );
}