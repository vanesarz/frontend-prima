"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { Search, MapPin, Star, Calendar } from "lucide-react";

/* TYPES */
type Doctor = {
  name: string;
  specialty: string;
  location: string;
  rating: number;
  price: string;
  availability: string;
  image: string;
};

/* DATA */
const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiology",
    location: "Upper West Side, NY",
    rating: 4.9,
    price: "$150/visit",
    availability: "Available tomorrow",
    image: "https://via.placeholder.com/300x180",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    location: "Brooklyn Heights, NY",
    rating: 4.8,
    price: "$120/visit",
    availability: "Next: Friday",
    image: "https://via.placeholder.com/300x180",
  },
  {
    name: "Dr. Elena Rodriguez",
    specialty: "Dermatology",
    location: "Manhattan, NY",
    rating: 5.0,
    price: "$200/visit",
    availability: "Available today",
    image: "https://via.placeholder.com/300x180",
  },
];

export default function DirectoryPage() {
  return (
    <div className="flex bg-[#F1F5F9] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 space-y-6">
        {/* HEADER */}
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Provider Directory</h2>
          <p className="text-gray-500 max-w-xl text-sm">
            Find and schedule appointments with top-rated medical specialists curated for your health needs.
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow-sm w-75">
            <Search size={18} className="text-gray-400" />
            <input
              placeholder="Search by name or specialty..."
              className="ml-2 outline-none w-full text-sm"
            />
          </div>

          <Filter label="Specialty: All Specialties" />
          <Filter label="Rating: 4.5+ Stars" />
          <Filter label="Location: Within 10 miles" />
        </div>

        {/* DOCTORS */}
        <div className="grid grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <DoctorCard key={i} {...doc} />
          ))}
        </div>

        {/* FEATURE + SUPPORT */}
        <div className="grid grid-cols-3 gap-6">
          {/* FEATURE */}
          <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm flex gap-6">
            <Image
              src="https://via.placeholder.com/220x180"
              alt="Dr. Jonathan Vance"
              width={220}
              height={180}
              className="rounded-xl object-cover"
            />

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase">Neurology</p>
                <h3 className="text-xl font-semibold">
                  Dr. Jonathan Vance
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> Medical Center
                  </span>
                  <span>Johns Hopkins Alumni</span>
                </div>

                <p className="text-sm text-gray-500 mt-3 max-w-md">
                  Focusing on patient-centered neurological care through innovative treatment plans.
                </p>
              </div>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-fit">
                Book Appointment
              </button>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg">
                Can&apos;t find a specialist?
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Our team can help you find the right provider based on your needs.
              </p>
            </div>

            <button className="text-blue-600 mt-4 text-sm">
              Chat with Support →
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-2 gap-6">
          {/* LEFT */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-3">
              Patient Transparency Initiative
            </h3>

            <ul className="space-y-2 text-sm text-gray-500">
              <li>✔ Verified credentials</li>
              <li>✔ Honest reviews</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">
              Patient Satisfaction Score
            </h3>

            <Progress label="Ease of booking" value={99} />
            <Progress label="Provider punctuality" value={94} />
            <Progress label="Clear pricing" value={97} />
          </div>
        </div>
      </main>
    </div>
  );
}

/* COMPONENTS */

function Filter({ label }: { label: string }) {
  return (
    <div className="bg-white px-4 py-2 rounded-xl text-sm text-gray-500 shadow-sm">
      {label}
    </div>
  );
}

function DoctorCard({
  name,
  specialty,
  location,
  rating,
  price,
  availability,
  image,
}: Doctor) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={400}
        height={160}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400 uppercase">
            {specialty}
          </span>
          <span className="flex items-center gap-1 text-sm">
            <Star size={14} className="text-orange-400" />
            {rating}
          </span>
        </div>

        <h3 className="font-medium">{name}</h3>

        <p className="text-sm text-gray-500 flex items-center gap-1">
          <MapPin size={14} /> {location}
        </p>

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>{availability}</span>
          <span>{price}</span>
        </div>

        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
          <Calendar size={16} />
          Book Appointment
        </button>
      </div>
    </div>
  );
}

function Progress({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="mb-3 h-screen">
      <div className="flex justify-between text-sm text-gray-500">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full mt-1">
        <div
          className="h-2 bg-green-600 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}