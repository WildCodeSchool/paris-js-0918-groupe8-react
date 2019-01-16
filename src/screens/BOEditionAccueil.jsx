import React from 'react';

import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';


import './BOgrids.css';

const BOEditionAccueil = () => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      {' '}
      <p style={{
        fontSize: '50px',
      }}
      >
Edition Accueil

      </p>
    </main>
  </div>
);

export default BOEditionAccueil;
