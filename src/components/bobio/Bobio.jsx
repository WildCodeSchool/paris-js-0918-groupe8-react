/* global document */
/* global alert */

import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

import './bobio.css';
import BobioBody from './BobioBody';


class BoBio extends Component {
  state = {
    admin: {
      id_user: '', firstname: '', lastname: '', bio_title: '', bio_content: '',
    },
  }
;


  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getAdminData();
    //  tooltip sur materialize (popup des boutons)
    const elem = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elem);
  }

  componentWillReceiveProps = (nextPros) => {
    if (nextPros.location.key !== this.props.location.key) {
      window.location.reload();
    }
  }

  // REQUETE DE LA LISTE ADMIN
  getAdminData = async () => {
    const response = await axios.get(`/api/admin/${this.props.match.params.id}`);
    this.setState({ admin: response.data[0] });
  }

  setAdmin = async (e) => {
    e.preventDefault();
    const { admin } = this.state;
    await axios.put(
      `/api/admin/bio/${this.props.match.params.id}`,
      {
        bio_title: admin.bio_title,
        bio_content: admin.bio_content,
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

  handleBioChange = (e) => {
    const admin = { ...this.state.admin };
    admin.bio_content = e.target.getContent();
    this.setState({ admin });
  }

  render() {
    const { admin } = this.state;
    return (
      <div>
        <h2 className="col s6"> Edition Biographie</h2>

        <BobioBody
          id_user={admin.id_user}
          bio_content={admin.bio_content}
          bio_title={admin.bio_title}
          firstname={admin.firstname}
          handleBio={this.handleBioChange}
          lastname={admin.lastname}
          key={admin.id_user}
        />

        <a
          href="#1"
          className="btn-floating btn-medium waves-effect waves-light blue-grey tooltipped"
          onClick={this.setAdmin}
          data-position="bottom"
          data-tooltip="Publier"
        >

          <i className="material-icons">
              check
          </i>
        </a>
 
      </div>
    );
  }
}

export default BoBio;
