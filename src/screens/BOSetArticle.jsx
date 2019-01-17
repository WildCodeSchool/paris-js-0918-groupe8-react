import React from 'react';
import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import SetArticle from '../components/boarticle/SetArticle';


const BOSetArticle = props => (
  <div className="grid-container">
    <header className="grid-item">
      <GoToSite />
    </header>
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <SetArticle id_article={props.match.params.id_article} url={props.match.url} />
    </main>
  </div>
);

export default BOSetArticle;
