import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StarButton.css';
import Axios from 'axios';


class StarButton extends Component {

  setFavorite = () => {
    Axios.put(
      `/api/articles/blog/${this.props.id_article}`,
      { front_page_favorite : !this.props.active }
    )
      .then(this.props.loadData)
  }


  render() {
    
    return (
      <div>
        <button type="submit" onClick={this.setFavorite}>
          {this.props.active ? <i className="material-icons md-yellow">star</i> : (<i className="material-icons">star</i>)}
        </button>
      </div>
    )
  }

// const StarButton = ({ active }) => (
//   <div>
//   <button type="submit">
//     {active ? <i className="material-icons md-yellow">star</i> : (<i className="material-icons">star</i>)}
//   </button>
// </div>
// );
};

StarButton.propTypes = {
  active: PropTypes.number.isRequired,
};

export default StarButton;
