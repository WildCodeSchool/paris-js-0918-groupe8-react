import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import Tinymce from '../tinymce/tinymce';
import EditButton from '../buttons/EditButton';

class ArticleEdit extends Component {
  componentDidMount() {
    const elem = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elem);
  }

  render() {
    return (
      <div>
        <div className="row">
          <h5 className="col s6">Creation d'article</h5>

          <div className="Editeurtinymceadmnistrateur col s9">
            <Tinymce />
          </div>
          <button>
            {' '}
            {<EditButton />}
          </button>
        </div>

        <a href="#1" className="btn-floating btn-large tooltipped waves-effect waves-light green darken-3 bouttonbackoffice" data-position="bottom" data-tooltip="Publier"><i className="material-icons">check</i></a>
        <a href="#2" className="btn-floating btn-large tooltipped waves-effect deep-orange accent-3 bouttonbackoffice" data-position="bottom" data-tooltip="Supprimer"><i className="material-icons">delete</i></a>
        <a href="#1" className="btn-floating btn-large tooltipped waves-effect grey bouttonbackoffice" data-position="bottom" data-tooltip="Brouillon"><i className="material-icons">do_not_disturb_alt</i></a>

      </div>

    );
  }
}

export default ArticleEdit;
