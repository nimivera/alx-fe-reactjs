import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  filteredRecipes: [],
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
  filterRecipes: (searchTerm) => set(state => ({ 
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      (ingredients.length === 0 || recipe.ingredients.some(ingredient => ingredients.includes(ingredient))) &&
    (cookingTime === '' || recipe.cookingTime <= cookingTime)
    ),
  })),
}));

export default useRecipeStore;