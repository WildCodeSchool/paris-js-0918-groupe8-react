/* global document */
import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import M from 'materialize-css/dist/js/materialize.min';
import './navbar.css';
import Logo from '../../assets/img/iconConteursDuDigitalStorytelling.png';
import routes from '../../routes/routes';

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
        <div className="navbar-fixed">
          <nav className="Navbarconteurdigital">
            <div className="nav-wrapper">
              <a href="#/">
                <img className="left hide-on-med-and-down logoconteurdigital" src={Logo} width="50" height="50" alt="logo conteur digital" />
                <ul id="nav-mobile" className="left hide-on-med-and-down titlelogoconteurdigital">
                  <li>Conteur Digital</li>
                </ul>
              </a>
              <a href="#test" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                {routes.filter(elem => !elem.path.includes('/admin')).map(prop => (
                  <li>
                    <NavLink
                      exact
                      smooth
                      to={prop.path}
                      key={prop.path}
                      activeClassName="active"
                      activeStyle={{ borderBottom: '3px solid white' }}
                    >
                      {prop.name}
                    </NavLink>
                  </li>
                ))}
                <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                
              </ul>
            </div>
          </nav>
        </div>

        <div>
          <ul className="sidenav" id="mobile-demo">
            {routes.filter(elem => !elem.path.includes('/admin')).map(prop => (
              <li>
                <NavLink
                  exact
                  to={prop.path}
                  key={prop.path}
                >
                  {prop.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
