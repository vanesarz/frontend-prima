"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  ClipboardList,
  FileText,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        w-64
        h-screen
        fixed
        top-0
        left-0
        bg-white
        border-r
        border-[#F0EAE0]
        flex
        flex-col
        justify-between
        p-6
      "
    >
      {/* TOP */}
      <div>
        {/* LOGO */}
        <Link href="/">
          <div className="relative w-30 h-12 overflow-hidden">
            <Image
              src="/logo-prima.svg"
              alt="PRIMA Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Link>

        {/* MENU */}
        <nav className="space-y-2 mt-10">
          <MenuItem
            href="/dashboard"
            icon={<LayoutDashboard size={18} />}
            active={pathname === "/dashboard"}
          >
            Dashboard
          </MenuItem>

          <MenuItem
            href="/dashboard/users"
            icon={<Users size={18} />}
            active={pathname.startsWith("/dashboard/users")}
          >
            User Management
          </MenuItem>

          <MenuItem
            href="/dashboard/schedules"
            icon={<CalendarDays size={18} />}
            active={pathname.startsWith("/dashboard/schedules")}
          >
            Practice Schedule
          </MenuItem>

          <MenuItem
            href="/dashboard/appointments"
            icon={<ClipboardList size={18} />}
            active={pathname.startsWith("/dashboard/appointments")}
          >
            Appointments
          </MenuItem>

          <MenuItem
            href="/dashboard/reports"
            icon={<FileText size={18} />}
            active={pathname.startsWith("/dashboard/reports")}
          >
            Reports
          </MenuItem>
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="space-y-2 border-t border-[#F0EAE0] pt-4">
        <MenuItem
          href="/dashboard/help"
          icon={<HelpCircle size={18} />}
          active={pathname.startsWith("/dashboard/help")}
        >
          Help Center
        </MenuItem>

        <MenuItem
          href="/logout"
          icon={<LogOut size={18} />}
          danger
        >
          Sign Out
        </MenuItem>
      </div>
    </aside>
  );
}

type MenuItemProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
  danger?: boolean;
};

function MenuItem({
  children,
  icon,
  href,
  active = false,
  danger = false,
}: MenuItemProps) {
  return (
    <Link href={href}>
      <div
        className={`
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-xl
          transition-all
          cursor-pointer

          ${
            active
              ? "bg-[#79F3EA] text-[#006F69] font-semibold"
              : danger
              ? "text-[#D74343] hover:bg-red-50"
              : "text-[#5B4444] hover:bg-[#FFF3F3]"
          }
        `}
      >
        {icon}

        <span className="text-sm">
          {children}
        </span>
      </div>
    </Link>
  );
}