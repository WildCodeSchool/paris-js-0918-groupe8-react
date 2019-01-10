import React, { Component } from 'react';
import axios from 'axios';
import CardBody from './listblog';
import '../blog/card.css';


class Bloglist extends Component {
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
    //  console.log(this.state.homeArticles)
    const { homeArticles } = this.state;
    return (
      <div className="cardglobal">
        <div className="container">
          <h3 className="center-align titreblog1">BLOG</h3>
          <div className="row">
            {homeArticles && homeArticles.map(elem => (
              <CardBody {...elem} key={elem.id_article} />
            ))}
          </div>
          <p>ddddddd</p>
        </div>
      </div>
    );
  }
}

export default Bloglist;
