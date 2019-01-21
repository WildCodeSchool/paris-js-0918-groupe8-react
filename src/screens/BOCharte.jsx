import React from 'react';

import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoChartePageEdit from '../components/bocharte/BoChartePageEdit';


const BOeditarticle = props => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <BoChartePageEdit content={props.match.params.content} />
    </main>
  </div>
);

export default BOeditarticle;
