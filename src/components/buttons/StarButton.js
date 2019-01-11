/* global alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StarButton.css';
import Axios from 'axios';


class StarButton extends Component {
  setFavorite = () => {
    const { id_article, active, loadData } = this.props;
    Axios.put(
      `/api/articles/blog/${id_article}`,
      { front_page_favorite: !active }
    )
      .then((res) => {
        if (res.data.flash !== undefined) {
          (alert(`${res.data.flash}`));
        }
      })
      .then(loadData);
  }


  render() {
    const { active } = this.props;

    return (
      <div>
        <button type="submit" onClick={this.setFavorite}>
          {active ? <i className="material-icons md-yellow">star</i> : (<i className="material-icons">star</i>)}
        </button>
      </div>
    );
  }
}

StarButton.propTypes = {
  active: PropTypes.number.isRequired,
  id_article: PropTypes.number.isRequired,
  loadData: PropTypes.func,
};

export default StarButton;
