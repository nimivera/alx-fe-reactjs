import { useQuery } from "@tanstack/react-query";
import Header from "./components/Header";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConvertButton from "./components/ConvertButton";
import ResultDisplay from "./components/ResultDisplay";
import { useState } from "react";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  // 🔹 React Query fetch
  const { data, error, isLoading } = useQuery({
    queryKey: ["exchangeRates", fromCurrency],
    queryFn: async () => {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      if (!res.ok) throw new Error("Failed to fetch rates");
      return res.json();
    },
  });

  // 🔹 Handle Conversion
  function handleConvert() {
    if (!data) return;
    const rate = data.rates[toCurrency];
    setResult((amount * rate).toFixed(2));
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-md mx-auto p-4">
        {/* Loading & Error states */}
        {isLoading && <p>Loading rates...</p>}
        {error && <p className="text-red-500">Error fetching data</p>}

        {/* Currency Selector (two dropdowns now) */}
        <CurrencySelector
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        />

        {/* Amount Input */}
        <AmountInput amount={amount} setAmount={setAmount} />

        {/* Convert Button */}
        <ConvertButton onConvert={handleConvert} />

        {/* Result Display */}
        <ResultDisplay result={result} />
      </main>
    </div>
  );
}
