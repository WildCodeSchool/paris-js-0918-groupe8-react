import React, { Component } from 'react';
import axios from 'axios';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './cover.css';

class Coverimage extends Component {
  state = {
    coverTable: {},
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getCoverTable();
  }

  // REQUETE DE L'ARTICLE 1 = ACCROCHE
  getCoverTable = async () => {
    const response = await axios.get('/api/articles/accroche');
    this.setState({ coverTable: response.data[0] });
  }

  render() {
    // déconstruction du state et alias du this.state
    const { coverTable } = this.state;

    return (
      <div className="global" id="home">
        <div className="container">
          <p className="titrecovertest center-align">
            {coverTable.title}
          </p>

          <div className="row">
            <p className="enonce">
              {coverTable.content}
            </p>
          </div>
          <div className="row">
            <div className="coverbuttonname">
              <NavLink exact to="/mathiassavary" className="waves-effect waves-light btn indigo darken-2">Mathias Savary</NavLink>

              <NavLink exact to="/anaisjaunay" className="waves-effect waves-light btn red darken-1">Anais Jaunay</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coverimage;
