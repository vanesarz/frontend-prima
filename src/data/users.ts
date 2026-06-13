import { User } from "@/types/user";

export const users: User[] = [
  {
    id: 1,
    name: "Budi Darmawan",
    email: "budi@prima.com",
    role: "Admin",
    status: "Active",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    id: 2,
    name: "Dr. Sarah",
    email: "sarah@prima.com",
    role: "Doctor",
    status: "Active",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    id: 3,
    name: "Rahmat Hidayat",
    email: "rahmat@email.com",
    role: "Patient",
    status: "Inactive",
    avatar: "/avatars/avatar3.jpg",
  },
];