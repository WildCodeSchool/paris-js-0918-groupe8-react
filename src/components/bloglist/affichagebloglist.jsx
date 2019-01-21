/* global window */
import React, { Component } from 'react';
import axios from 'axios';
import Cardbloglist from './bloglist';
import './bloglist.css';


class Affichagebloglist extends Component {
  state = {
    homeArticles: [],
    pageActive: 1,
    numPerPage: 10,
    nbPages: [],
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getHomeArticles();
  }

  // REQUETE DE LA LISTE ARTICLES
  getHomeArticles = async () => {
    const response = await axios.get('/api/articles/blog');
    const TotalPages = (Math.ceil(response.data.length / 10));
    const arrayPages = Array.apply(null, {length: TotalPages +1}).map(Number.call, Number)
    arrayPages.shift();
    this.setState({
      homeArticles: response.data,
      nbPages: arrayPages,
    });
  }

  // SMOOTH EFFECT

  getAssoPerPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  handleButtonPrevious = () => {
    const { pageActive } = this.state;
    if (pageActive > 1) {
      this.setState(
        {
          pageActive: pageActive - 1,
        },
        this.getAssoPerPage,
      );
    }
  };

  handleCurrentPage = (currentePage) => {
    this.setState({ pageActive: currentePage })
  };

  handleButtonNext = () => {
    const { pageActive, homeArticles, numPerPage } = this.state;
    if (homeArticles.length / numPerPage > pageActive) {
      this.setState(
        {
          pageActive: pageActive + 1,
        },
        this.getAssoPerPage,
      );
    }
  };

  render() {
    const { homeArticles, pageActive, numPerPage, nbPages } = this.state;

    return (
      <div className="cardglobal">
        <div className="container">
          <h3 className="center-align titreblog1">BLOG</h3>
          <div className="row">
            <div className="col s12">
              {homeArticles && homeArticles.filter(e => e.blog_status === 'published').slice(numPerPage * (pageActive - 1), numPerPage * (pageActive)).map(elem => (
                <Cardbloglist {...elem} key={elem.id_article} />
              ))}
            </div>
            <div className="row">
              <div className="col s12">
                <div className="center-align">
                  <ul className="pagination">
                    <li className="disabled">
                      <button type="button" onClick={this.handleButtonPrevious} className="btn-flat">
                        <i className="material-icons">
                          chevron_left
                        </i>
                      </button>
                    </li>
                    
                    {nbPages.map((nbPage, index) => (
                      <li
                        index={index}
                        className={(nbPage === pageActive) ? 'active grey' : 'waves-effect'}
                      >
                        <button
                          type="button"
                          className="btn-flat"
                          onClick={() => this.handleCurrentPage(index + 1)}
                        >
                          {nbPage}
                        </button>
                      </li>
                    ))}
        
                    <li className="disabled">
                      <button type="button" onClick={this.handleButtonNext} className="btn-flat">
                        <i className="material-icons">
                          chevron_right
                        </i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Affichagebloglist;
