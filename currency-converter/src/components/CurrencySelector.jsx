export default function CurrencySelector({ label }) {
  return (
    <div className="my-2">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select className="w-full border rounded p-2">
        <option value="USD">USD</option>
        <option value="NGN">NGN</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}
