export default function AmountInput({ value, onChange }) {
  return (
    <div className="max-w-sm flex flex-col justify-around mx-auto my-10">
      <p className="text-white">Amount</p>
      <input
        className="bg-white py-2 rounded-xl text-black text-xl text-center"
        type="number"
        placeholder="$"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
