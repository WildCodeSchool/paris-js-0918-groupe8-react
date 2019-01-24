import React, { Component } from 'react';
import axios from 'axios';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './about.css';

import maillogo from '../../assets/svg/close-envelope.svg';
import twitterlogo from '../../assets/svg/twitter.svg';
import linkedinlogo from '../../assets/svg/linkedin-logo.svg';
import Sitelogo from '../../assets/img/global.svg';



class About extends Component {
  state = {
    aboutTable: [],
    isLoading: true,
  }

  // APPEL REQUETE
  componentDidMount() {
    this.getAboutTable();
  }

  // REQUETE DES ADMIN
  getAboutTable = async () => {
    const res = await axios.get('/api/admin');
    this.setState({ aboutTable: res.data });
    this.setState({ isLoading: false });
  }

  render() {
    // déconstruction du state et alias du this.state
    const { aboutTable, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="newsletterglobal" id="about">
        <div className="container">

          <h3 className="center-align titreblog1">
            Qui sommes-nous ?
          </h3>

          <div className="row newsletterblock grey lighten-5">

            <div className="col s12 m6">
              <div className="cardtitlebio">

                <div className="card-image">
                  <img src={aboutTable[0].avatar} alt="Anaïs Jaunay" className="circle responsive-img" width="150" height="150" />
                </div>

                <h3>
                  {`${aboutTable[0].firstname} ${aboutTable[0].lastname}`}
                </h3>

                <p className="titlefonctionanais">
                  {aboutTable[0].bio_title}
                </p>

                <p>
                  {aboutTable[0].bio_content_short}
                </p>

                <a href={`mailto:${aboutTable[2].mail}`}>
                  <img src={maillogo} alt="" width="30" height="30" className="maillogoabout" />
                </a>

                <a href={aboutTable[0].instagram} target="_blank" rel="noopener noreferrer">
                  <img src={Sitelogo} alt="" width="30" height="30" className="maillogoabout" />
                </a>

                <a href={aboutTable[0].linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinlogo} alt="" width="30" height="30" className="maillogoabout" />
                </a>

                <NavLink exact to="/anaisjaunay" className="contactbouttonanais">
                  En savoir plus sur Anaïs
                </NavLink>

              </div>
            </div>


            <div className="col s12 m6">
              <div className="cardtitlebio">
                <div className="card-image">
                  <img src={aboutTable[1].avatar} alt="Mathias Savary" className="circle responsive-img" width="150" height="150" />
                </div>

                <h3>
                  {`${aboutTable[1].firstname} ${aboutTable[1].lastname}`}
                </h3>

                <p className="titlefonctionanais">
                  {aboutTable[1].bio_title}
                </p>

                <p>
                  {aboutTable[1].bio_content_short}
                </p>

                <a href={`mailto:${aboutTable[2].mail}`}>
                  <img src={maillogo} alt="" width="30" height="30" className="maillogoabout" />
                </a>

                <a href={aboutTable[1].twitter} target="_blank" rel="noopener noreferrer">
                  <img src={twitterlogo} alt="" width="30" height="30" className="maillogoabout" />
                </a>

                <a href={aboutTable[1].linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinlogo} alt="" width="30" height="30" className="maillogoabout" />
                </a>

                <NavLink exact to="/mathiassavary" className="contactbouttonanais">
                  En savoir plus sur Mathias
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default About;
