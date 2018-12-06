import React, { Component } from 'react';
import './charte.css'
import 'materialize-css/dist/css/materialize.min.css';


const Charte = () => {

  return (
    <div className="cardglobal">
      <div className="container">
        <h3 className="center-align titrecharte1">CHARTE</h3>
        <div className="testimage z-depth-3">
          <div className="textecharte">        
            <p className="center-align white-text phrasenumber1">Internet n’est pas le royaume des développeurs, des ingénieurs, des data scientistes ou des entrepreneurs. Ils ne font qu’en définir les contours. Ils construisent la carcasse.</p>
            <p className="center-align white-text phrasenumber2">On vous a menti</p>
            <a href="#test" className="center-align waves-effect waves-light btn deep-purple accent-3 bouttonensavoirplus"> En savoir plus</a>
            <p className="center-align white-text phrasenumber3">"Content is king"</p>

          </div>
        </div>

      </div>

    </div>
    );
  }


export default Charte;
