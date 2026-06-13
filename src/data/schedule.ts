export type ScheduleType = {
  id: number;
  title: string;
  time: string;
  clinic: string;
  day: string;
};

export const schedules: ScheduleType[] = [
  {
    id: 1,
    title: "Poli Umum",
    time: "08:00 - 12:00",
    clinic: "Gedung A",
    day: "Monday",
  },
  {
    id: 2,
    title: "Konsultasi Online",
    time: "16:00 - 20:00",
    clinic: "Telemedicine",
    day: "Tuesday",
  },
  {
    id: 3,
    title: "Poli Anak",
    time: "09:00 - 13:00",
    clinic: "Gedung B",
    day: "Thursday",
  },
  {
    id: 4,
    title: "Emergency Call",
    time: "19:00 - 21:00",
    clinic: "On Call",
    day: "Friday",
  },
];