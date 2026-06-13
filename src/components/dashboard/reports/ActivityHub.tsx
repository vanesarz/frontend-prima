import { activityLogs } from "@/data/reports";

export default function ActivityHub() {
  return (
    <section className="bg-white border border-[#F0EAE0] rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-lg">
          Live Activity Hub
        </h2>

        <button className="text-[#006A65] font-medium">
          View All Logs
        </button>
      </div>

      <div className="space-y-4">
        {activityLogs.map((log) => (
          <div
            key={log.id}
            className="border-b border-[#F5ECE4] pb-4"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">
                  {log.title}
                </h3>

                <p className="text-sm text-[#7D6666]">
                  {log.description}
                </p>
              </div>

              <span className="text-sm text-[#7D6666]">
                {log.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}