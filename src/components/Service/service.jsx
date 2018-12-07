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
              <h5 className="left-align"><b>Ecriture d'articles</b></h5>
              <hr />
              <p className="left-align">Nous écrivons des articles de blog (thématisés, B2B, B2C), des articles actualités, et nous faisons aussi du blogging...</p>
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
              <h5 className="left-align"><b>Ecriture de page About</b></h5>
              <hr />
              <p className="left-align">Nous vous aidons à concevoir vos pages de présentation parfaite, à raonter l'histoire de votre marque</p>
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
              <h5 className="left-align"><b>Consulting éditorial</b></h5>
              <hr />
              <p className="left-align">Nous vous aidons à élaborer une stratégie de contenus textuels en adéquation avec votre clientèle</p>
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
