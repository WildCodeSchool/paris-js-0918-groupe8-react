import React, { Component } from 'react';
import './charte.css'
import 'materialize-css/dist/css/materialize.min.css';


const Charte = () => {

  return (
    <div className="cardglobal">
      <div className="container">
        <h3 className="center-align">CHARTE</h3>
        <div className="testimage z-depth-3">
          <div className="textecharte">        
            <p className="center-align white-text phrasenumber1">Internet n’est pas le royaume des développeurs, des ingénieurs, des data scientistes ou des entrepreneurs. Ils ne font qu’en définir les contours. Ils construisent la carcasse.</p>
            <p className="center-align white-text phrasenumber2">On vous a menti</p>
            <a href="#test" className="center-align waves-effect waves-light btn deep-purple accent-3 bouttonensavoirplus"> En savoir plus</a>
            <p className="center-align white-text hide">Si les foules se connectent, ce n’est pas pour explorer l’architecture de la boîte. Ils viennent voir ce qu’il y a dedans.
            « Content is king ». C’est le titre d’un essai de Bill Gates qui date de 1996 et qui dit simplement ceci :
            « Le contenu, c’est là où, selon moi, une grande partie de la fortune tangible sera générée sur internet, tout comme dans la diffusion télé. »
            Ce qui fait venir les foules, c’est le « il était une fois ».
            </p>
          </div>
        </div>

      </div>

    </div>
    );
  }


export default Charte;
