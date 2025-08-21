import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientsList.length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }

    // Create new recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.substring(0, 60) + "...",
      image: "https://via.placeholder.com/150",
      ingredients: ingredientsList,
      instructions: steps.split("\n").filter((item) => item.trim() !== "")
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe added successfully! (Currently just logs to console)");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Add a New Recipe 🍳</h1>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="List ingredients (one per line)"
            rows="4"
          />
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Write steps (one per line)"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
