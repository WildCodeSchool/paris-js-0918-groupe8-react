import React from 'react';
import './service.css';
import Imageservice1 from '../../assets/svg/edit2.svg';
import Imageservice2 from '../../assets/svg/network.svg';
import Imageservice3 from '../../assets/svg/conversation.svg';

const Service = () => (
  <div className="cardglobal">
    <div className="container">
      <h3 className="center-align titreblog1">SERVICE</h3>
      <div className="row">
        {/* Service1 */}
        <div className="col s12 m6 l4">
          <div className="card hoverable">
            <div className="card-image">
              <img src={Imageservice1} alt="" width="100" height="100" />
              {/* <span className="card-title text-darken-5 badge white black-text badgereading">5min reading</span> */}
            </div>
            <div className="card-content">
              <h5 className="left-align"><b>Création de contenus</b></h5>
              <hr />
              <p className="left-align">articles, pages à propos, newsletters, descriptifs, emails, publications pour les réseaux sociaux... Nous rédigeons pour vous des contenus à forte valeur ajoutée, chargés de l’ADN de votre entreprise.</p>
              <br />
            </div>
          </div>

        </div>
        {/* fin service1 */}
        {/* Service2 */}
        <div className="col s12 m6 l4">
          <div className="card hoverable">
            <div className="card-image">
              <img src={Imageservice2} alt="" width="100" height="100" />
              {/* <span className="card-title text-darken-5 badge white black-text badgereading">5min reading</span> */}
            </div>
            <div className="card-content">
              <h5 className="left-align"><b>Stratégie éditoriale</b></h5>
              <hr />
              <p className="left-align">diagnostic, charte éditoriale, analyse de performance, optimisation de vos contenus existants. Nous réalisons un audit et formulons des recommandations pour embellir votre communication.</p>
              <br />
            </div>
          </div>

        </div>
        {/* fin service 2 */}
        {/* Service3 */}
        <div className="col s12 m6 l4">
          <div className="card hoverable">
            <div className="card-image">
              <img src={Imageservice3} alt="" width="100" height="100" />
              {/* <span className="card-title text-darken-5 badge white black-text badgereading">5min reading</span> */}
            </div>
            <div className="card-content">
              <h5 className="left-align"><b>Accompagnement</b></h5>
              <hr />
              <p className="left-align">C’est vous qui le faites, mais on vous guide. Créez votre storytelling pas à pas avec un expert.</p>
              <br />
            </div>
          </div>

        </div>
        {/* fin service 3 */}


      </div>

    </div>

  </div>
);


export default Service;
