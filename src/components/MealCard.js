import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useFavorites } from '../context/FavoritesContext';
// MealCard component with Styled Components 
const StyledCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  background: white;
  cursor: pointer;
  &:hover { transform: translateY(-5px); }
`;

const CardTitle = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

function MealCard({ meal }) {
  const navigate = useNavigate();
  const { addFavorite } = useFavorites();

  const handleClick = () => navigate(`/meal/${meal.idMeal}`);

  const handleFavorite = (e) => {
    e.stopPropagation();
    addFavorite(meal);
    alert(`${meal.strMeal} added to favorites!`);
  };

  return (
    <StyledCard onClick={handleClick}>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
      <div className="p-3">
        <CardTitle>{meal.strMeal}</CardTitle>
        <p style={{ color: '#888', fontSize: '0.85rem' }}>
          {meal.strCategory} • {meal.strArea}
        </p>
        <button
          className="btn btn-danger btn-sm mt-2 w-100"
          onClick={handleFavorite}
        >
          ❤️ Add to Favorites
        </button>
      </div>
    </StyledCard>
  );
}

export default MealCard;