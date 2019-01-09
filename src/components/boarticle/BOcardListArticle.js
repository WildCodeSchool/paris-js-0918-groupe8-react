import React from 'react';
import PropTypes from 'prop-types';
import EditButton from '../buttons/EditButton';
import TrashButton from '../buttons/TrashButton';

import StarButton from '../buttons/StarButton';
import './BOcardListArticle.css';

const BOcardListeArticle = ({
  id_article,
  create_date,
  update_date, 
  title,
  firstname,
  lastname,
  front_page_favorite,
  loadData,
}) => (

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
        <EditButton />
        <TrashButton />
        <StarButton
          active={front_page_favorite}
          id_article={id_article}
          loadData={loadData}
        />
      </div>
    </li>
  </ul>
);

BOcardListeArticle.propTypes = {
  create_date: PropTypes.string.isRequired,
  update_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default BOcardListeArticle;
