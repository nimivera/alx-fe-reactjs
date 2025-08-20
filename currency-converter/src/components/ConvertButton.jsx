export default function ConvertButton({ onClick }) {
    return (
      <button 
        onClick={onClick}
        className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700"
      >
        Convert
      </button>
    );
  }
  