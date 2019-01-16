import React from 'react';

import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoAdmin from '../components/boadmin/BoAdmin';

import './BOgrids.css';

const BOadmin = () => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <p style={{ fontSize: '50px' }}>Administrateur Back-Office</p>
      <BoAdmin />
    </main>
  </div>
);

export default BOadmin;
