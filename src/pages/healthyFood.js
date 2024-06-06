import React from 'react';
import { healthyFList } from '../helpers/healthyFoodList';
import FoodItems from '../components/FoodItems';
import '../styles/healthyFood.css';

function healthyFood() {
  return (
    <div className="healthyFood">
      <h1 className="menuTitle">Healthy Food</h1>
      <div className="healthyFoodList">
        {healthyFList.map((foodItem, key) => (
          <FoodItems 
            key={key}
            image={foodItem.image}
            name={foodItem.name}
            calories={foodItem.calories}
            url={foodItem.url}  // Pass the URL
          />
        ))}
      </div>
    </div>
  );
}

export default healthyFood;
