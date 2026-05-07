import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar         from './components/Navbar';
import HomePage       from './pages/HomePage';
import MealDetailPage from './pages/MealDetailPage';
import FavoritesPage  from './pages/FavoritesPage';
import ContactPage    from './pages/ContactPage';
import AboutPage      from './pages/AboutPage';

// App.js - setup routing, context API, and navigation
function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/meal/:id"  element={<MealDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/contact"   element={<ContactPage />} />
          <Route path="/about"     element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;