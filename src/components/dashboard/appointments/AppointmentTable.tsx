import {
  FileText,
  CalendarClock,
  CheckCircle2,
} from "lucide-react";

import { appointments } from "@/data/appointments";

export default function AppointmentTable() {
  return (
    <section
      className="
        bg-white
        rounded-3xl
        border
        border-[#F0EAE0]
        overflow-hidden
      "
    >
      <table className="w-full">
        <thead className="bg-[#FFF5F5]">
          <tr>
            <th className="text-left p-4">Patient</th>
            <th className="text-left p-4">Date</th>
            <th className="text-left p-4">Time</th>
            <th className="text-left p-4">Status</th>
            <th className="text-right p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr
              key={appointment.id}
              className="border-t border-[#F0EAE0]"
            >
              <td className="p-4">
                <div>
                  <p className="font-semibold">
                    {appointment.patientName}
                  </p>

                  <p className="text-sm text-[#7D6D6D]">
                    #{appointment.patientCode}
                  </p>
                </div>
              </td>

              <td className="p-4">
                {appointment.date}
              </td>

              <td className="p-4">
                {appointment.time}
              </td>

              <td className="p-4">
                <StatusBadge
                  status={appointment.status}
                />
              </td>

              <td className="p-4">
                <div className="flex justify-end gap-2">
                  <button className="p-2 rounded-xl hover:bg-[#FFF3F3]">
                    <FileText size={18} />
                  </button>

                  <button className="p-2 rounded-xl hover:bg-[#FFF3F3]">
                    <CalendarClock size={18} />
                  </button>

                  <button className="p-2 rounded-xl hover:bg-[#EAFBF3]">
                    <CheckCircle2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

type StatusProps = {
  status: "confirmed" | "pending" | "completed";
};

function StatusBadge({ status }: StatusProps) {
  const config = {
    confirmed: {
      label: "Confirmed",
      className:
        "bg-[#DDFCF5] text-[#006F69]",
    },
    pending: {
      label: "Pending",
      className:
        "bg-[#FFF4D9] text-[#A56A00]",
    },
    completed: {
      label: "Completed",
      className:
        "bg-[#EAFBF3] text-[#0F8F4D]",
    },
  };

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        ${config[status].className}
      `}
    >
      {config[status].label}
    </span>
  );
}