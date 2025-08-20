import Header from "./components/Header";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConvertButton from "./components/ConvertButton";
import ResultDisplay from "./components/ResultDisplay";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-md mx-auto p-4">
        <CurrencySelector label="From Currency" />
        <CurrencySelector label="To Currency" />
        <AmountInput />
        <ConvertButton />
        <ResultDisplay />
      </main>
    </div>
  );
}
