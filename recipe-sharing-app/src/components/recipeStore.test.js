import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  ingredients: [],
  cookingTime: '',
  favorites: [],
  recommendations: [],
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
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe),
    filteredRecipes: state.filteredRecipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
  })),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setIngredients: (ingredients) => set({ ingredients }),
  setCookingTime: (cookingTime) => set({ cookingTime }),
  filterRecipes: () => set(state => ({ 
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
      (state.ingredients.length === 0 || recipe.ingredients.some(ingredient => state.ingredients.includes(ingredient))) &&
      (state.cookingTime === '' || recipe.cookingTime <= state.cookingTime)
    ),
  })),
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({ favorites: state.favorites.filter(id => id !== recipeId) })),
  generateRecommendations: () => set(state => {
    // Filter recipes based on favorites
    const recommended = state.recipes.filter(recipe => {
      // Check if recipe is not already a favorite and has a similar category or tag
      return !state.favorites.includes(recipe.id) && state.favorites.some(favId => {
        const favRecipe = state.recipes.find(r => r.id === favId);
        return favRecipe && favRecipe.category === recipe.category;
      });
    });
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;