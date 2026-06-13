// src/components/dashboard/Topbar.tsx

import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  return (
    <header
      className="
        h-20
        bg-[#FFFBF5]
        border-b
        border-[#F0EAE0]
        flex
        items-center
        justify-between
        px-8
        sticky
        top-0
        z-30
      "
    >
      {/* LEFT */}
      <div>
        <h2
          className="
            text-[32px]
            font-black
            text-[#251818]
            leading-none
          "
        >
          Overview
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* SEARCH */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-3
            bg-white
            border
            border-[#F0EAE0]
            rounded-full
            px-4
            py-2
            shadow-sm
          "
        >
          <Search
            size={18}
            className="text-[#8C706F]"
          />

          <input
            type="text"
            placeholder="Search data..."
            className="
              bg-transparent
              outline-none
              text-sm
              text-[#251818]
              w-52
              placeholder:text-[#8C706F]
            "
          />
        </div>

        {/* NOTIFICATION */}
        <button
          className="
            relative
            w-11
            h-11
            rounded-full
            hover:bg-[#FFF0EF]
            transition
            flex
            items-center
            justify-center
          "
        >
          <Bell
            size={22}
            className="text-[#584140]"
          />

          <span
            className="
              absolute
              top-2.5
              right-2.5
              w-2
              h-2
              rounded-full
              bg-[#FF6B6B]
            "
          />
        </button>

        {/* PROFILE */}
        <div
          className="
            flex
            items-center
            gap-3
            cursor-pointer
          "
        >
          <div
            className="
              w-11
              h-11
              rounded-full
              overflow-hidden
              border-2
              border-[#FF6B6B]
            "
          >
            <Image
              src="/images/avatar.png"
              alt="Admin"
              width={44}
              height={44}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hidden lg:block">
            <p
              className="
                text-sm
                font-bold
                text-[#251818]
              "
            >
              Admin
            </p>

            <p
              className="
                text-xs
                text-[#8C706F]
              "
            >
              System Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}