type Slot = {
  start: string;
  end: string;
};

type Props = {
  timeSlots: Slot[];
  selectedTime: Slot | null;

  setSelectedTime: (
    slot: Slot
  ) => void;
};

export default function TimeSlot({
  timeSlots,
  selectedTime,
  setSelectedTime,
}: Props) {
  return (
    <div className="mt-10">
      <h3
        className="
          text-xl
          font-black
          text-[#2A1717]
        "
      >
        Pilih Waktu
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        {timeSlots.map(
          (slot, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedTime(
                  slot
                )
              }
              className={`
                py-4
                rounded-2xl
                font-bold
                border-2
                transition-all

                ${
                  selectedTime?.start ===
                  slot.start
                    ? "bg-[#FF6B6B] text-white border-[#FF6B6B]"
                    : "bg-white border-[#ECD0D0] text-[#5B4444]"
                }
              `}
            >
              {slot.start}
            </button>
          )
        )}
      </div>
    </div>
  );
}