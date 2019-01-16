import React from 'react';

const AddNewArticleButton = () => (
// balise hrf à completer quand validation de la page article ok...
  <a
    href="/admin/articles"
    className="btn-floating btn-medium waves-effect waves-light blue-grey tooltipped"
    data-position="top"
    data-tooltip="Nouvel article"
    exitdelay="2"
  >
    <i className="material-icons">
      add
    </i>
  </a>
);

export default AddNewArticleButton;
