export type Schedule = {
  id: number;
  doctor_id: string;
  day_of_week: number;
  start_time: string;
  end_time: string;
};

export type Booking = {
  id: number;
  doctor_id: string;
  pasien_id: string;
  appointment_date: string;
  start_time: string;
  end_time: string;
  status?: string;
};

export type Doctor = {
  id: string;
  name: string;
  spesialisasi: string;
  foto_profil_url?: string;
};