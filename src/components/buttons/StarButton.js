import React from 'react';
import PropTypes from 'prop-types';

import './StarButton.css';

const StarButton = ({ active }) => (
  <div>
    <button type="submit">
      {active ? <i className="material-icons md-yellow">star</i> : (<i className="material-icons">star</i>)}
    </button>
  </div>

);

StarButton.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default StarButton;
