export default function ConvertButton({ onConvert, disabled = false }) {
  return (
    <button
      onClick={onConvert}
      disabled={disabled}
      className="mx-auto flex px-10 rounded-xl text-white bg-black py-3 hover:bg-gray-700 disabled:opacity-50"
    >
      Convert
    </button>
  );
}
