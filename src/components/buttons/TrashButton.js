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
      .then(console.log(loadData))
      .then(loadData);
  }

  render() {
    const { blog_status } = this.props;
    { if (blog_status === 'archived') {
        return (
          <button
            type="submit"
            onClick={this.setPublished}
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Publier l'article"
            exitdelay="2"
          >
              <i className="material-icons">restore_page</i>
          </button>
        );
      }
        return (
          <button
            type="submit"
            onClick={this.setUnpublished}
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Archiver l'article"
            exitdelay="2"
          >
            <i className="material-icons">delete</i>
          </button>
        );}
    }
  }

TrashButton.propTypes = {
  idArticle: PropTypes.number.isRequired,
  blog_status: PropTypes.string.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default TrashButton;
