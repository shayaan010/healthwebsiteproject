import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a 
              href="https://www.instagram.com/shayaanshahid010/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagramLink"
            >
              <InstagramIcon />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammadshayaanshahid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedinLink"
            >
              <LinkedInIcon />
            </a>
        </div>
        <p> &copy; 2024 shayaanHealthWebsite.com</p> 
    </div>
  );
}

export default Footer;
