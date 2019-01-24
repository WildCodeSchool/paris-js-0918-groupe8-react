import React from 'react';

import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BOArticleNav from '../components/boarticle/BOArticleNav';
import LogOut from '../components/buttons/Logout';

import './BOgrids.css';

const BOarticles = () => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
      
      <LogOut />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <BOArticleNav />
    </main>
  </div>
);

export default BOarticles;
