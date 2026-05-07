"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Stethoscope,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#F8FAFC] border-r h-screen fixed top-0 left-0 flex flex-col justify-between p-6">
        {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            P
          </div>
          <div>
            <h1 className="font-semibold text-gray-800">PRIMA</h1>
            <p className="text-xs text-gray-400">Clinical Portal</p>
          </div>
        </div>

        {/* MENU */}
        <nav className="space-y-2">
          <MenuItem
            href="/dashboard"
            icon={<LayoutDashboard size={18} />}
            active={pathname === "/dashboard"}
          >Dashboard</MenuItem>
          <MenuItem
            href="/directory"
            icon={<Users size={18} />}
            active={pathname === "/directory"}
          >Directory</MenuItem>
          <MenuItem
            href="/records"
            icon={<FileText size={18} />}
            active={pathname === "/records"}
          >Records</MenuItem>
          <MenuItem
            href="/consultation"
            icon={<Stethoscope size={18} />}
            active={pathname === "/consultation"}
          >Consultation</MenuItem>
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="space-y-2">
          <MenuItem
            href="/settings"
            icon={<Settings size={18} />}
            active={pathname === "/settings"}
          >Settings</MenuItem>
          <MenuItem
            href="/support"
            icon={<HelpCircle size={18} />}
            active={pathname === "/support"}
          >Support</MenuItem>
      </div>
    </aside>
  );
}

function MenuItem({
  children,
  icon,
  active,
  href,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  active?: boolean;
  href: string;
}) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition ${
          active
            ? "bg-blue-50 text-blue-600 font-medium"
            : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        {icon}
        <span>{children}</span>
      </div>
    </Link>
  );
}