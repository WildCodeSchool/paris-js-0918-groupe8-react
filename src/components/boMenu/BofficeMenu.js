import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import routes from '../../routes/routes';

const BofficeMenu = () => (
  <div className="pa4 lh-copy">
    <h1 className="b f1 f-headline-ns tc db mb3 mb4-ns" title="Home">
      Le conteur Digital
    </h1>

    <h1 className="f4 bold left mw5">Tableau de Bord</h1>

    <ul className="list pl0 ml0 left mw5 ba b--light-silver br3">
      {routes.filter(elem => elem.path.includes('/admin')).map(prop => (
        <li className="ph3 pv2 bb b--light-silver">
          <NavLink
            exact
            to={prop.path}
            key={prop.path}
            activeClassName="active"
            activeStyle={{ borderBottom: '3px solid red' }}
            class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2"
          >
            {prop.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default BofficeMenu;
