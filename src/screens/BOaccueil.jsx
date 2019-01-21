import React from 'react';

import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoAccueil from '../components/boaccueil/BoAccueil';

import './BOgrids.css';

const BOaccueil = () => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <BoAccueil />

  </div>
);

export default BOaccueil;
