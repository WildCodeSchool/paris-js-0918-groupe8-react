/* global alert */
/* global document */

import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min';

class BoService2Edit extends Component {
  state = {
    title: '',
    short_content: '',
    main_picture: '',
  };

  componentDidMount() {
    this.getData();
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
    M.updateTextFields();
  }

  getData = async () => {
    const response = await axios.get('/api/articles/services');
    this.setState({
      title: response.data[1].title,
      short_content: response.data[1].short_content,
      main_picture: response.data[1].main_picture,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editCover = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const short_content = formData.get('short_content');
    const main_picture = formData.get('main_picture');
    await axios
      .put('/api/articles/service2', {
        title,
        short_content,
        main_picture,
      })
      .then((response) => {
        if (response.status === 200) {
          alert('La modification est bien enregistré')
        } else {
          alert('Un problème est survenu lors de la modification')
        }
      })
  };

  render() {
    // déconstruction du state et alias du this.state
    const { title, short_content, main_picture } = this.state;

    return (
      <div>

        <form onSubmit={this.editCover}>
        <div className="center-align">
          <img src={main_picture} alt="" width="100" height="100" />
        </div>
          <div className="row">
            <div className="input col s12">
              <label htmlFor="main_picture">
                Lien du pictogramme
                <input
                  name="main_picture"
                  id="main_picture"
                  value={main_picture}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input col s12">
              <label htmlFor="title">
                Service
                <input
                  name="title"
                  id="title"
                  value={title}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input col s12">
              <label htmlFor="short_content">
                Description du service
                <textarea
                  name="short_content"
                  id="short_content"
                  value={short_content}
                  onChange={this.handleChange}
                  className="materialize-textarea"
                  style={{ height: '150rem !important' }}
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn-floating btn-meddium tooltipped waves-effect waves-light"
            data-position="bottom"
            data-tooltip="Publier"
          >
            <i className="material-icons">check</i>
          </button>
        </form>
      </div>
    );
  }
}

export default BoService2Edit;
