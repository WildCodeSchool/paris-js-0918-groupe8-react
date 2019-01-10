/* global document */
import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import M from 'materialize-css/dist/js/materialize.min';

import routes from '../../routes/routes';

class BoNavbar extends Component {
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
        <div>
          <ul id="slide-out" className="sidenav sidenav-fixed">
            {routes.filter(elem => elem.path.includes('/admin')).map(prop => (
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
          <a href="#test" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </div>
    );
  }
}

export default BoNavbar;
