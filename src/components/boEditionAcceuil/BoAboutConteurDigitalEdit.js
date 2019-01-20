/* global alert */
/* global document */

import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min';

class BoAboutConteurDigitalEdit extends Component {
  state = {
    mail: '',
    instagram: '',
  };

  componentDidMount() {
    this.getData();
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
    M.updateTextFields();
  }

  getData = async () => {
    const response = await axios.get('/api/admin/3');
    this.setState({
      mail: response.data[0].mail,
      instagram: response.data[0].instagram,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const mail = formData.get('mail');
    const instagram = formData.get('instagram');
    await axios
      .put('/api/admin/bio/3', {
        mail,
        instagram,
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
    const {
      mail,
      instagram,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.editData}>
          <div className="row">
            <div className="input col s12">
              <label htmlFor="mail">
                Mail
                <input
                  name="mail"
                  id="mail"
                  value={mail}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input col s12">
              <label htmlFor="instagram">
                Instagram
                <input
                  name="instagram"
                  id="instagram"
                  value={instagram}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
          </div>
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

export default BoAboutConteurDigitalEdit;
