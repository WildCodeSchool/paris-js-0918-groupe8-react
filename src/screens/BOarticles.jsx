import React from 'react';
<<<<<<< HEAD

import BoNavbar from '../components/boNavbar/BoNavbar';
import BOArticleNav from '../components/boarticle/BOArticleNav';

import './BOgrids.css';

const BOarticles = () => (
  <div className="grid-container">
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <BOArticleNav />
    </main>
=======
import BofficeMenu from '../components/boMenu/BofficeMenu';
import GetArticles from '../components/boarticle/GetArticles';
import BoFooter from '../components/bofooter/BoFooter';
import ArticleEdit from '../components/boarticle/Editarticle';

const BOarticles = () => (
  <div>
    <BofficeMenu />
    <GetArticles />
    <ArticleEdit />
    <BoFooter />
>>>>>>> tinymce
  </div>
);

export default BOarticles;
