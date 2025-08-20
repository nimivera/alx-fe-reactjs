export default function CurrencySelector({ label }) {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700">{label}</label>
        <select className="p-2 border border-gray-300 rounded-md">
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="NGN">NGN - Nigerian Naira</option>
          <option value="GBP">GBP - British Pound</option>
        </select>
      </div>
    );
  }
  