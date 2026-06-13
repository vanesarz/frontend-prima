import {
  Activity,
} from "@/types/dashboard";

import {
  Stethoscope,
  Users,
  CalendarDays,
  Pill,
  FolderOpen,
} from "lucide-react";

export const stats = [
  {
    title: "TOTAL DOCTORS",
    value: "1,284",
    growth: "+12%",
    icon: Stethoscope,
    iconBg: "bg-[#79F3EA] text-[#006F69]",
  },
  {
    title: "TOTAL PATIENTS",
    value: "42,890",
    growth: "+8%",
    icon: Users,
    iconBg: "bg-[#FFDAD8] text-[#6D0010]",
  },
  {
    title: "TOTAL BOOKINGS",
    value: "5,612",
    growth: "+24%",
    icon: CalendarDays,
    iconBg: "bg-[#72FBBC] text-[#003B26]",
  },
  {
    title: "PRESCRIPTIONS",
    value: "8,920",
    growth: "+5%",
    icon: Pill,
    iconBg: "bg-[#7CF6EC] text-[#00201E]",
  },
  {
    title: "HEALTH RECORDS",
    value: "125K",
    growth: "+15%",
    icon: FolderOpen,
    iconBg: "bg-[#FFB3B0] text-[#6D0010]",
  },
];

export const activities: Activity[] = [
  {
    id: 1,
    name: "Alex Rivera",
    action:
      "booked a consultation with Dr. Sarah Smith.",
    time: "2 minutes ago",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 2,
    name: "Maya Chen",
    action:
      "registered as a new patient.",
    time: "15 minutes ago",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 3,
    name: "Dr. Elena Ross",
    action:
      "uploaded a new lab report.",
    time: "1 hour ago",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    id: 4,
    name: "Liam Foster",
    action:
      "confirmed prescription renewal.",
    time: "3 hours ago",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];