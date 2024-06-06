import React from 'react';
import { eList } from "../helpers/exerciseList";
import ExerciseItems from '../components/ExerciseItems';
import '../styles/Exercises.css';

function Exercises() {
  return (
    <div className='Exercises'>
      <h1 className="exerciseTitle">Exercises</h1>
      <div className='exerciseList'>
        {eList.map((exerciseItem, key) => (
          <ExerciseItems 
            key={key}
            image={exerciseItem.image}
            exercise={exerciseItem.exercise}
            caloriesBurnt={exerciseItem.caloriesBurnt}
            url={exerciseItem.url}  // Pass the URL
          />
        ))}
      </div>
    </div>
  );
}

export default Exercises;
