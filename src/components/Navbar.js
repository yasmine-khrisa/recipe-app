import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
// Navbar component 
function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">🍽️ RecipeApp</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/favorites">
            ❤️ Favorites ({favorites.length})
          </Link>
          <Link className="nav-link text-white" to="/about">About</Link>
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;