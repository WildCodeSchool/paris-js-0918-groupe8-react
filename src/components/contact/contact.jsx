import React from 'react';
import './contact.css';


const Contact = () => (
  <div className="contactglobal" id="contact">
    <div className="container">
      <h3 className="center-align titreblog1">CONTACT</h3>

      <div className="row grey lighten-5">

        <form className="col s12 m6 offset-m6">

          <div className="input-field left-align col s12">
            <input id="first_namee" type="text" className="validate contact-input" />
            <label htmlFor="first_namee">Prénom*</label>
          </div>
          <div className="input-field col s12 left-align">
            <input id="last_name" type="text" className="validate contact-input" />
            <label htmlFor="last_name">Nom*</label>
          </div>
          <div className="input-field col s12">
            <input id="mailcontact" type="email" className="validate contact-input" />
            <label htmlFor="mailcontact">Email*</label>
          </div>
          <div className="input-field col s12">
            <input id="entreprise" type="text" className="validate contact-input" />
            <label htmlFor="entreprise">Entreprise</label>
          </div>

          <div className="input-field col s12">
            <textarea id="textarea2" className="materialize-textarea contact-input" data-length="120" />
            <label htmlFor="textarea2">Message</label>

          </div>
          <div className="row">
            <div className="col s4 offset-s1">

              <p>
                <label>
                  <input type="checkbox" />
                  <span>Newsletter</span>
                </label>
              </p>
            </div>

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
      </div>
    </div>
  </div>


);

export default Contact;
