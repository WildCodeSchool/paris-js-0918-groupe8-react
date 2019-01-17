/* global document */
/* global alert */

import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';
import Tinymce from '../tinymce/tinymce';

class Editarticle extends Component {
  state = {
    article: undefined,
  }

  componentDidMount() {
    this.setEdit();
    const elem = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elem);
  }

  setEdit = async () => {
    const response = await axios.get(`/api/articles/blog/${this.props.id_article}`);
    this.setState({
      article: response.data[0],

    });
  }

  setCreate = async (e) => {
    e.preventDefault();
    const { article } = this.state;
    await axios.put(
      `/api/articles/blog/${this.props.id_article}`, { content: article.content, title: article.title, main_picture: article.main_picture },
    )
      .then((response) => {
        if (response.status === 200) {
          alert('Modification prise en compte');
        } else if (response.status !== 200) {
          alert('Mise à jour echouée');
        }
      });
  }

  // setAjout= async (e) => {
  //   e.preventDefault();
  //   await axios.post(
  //     `/api/articles/blog/${this.props.id_article}`,
  //   )
  //     .then((response) => {
  //       if (response.status === 200) {
  //         alert('Modification prise en compte');
  //       } else if (response.status !== 200) {
  //         alert('Mise à jour echouée');
  //       }
  //     });
  // }


  handleEditorChange = (e) => {
    const article = { ...this.state.article };
    article.content = e.target.getContent();
    this.setState({ article });
  }

handleChange = (e) => {
  this.setState({ article: { ...this.state.article, [e.target.name]: e.target.value } });
}


render() {
  const {
    article,
  } = this.state;

  return (
    <div>
      <div className="row">
        <form>
          <label htmlFor="title">
              Titre
            <input name="title" id="title" value={(article || '').title} onChange={this.handleChange} />

          </label>
          <label htmlFor="image">
              Image
            <input name="main_picture" id="image" value={(article || '').main_picture} onChange={this.handleChange} />

          </label>
        </form>

        <div className="Editeurtinymceadmnistrateur col s9">
          <Tinymce article_content={article} handle={this.handleEditorChange} />
        </div>
      </div>
      <center>
        <a href="#1" className="btn-floating btn-large tooltipped waves-effect waves-light green darken-3 bouttonbackoffice" onClick={this.setCreate} data-position="bottom" data-tooltip="Publier">
          <i className="material-icons">
              check
          </i>
        </a>
        <a href="#2" className="btn-floating btn-large tooltipped waves-effect deep-orange accent-3 bouttonbackoffice" data-position="bottom" data-tooltip="Supprimer">
          <i className="material-icons">
            {' '}
            <li className="tab waves-effect waves-light">
                delete
            </li>
          </i>
        </a>
        <a href="#1" className="btn-floating btn-large tooltipped waves-effect grey bouttonbackoffice" data-position="bottom" data-tooltip="Brouillon">
          <i className="material-icons">
              do_not_disturb_alt

          </i>
        </a>
      </center>
    </div>

  );
}
}

export default Editarticle;
