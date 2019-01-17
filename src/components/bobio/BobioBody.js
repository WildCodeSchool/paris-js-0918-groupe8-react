import React, { Component } from 'react';
import TinymceAdmin from '../tinymce/tinymceAdmin';

class BobioBody extends Component {
  render() {
    const {
      id_user, firstname, lastname, bio_title, bio_content,
    } = this.props;
    console.log(id_user);
    return (


      <div>

        <h3>
          {firstname}
          {' '}
          {lastname}
        </h3>
        <h5>
          {' '}
          {bio_title}
        </h5>
        <br />
        <TinymceAdmin bio_content={bio_content} handleBio={this.handleBioChange} />


        <br />
      </div>
    );
  }
}
export default BobioBody;
