export default function AmountInput() {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700">Amount</label>
        <input 
          type="number" 
          placeholder="Enter amount" 
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
    );
  }
  