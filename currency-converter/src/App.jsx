import { useState } from "react";
import Header from "./components/Header";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConvertButton from "./components/ConvertButton";
import ResultDisplay from "./components/ResultDisplay";

export default function App() {
  // React "state" (the app's memory)
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [amount, setAmount] = useState("");      // will wire in Step 3B
  const [result, setResult] = useState(null);    // will use in Step 3C

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-md mx-auto p-4 space-y-3">
        <CurrencySelector
          label="From Currency"
          value={fromCurrency}
          onChange={setFromCurrency}
        />
        <CurrencySelector
          label="To Currency"
          value={toCurrency}
          onChange={setToCurrency}
        />

      </main>
    </div>
  );
}
