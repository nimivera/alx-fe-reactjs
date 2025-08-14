import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  ingredients: [],
  cookingTime: '',
  favorites: [],
  recommendations: [],

  // Recipe management
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe]
  })),
  setRecipes: (recipes) => set({
    recipes,
    filteredRecipes: recipes
  }),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // Search & filtering
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setIngredients: (ingredients) => set({ ingredients }),
  setCookingTime: (cookingTime) => set({ cookingTime }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
      (state.ingredients.length === 0 ||
        recipe.ingredients.some(ingredient => state.ingredients.includes(ingredient))) &&
      (state.cookingTime === '' || recipe.cookingTime <= state.cookingTime)
    )
  })),

  // Favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId)
      ? state.favorites
      : [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Recommendations
  generateRecommendations: () => set(state => {
    if (state.favorites.length === 0) {
      return { recommendations: [] };
    }
    const recommended = state.recipes.filter(recipe => {
      return !state.favorites.includes(recipe.id) &&
        state.favorites.some(favId => {
          const favRecipe = state.recipes.find(r => r.id === favId);
          return favRecipe && (
            favRecipe.category === recipe.category ||
            favRecipe.tags.some(tag => recipe.tags.includes(tag))
          );
        });
    });
    return { recommendations: recommended };
  })
}));

export default useRecipeStore;
