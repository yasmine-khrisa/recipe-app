import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (meal) => {
    if (!favorites.find(f => f.idMeal === meal.idMeal)) {
      setFavorites([...favorites, meal]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(f => f.idMeal !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}