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


  // REQUETE DE LA LISTE ADMIN
  getAdminData = async () => {
    const response = await axios.get('/api/admin/');
    this.setState({ admin: response.data });
  }


  handleBioChange = (e) => {
    const admin = { ...this.state.admin };
    admin.content = e.target.getContent();
    this.setState({ admin });
  }

  render() {
    const { admin } = this.state;
    console.log(admin);
    return (
      <div>
        <h5 className="col s6"> Edition Biographie</h5>


        { admin && admin.map(elem => (
          <BobioBody id_user={elem.id_user} bio_content={elem.bio_content} bio_title={elem.bio_title} key={elem.id_user} />))}


        <a href="#1" className="btn-floating btn-large tooltipped waves-effect waves-light green darken-3 bouttonbackoffice" onClick={this.getAdminData} data-position="bottom" data-tooltip="Publier">
          <i className="material-icons">
              check
          </i>
        </a>


      </div>
    );
  }
}

export default BoBio;
