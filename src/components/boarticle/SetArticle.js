/* global document */
/* global alert */

import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Tinymce from '../tinymce/tinymce';

// import TrashButton from '../buttons/TrashButton';
import BrouillonButton from '../buttons/BrouillonButton';
// import StarButton from '../buttons/StarButton';


class SetArticle extends Component {
  state = {
    article: {},
  }

  componentDidMount() {
    this.setEdit();
    const elem = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elem);
  }

  setEdit = async () => {
    const { id_article } = this.props;
    if (id_article !== undefined) {
      const response = await axios.get(`/api/articles/blog/${id_article}`);
      this.setState({
        article: response.data[0],
      });
    }
  }

  updateArticle = async (e) => {
    e.preventDefault();
    const { id_article } = this.props;
    const { article } = this.state;
    await axios.put(
      `/api/articles/blog/${id_article}`, {
        content: article.content,
        title: article.title,
        main_picture: article.main_picture,
      },
    )
      .then((response) => {
        if (response.status === 200) {
          alert('Modification prise en compte');
        } else if (response.status !== 200) {
          alert('Mise à jour echouée');
        }
      });
  }

  handleEditorChange = (e) => {
    const article = { ...this.state.article };
    article.content = e.target.getContent();
    this.setState({ article });
  }

  handleChange = (e) => {
    this.setState({ article: { ...this.state.article, [e.target.name]: e.target.value } });
  }

  postArticle = (event) => {
    event.preventDefault();
    const { article } = this.state;
    const title = article.title;
    const content = article.content;
    const main_picture = article.main_picture;
    const blog_status = 'published'; // à finir de paramétrer
    const front_page_favorite = 0;
    // intégrer l'admin user ici quand autentification effective.
    const admin_id_user = 1;
    axios
      .post('/api/articles/', {
        title,
        content,
        main_picture,
        blog_status,
        front_page_favorite,
        admin_id_user,
      })
      .then((response) => {
        if (response.status === 200) {
          alert('L\'article est bien enregistré')
        } else {
          alert('Un problème est survenu lors de l\'enregistrement')
        }
      });
  }

  handleSubmit = (event) => {
    const { url } = this.props;
    if (url === '/admin/articles/add') {
      this.postArticle(event);
    } else {
      this.updateArticle(event);
    }
  }

  render() {
    const { article } = this.state;

    return (
      <div>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">
              Titre
              <input
                name="title"
                id="title"
                value={(article || '').title}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="image">
              Image
              <input
                name="main_picture"
                id="image"
                value={(article || '').main_picture}
                onChange={this.handleChange}
              />
            </label>

            <div className="Editeurtinymceadmnistrateur">
              <Tinymce
                article_content={article}
                handle={this.handleEditorChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn-floating btn-meddium tooltipped waves-effect waves-light"
                data-position="bottom"
                data-tooltip="Publier dans le form"
              >
                <i className="material-icons">
                    check
                </i>
              </button>
              <BrouillonButton />
              {/* <StarButton /> */}
              {/* <TrashButton /> */}   
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// SetArticle.PropTypes = {
//   url: PropTypes.string.isRequired,
// };

export default SetArticle;