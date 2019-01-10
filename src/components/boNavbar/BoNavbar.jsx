/* global document */
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import routes from '../../routes/routes';

const BoNavbar = () => (
  <div>
    <ul id="slide-out" className="sidenav sidenav-fixed">
      {routes.filter(elem => elem.path.includes('/admin'))
        .map(prop => (
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
);

export default BoNavbar;
