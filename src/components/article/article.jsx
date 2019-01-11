import React from 'react';
import PropTypes from 'prop-types';
import './article.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Article = ({
  id_article, create_date, update_date, title, content, main_picture, firstname, lastname, avatar,
}) => (
  <div className="chartepageglobal">
    <div className="container">

      <div className="articlecoverimg">
        <div className="transbox">
          <p className="black">{`${title} ${create_date} - De ${firstname} ${lastname}`}</p>


        </div>
      </div>
      <br />
      <div className="titrearticle">{title}</div>
      <p className="blocarticle">{content}</p>

      <p className="blocarticle">{content}</p>

      <div className="bouttondevischarte">
        <NavLink exact smooth to="/" className="waves-effect waves-light btn blue darken-1">Accueil</NavLink>
      </div>

    </div>
  </div>

);

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
