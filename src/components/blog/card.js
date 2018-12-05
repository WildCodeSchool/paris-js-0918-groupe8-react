import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Portraitfemme from '../../assets/img/portraitcrop.jpg';
import Imagecover1 from '../../assets/img/neonbrand-618322-unsplash.jpg';




class Card extends Component {


    render() {
        return (
            <div className="cardglobal">

            <div class="row">
    <div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src={Imagecover1} alt=""></img>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
        <div class="row valign-wrapper">

        <div class="col s2">
              <img src={Portraitfemme} alt="" class="circle responsive-img"></img>
            </div>
            <div class="col s10">
              <span class="black-text">
               Anais Jaunai
              </span>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
            
                
            </div>
        );
    }
}

export default Card;