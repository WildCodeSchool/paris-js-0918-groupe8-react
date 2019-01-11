import React from 'react';
import './newsletter.css';


const Newsletter = () => (
  <div className="newsletterglobal">
    <div className="container">
      <h3 className="center-align titreblog1">NEWSLETTER</h3>

      <div className="row newsletterblock grey lighten-5">
        <div className="col s12 m6">
          <p className="titledownloadlivretblanc">Devenez conteur digital :</p>
          <hr />
          <p className="left-align">Chaque semaine pendant 3 prochains mois nous vous envoyons une technique de storytelling simple et applicable pour accroître l’impact de votre communication digitale.</p>
          <p className="left-align">
          En cadeau, recevez 10 conseils des plus grands storytellers et comment les utiliser pour votre entreprise.

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
