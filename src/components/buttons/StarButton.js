/* global alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StarButton.css';
import Axios from 'axios';


class StarButton extends Component {
  setFavorite = () => {
    const { idArticle, active, loadData } = this.props;
    const token = localStorage.getItem('token');
    Axios.put(
      `/api/articles/blog/favoris/${idArticle}`,
      { front_page_favorite: !active },
      { headers: { Authorization: `Bearer ${token}` } },
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
        <button
          type="submit"
          onClick={this.setFavorite}
          className="btn-floating btn-medium blue-grey tooltipped"
          data-position="rigth"
          data-tooltip="Mettre en favoris"
          exitdelay="2"
        >
          {active ? <i className="material-icons md-yellow">star</i> : (<i className="material-icons">star</i>)}
        </button>
      </div>
    );
  }
}

StarButton.propTypes = {
  active: PropTypes.number,
  // idArticle: PropTypes.number.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default StarButton;
