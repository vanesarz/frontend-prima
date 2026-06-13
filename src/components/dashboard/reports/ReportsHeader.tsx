export default function ReportsHeader() {
  return (
    <section className="flex items-end justify-between">
      <div>
        <h1 className="text-3xl font-bold text-[#2E1F1F]">
          Analytics Hub
        </h1>

        <p className="text-[#7D6666] mt-2">
          Real-time performance tracking and system health insights.
        </p>
      </div>

      <div className="px-4 py-2 rounded-xl border border-[#F0EAE0] bg-white">
        <span className="text-sm text-[#7D6666]">
          Jan 1 - Mar 31, 2024
        </span>
      </div>
    </section>
  );
}