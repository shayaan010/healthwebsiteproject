import React, { useState } from 'react';
import "../styles/BMI.css";

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      const bmiRounded = bmiValue.toFixed(2);
      setBmi(bmiRounded);

      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obese');
      }
    } else {
      setMessage('Please enter valid values.');
    }
  };

  return (
    <div className="bmi-wrapper">
      <h1 className="title">BMI Calculator</h1>
      <div className="bmi-content">
        <div className="bmi-info">
          <p>BMI is an estimate of body fat and a good gauge of your risk for diseases that can occur with more body fat. The higher your BMI, the higher your risk for certain diseases such as heart disease, high blood pressure, type 2 diabetes, gallstones, breathing problems, and certain cancers.</p>
        </div>
        <div className="bmi-container">
          <h2>YOUR BODY MASS INDEX (BMI)</h2>
          <div className="bmi-result">
            <div className="bmi-value">{bmi || '0'}</div>
          </div>
          <h2>YOUR WEIGHT STATUS</h2>
          <div className="weight-status">
            <div>{message || '-'}</div>
          </div>
          <div className="form-group">
            <label htmlFor="height">HEIGHT</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <span>CM</span>
          </div>
          <div className="form-group">
            <label htmlFor="weight">WEIGHT</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <span>KG</span>
          </div>
          <button onClick={calculateBMI}>COMPUTE BMI</button>
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
