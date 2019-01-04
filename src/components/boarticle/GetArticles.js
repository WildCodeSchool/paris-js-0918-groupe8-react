import React, { Component } from 'react';
import axios from 'axios';

import BocardListArticle from './BOcardListArticle';

class BoArticle extends Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await axios.get('http://localhost:3001/api/articles/');
    this.setState({
      articles: response.data,
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div>
        Affichage des articles
        {articles.map(article => (
          <BocardListArticle {...article} key={article.id_article} />
        ))}
      </div>
    );
  }
}

export default BoArticle;