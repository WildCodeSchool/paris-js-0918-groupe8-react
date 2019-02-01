import React from 'react';
import PropTypes from 'prop-types';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './card.css';
import renderHTML from 'react-render-html';

const regex = /[\\.,:?!\-_€$]/gi;

// regex2 :
// () first and second group of analyse,
// ^ start of string,
// <> literally characters,
// []+ many characters,
// i case insensitive,
// g global
const regex2 = /(<([^>]+)>)/ig;

const CardBody = ({
  id_article, create_date, update_date, title, content, main_picture, firstname, lastname, avatar,
}) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const createDate = new Date(create_date).toLocaleDateString('fr-FR', options);
  return (
    <div className="col s12 m6 l4">
      <NavLink
        exact
        to={`/blog/${title.toLowerCase().replace(regex, '').split(' ').join('-')}-${id_article}`}
      >
        <div className="card hoverable card-size">
          <div className="card-image">
            <img className="fitimage-card" src={main_picture} alt="Article" />
          </div>
          <div className="card-content black-text">
            <p className="left-align"><b>{title}</b></p>
            <hr />
            <p className="left-align textcontent">
              {' '}
              {renderHTML(`${content.replace(regex2, '').slice(0, 150)}`)}
              {' '}
            </p>
            <br />
            <div className="card-action">
              <div className="row valign-wrapper">
                <div className="col s4">
                  <img src={avatar} alt="avatar" className="circle responsive-img" />
                </div>
                <div className="col s8">
                  <span className="black-text left-align">
                    <b>
                      {`${firstname}
                    ${lastname}`}
                    </b>
                    <br />
                    <i className="card-createDate">
                      {`Publié le ${createDate}`}
                    </i>
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </NavLink>
    </div>

  );
};

CardBody.propTypes = {
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

export default CardBody;
