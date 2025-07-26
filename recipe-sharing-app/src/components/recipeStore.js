import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  ingredients: [],
  cookingTime: '',
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
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== recipeId)
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
}));

export default useRecipeStore;