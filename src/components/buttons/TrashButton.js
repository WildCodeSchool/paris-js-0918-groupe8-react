/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min';

class TrashButton extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }

  setUnpublished = () => {
    const { idArticle, loadData } = this.props;
    Axios
      .put(
        `/api/articles/blog/${idArticle}`,
        { blog_status: 'archived' },
      )
      .then(loadData);
  }

  setPublished = () => {
    const { idArticle, loadData } = this.props;
    Axios
      .put(
        `/api/articles/blog/${idArticle}`,
        { blog_status: 'published' },
      )
      .then(loadData);
  }

  render() {
    const { blog_status } = this.props;

    return (
      <button
        type="submit"
        onClick={(blog_status === 'archived') ? this.setPublished : this.setUnpublished}
        className="btn-floating btn-medium blue-grey tooltipped"
        data-position="bottom"
        data-tooltip={(blog_status === 'archived') ? "Restaurer l'article" : "Archiver l'article"}
        exitdelay="2"
      >
        {(blog_status === 'archived') ? <i className="material-icons">restore_page</i> : <i className="material-icons">delete</i>}
      </button>
    );
  }
}

TrashButton.propTypes = {
  idArticle: PropTypes.string.isRequired,
  blog_status: PropTypes.string.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default TrashButton;
