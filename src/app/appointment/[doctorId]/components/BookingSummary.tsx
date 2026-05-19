type Props = {
  doctorName?: string;

  selectedDate: string;

  selectedTime:
    | {
        start: string;
        end: string;
      }
    | null;
};

export default function BookingSummary({
  doctorName,
  selectedDate,
  selectedTime,
}: Props) {
  return (
    <div
      className="
        mt-10
        bg-white
        border
        border-[#ECD0D0]
        rounded-3xl
        p-6
      "
    >
      <h3
        className="
          text-xl
          font-black
          text-[#2A1717]
        "
      >
        Ringkasan Booking
      </h3>

      <div className="mt-5 space-y-3 text-[#5B4444]">
        <p>
          <span className="font-bold">
            Dokter:
          </span>{" "}
          {doctorName || "-"}
        </p>

        <p>
          <span className="font-bold">
            Tanggal:
          </span>{" "}
          {selectedDate || "-"}
        </p>

        <p>
          <span className="font-bold">
            Jam:
          </span>{" "}
          {selectedTime
            ? `${selectedTime.start} - ${selectedTime.end}`
            : "-"}
        </p>
      </div>
    </div>
  );
}