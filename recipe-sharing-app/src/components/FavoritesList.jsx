import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state =>
    state.favorites
      .map(id => state.recipes.find(recipe => recipe.id === id))
      .filter(recipe => recipe !== undefined)
  );
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (favorites.length === 0) {
    return <div>No favorite recipes added yet.</div>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
