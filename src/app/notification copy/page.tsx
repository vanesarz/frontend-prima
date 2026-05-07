import { Sidebar } from "@/components";
import { Heart, Moon, Activity, Footprints } from "lucide-react";

/* TYPES */
type Status = "confirmed" | "pending";
type ReminderColor = "blue" | "orange";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  sub: string;
};

type AppointmentProps = {
  date: string;
  title: string;
  subtitle: string;
  time: string;
  status: Status;
};

type ReminderProps = {
  title: string;
  text: string;
  color: ReminderColor;
};

export default function Notification() {
  return (
    <div className="flex bg-[#F1F5F9] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Patient Overview</h2>
          <div className="flex gap-6 text-gray-500">
            <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Insights
            </span>
            <span>History</span>
            <span>Billing</span>
          </div>
        </div>

        {/* HERO */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-linear-to-r from-blue-700 to-blue-500 text-white p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">
              Good morning, Sarah
            </h3>
            <p className="text-sm opacity-90 mb-5 max-w-md">
              Your health indicators are looking stable today. You have a
              follow-up consultation in 2 days.
            </p>

            <div className="flex gap-3">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium">
                View Plan
              </button>
              <button className="bg-blue-400/70 px-4 py-2 rounded-lg">
                Message Doctor
              </button>
            </div>
          </div>

          {/* SCORE */}
          <div className="bg-[#6EE7B7] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm">HEALTH SCORE</p>
              <h3 className="text-3xl font-bold mt-1">92/100</h3>
            </div>
            <div className="h-2 bg-green-200 rounded-full">
              <div className="h-2 bg-green-700 w-[92%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* TRACKER */}
        <div>
          <h3 className="mb-4 font-semibold">Health Tracker</h3>

          <div className="grid grid-cols-4 gap-4">
            <Card
              icon={<Footprints size={18} />}
              title="Steps"
              value="8,432"
              sub="Goal: 10,000"
            />
            <Card
              icon={<Heart size={18} />}
              title="Heart Rate"
              value="72 bpm"
              sub="Resting average"
            />
            <Card
              icon={<Moon size={18} />}
              title="Sleep"
              value="7h 45m"
              sub="Deep sleep: 2h 10m"
            />
            <Card
              icon={<Activity size={18} />}
              title="Pressure"
              value="118/76"
              sub="Measured 2h ago"
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-2 gap-6">
          {/* APPOINTMENTS */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Upcoming Appointments</h3>
              <span className="text-blue-500 text-sm">See all</span>
            </div>

            <div className="space-y-5">
              <Appointment
                date="12"
                title="Dr. Elena Rodriguez"
                subtitle="Dermatology • Video Consultation"
                time="09:30 AM"
                status="confirmed"
              />

              <Appointment
                date="18"
                title="General Screening"
                subtitle="Atelier Health Main Clinic"
                time="14:15 PM"
                status="pending"
              />
            </div>
          </div>

          {/* REMINDERS */}
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-semibold">Health Reminders</h3>

            <Reminder
              color="blue"
              title="Medication Reminder"
              text="Take 1x Lisinopril (10mg) with your breakfast."
            />

            <Reminder
              color="orange"
              title="Annual Screening Due"
              text="Schedule your annual check-up."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

/* COMPONENTS */

function Card({ icon, title, value, sub }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-2 text-gray-500">
        {icon}
        <span>{title}</span>
      </div>
      <h4 className="text-lg font-semibold">{value}</h4>
      <p className="text-xs text-gray-400">{sub}</p>
    </div>
  );
}

function Appointment({
  date,
  title,
  subtitle,
  time,
  status,
}: AppointmentProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex flex-col items-center justify-center text-sm font-medium">
          OCT
          <span className="text-lg">{date}</span>
        </div>

        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm">{time}</p>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            status === "confirmed"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

function Reminder({ title, text, color }: ReminderProps) {
  return (
    <div
      className={`p-4 rounded-xl border-l-4 ${
        color === "blue"
          ? "border-blue-500 bg-blue-50"
          : "border-orange-500 bg-orange-50"
      }`}
    >
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}