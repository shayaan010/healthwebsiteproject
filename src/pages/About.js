import React from "react";
import AboutBanner from '../assets/aboutPage.jpg'
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBanner})`}}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to our health website! Our mission is to help you achieve a healthier lifestyle by providing you with comprehensive and reliable information on various aspects of health and wellness. Whether you are looking to improve your diet, find effective exercise routines, or learn more about managing stress and mental health, we have resources tailored to meet your needs. Our team of experts is dedicated to bringing you the latest research and practical tips to support your journey towards optimal health. We believe that small, consistent changes can lead to significant improvements in your overall well-being. Join us as we explore the path to a healthier, happier you, and let us be your trusted guide on this transformative journey.
        </p>
      </div>
    </div>
  );
}

export default About;
