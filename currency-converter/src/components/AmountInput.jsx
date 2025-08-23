export default function AmountInput({value,onChange}) {
  return (
    <div className="my-2">
      <label className="block text-sm font-medium mb-1">Amount</label>
      <input
        type="number"
        className="w-full border rounded p-2"
        placeholder="Enter amount"
        value={value}
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
}
