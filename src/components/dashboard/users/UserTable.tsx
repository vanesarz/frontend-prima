"use client";

import Image from "next/image";
import {
  Pencil,
  Trash2,
} from "lucide-react";

import { users } from "@/data/users";

export default function UserTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#F0EAE0]">
            <th className="text-left p-5">
              Name
            </th>
            <th className="text-left p-5">
              Email
            </th>
            <th className="text-left p-5">
              Role
            </th>
            <th className="text-left p-5">
              Status
            </th>
            <th className="text-center p-5">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-[#F7EEEE]"
            >
              <td className="p-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />

                  <span className="font-semibold">
                    {user.name}
                  </span>
                </div>
              </td>

              <td className="p-5">
                {user.email}
              </td>

              <td className="p-5">
                {user.role}
              </td>

              <td className="p-5">
                {user.status}
              </td>

              <td className="p-5">
                <div className="flex justify-center gap-2">
                  <button>
                    <Pencil size={18} />
                  </button>

                  <button>
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}