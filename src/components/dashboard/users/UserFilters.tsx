"use client";

import {
  Search,
  Filter,
} from "lucide-react";

export default function UserFilters() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between">
      <div className="relative max-w-md w-full">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          placeholder="Search user..."
          className="w-full rounded-xl border border-[#E5D8D8] bg-white pl-11 pr-4 py-3 outline-none"
        />
      </div>

      <div className="flex gap-3">
        <select className="rounded-xl border border-[#E5D8D8] px-4 py-3 bg-white">
          <option>All Roles</option>
        </select>

        <select className="rounded-xl border border-[#E5D8D8] px-4 py-3 bg-white">
          <option>All Status</option>
        </select>

        <button className="w-12 h-12 rounded-xl bg-[#F6F1F1] flex items-center justify-center">
          <Filter size={18} />
        </button>
      </div>
    </div>
  );
}