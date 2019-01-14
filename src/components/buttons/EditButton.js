import React, { Component } from 'react';
import axios from 'axios';


class EditButton extends Component {
  setEdit = () => {
    axios
      .get(`/api/articles/blog/${this.props.id_article}`)
      .then(this.props.title);
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.setEdit}>
          <i className="material-icons">
        create
          </i>
        </button>
      </div>
    );
  }
}
export default EditButton;
