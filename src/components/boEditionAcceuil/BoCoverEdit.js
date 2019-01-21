/* global alert */
/* global document */

import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min';

class BoCoverEdit extends Component {
  state = {
    title: '',
    content: '',
  };

  componentDidMount() {
    this.getData();
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
    M.updateTextFields();
  }

  getData = async () => {
    const response = await axios.get('/api/articles/accroche');
    this.setState({
      title: response.data[0].title,
      content: response.data[0].content,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // REQUETE DE L'ARTICLE 1 = ACCROCHE
  editData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const content = formData.get('content');
    await axios
      .put('/api/articles/accroche', {
        title,
        content,
      })
      .then((response) => {
        if (response.status === 200) {
          alert('La modification est bien enregistré')
        } else {
          alert('Un problème est survenu lors de la modification')
        }
      })
      .then(window.location.reload());
  };

  render() {
    // déconstruction du state et alias du this.state
    const { title, content } = this.state;

    return (
      <div>
      
        <form onSubmit={this.editData}>

          <div className="row">
            <div className="input col s12">
              <label htmlFor="title">
                Titre principal
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
            <div className="input-field col s12">
              <label htmlFor="content">
                Accroche
                <textarea
                  rows="10"
                  name="content"
                  id="content"
                  value={content}
                  onChange={this.handleChange}
                  className="materialize-textarea"
                  placeholder=""
                  style={{ height: '150rem !important' }}
                />
              </label>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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

export default BoCoverEdit;
