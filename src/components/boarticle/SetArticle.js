/* global document */
/* global alert */

import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';
import PropTypes from 'prop-types';
import Tinymce from '../tinymce/tinymce';

import TrashButton from '../buttons/TrashButton';
// import BrouillonButton from '../buttons/BrouillonButton';
import StarButton from '../buttons/StarButton';


class SetArticle extends Component {
  state = {
    article: {
      title: '',
      main_picture: '',
      content: '',
    },
    blog_status: 'writting_progress',
    front_page_favorite: 0,
    admin_id_user: 1,
    isCheckedAnais: "checked",
    isCheckedMathias: "",
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
      // console.log(`setEdit = ${Object.entries(responseject.entries(response)}`);
      // console.log(`setEdit = ${response.data[0].blog_status}`);
      this.setState({
        article: response.data[0],
        blog_status: response.data[0].blog_status,
        front_page_favorite: response.data[0].front_page_favorite,
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

  handleAuthor = (e) => {
    if (e.target.id === "Anais") {
      this.setState({ admin_id_user: 1, isCheckedAnais: "checked", isCheckedMathias: "" })
    } else {
      this.setState({ admin_id_user: 2, isCheckedAnais: "", isCheckedMathias: "checked" })
    }
  }

  handleChange = (e) => {
    this.setState({article: { ...this.state.article, [e.target.name]: e.target.value } });
  }

  postArticle = (event) => {
    event.preventDefault();
    const { article } = this.state;
    const title = article.title;
    const content = article.content;
    const main_picture = article.main_picture;
    const blog_status = this.state.blog_status;
    const front_page_favorite = 0;
    const admin_id_user = this.state.admin_id_user;
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

  setWrittingProgress = () => {
    const { idArticle} = this.props;
    axios
      .put(
        `/api/articles/blog/${idArticle}`,
        { blog_status: 'writting_progress' },
      )
      .then(this.setEdit);
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
    const { article, blog_status, front_page_favorite, isCheckedAnais, isCheckedMathias } = this.state;
    const { id_article, url } = this.props;

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

            { (url === '/admin/articles/add')
              ? (
                <div>
                  <p>Article rédigé par : </p>
                  <p>
                    <label htmlFor="Anais">
                      <input
                        onClick={this.handleAuthor}
                        type="checkbox"
                        id="Anais"
                        checked={isCheckedAnais}
                      />
                      <span>Anaïs</span>
                    </label>
                  </p>
                  <p>
                    <label htmlFor="Mathias">
                      <input
                        onClick={this.handleAuthor}
                        type="checkbox"
                        id="Mathias"
                        checked={isCheckedMathias}
                      />
                      <span>Mathias</span>
                    </label>
                  </p>
                </div>
              )
              : ''
            }

            <div className="Editeurtinymceadmnistrateur">
              <Tinymce
                article_content={article}
                handle={this.handleEditorChange}
              />
            </div>

            <button
              type="submit"
              className="btn-floating btn-meddium tooltipped waves-effect waves-light"
              data-position="bottom"
              data-tooltip="Enregistrer en tant que brouillon"
            >
              <i className="material-icons">
                  description
              </i>
            </button>

          </form>

          <StarButton idArticle={id_article} loadData={this.setEdit} blog_status={blog_status} front_page_favorite={front_page_favorite} />

          { (url !== '/admin/articles/add')
            ? <TrashButton idArticle={id_article} blog_status={blog_status} loadData={this.setEdit} />
            : ''
          }
        </div>
      </div>
    );
  }
}

SetArticle.propTypes = {
  url: PropTypes.string.isRequired,
};

export default SetArticle;
