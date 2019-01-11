import React from 'react';

import BoNavbar from '../components/boNavbar/BoNavbar';
import BoMedias from '../components/bomedias/BoMedias';

import './BOgrids.css';

const BOcoms = () => (
  <div className="grid-container">
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <p style={{ fontSize: '50px' }}>Commentaires Back-Office</p>
      <BoMedias />
    </main>
  </div>
);

export default BOcoms;
