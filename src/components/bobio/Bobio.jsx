/* global document */
/* global alert */

import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

import './bobio.css';
import BobioBody from './BobioBody';


class BoBio extends Component {
  state = {
    admin: [],
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
    this.setState({ admin: response.data });
  }

  setAdmin = (e) => {
    e.preventDefault();
    const { admin } = this.state;
    axios.put(
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
    admin.content = e.target.getContent();
    this.setState({ admin });
  }

  render() {
    const { admin } = this.state;

    return (
      <div>
        <h2 className="col s6"> Edition Biographie</h2>


        { admin && admin
          .filter(id => id.id_user <= 2)
          .map(elem => (
            <BobioBody
              id_user={elem.id_user}
              bio_content={elem.bio_content}
              bio_title={elem.bio_title}
              firstname={elem.firstname}
              lastname={elem.lastname}
              key={elem.id_user}
            />))}


        <a href="#1" className="btn-floating btn-large tooltipped waves-effect waves-light green darken-3 bouttonbackoffice" onClick={this.setAdmin} data-position="bottom" data-tooltip="Publier">
          <i className="material-icons">
              check
          </i>
        </a>


      </div>
    );
  }
}

export default BoBio;
