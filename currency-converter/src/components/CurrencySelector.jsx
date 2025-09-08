export default function CurrencySelector({ fromCurrency, toCurrency, setFromCurrency, setToCurrency }) {
  return (
    <div className="max-w-sm mx-auto">
      <div className="flex flex-col my-10">
        <label className="text-white">From</label>
        <select
          className="border py-2 bg-white rounded-xl pr-10 pl-3"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="NGN">NGN</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <div className="flex flex-col my-5">
        <label className="text-white">To</label>
        <select
          className="border py-2 bg-white rounded-xl pr-10 pl-3"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
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
