import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function MealDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);
  const { addFavorite } = useFavorites();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return (
    <div className="text-center py-5">
      <div className="spinner-border text-danger" />
    </div>
  );

  return (
    <div className="container py-5">
      <button className="btn btn-outline-danger mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="row">
        <div className="col-md-5">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid rounded shadow" />
          <div className="mt-3">
            <span className="badge bg-danger me-2">{meal.strCategory}</span>
            <span className="badge bg-secondary">{meal.strArea}</span>
          </div>
          <button
            className="btn btn-danger w-100 mt-3"
            onClick={() => { addFavorite(meal); alert('Added to favorites!'); }}
          >
            ❤️ Add to Favorites
          </button>
          {meal.strYoutube && (
            <a href={meal.strYoutube} target="_blank" rel="noreferrer"
               className="btn btn-outline-danger w-100 mt-2">
              ▶ Watch on YouTube
            </a>
          )}
        </div>
        <div className="col-md-7">
          <h2 className="page-title">{meal.strMeal}</h2>
          <h5 className="text-muted mb-3">Instructions:</h5>
          <p style={{ lineHeight: '1.8', color: '#555' }}>{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default MealDetailPage;