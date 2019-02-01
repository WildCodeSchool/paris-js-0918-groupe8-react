import React, { Component } from 'react';
import axios from 'axios';

import './footer.css';


class Footer extends Component {
  state = {
    footerTable: [],
    isLoading: true,
  }

  // APPEL REQUETE
  componentDidMount() {
    this.getFooterTable();
  }

  // REQUETE DES ADMINS
  getFooterTable = async () => {
    const res = await axios.get('/api/admin');
    this.setState({ footerTable: res.data });
    this.setState({ isLoading: false });
  }

  render() {
    // déconstruction du state et alias du this.state
    const { footerTable, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="grey darken-4 center-align">

          <div className="titrefooter">
            <p className="white-text">SUIVEZ-NOUS</p>
          </div>

          <a href={`mailto:${footerTable[2].mail}`} target="_blank" rel="noopener noreferrer" className="btn-floating pulse indigo boutton-social-footer">
            <i className="far fa-envelope-open" />
          </a>

          <a href={footerTable[2].instagram} target="_blank" rel="noopener noreferrer" className="btn-floating pulse indigo boutton-social-footer">
            <i className="fab fa-instagram" />
          </a>

        </div>
        <div className="black center-align footerbackcopyright">
          <p className="white-text">
            Copyright © 2019 Conteur digital
          </p>
          <p className="white-text">
            Site réalisé par
            <a href="https://github.com/GuillaumeFerry" target="_blank" rel="noreferrer noopener"> Guillaume Ferry, </a>
            <a href="https://github.com/af1ne" target="_blank" rel="noreferrer noopener">Delphine Brunet, </a>
            <a href="https://github.com/matmat92" target="_blank" rel="noreferrer noopener">Mathieu Thiry, </a>
            <a href="https://github.com/julieLM77" target="_blank" rel="noreferrer noopener">Julie Ly Minh </a>
            <a href="https://github.com/par38" target="_blank" rel="noreferrer noopener">et Monica Tarabusi</a>
          </p>
          {/* <p>
            <a href="#test">Mentions Légales</a>
          </p> */}
        </div>
      </div>
    );
  }
}

export default Footer;
