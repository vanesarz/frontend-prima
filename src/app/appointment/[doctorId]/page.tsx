"use client";

import Image from "next/image";
import Link from "next/link";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import {
  Navbar,
  Footer,
} from "@/components";

import Calendar from "./components/Calendar";

import TimeSlot from "./components/TimeSlot";

import BookingSummary from "./components/BookingSummary";

import type {
  Booking,
  Doctor,
  Schedule,
} from "./types";

/* =========================
   DUMMY DOCTOR
========================= */

const dummyDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Larasati",
    spesialisasi:
      "Spesialis Anak",

    foto_profil_url:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
  },
];

/* =========================
   HELPERS
========================= */

function generateTimeSlots(
  start: string,
  end: string,
  interval = 30
) {
  const slots = [];

  const [startHour, startMinute] =
    start.split(":").map(Number);

  const [endHour, endMinute] =
    end.split(":").map(Number);

  const startDate = new Date();

  startDate.setHours(
    startHour,
    startMinute,
    0
  );

  const endDate = new Date();

  endDate.setHours(
    endHour,
    endMinute,
    0
  );

  while (startDate < endDate) {
    const slotStart =
      startDate.toLocaleTimeString(
        "id-ID",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      );

    const next = new Date(
      startDate
    );

    next.setMinutes(
      next.getMinutes() +
        interval
    );

    const slotEnd =
      next.toLocaleTimeString(
        "id-ID",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      );

    slots.push({
      start: slotStart,
      end: slotEnd,
    });

    startDate.setMinutes(
      startDate.getMinutes() +
        interval
    );
  }

  return slots;
}

export default function AppointmentPage() {
  const router = useRouter();

  const params = useParams();

  const doctorId =
    params.doctorId as string;
  
  const doctor = useMemo(() => {
    return dummyDoctors.find(
      (doc) => doc.id === doctorId
    );
  }, [doctorId]);

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedTime, setSelectedTime] =
    useState<{
      start: string;
      end: string;
    } | null>(null);

  const [notes, setNotes] =
    useState("");

  const [schedules, setSchedules] =
    useState<Schedule[]>([]);

  const [bookings, setBookings] =
    useState<Booking[]>([]);

  useEffect(() => {
    if (!selectedDate) return;

    const fetchSchedules =
      async () => {
        try {
          const response =
            await fetch(
              `https://backend-prima.vercel.app/schedules/doctor/${doctorId}/available?date=${selectedDate}`
            );

          const result =
            await response.json();

          setSchedules(
            result.data
              .schedules || []
          );

          setBookings(
            result.data
              .bookings || []
          );
        } catch (err) {
          console.error(err);
        }
      };

    fetchSchedules();
  }, [
    selectedDate,
    doctorId,
  ]);

  const timeSlots =
    useMemo(() => {
      let allSlots: {
        start: string;
        end: string;
      }[] = [];

      schedules.forEach(
        (schedule) => {
          const slots =
            generateTimeSlots(
              schedule.start_time,
              schedule.end_time
            );

          allSlots = [
            ...allSlots,
            ...slots,
          ];
        }
      );

      const bookedStarts =
        bookings.map(
          (booking) =>
            booking.start_time
        );

      return allSlots.filter(
        (slot) =>
          !bookedStarts.includes(
            slot.start
          )
      );
    }, [schedules, bookings]);

  const handleBooking =
    async () => {
      try {
        await fetch(
          "https://backend-prima.vercel.app/schedules/bookings",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              {
                doctor_id:
                  doctorId,

                pasien_id:
                  "USER123",

                appointment_date:
                  selectedDate,

                start_time:
                  selectedTime?.start,

                end_time:
                  selectedTime?.end,

                notes,
              }
            ),
          }
        );

        alert(
          "Booking berhasil 🎉"
        );
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <main className="min-h-screen bg-[#FFFBF5] flex flex-col">
      <Navbar />

      <section className="flex-1 px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/directory"
            className="
              text-[#FF6B6B]
              font-semibold
              text-sm
            "
          >
            ← Kembali
          </Link>

          <div className="mt-8 grid lg:grid-cols-[380px_1fr] gap-10">
            {/* LEFT */}
            <div
              className="
                bg-white
                border
                border-[#E9D8D8]
                rounded-4xl
                p-8
              "
            >
              <div
                className="
                  relative
                  w-40
                  h-40
                  mx-auto
                  rounded-full
                  overflow-hidden
                "
              >
                <Image
                  src={
                    doctor?.foto_profil_url ||
                    ""
                  }
                  alt={
                    doctor?.name ||
                    "Doctor"
                  }
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="text-center mt-6">
                <h1
                  className="
                    text-3xl
                    font-black
                    text-[#2B1717]
                  "
                >
                  {doctor?.name}
                </h1>

                <p className="mt-2 text-gray-500 font-semibold">
                  {
                    doctor?.spesialisasi
                  }
                </p>
              </div>

              <BookingSummary
                doctorName={
                  doctor?.name
                }
                selectedDate={
                  selectedDate
                }
                selectedTime={
                  selectedTime
                }
              />
            </div>

            {/* RIGHT */}
            <div>
              <h2
                className="
                  text-5xl
                  font-black
                  text-[#2A1717]
                "
              >
                Jadwalkan Janji Temu
              </h2>

              <p className="mt-4 text-lg text-gray-500">
                Pilih waktu terbaik
                untuk konsultasi.
              </p>

              <Calendar
                selectedDate={
                  selectedDate
                }
                setSelectedDate={
                  setSelectedDate
                }
              />

              <TimeSlot
                timeSlots={
                  timeSlots
                }
                selectedTime={
                  selectedTime
                }
                setSelectedTime={
                  setSelectedTime
                }
              />

              <div className="mt-10">
                <label className="text-sm font-bold text-[#5B4444]">
                  Catatan
                </label>

                <textarea
                  value={notes}
                  onChange={(e) =>
                    setNotes(
                      e.target.value
                    )
                  }
                  rows={5}
                  placeholder="Tuliskan keluhan..."
                  className="
                    w-full
                    mt-2
                    px-5
                    py-4
                    border-2
                    border-[#ECD0D0]
                    rounded-2xl
                    resize-none
                    outline-none
                  "
                />
              </div>

              <div className="mt-10 flex gap-4">
                <button
                  onClick={() =>
                    router.back()
                  }
                  className="
                    px-8
                    py-4
                    rounded-full
                    border-2
                    border-[#ECD0D0]
                    font-bold
                  "
                >
                  ← Kembali
                </button>

                <button
                  onClick={
                    handleBooking
                  }
                  className="
                    flex-1
                    bg-[#FF6B6B]
                    text-white
                    font-black
                    py-4
                    rounded-full
                  "
                >
                  Konfirmasi Booking →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}