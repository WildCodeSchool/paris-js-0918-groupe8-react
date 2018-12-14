import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import routes from '../../routes/routes';
import BoHeader from '../boheader/BoHeader';


const BofficeMenu = () => (
  <div className="pa4 lh-copy">
    <BoHeader />

    <ul className="list pl0 ml0 left mw5 ba ">
      {routes.filter(elem => elem.path.includes('/admin')).map(prop => (
        <li className="ph3 pv2 bb">
          <NavLink
            exact
            to={prop.path}
            key={prop.path}
            activeClassName="active"
            activeStyle={{ borderBottom: '3px solid blue' }}
            className="f3 "
          >
            {prop.name}
          </NavLink>
        </li>
      ))}
    </ul>

  </div>
);

export default BofficeMenu;
