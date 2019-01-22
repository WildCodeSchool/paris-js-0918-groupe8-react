import React from 'react';

import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoCommentaire from '../components/bocommentaire/BoCommentaire';

import './BOgrids.css';

const BOcoms = () => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <BoCommentaire />
  </div>
);

export default BOcoms;
