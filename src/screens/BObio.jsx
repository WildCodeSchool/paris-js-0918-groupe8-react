import React from 'react';

import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import Bobio from '../components/bobio/Bobio';

import './BOgrids.css';

const BObio = props => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <Bobio {...props} />
    </main>
  </div>
);

export default BObio;
