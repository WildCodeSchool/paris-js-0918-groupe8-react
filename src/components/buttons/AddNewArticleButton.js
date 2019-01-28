import React from 'react';

const AddNewArticleButton = () => (

  <a
    href="/admin/articles/add"
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
