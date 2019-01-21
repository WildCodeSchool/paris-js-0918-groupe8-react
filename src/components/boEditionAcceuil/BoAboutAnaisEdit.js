/* global alert */
/* global document */

import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min';

class BoAboutAnaisEdit extends Component {
  state = {
    firstname: '',
    lastname: '',
    mail: '',
    linkedin: '',
    // twitter: '',
    instagram: '',
    avatar: '',
    bio_title: '',
    bio_content_short: '',
  };

  componentDidMount() {
    this.getData();
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
    M.updateTextFields();
  }

  getData = async () => {
    const response = await axios.get('/api/admin/1');
    this.setState({
      firstname: response.data[0].firstname,
      lastname: response.data[0].lastname,
      mail: response.data[0].mail,
      linkedin: response.data[0].linkedin,
      // twitter: response.data[0].twitter,
      instagram: response.data[0].instagram,
      avatar: response.data[0].avatar,
      bio_title: response.data[0].bio_title,
      bio_content_short: response.data[0].bio_content_short,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const mail = formData.get('mail');
    const linkedin = formData.get('linkedin');
    // const twitter = formData.get('twitter');
    const instagram = formData.get('instagram');
    const avatar = formData.get('avatar');
    const bio_title = formData.get('bio_title');
    const bio_content_short = formData.get('bio_content_short');
    await axios
      .put('/api/admin/bio/1', {
        firstname,
        lastname,
        mail,
        linkedin,
        // twitter,
        instagram,
        avatar,
        bio_title,
        bio_content_short,
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
      firstname,
      lastname,
      mail,
      linkedin,
      // twitter,
      instagram,
      avatar,
      bio_title,
      bio_content_short,
    } = this.state;

    return (
      <div>
      
        <form onSubmit={this.editData}>
          <div className="center">
            <img
              src={avatar}
              alt={`${firstname} ${lastname}`}
              className="circle responsive-img"
              width="150"
              height="150" 
            />
          </div>
          <div className="row">
            <div className="input col s12">
              <label htmlFor="avatar">
                avatar
                <input
                  name="avatar"
                  id="avatar"
                  value={avatar}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input col s6">
              <label htmlFor="firstname">
                Prénom
                <input
                  name="firstname"
                  id="firstname"
                  value={firstname}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
            <div className="input col s6">
              <label htmlFor="lastname">
                Nom
                <input
                  name="lastname"
                  id="lastname"
                  value={lastname}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input col s12">
              <label htmlFor="bio_title">
                Fonction
                <input
                  name="bio_title"
                  id="bio_title"
                  value={bio_title}
                  onChange={this.handleChange}
                  placeholder=""
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input col s12">
              <label htmlFor="bio_content_short">
                Description
                <textarea
                  rows="10"
                  name="bio_content_short"
                  id="bio_content_short"
                  value={bio_content_short}
                  onChange={this.handleChange}
                  className="materialize-textarea"
                  style={{ height: '150rem !important' }}
                />
              </label>
            </div>
          </div>
          
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
                Site internet
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
          <div className="row">
            <div className="input col s12">
              <label htmlFor="linkedin">
                linkedin
                <input
                  name="linkedin"
                  id="linkedin"
                  value={linkedin}
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

export default BoAboutAnaisEdit;
