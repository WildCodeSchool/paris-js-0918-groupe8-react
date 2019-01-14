import React from 'react';
// import M from 'materialize-css/dist/js/materialize.min';
// import PropTypes from 'prop-types';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import EditButton from '../buttons/EditButton';
import Tinymce from '../tinymce/tinymce';


const Editarticle = ({
  title, content,
}) => (
  <div className="col s12 m6 l4">
    <p className="center-align"><b>{title}</b></p>
    <p className="center-align"><b>{content}</b></p>
    <br />

    <div className="col s4">
      <NavLink
        exact
        to={{
          pathname: `admin/articles/${title}`,
          state: { title, content },
        }}
      />
      <center><Tinymce /></center>
      <EditButton />

    </div>
  </div>
);

export default Editarticle;
