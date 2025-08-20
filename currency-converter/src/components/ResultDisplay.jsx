export default function ResultDisplay({ result }) {
    return (
      <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
        {result ? <p>Converted Amount: {result}</p> : <p>No conversion yet.</p>}
      </div>
    );
  }
  