// src/components/CurrencySelector.jsx
export default function CurrencySelector({ fromCurrency, toCurrency, setFromCurrency, setToCurrency }) {
  return (
    <div className="space-y-4 my-4">
      {/* From Currency */}
      <div>
        <label className="block mb-1 font-medium">From Currency</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="NGN">NGN</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      {/* To Currency */}
      <div>
        <label className="block mb-1 font-medium">To Currency</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="NGN">NGN</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
    </div>
  );
}
