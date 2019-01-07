import React, { Component } from 'react';
import axios from 'axios';

import BocardListArticle from './BOcardListArticle';
import './GetArticles.css';

class BoArticle extends Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await axios.get('http://localhost:3001/api/articles/blog');
    this.setState({
      articles: response.data,
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div>
        <div className="titrearticle">
            Affichage des articles
        </div>

        <div className="blocarticle">
          {articles.map(article => (
            <BocardListArticle {...article} key={article.id_article} />
          ))}
        </div>
      </div>
    );
  }
}

export default BoArticle;
