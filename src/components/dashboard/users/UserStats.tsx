import {
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";

export default function UserStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Total Admin"
        value="12"
        icon={
          <Shield
            size={24}
            className="text-[#006A65]"
          />
        }
        bg="bg-[#79F3EA]"
      />

      <StatCard
        title="Doctors"
        value="48"
        icon={
          <Stethoscope
            size={24}
            className="text-[#006C48]"
          />
        }
        bg="bg-[#D9FBE9]"
      />

      <StatCard
        title="Patients"
        value="1,240"
        icon={
          <Users
            size={24}
            className="text-white"
          />
        }
        bg="bg-[#FF6B6B]"
      />
    </section>
  );
}

type Props = {
  title: string;
  value: string;
  icon: React.ReactNode;
  bg: string;
};

function StatCard({
  title,
  value,
  icon,
  bg,
}: Props) {
  return (
    <div className="bg-white border border-[#F0EAE0] rounded-3xl p-6 flex items-center gap-5">
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center ${bg}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-[#8C706F]">
          {title}
        </p>

        <h3 className="text-3xl font-black text-[#251818]">
          {value}
        </h3>
      </div>
    </div>
  );
}