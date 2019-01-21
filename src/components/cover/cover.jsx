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

        <div className="container ">
          {/* Desktop */}
          <p className="titrecovertest center-align hide-on-med-and-down">
            {coverTable.title}
          </p>
            <p className="enonce hide-on-med-and-down">
              {coverTable.content}
            </p>
        
          <div className="row">
            <div className="coverbuttonname hide-on-med-and-down">
              <NavLink exact to="/mathiassavary" className="waves-effect waves-light btn indigo darken-2">Mathias Savary</NavLink>

              <NavLink exact to="/anaisjaunay" className="waves-effect waves-light btn red darken-1">Anais Jaunay</NavLink>
            </div>
          </div>
          {/* Pour les mobiles */}
          <p className="titrecovertest2 center-align show-on-medium-and-down hide-on-large-only">
            {coverTable.title}
          </p>

          <div className="row show-on-medium-and-down hide-on-large-only">
            <p className="enonce2 show-on-medium-and-down">
              {coverTable.content}
            </p>
          </div>
          <div className="row">
            <div className="coverbuttonname show-on-medium-and-down hide-on-large-only">
              <NavLink exact to="/mathiassavary" className="waves-effect waves-light btn indigo darken-2 bouttonmobilemathias">Mathias Savary</NavLink>


              <NavLink exact to="/anaisjaunay" className="waves-effect waves-light btn red darken-1 bouttonmobileanais">Anais Jaunay</NavLink>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coverimage;
