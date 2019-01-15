import React from 'react';

import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoMedias from '../components/bomedias/BoMedias';

import './BOgrids.css';

const BOmedias = () => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <p style={{ fontSize: '50px' }}>Médias Back-Office</p>
      <BoMedias />
    </main>
  </div>
);

export default BOmedias;
