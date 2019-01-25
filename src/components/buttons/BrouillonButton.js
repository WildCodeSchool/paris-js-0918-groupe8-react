/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min';

class BrouillonButton extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }

  setWrittingProgress = () => {
    const { idArticle, loadData } = this.props;
    const token = localStorage.getItem('token');
    Axios
      .put(
        `/api/articles/blog/${idArticle}`,
        { blog_status: 'writting_progress' },
        { headers: { Authorization: `Bearer ${token}` } },
      )
      .then(loadData);
  }

  setPublished = () => {
    const { idArticle, loadData } = this.props;
    const token = localStorage.getItem('token');
    Axios
      .put(
        `/api/articles/blog/${idArticle}`,
        { blog_status: 'published' },
        { headers: { Authorization: `Bearer ${token}` } },
      )
      .then(loadData);
  }

  render() {
    const { blog_status } = this.props;

    return (
      <button
        type="submit"
        onClick={(blog_status === 'writting_progress') ? this.setPublished : this.setWrittingProgress}
        className="btn-floating btn-medium blue-grey tooltipped"
        data-position="top"
        data-tooltip={(blog_status === 'writting_progress') ? 'Publier l\'article' : 'Mettre en brouillon'}
        exitdelay="2"
      >
        {(blog_status === 'writting_progress') ? <i className="material-icons">check</i> : <i className="material-icons">description</i>}
      </button>
    );
  }
}

BrouillonButton.propTypes = {
  idArticle: PropTypes.string.isRequired,
  blog_status: PropTypes.string.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default BrouillonButton;
