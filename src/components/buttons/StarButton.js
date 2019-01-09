/* global alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StarButton.css';
import Axios from 'axios';


class StarButton extends Component {
  setFavorite = () => {
    const { id_article, active, loadData } = this.props;
    Axios.put(
<<<<<<< HEAD
      `/api/articles/blog/${id_article}`,
      { front_page_favorite: !active }
    )
      .then((res) => {
        if (res.data.flash !== undefined) {
          (alert(`${res.data.flash}`));
        }
      })
      .then(loadData);
=======
      `/api/articles/blog/${this.props.id_article}`,
      { front_page_favorite: !this.props.active },
    )
      .then(this.props.loadData);
>>>>>>> tinymce axios content
  }


  render() {
<<<<<<< HEAD
    const { active } = this.props;

=======
>>>>>>> tinymce axios content
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
  loadData: PropTypes.func.isRequired,
};

export default StarButton;
