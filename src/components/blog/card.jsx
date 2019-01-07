import React, { Component } from 'react';
import axios from 'axios';
import CardBody from './cardBody';
import './card.css';


class Card extends Component {
  state = {
    homeArticles: [],
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getHomeArticles();
  }

  // REQUETE DE LA LISTE ARTICLES
  getHomeArticles = async () => {
    const response = await axios.get('/api/articles/blog');
    this.setState({ homeArticles: response.data });
  }

  render() {
    // console.log(this.state.homeArticles)
    const { homeArticles } = this.state;
    return (
      <div className="cardglobal">
        <div className="container">
          <h3 className="center-align titreblog1">BLOG</h3>
          <div className="row">
            {homeArticles && homeArticles.filter(e => e.front_page_favorite).map(elem => (
              <CardBody {...elem} key={elem.id_article} />
            ))}
          </div>
        </div>
        {/* <Route exact path={prop.path} component=BlogArticle /> */}
      </div>
    );
  }
}

export default Card;
