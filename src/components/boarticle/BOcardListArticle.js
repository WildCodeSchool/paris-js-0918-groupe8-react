import React from 'react';
import PropTypes from 'prop-types';
import EditButton from '../buttons/EditButton';
import TrashButton from '../buttons/TrashButton';

import StarButton from '../buttons/StarButton';
import './BOcardListArticle.css';

const BOcardListeArticle = ({
  id_article,
  main_picture,
  create_date,
  update_date,
  title,
  firstname,
  lastname,
  front_page_favorite,
  loadData,
}) => (

<<<<<<< HEAD
  <ul className="collection">
    <li className="collection-item avatar">
      <img src={main_picture} alt="" className="circle" />
      <span className="title">{title}</span>
      <p>
        {`Par ${firstname} ${lastname}`}
        <br />
        {`Créé le ${create_date} et mise à jour le ${update_date}`}
      </p>
      <a href="#!" className="secondary-content">
        <i className="material-icons"><EditButton /></i>
        <i className="material-icons"><TrashButton /></i>
        <i className="material-icons"><StarButton active={front_page_favorite} id_article={id_article} loadData={loadData}/></i>
      </a>
=======
  <ul className="list pl0">
    <li className="flex justify-between pa4-ns bb b--black-10">
      <div>
        <b className="db f3 mb1">{title}</b>
        <span className="f5 db lh-copy measure">
          {`Par ${firstname} ${lastname}`}
        </span>
        <time className="f6 db gray">
          {`Créé le ${create_date}`}
        </time>
        <time className="f6 db gray">
          {`Mise à jour le ${update_date}`}
        </time>
      </div>
      <div>
        <EditButton
          active={title}
          id_article={id_article}
          loadData={loadData}
        />
        <TrashButton />
        <StarButton
          active={front_page_favorite}
          id_article={id_article}
          loadData={loadData}
        />
      </div>
>>>>>>> test
    </li>
  </ul>
);

BOcardListeArticle.propTypes = {
  id_article: PropTypes.number.isRequired,
  main_picture: PropTypes.string,
  create_date: PropTypes.string.isRequired,
  update_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  front_page_favorite: PropTypes.number.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default BOcardListeArticle;
