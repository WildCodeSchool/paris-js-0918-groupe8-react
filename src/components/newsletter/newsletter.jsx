import React from 'react';
import './newsletter.css';


const Newsletter = () => (
  <div className="newsletterglobal">
    <div className="container">
      <h3 className="center-align titreblog1">NEWSLETTER</h3>

      <div className="row newsletterblock grey lighten-5">
        <div className="col s12 m6">
          <p className="titledownloadlivretblanc">Recevez le livre blanc</p>
          <hr />
          <p className="left-align">Pour recevoir le livre blanc, il suffit de vous inscrire à notre newsletter</p>
          <p className="left-align">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender
          </p>
        </div>

        <form className="col s12 m4 offset-m2">
          <div className="row">
            <div className="input-field col s12">
              <input value="" id="first_name2" type="text" className="validate" />
              <label className="active" htmlFor="first_name2">Prénom</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate newsletter-input" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 boutonenvoienewsletter">
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

export default Newsletter;
