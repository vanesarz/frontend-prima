import {
  Pencil,
  Trash2,
} from "lucide-react";

type ScheduleCardProps = {
  title: string;
  time: string;
  clinic: string;
};

export default function ScheduleCard({
  title,
  time,
  clinic,
}: ScheduleCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-[#F0EAE0]
        p-4
      "
    >
      <div className="flex justify-between">
        <span
          className="
            px-3
            py-1
            rounded-full
            text-xs
            font-bold
            bg-[#E9FFFB]
            text-[#006C48]
          "
        >
          {title}
        </span>

        <div className="flex gap-2">
          <button>
            <Pencil size={16} />
          </button>

          <button>
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <h4 className="mt-4 font-bold text-[#251818]">
        {time}
      </h4>

      <p className="text-sm text-[#8C706F] mt-1">
        {clinic}
      </p>
    </div>
  );
}