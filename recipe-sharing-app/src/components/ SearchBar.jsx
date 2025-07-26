// SearchBar component
import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes(searchTerm);
  }, [searchTerm, filterRecipes]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search recipes..."
    />
  );
};

export default SearchBar;