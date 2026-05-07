import Sidebar from "@/components/Sidebar";
import { Search } from "lucide-react";

type Doctor = {
  name: string;
  specialty: string;
  location: string;
};

export default function Directory() {
  const doctors: Doctor[] = [
    {
      name: "Dr. Elena Rodriguez",
      specialty: "Dermatology",
      location: "Jakarta",
    },
    {
      name: "Dr. Ahmad Fauzi",
      specialty: "Cardiology",
      location: "Bandung",
    },
  ];

  return (
    <div className="flex bg-[#F1F5F9] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 space-y-6">
        <h2 className="text-2xl font-semibold">Doctor Directory</h2>

        {/* SEARCH */}
        <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
          <Search size={18} className="text-gray-400" />
          <input
            placeholder="Search doctor or specialty..."
            className="outline-none w-full"
          />
        </div>

        {/* LIST */}
        <div className="grid grid-cols-2 gap-4">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm"
            >
              <h3 className="font-medium">{doc.name}</h3>
              <p className="text-sm text-gray-500">
                {doc.specialty}
              </p>
              <p className="text-sm text-gray-400">
                {doc.location}
              </p>

              <button className="mt-3 text-blue-600 text-sm">
                View Profile →
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}