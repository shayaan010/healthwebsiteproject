import React from 'react';

function ExerciseItems({ image, exercise, caloriesBurnt, url }) {
  return (
    <div className="ExerciseItems">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div style={{ backgroundImage: `url(${image})` }} className="exerciseImage"></div>
      </a>
      <h1>{exercise}</h1>
      <p>{caloriesBurnt} calories</p>
    </div>
  );
}

export default ExerciseItems;
