import React from 'react';

function FoodItems({ image, name, calories, url }) {
  return (
    <div className="Fooditems">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div style={{ backgroundImage: `url(${image})` }} className="foodImage"></div>
      </a>
      <h1>{name}</h1>
      <p>{calories} calories</p>
    </div>
  );
}

export default FoodItems;
