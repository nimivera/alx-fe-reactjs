// RecommendationsList.jsx
import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const {
    recommendations,
    favorites,
    generateRecommendations,
    addFavorite
  } = useRecipeStore((state) => ({
    recommendations: state.recommendations,
    favorites: state.favorites,
    generateRecommendations: state.generateRecommendations,
    addFavorite: state.addFavorite
  }));

  // Regenerate recommendations whenever favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  if (recommendations.length === 0) {
    return <div>No personalized recommendations available.</div>;
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <h3>{recipe?.title || 'Untitled Recipe'}</h3>
          <p>{recipe?.description || 'No description available.'}</p>
          <button
            onClick={() => addFavorite(recipe.id)}
            disabled={favorites.includes(recipe.id)}
          >
            {favorites.includes(recipe.id)
              ? 'Already in Favorites'
              : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
