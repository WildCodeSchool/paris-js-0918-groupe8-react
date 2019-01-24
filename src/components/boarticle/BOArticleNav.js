import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BOFilterArticle from './BoFilterArticle';
import AddNewArticleButton from '../buttons/AddNewArticleButton';

class BOArticleNav extends Component {
  state = {
    articles: [],
    status: ['published'],
    nbAll: 0,
    nbPublished: 0,
    nbWritting_progress: 0,
    nbArchived: 0,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const response = await axios.get('/api/articles/blog');
    this.setState({
      articles: response.data,
      nbAll: response.data.length,
      nbPublished: response.data.filter(e => e.blog_status.includes('published')).length,
      nbWritting_progress: response.data.filter(e => e.blog_status.includes('writting_progress')).length,
      nbArchived: response.data.filter(e => e.blog_status.includes('archived')).length,
    });
    // console.log(this.state.articles.map.filter(e => status.includes('published'))
  }

  setStatus = (e) => {
    switch (e.target.id) {
      case '#tous':
        this.setState({
          status: ['published', 'writting_progress', 'archived'],
        });
        break;
      case '#publies':
        this.setState({
          status: ['published'],
        });
        break;
      case '#brouillons':
        this.setState({
          status: ['writting_progress'],
          // nbWritting_progress: ,
        });
        break;
      case '#supprimes':
        this.setState({
          status: ['archived'],
          // nbArchived: 0,
        });
        break;
      default:
        this.setState({
          status: ['published', 'writting_progress', 'archived'],
        });
        break;
    }
  }

  render() {
    const { articles, status, nbAll, nbPublished, nbWritting_progress, nbArchived } = this.state;
    return (
      <div>
        <nav className="nav-extended BOArticleNav">
          <div className="nav-content" style={{ background: '#003F5F', color: '#FFFFFF' }}>
            <ul id="nav-mobile" className="tabs tabs-transparent ">
              <li className="tab">
                <Link
                  to="#publies"
                  onClick={this.setStatus}
                  id="#publies"
                  activeclassname="active"
                  activestyle={{ fontWeight: 'Bold' }}
                >
                  Publiés
                  <span className="badge">{nbPublished}</span>
                </Link>
              </li>
              <li className="tab">
                <Link
                  to="#brouillons"
                  onClick={this.setStatus}
                  id="#brouillons"
                  activeclassname="active"
                  activestyle={{ fontWeight: 'Bold' }}
                >
                  Brouillons
                  <span className="badge">{nbWritting_progress}</span>
                </Link>
              </li>
              <li className="tab">
                <Link
                  to="#supprimes"
                  onClick={this.setStatus}
                  id="#supprimes"
                  activeclassname="active"
                  activestyle={{ fontWeight: 'Bold' }}
                >
                  Archivés
                  <span className="badge">{nbArchived}</span>
                </Link>
              </li>
              <li className="tab">
                <Link
                  to="#tous"
                  onClick={this.setStatus}
                  id="#tous"
                  activeclassname="active"
                  activestyle={{ fontWeight: 'Bold' }}
                >
                  Tous
                  <span className="badge">{nbAll}</span>
                </Link>
              </li>
              <div className="valign-wrapper">
                <AddNewArticleButton articles={articles} className="BOArticleNavButton" />
              </div>
            </ul>
          </div>
        </nav>
        <BOFilterArticle articles={articles} status={status} loadData={this.loadData} />
      </div>
    );
  }
}

export default BOArticleNav;
