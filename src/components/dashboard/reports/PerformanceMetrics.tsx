import { queueMetrics } from "@/data/reports";

export default function PerformanceMetrics() {
  return (
    <section className="grid grid-cols-12 gap-6">
      <div className="col-span-7 bg-white border border-[#F0EAE0] rounded-3xl p-6">
        <h2 className="font-semibold text-lg mb-6">
          Queue Efficiency
        </h2>

        <div className="space-y-5">
          {queueMetrics.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between mb-2">
                <span>{item.name}</span>

                <span className="text-[#7D6666]">
                  {item.wait}
                </span>
              </div>

              <div className="w-full h-3 rounded-full bg-[#F8F3EE]">
                <div
                  className="h-full rounded-full bg-[#79F3EA]"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-5 rounded-3xl p-6 bg-[#00B179] text-white">
        <h2 className="font-semibold text-lg mb-4">
          AI Assistant Insight
        </h2>

        <p className="leading-relaxed">
          Wait times in the Lab department are 24%
          higher than last Tuesday. Consider
          reassigning one clinical assistant from
          the pharmacy to handle the backlog.
        </p>

        <button className="mt-6 bg-white text-[#00B179] px-5 py-3 rounded-xl font-medium">
          Implement Suggestion
        </button>
      </div>
    </section>
  );
}