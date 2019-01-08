import React from "react";
import EditButton from '../buttons/EditButton';
import TrashButton from '../buttons/TrashButton';

import HomePageButton from '../buttons/HomePageButton';
import './BOcardListArticle.css';

// il faudra rajouter les champs auteur et media quand les routes du back seront écrites...

const Article = ({ update_date, title, firstname, lastname, create_date, content }) => (

  <ul className="list pl0">
    <li className="flex justify-between pa4-ns bb b--black-10">
      {/* <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
        <img src="https://via.placeholder.com/140x100" className="db" alt="placeholder" />
      </div> */}
      <div>
        <b className="db f3 mb1">{title}</b>
        <span className="f5 db lh-copy measure">
          Par {firstname} {lastname}
        </span>
        <time className="f6 db gray">Créé le {create_date}</time>
        <time className="f6 db gray">Mise à jour le {update_date}</time>
      </div>
      <div>
        <EditButton />
        <TrashButton />
        <HomePageButton />
      </div>
    </li>
  </ul>

);

export default Article;