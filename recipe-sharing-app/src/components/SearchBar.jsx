// components/SearchBar.js
import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes(searchTerm, ingredients.split(','), cookingTime);
  }, [searchTerm, ingredients, cookingTime, filterRecipes]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleIngredients = (e) => {
    setIngredients(e.target.value);
  };

  const handleCookingTime = (e) => {
    setCookingTime(e.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search recipes..."
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '10px' }}
      />
      <input
        type="text"
        value={ingredients}
        onChange={handleIngredients}
        placeholder="Filter by ingredients (comma-separated)"
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '10px' }}
      />
      <input
        type="number"
        value={cookingTime}
        onChange={handleCookingTime}
        placeholder="Filter by cooking time (minutes)"
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '10px' }}
      />
    </div>
  );
};

export default SearchBar;