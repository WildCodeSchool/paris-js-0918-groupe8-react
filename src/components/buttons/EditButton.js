import React from 'react';

const EditButton = () => (
  <button
    type="submit"
    className="btn-floating btn-medium blue-grey tooltipped"
    data-position="left"
    data-tooltip="Editer l'article"
    exitdelay="2"
  >
    <i className="material-icons">
      create
    </i>
  </button>
);

export default EditButton;
