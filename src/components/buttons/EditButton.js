import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

class EditButton extends Component {
  setEdit = () => {
    Axios.put(
      `/api/articles/blog/${this.props.id_article}`,
      { front_page_favorite: !this.props.active },
    )
      .then(this.props.loadData);
  }


  render() {
    return (
      <div>
        <button type="submit" onClick={this.setEdit}>
          {this.props.active ? <i className="material-icons md-yellow">create</i> : (<i className="material-icons">create</i>)}
        </button>
      </div>
    );
  }
}

EditButton.propTypes = {
  active: PropTypes.number.isRequired,
};

export default EditButton;
