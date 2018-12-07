import React from 'react';
import './footer.css';


const Footer = () => (
  <div>
    <div className="grey darken-4 center-align">

      <div className="titrefooter">
        <p className="white-text">SUIVEZ-NOUS</p>
      </div>

      <a href="#test" className="btn-floating pulse indigo boutton-social-footer"><i className="fab fa-instagram" /></a>
      <a href="#test" className="btn-floating pulse indigo boutton-social-footer"><i className="fab fa-twitter" /></a>
      <a href="#test" className="btn-floating pulse indigo boutton-social-footer"><i className="fab fa-linkedin-in" /></a>
    </div>
    <div className="black center-align footerbackcopyright">
      <p className="white-text">
        Copyright © 2019 Conteur digital
        <a href="#test"> Mentions Légales</a>
      </p>
    </div>
  </div>
);

export default Footer;
