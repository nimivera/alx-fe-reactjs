// RecipeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton.jsx';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => String(recipe.id) === String(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title || 'Untitled Recipe'}</h1>
      <p>{recipe.description || 'No description available.'}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
