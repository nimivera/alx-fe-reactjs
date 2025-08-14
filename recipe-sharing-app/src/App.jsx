import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    leftColumn: {
      width: '60%',
    },
    rightColumn: {
      width: '35%',
    },
  };

  return (
    <BrowserRouter>
      <div style={styles.container}>
        <h1 style={styles.title}>Recipe Book</h1>
        <SearchBar />
        <div style={styles.content}>
          <div style={styles.leftColumn}>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
              <Route path="/add-recipe" element={<AddRecipeForm />} />
              <Route path="/favorites" element={<FavoritesList />} /> {/* Optional extra route */}
            </Routes>
          </div>
          <div style={styles.rightColumn}>
            <FavoritesList />
            <RecommendationsList />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
