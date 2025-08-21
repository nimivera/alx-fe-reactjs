import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) return <p className="text-center p-6">Loading recipe...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>

      {/* Ingredients Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6">
          {recipe.ingredients?.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal pl-6">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="text-gray-700 mb-2">{step}</li>
          ))}
        </ol>
      </div>

      <Link
        to="/"
        className="block mt-6 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default RecipeDetail;  // ✅ important
