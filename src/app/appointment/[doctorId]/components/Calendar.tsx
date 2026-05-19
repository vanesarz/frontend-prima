type Props = {
  selectedDate: string;
  setSelectedDate: (
    value: string
  ) => void;
};

export default function Calendar({
  selectedDate,
  setSelectedDate,
}: Props) {
  return (
    <div className="mt-10">
      <label
        className="
          text-sm
          font-bold
          text-[#5B4444]
        "
      >
        Pilih Tanggal
      </label>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) =>
          setSelectedDate(
            e.target.value
          )
        }
        className="
          w-full
          mt-2
          px-5
          py-4
          border-2
          border-[#ECD0D0]
          rounded-2xl
          bg-white
          outline-none
        "
      />
    </div>
  );
}