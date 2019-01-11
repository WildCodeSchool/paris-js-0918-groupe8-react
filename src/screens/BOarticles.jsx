import React from 'react';

import BoNavbar from '../components/boNavbar/BoNavbar';
import GetArticles from '../components/boarticle/GetArticles';

import './BOgrids.css';

const BOarticles = () => (
  <div className="grid-container">
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <GetArticles />
    </main>
  </div>
);

export default BOarticles;
