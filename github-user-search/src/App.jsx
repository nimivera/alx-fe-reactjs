import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;