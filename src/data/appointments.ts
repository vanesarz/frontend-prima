export type AppointmentStatus =
  | "confirmed"
  | "pending"
  | "completed";

export interface Appointment {
  id: string;
  patientName: string;
  patientCode: string;
  date: string;
  time: string;
  status: AppointmentStatus;
}

export const appointments: Appointment[] = [
  {
    id: "1",
    patientName: "Aria Thompson",
    patientCode: "PX-9921",
    date: "24 Nov 2023",
    time: "09:00 AM",
    status: "confirmed",
  },
  {
    id: "2",
    patientName: "Leo Saphira",
    patientCode: "PX-8872",
    date: "24 Nov 2023",
    time: "10:30 AM",
    status: "pending",
  },
  {
    id: "3",
    patientName: "Maya Indah",
    patientCode: "PX-7712",
    date: "24 Nov 2023",
    time: "11:15 AM",
    status: "completed",
  },
  {
    id: "4",
    patientName: "Kevin Pratama",
    patientCode: "PX-6651",
    date: "24 Nov 2023",
    time: "01:45 PM",
    status: "confirmed",
  },
];