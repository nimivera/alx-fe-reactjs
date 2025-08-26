export default function ConvertButton({ onConvert }) {
  return (
    <button
      onClick={onConvert}
      className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      Convert
    </button>
  );
}
