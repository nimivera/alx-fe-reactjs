// FavoritesList.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  // Select both favorites array and recipes array from the store
  const { favorites, recipes, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite
  }));

  // Map favorite IDs to recipe objects, filter out any missing ones
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe?.id === id))
    .filter(Boolean);

  if (favoriteRecipes.length === 0) {
    return <div>No favorite recipes added yet.</div>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <h3>{recipe?.title || 'Untitled Recipe'}</h3>
          <p>{recipe?.description || 'No description available.'}</p>
          <button onClick={() => removeFavorite(recipe.id)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
