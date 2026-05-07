import React, { useState, useEffect } from 'react';
import MealCard from '../components/MealCard';

function HomePage() {
  const [meals, setMeals]     = useState([]);
  const [search, setSearch]   = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    fetchMeals('chicken');
  }, []);

  const fetchMeals = async (query) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setError('No meals found. Try something else!');
      }
    } catch (err) {
      setError('Failed to load. Check your internet.');
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) fetchMeals(search);
  };

  return (
    <div className="container py-5">
      <h1 className="page-title text-center">🍽️ Explore Recipes</h1>

      <div className="text-center mb-3">
        <small className="text-muted">
          API: themealdb.com &nbsp;|&nbsp;
          <span className="badge bg-primary">GET</span>
        </small>
      </div>

      <form onSubmit={handleSearch} className="d-flex gap-2 mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search meals... e.g. pasta, beef"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-danger px-4">Search</button>
      </form>

      {loading && (
        <div className="text-center">
          <div className="spinner-border text-danger" />
        </div>
      )}
      {error && <p className="text-center text-muted">{error}</p>}

      <div className="row g-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="col-md-4 col-sm-6">
            <MealCard meal={meal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;