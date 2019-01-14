import React, { Component } from 'react';
import axios from 'axios';

import './contact.css';


class Contact extends Component {


  state = {
    first_namee: '',
    last_name: '',
    mailcontact: '',
    entreprise: '',
    textarea2: '',
  }

  // Permet de changer le state
  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  resetForm = () => {
    this.setState({
      first_namee: '',
      last_name: '',
      mailcontact: '',
      entreprise: '',
      textarea2: '',
    });


  }

  submitForm = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/api/contact',
      data: {
        first_namee: this.state.first_namee,
        last_name: this.state.last_name,
        mailcontact: this.state.mailcontact,
        entreprise: this.state.entreprise,
        textarea2: this.state.textarea2,
      },
    }).then((response) => {
      if (response.status === 200) {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        alert("Message failed to send.")
      }
    });
  }

  render() {
    return (

      <div className="contactglobal" id="contact">
        <div className="container">
          <br />
          <br />
          <h3 className="center-align titreblog1">CONTACT</h3>

          <div className="row grey lighten-5">

            <form className="col s12 m6 offset-m3" onSubmit={this.submitForm} method="POST">

              <div className="input-field left-align col s12">
                <input id="first_namee" type="text" className="validate contact-input" onChange={this.onChange} value={this.state.first_namee} />
                <label htmlFor="first_namee">Prénom*</label>
              </div>
              <div className="input-field col s12 left-align">
                <input id="last_name" type="text" className="validate contact-input" onChange={this.onChange} value={this.state.last_name} />
                <label htmlFor="last_name">Nom*</label>
              </div>
              <div className="input-field col s12">
                <input id="mailcontact" type="email" className="validate contact-input" onChange={this.onChange} value={this.state.mailcontact} />
                <label htmlFor="mailcontact">Email*</label>
              </div>
              <div className="input-field col s12">
                <input id="entreprise" type="text" className="validate contact-input" onChange={this.onChange} value={this.state.entreprise} />
                <label htmlFor="entreprise">Entreprise</label>
              </div>

              <div className="input-field col s12">
                <textarea id="textarea2" className="materialize-textarea contact-input" data-length="120" onChange={this.onChange} value={this.state.textarea2} />
                <label htmlFor="textarea2">Message</label>

              </div>


              <div className="row">
                <div className="col s3" />
                <div className="input-field col s5 offset-s1">
                  <button className="btn waves-effect waves-light blue darken-1" type="submit" name="action">
                    Envoyer
                <i className="material-icons right">
                      send
                </i>
                  </button>
                </div>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>

    );
  }
}

export default Contact;
