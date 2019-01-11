import React from 'react';
import BoNavbar from '../components/boNavbar/BoNavbar';
// import BofficeMenu from '../components/boMenu/BofficeMenu';
import GetArticles from '../components/boarticle/GetArticles';

import './BOarticles.css';

const BOarticles = () => (
  <div className="grid-container">
    <aside className="grid-item BoNavbar">
      {/* <BofficeMenu /> */}
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <GetArticles />
    </main>
  </div>
);

export default BOarticles;
