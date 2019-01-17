import React, { Component } from 'react';
import TinymceAdmin from '../tinymce/tinymceAdmin';

class BobioBody extends Component {
  render() {
    const {
      admin, id_user, bio_title, bio_content,
    } = this.props;
    return (


      <div>
        <TinymceAdmin bio_content={bio_content} handleBio={this.handleBioChange} />
        <p><b>{id_user}</b></p>
        <p><b>{bio_title}</b></p>

        <br />
      </div>
    );
  }
}
export default BobioBody;
