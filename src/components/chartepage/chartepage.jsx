import React, { Component } from 'react';
import axios from 'axios';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './chartepage.css';

class Chartepage extends Component {
  state = {
    chartePageTable: [],
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getChartePageTable();
  }

  // REQUETE DE L'ARTICLE 3 - CHARTE LONGUE
  getChartePageTable = async () => {
    const res = await axios.get('/api/articles/charte-long');
    this.setState({ chartePageTable: res.data[0] });
  }

  render() {
    // déconstruction du state et alias du this.state
    const { chartePageTable } = this.state;

    return (
      <div className="chartepageglobal">
        <div className="container">

          {/* image */}
          <div>
            <img src={chartePageTable.main_picture} alt="Anais et Mathias" className="fitimage-article2" />
          </div>

          {/* article */}
          <br />
          <div className="titre-article">
            { chartePageTable.title }
          </div>

          <div className="blog-article">
            <p>
              { chartePageTable.content }
            </p>
          </div>

          <div className="bouttondevischarte">
            <NavLink exact smooth to="/#contact" className="waves-effect waves-light btn blue darken-1">Demander devis</NavLink>
          </div>

        </div>
      </div>
    );
  }
}

export default Chartepage;
