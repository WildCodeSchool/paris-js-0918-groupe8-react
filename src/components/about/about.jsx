import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './about.css';
import maleavatar from '../../assets/img/mathiaspic.jpeg';
import femaleavatar from '../../assets/img/anaispic.jpeg';
import maillogo from '../../assets/svg/close-envelope.svg';
import twitterlogo from '../../assets/svg/twitter.svg';
import linkedinlogo from '../../assets/svg/linkedin-logo.svg';


const About = () => (
  <div className="newsletterglobal" id="about">
    <div className="container">
      <h3 className="center-align titreblog1">A PROPOS</h3>

      <div className="row newsletterblock grey lighten-5">

        <div className="col s12 m6">

          <div className="cardtitlebio">
            <img src={femaleavatar} alt="" className="circle responsive-img" width="150" height="150" />
            <h3>Anaïs Jaunay</h3>
            <p className="titlefonctionanais">Conteuse digital</p>
            <p>"Parler de ceux qui vivent leur métier comme un artisanat, redonnent de la valeur à tout ce que l’on consomme"</p>
            <a href="mailto:a.jaunay@gmail.com"><img src={maillogo} alt="" width="30" height="30" className="maillogoabout" /></a>
            <a href="#test"><img src={twitterlogo} alt="" width="30" height="30" className="maillogoabout" /></a>
            <a href="https://www.linkedin.com/in/anaisjaunay/"><img src={linkedinlogo} alt="" width="30" height="30" className="maillogoabout" /></a>


            <NavLink exact to="/anaisjaunay" className="contactbouttonanais">Bio</NavLink>
          </div>
        </div>

        <div className="col s12 m6">

          <div className="cardtitlebio">
            <div className="cardtitlemathias">
              <img src={maleavatar} alt="" className="circle responsive-img" width="150" height="150" />
              <h3>Mathias Savary</h3>
              <p className="titlefonctionanais">Conteur digital</p>
              <p>la VRAIE disruption dans le marketing digital N’est PAS technologique. Elle vient de l’écrit. Elle est poétique !</p>
              <a href="mailto:mathias.videotelling@gmail.com"><img src={maillogo} alt="" width="30" height="30" className="maillogoabout" /></a>
              <a href="https://twitter.com/VideoTelling_fr"><img src={twitterlogo} alt="" width="30" height="30" className="maillogoabout" /></a>
              <a href="https://www.linkedin.com/in/mathias-savary-1a37a498/"><img src={linkedinlogo} alt="" width="30" height="30" className="maillogoabout" /></a>

              <NavLink exact to="/mathiassavary" className="contactbouttonanais">Bio</NavLink>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>

);

export default About;
