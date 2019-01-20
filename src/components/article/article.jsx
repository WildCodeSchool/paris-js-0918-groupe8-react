import React, { Component } from 'react';
import axios from 'axios';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './article.css';

import renderHTML from 'react-render-html';

class Article extends Component {
  state = {
    article: [],
    isLoading: true,
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getArticle();
  }

  // REQUETE DE L'ARTICLE
  getArticle = async () => {
    const regex = /\d+$/g;
    // récupération de l'id article dans à la fin de l'url grâce à la regex
    const id = (this.props.match.params.article).match(regex);
    // fetch de l'article par l'id
    const response = await axios.get(`/api/articles/blog/${id[0]}`);
    this.setState({ article: response.data[0] });
    this.setState({ isLoading: false });
  }

  render() {
    const {
      article: {
        create_date, update_date, title, content, main_picture, firstname, lastname,
      }, isLoading,
    } = this.state;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const createDate = new Date(create_date).toLocaleDateString('fr-FR', options);
    const createHour = new Date(create_date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const updateDate = new Date(update_date).toLocaleDateString('fr-FR', options);
    const updateHour = new Date(update_date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    if (isLoading) {
      return <div className="progress container" style={{ margin: '50% 0%' }}><div className="indeterminate" /></div>;
    }
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
          <div className="infos-article">{`De ${firstname} ${lastname} - Rédigé le ${createDate} à ${createHour} - Modifié le ${updateDate} à ${updateHour}`}</div>

          <p className="blog-article">{renderHTML(content)}</p>
          <div className="bouttondevischarte">
            <NavLink exact smooth to="/blog" className="waves-effect waves-light btn blue darken-1">Retour au blog</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
