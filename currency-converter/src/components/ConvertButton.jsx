export default function ConvertButton({onConver}) {
  return (
    <button className="w-full bg-green-600 text-white p-2 rounded mt-4">
      onclick={onConver}
      Convert
    </button>
  );
}
