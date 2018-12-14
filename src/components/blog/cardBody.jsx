import React from 'react';
// import maleavatar from '../../assets/img/MaleA.png';
import femaleavatar from '../../assets/img/femaleA.png';
import Imagecover1 from '../../assets/img/neonbrand-618322-unsplash.jpg';
import './card.css';


const CardBody = ({ title, content }) => (
  <div className="col s12 m6 l4">
    <div className="card hoverable">
      <div className="card-image">
        <img className="materialboxed" src={Imagecover1} alt="" />
      </div>
      <div className="card-content">
        <p className="left-align"><b>{title}</b></p>
        <hr />
        <p className="left-align">{content}</p>
        <br />

        <div className="card-action">
          <div className="row valign-wrapper">

            <div className="col s4">
              <img src={femaleavatar} alt="" className="circle responsive-img" />
            </div>
            <div className="col s8">
              <span className="black-text left-align">
                <b>Anais Jaunai</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default CardBody;
