import React, { Component } from 'react';
import axios from 'axios';

class BoArticle extends Component {

  state = {
    articles: []
  }

  getArticles = async () => {
    const response = await axios.get('http://localhost:3001/api/articles/');
    console.log(response);
  }

  render() {

    return (
      <div>
        Affichage des articles
      </div>
    );
  }
}

export default BoArticle;
