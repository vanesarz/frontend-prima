import {
  Sidebar,
  Topbar,
} from "@/components/dashboard";

import {
  UserHeader,
  UserStats,
  UserFilters,
  UserTable,
  UserPagination,
} from "@/components/dashboard/users";

export default function UsersPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <div className="p-8 space-y-8">
          <UserHeader />

          <UserStats />

          <section className="bg-white rounded-3xl border border-[#F0EAE0] overflow-hidden">
            <div className="p-6">
              <UserFilters />
            </div>

            <UserTable />

            <UserPagination />
          </section>
        </div>
      </div>
    </main>
  );
}