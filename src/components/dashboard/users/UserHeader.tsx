"use client";

import { UserPlus } from "lucide-react";

export default function UserHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-black text-[#251818]">
          User Management
        </h1>

        <p className="mt-2 text-[#8C706F]">
          Manage system access for admins,
          doctors and patients.
        </p>
      </div>

      <div className="relative">
        <button className="flex items-center gap-2 rounded-full bg-[#AE2F34] px-6 py-3 text-white font-semibold shadow-md hover:opacity-90">
          <UserPlus size={18} />
          Add User
        </button>

        {/* nanti dropdown */}
      </div>
    </div>
  );
}