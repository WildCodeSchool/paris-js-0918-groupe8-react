import React from 'react';
import Editarticle from '../components/boarticle/Editarticle';
import BoNavbar from '../components/boNavbar/BoNavbar';


const BOeditarticle = props => (
  <div className="grid-container">
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">


      <Editarticle id_article={props.match.params.id_article} />
    </main>
  </div>
);

export default BOeditarticle;
