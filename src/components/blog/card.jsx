import React from 'react';
import maleavatar from '../../assets/img/MaleA.png';
import femaleavatar from '../../assets/img/femaleA.png';
import Imagecover1 from '../../assets/img/neonbrand-618322-unsplash.jpg';
import './card.css';

const Card = () => (
  <div className="cardglobal">
    <div className="container">
      <h3 className="center-align titreblog1">BLOG</h3>
      <div className="row">   
        {/* premier article */}  
        <div className="col s12 m6 l4">
          <div className="card hoverable">
            <div className="card-image">
              <img className="materialboxed" src={Imagecover1} alt="" />

              {/* <span className="card-title text-darken-5 badge white black-text badgereading">5min reading</span> */}
            </div>
            <div className="card-content">
              <p className="left-align"><b>PEUT-ON FAIRE DE LA RÉDACTION WEB ÉTHIQUE ?</b></p>
              <hr />
              <p className="left-align">Nous, Rédacteurs Web, avons une responsabilité dans la propagation des clichés sociétaux. Nous avons la possibilité d’ouvrir les textes à plus de nuance, ou au contraire de les laisser s’enfermer dans les biais des vieilles publicités.</p>
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
         {/* fin premier article */}

           {/* 2 article */}  
        <div className="col s12 m6 l4">
          <div className="card hoverable">
            <div className="card-image">
              <img className="materialboxed" src={Imagecover1} alt="" />

              {/* <span className="card-title text-darken-5 badge white black-text badgereading">5min reading</span> */}
            </div>
            <div className="card-content">
              <p className="left-align"><b>PEUT-ON FAIRE DE LA RÉDACTION WEB ÉTHIQUE ?</b></p>
              <hr />
              <p className="left-align">Nous, Rédacteurs Web, avons une responsabilité dans la propagation des clichés sociétaux. Nous avons la possibilité d’ouvrir les textes à plus de nuance, ou au contraire de les laisser s’enfermer dans les biais des vieilles publicités.</p>
              <br />

              <div className="card-action">
                <div className="row valign-wrapper">

                  <div className="col s4">
                    <img src={maleavatar} alt="" className="circle responsive-img" />
                  </div>
                  <div className="col s8">
                    <span className="black-text left-align">
                      <b>Mathias Savary</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
         {/*2 article */}

          {/* 3 article */}  
        <div className="col s12 m6 l4">
          <div className="card hoverable">
            <div className="card-image">
              <img className="materialboxed" src={Imagecover1} alt="" />

              {/* <span className="card-title text-darken-5 badge white black-text badgereading">5min reading</span> */}
            </div>
            <div className="card-content">
              <p className="left-align"><b>PEUT-ON FAIRE DE LA RÉDACTION WEB ÉTHIQUE ?</b></p>
              <hr />
              <p className="left-align">Nous, Rédacteurs Web, avons une responsabilité dans la propagation des clichés sociétaux. Nous avons la possibilité d’ouvrir les textes à plus de nuance, ou au contraire de les laisser s’enfermer dans les biais des vieilles publicités.</p>
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
         {/* fin premier article */}

      </div>
                       
    </div>

  </div>
);


export default Card;