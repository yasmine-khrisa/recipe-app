import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import MealCard from '../components/MealCard';
// Favorites page with Context API
function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="container py-5">
      <h1 className="page-title">❤️ My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-muted text-center mt-5">
          No favorites yet! Go to Home and add some meals.
        </p>
      ) : (
        <div className="row g-4">
          {favorites.map((meal) => (
            <div key={meal.idMeal} className="col-md-4">
              <MealCard meal={meal} />
              <button
                className="btn btn-outline-danger w-100 mt-2"
                onClick={() => removeFavorite(meal.idMeal)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;