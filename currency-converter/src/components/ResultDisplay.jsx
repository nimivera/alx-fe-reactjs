export default function ResultDisplay({ result }) {
  return (
    <div className="max-w-sm border flex mx-auto my-5 py-5 px-2 bg-green-950 rounded-xl">
      {result
        ? <p className="text-green-500 mx-auto">{result}</p>
        : <p className="text-green-500 mx-auto font-light">Enter amount to convert.</p>}
    </div>
  );
}
