import React, { useState } from 'react';
import Logo from '../assets/trainingLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <h1 className="navbar-title">Health Website</h1>
        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/BMI">BMI</Link>
          <Link to="/healthyFood">Healthy food</Link>
          <Link to="/Exercises">Exercises</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/BMI">BMI</Link>
        <Link to="/healthyFood">Healthy food</Link>
        <Link to="/Exercises">Exercises</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <button onClick={toggleNavBar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
