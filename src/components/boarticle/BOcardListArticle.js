import React from 'react';
import PropTypes from 'prop-types';
import EditButton from '../buttons/EditButton';
import TrashButton from '../buttons/TrashButton';
import BrouillonButton from '../buttons/BrouillonButton';

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
  blog_status,
  content,
}) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const createDate = new Date(create_date).toLocaleDateString('fr-FR', options);
  const createHour = new Date(create_date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const updateDate = new Date(update_date).toLocaleDateString('fr-FR', options);
  const updateHour = new Date(update_date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div>
      <ul className="collection">
        <li className="collection-item avatar">
          <img src={main_picture} alt="" className="circle" />
          <span className="title">{title}</span>
          <p>
            {`Par ${firstname} ${lastname}`}
            <br />
            {`Créé le ${createDate} à ${createHour}  et mise à jour le ${updateDate} à ${updateHour}`}
          </p>
          <div className="secondary-content BocardListArticleblockButtons">
            
            <a href={`/admin/articles/edition/${id_article}`}>
              <EditButton content={content} id_article={id_article} blog_status={blog_status} loadData={loadData}/>
            </a>

            <BrouillonButton blog_status={blog_status} idArticle={id_article} loadData={loadData} />
            <TrashButton blog_status={blog_status} idArticle={id_article} loadData={loadData} />
            <StarButton active={front_page_favorite} idArticle={id_article} loadData={loadData} />
          </div>
        </li>
      </ul>
    </div>
  );
};

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
