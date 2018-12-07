/* global document */
import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import './navbar.css';
import Logo from '../../assets/img/conteurDigitalcrop.png';

class Navbar extends Component {
  componentDidMount() {
    const elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
    });
  }

  render() {
    return (
      <div>
        <nav className="Navbarfuck navbar-fixed">
          <div className="nav-wrapper">
            <a href="#test">
              <img className="left hide-on-med-and-down" src={Logo} width="60" height="60" alt="twitter" />
            </a>
            <a href="#test" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li className="texte1"><a href="#test">Accueil</a></li>
              <li><a href="#test">Charte</a></li>
              <li><a href="#test">Blog</a></li>
              <li><a href="#test">A propos</a></li>
              <li><a href="#test">Contact</a></li>
              <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="#test">Accueil</a></li>
          <li><a href="#test">Charte</a></li>
          <li><a href="#test">Blog</a></li>
          <li><a href="#test">A propos</a></li>
          <li><a href="#test">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
