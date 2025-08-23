export default function CurrencySelector({ label, value, onChange }) {
  return (
    <div className="my-2">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        className="w-full border rounded p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="USD">USD — US Dollar</option>
        <option value="NGN">NGN — Nigerian Naira</option>
        <option value="EUR">EUR — Euro</option>
        <option value="GBP">GBP — British Pound</option>
      </select>
    </div>
  );
}
