import React from 'react';
import SetArticle from '../components/boarticle/SetArticle';
import BoNavbar from '../components/boNavbar/BoNavbar';


const BOeditarticle = props => (
  <div className="grid-container">
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">


      <SetArticle id_article={props.match.params.id_article} />
    </main>
  </div>
);

export default BOeditarticle;
