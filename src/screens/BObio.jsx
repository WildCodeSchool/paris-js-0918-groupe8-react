import React from 'react';

import BoNavbar from '../components/boNavbar/BoNavbar';
import Bobio from '../components/bobio/Bobio';

import './BOgrids.css';

const BObio = () => (
  <div className="grid-container">
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <Bobio />
    </main>
  </div>
);

export default BObio;
