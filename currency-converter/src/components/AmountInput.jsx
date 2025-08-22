export default function AmountInput() {
  return (
    <div className="my-2">
      <label className="block text-sm font-medium mb-1">Amount</label>
      <input
        type="number"
        className="w-full border rounded p-2"
        placeholder="Enter amount"
      />
    </div>
  );
}
