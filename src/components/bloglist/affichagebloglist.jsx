import React, { Component } from 'react';
import axios from 'axios';
import Cardbloglist from './bloglist';
import './bloglist.css';


class Affichagebloglist extends Component {
  state = {
    homeArticles: [],
    page: 1,
    numPerPage: 10,
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getHomeArticles();
  }

  // REQUETE DE LA LISTE ARTICLES
  getHomeArticles = async () => {
    const response = await axios.get('/api/articles/blog');
    this.setState({
      homeArticles: response.data,
    });
  }

  // SMOOTH EFFECT

  getAssoPerPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  handleButtonPrevious = () => {
    const { page } = this.state;
    if (page > 1) {
      this.setState(
        {
          page: page - 1,
        },
        this.getAssoPerPage,
      );
    }
  };

  handleButtonNext = () => {
    const { page, homeArticles, numPerPage } = this.state;
    if (homeArticles.length / numPerPage > page) {
      this.setState(
        {
          page: page + 1,
        },
        this.getAssoPerPage,
      );
    }
  };

  render() {
    const { homeArticles, page, numPerPage } = this.state;

    return (
      <div className="cardglobal">
        <div className="container">
          <h3 className="center-align titreblog1">BLOG</h3>
          <div className="row">
            {homeArticles && homeArticles.slice(numPerPage * (page - 1), numPerPage * (page)).filter(e => e.blog_status === 'published').map(elem => (
              <Cardbloglist {...elem} key={elem.id_article} />
            ))}
            <button type="button" onClick={this.handleButtonPrevious}>Prev</button>
            {page}
            <button type="button" onClick={this.handleButtonNext}>Next</button>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Affichagebloglist;
