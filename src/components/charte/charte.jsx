import React, { Component } from 'react';
import axios from 'axios';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './charte.css';

class Charte extends Component {
  state = {
    charteTable: {},
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getCharteTable();
  }

  // REQUETE DE L'ARTICLE 2 = CHARTE-SHORT
  getCharteTable = async () => {
    const response = await axios.get('/api/articles/charte-short');
    this.setState({ charteTable: response.data[0] });
  }

  render() {
    const { charteTable } = this.state;

    return (
      <div className="cardglobal testimage textecharte container">
        <h3 className="center-align titrecharte1 white-text">{charteTable.title}</h3>
        <p className="center-align white-text phrasenumber1">{charteTable.short_content}</p>
        <div className="bouttonensavoirplus">
          <NavLink exact smooth to="/charte" className="center-align waves-effect waves-light btn deep-purple accent-3"> En savoir plus</NavLink>
        </div>

        {/* il faut laisser le <p> suivant, vide, tant que la mise en page n'est pas modifiée */}
        <p className="center-align white-text phrasenumber3"> </p>
      </div>
    );
  }
}

export default Charte;
