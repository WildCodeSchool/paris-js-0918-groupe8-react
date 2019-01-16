import React from 'react';

import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';

import Card from '../components/blog/card';

import './BOgrids.css';

const BOaccueil = () => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <p style={{ fontSize: '50px' }}>
      Accueil Back-Office
        <Card />
      </p>
    </main>
  </div>
);

export default BOaccueil;
