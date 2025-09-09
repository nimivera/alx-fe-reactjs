import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "./components/Header";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConvertButton from "./components/ConvertButton";
import ResultDisplay from "./components/ResultDisplay";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  
  const { data, error, isLoading } = useQuery({
    queryKey: ["exchangeRates", fromCurrency],
    queryFn: async () => {
     
      const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      if (!res.ok) throw new Error("Failed to fetch rates");
      return res.json();
    },
    enabled: !!fromCurrency,
    staleTime: 1000 * 60 * 5, 
  });

  function handleConvert() {
    if (!data || !data.rates) {
      setResult("No data available yet.");
      return;
    }

    const rate = data.rates[toCurrency];
    if (!rate) {
      setResult(`No exchange rate available for ${toCurrency}`);
      return;
    }

    setResult(`${(amount * rate).toFixed(2)} ${toCurrency}`);
    setAmount(""); // ✅ clear input after showing result
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <main className="py-10">
        {isLoading && <p className="text-white text-center">Loading rates...</p>}
        {error && <p className="text-red-500 text-center">Error fetching data</p>}

        <CurrencySelector
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        />

        <AmountInput value={amount} onChange={setAmount} />

        <ConvertButton onConvert={handleConvert} disabled={!amount} />

        <ResultDisplay result={result} />
      </main>
    </div>
  );
}
