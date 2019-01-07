import React from 'react';
import './cover.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Coverimage = () => (

  <div className="global" id="home">

    <div className="container">
      <p className="titrecovertest center-align">Conteur Digital</p>

      <div className="row">

        <p className="enonce">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit
        optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates
        voluptas?
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

export default Coverimage;
