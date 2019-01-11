import React from 'react';

import BoNavbar from '../components/boNavbar/BoNavbar';


const BOaccueil = () => (
  <div className="grid-container">
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <p style={{ fontSize: '50px' }}>
      Accueil Back-Office
      </p>
    </main>
  </div>
);

export default BOaccueil;
