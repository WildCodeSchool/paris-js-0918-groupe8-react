import React, { Component } from 'react';
import axios from 'axios';

import BocardListArticle from './BOcardListArticle';
import './GetArticles.css';

class BoArticle extends Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const response = await axios.get('/api/articles/blog');
    this.setState({
      articles: response.data,
    });
  }


  render() {
    const { articles } = this.state;

    return (
      <div>
        <p className="f1 measure tc b ">Espace Article</p>
        <br />
        <div className="blocarticle">
          {articles.map(article => (
            <BocardListArticle
              {...article}
              key={article.id_article}
              loadData={this.loadData}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BoArticle;
