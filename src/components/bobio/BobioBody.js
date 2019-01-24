import React, { Component } from 'react';
import TinymceAdmin from '../tinymce/tinymceAdmin';
import './bobio.css';

class BobioBody extends Component {
  render() {
    const {
      id_user, firstname, lastname, bio_title, bio_content, handleBio, handleChange, bio_picture,
    } = this.props;
    console.log(id_user);
    return (


      <div>

        <h3>
          {firstname}
          {' '}
          {lastname}
        </h3>

        <label htmlFor="title">
              Titre
          <input
            name="bio_title"
            id="title"
            value={bio_title}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="image">
              Image
          <input
            name="bio_picture"
            id="image"
            value={bio_picture}
            onChange={handleChange}
          />
        </label>

        <br />
        <div className="Editeurtinymceadmnistrateur">
          <TinymceAdmin bio_content={bio_content} handleBioChange={handleBio} />
        </div>
        <br />
      </div>
    );
  }
}
export default BobioBody;
