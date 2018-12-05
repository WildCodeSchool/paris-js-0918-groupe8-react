import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Portraitfemme from '../../assets/img/portraitcrop.jpg';
import Imagecover1 from '../../assets/img/neonbrand-618322-unsplash.jpg';


const Card = () => {
  return (
    <div className="cardglobal">
      <div className="container">
        <h3 className="center-align">BLOG</h3>
        <div className="row">
          <div className="col s12 m6 l4">
            <div className="card">
              <div className="card-image">
                <img src={Imagecover1} alt="" />
                <span className="card-title text-darken-5">PEUT-ON FAIRE DE LA RÉDACTION WEB ÉTHIQUE ?</span>
              </div>
              <div className="card-content">
                <p className="left-align">I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                <br />

                <div className="card-action">
                  <div className="row valign-wrapper">

                    <div className="col s4">
                      <img src={Portraitfemme} alt="" className="circle responsive-img" />
                    </div>
                    <div className="col s8">
                      <span className="black-text">
                        Anais Jaunai
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );

};

export default Card;
