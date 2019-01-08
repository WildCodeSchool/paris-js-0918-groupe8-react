import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import Tinymce from '../tinymce/tinymce';
import './bobio.css';


class BoBio extends Component {
  componentDidMount() {
    const elem = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elem);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field col s6">
            <input value="Mathias Savary" id="first_name2" type="text" className="validate" />
            <label className="active" htmlFor="first_name2" id="label_first_name2">Titre Biographie</label>
          </div>

          <h5 className="col s6">Contenu</h5>

          <div className="Editeurtinymceadmnistrateur col s9">
            <Tinymce />
          </div>
        </div>

        <a href="#1" className="btn-floating btn-large tooltipped waves-effect waves-light green darken-3 bouttonbackoffice" data-position="bottom" data-tooltip="Publier"><i class="material-icons">check</i></a>
        <a href="#2" className="btn-floating btn-large tooltipped waves-effect deep-orange accent-3 bouttonbackoffice" data-position="bottom" data-tooltip="Supprimer"><i class="material-icons">delete</i></a>
        <a href="#1" className="btn-floating btn-large tooltipped waves-effect grey bouttonbackoffice" data-position="bottom" data-tooltip="Brouillon"><i class="material-icons">do_not_disturb_alt</i></a>
      </div>

    );
  }
}

export default BoBio;
