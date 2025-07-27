import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Recipe Book</h1>
        <SearchBar />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '60%' }}>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
              <Route path="/add-recipe" element={<AddRecipeForm />} />
            </Routes>
          </div>
          <div style={{ width: '35%' }}>
            <FavoritesList />
            <RecommendationsList />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;