import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/homepage.jpg'
import "../styles/home.css"

function home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer" >
            <h1>Health Website</h1>
            <p> Learn how to have a healthier lifestyle</p>
            <Link to="/BMI">
                <button>BMI</button>
            </Link>
        </div>       
    </div>
  )
}

export default home
