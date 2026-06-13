export default function UserPagination() {
  return (
    <div className="flex justify-between items-center p-6 border-t border-[#F0EAE0]">
      <p className="text-sm text-[#8C706F]">
        Showing 1-10 of 1300 users
      </p>

      <div className="flex gap-2">
        <button className="w-10 h-10 rounded-xl border">
          1
        </button>

        <button className="w-10 h-10 rounded-xl">
          2
        </button>

        <button className="w-10 h-10 rounded-xl">
          3
        </button>
      </div>
    </div>
  );
}