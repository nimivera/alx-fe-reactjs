import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  // --- State ---
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  ingredients: [],
  cookingTime: '',
  favorites: [],
  recommendations: [],

  // --- Recipe Management ---
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes(); // keep filtered list in sync
  },

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  deleteRecipe: (recipeId) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
      favorites: state.favorites.filter((id) => id !== recipeId)
    }));
    get().filterRecipes();
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }));
    get().filterRecipes();
  },

  // --- Search & Filter ---
  setSearchTerm: (searchTerm) => {
    set({ searchTerm });
    get().filterRecipes();
  },

  setIngredients: (ingredients) => {
    set({ ingredients });
    get().filterRecipes();
  },

  setCookingTime: (cookingTime) => {
    set({ cookingTime });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm, ingredients, cookingTime } = get();

    const filtered = recipes.filter((recipe) => {
      const titleMatch = recipe?.title
        ?.toLowerCase()
        ?.includes(searchTerm.toLowerCase());

      const ingredientsMatch =
        ingredients.length === 0 ||
        (Array.isArray(recipe?.ingredients) &&
          recipe.ingredients.some((ing) => ingredients.includes(ing)));

      const timeMatch =
        cookingTime === '' ||
        (typeof recipe?.cookingTime === 'number' &&
          recipe.cookingTime <= cookingTime);

      return titleMatch && ingredientsMatch && timeMatch;
    });

    set({ filteredRecipes: filtered });
  },

  // --- Favorites ---
  addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId)
    }));
  },

  // --- Recommendations ---
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    const recommended = recipes.filter((recipe) => {
      if (favorites.includes(recipe.id)) return false;

      return favorites.some((favId) => {
        const favRecipe = recipes.find((r) => r.id === favId);
        return (
          favRecipe &&
          (
            favRecipe?.category === recipe?.category ||
            (
              Array.isArray(favRecipe?.tags) &&
              Array.isArray(recipe?.tags) &&
              favRecipe.tags.some((tag) => recipe.tags.includes(tag))
            )
          )
        );
      });
    });

    set({ recommendations: recommended });
  }
}));

export default useRecipeStore;
