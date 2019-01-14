import React from 'react';
import PropTypes from 'prop-types';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './article.css';


const Article = ({
  id_article, create_date, update_date, title, content, main_picture, firstname, lastname, avatar,
}) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const createDate = new Date(create_date).toLocaleDateString('fr-FR', options);
  const createHour = new Date(create_date).toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'});
  const updateDate = new Date(update_date).toLocaleDateString('fr-FR', options);
  const updateHour = new Date(update_date).toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'});
  return (
    <div className="chartepageglobal">
      <div className="container">
        {/* image */}
        <div>
          <img src={main_picture} alt={title} className="fitimage-article" />
        </div>
        {/* article */}
        <br />
        <div className="titre-article">{title}</div>
        <div className="infos-article">{`De ${firstname} ${lastname} - Rédigé le ${createDate} à ${createHour} - Modifié le ${updateDate} à à ${updateHour}`}</div>
        <p className="blog-article">{content}</p>
        <p className="blog-article">{content}</p>
        <div className="bouttondevischarte">
          <NavLink exact smooth to="/" className="waves-effect waves-light btn blue darken-1">Accueil</NavLink>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  id_article: PropTypes.number.isRequired,
  main_picture: PropTypes.string.isRequired,
  create_date: PropTypes.string.isRequired,
  update_date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Article;
