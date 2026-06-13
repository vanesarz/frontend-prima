import { Plus } from "lucide-react";

export default function ScheduleHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div>
        <h1 className="text-5xl font-black text-[#251818]">
          Practice Schedule
        </h1>

        <p className="mt-2 text-[#8C706F]">
          Manage your weekly availability and consultation hours.
        </p>
      </div>

      <button
        className="
          flex
          items-center
          gap-2
          px-6
          py-3
          rounded-full
          bg-[#FF6B6B]
          text-white
          font-bold
          hover:opacity-90
        "
      >
        <Plus size={18} />
        Add Schedule
      </button>
    </div>
  );
}