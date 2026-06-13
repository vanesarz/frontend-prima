import { analyticsStats } from "@/data/reports";

export default function AnalyticsOverview() {
  return (
    <section className="grid grid-cols-12 gap-6">
      <div className="col-span-8 bg-white border border-[#F0EAE0] rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-lg">
              Immunization Progress
            </h2>

            <p className="text-sm text-[#7D6666]">
              Coverage trends across priority demographics
            </p>
          </div>
        </div>

        <div className="h-64 flex items-end gap-4 mt-8">
          {[32, 36, 44, 50, 52].map((height) => (
            <div
              key={height}
              className="flex-1 bg-[#FF6B6B] rounded-t-xl"
              style={{ height: `${height * 4}px` }}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 mt-8">
          <div>
            <p className="text-3xl font-bold text-[#006A65]">
              {analyticsStats.coverage}
            </p>

            <p className="text-sm text-[#7D6666]">
              Overall Coverage
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#AE2F34]">
              {analyticsStats.growth}
            </p>

            <p className="text-sm text-[#7D6666]">
              MoM Growth
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-4 bg-white border border-[#F0EAE0] rounded-3xl p-6">
        <h2 className="font-semibold text-lg">
          User Reviews
        </h2>

        <div className="flex flex-col items-center justify-center h-70">
          <div className="w-40 h-40 rounded-full border-16 border-[#79F3EA]" />

          <h3 className="text-4xl font-bold mt-4">
            {analyticsStats.reviewScore}
          </h3>

          <p className="text-[#7D6666] text-sm">
            Average Rating
          </p>
        </div>
      </div>
    </section>
  );
}