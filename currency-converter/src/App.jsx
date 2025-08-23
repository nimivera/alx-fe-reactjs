import { useState } from "react";
import Header from "./components/Header";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConvertButton from "./components/ConvertButton";
import ResultDisplay from "./components/ResultDisplay";

export default function App() {
 
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [amount, setAmount] = useState("");      
  const [result, setResult] = useState(null);  

const handleConvert = () => {

  const amt = Number(amount);
  if (!amt) {
    setResult("Please enter a valid amount.");
    return;
  }

 
  const dummyRate = 100;
  const converted = amt * dummyRate;

  setResult(`${amt} ${fromCurrency} ≈ ${converted.toLocaleString()} ${toCurrency} (dummy rate)`);
};


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
