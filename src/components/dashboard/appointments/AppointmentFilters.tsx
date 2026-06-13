import { CalendarDays, Filter } from "lucide-react";

export default function AppointmentFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="relative">
        <CalendarDays
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#AE2F34]"
        />

        <input
          type="date"
          className="
            pl-10
            pr-4
            py-2
            rounded-xl
            border
            border-[#E5DCDC]
            outline-none
          "
        />
      </div>

      <div className="relative">
        <Filter
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#006F69]"
        />

        <select
          className="
            pl-10
            pr-4
            py-2
            rounded-xl
            border
            border-[#E5DCDC]
            outline-none
          "
        >
          <option>All Status</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>
    </div>
  );
}