import React, { Component} from 'react';
import axios from 'axios';

import './newsletter.css';


class Newsletter extends Component {
  state = {
    newsletterTable: [],
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getNewsletterTable();
  }

  // REQUETE DE L'ARTICLE 4 - NEWSLETTER
  getNewsletterTable = async () => {
    const res = await axios.get('/api/articles/newsletter');
    this.setState({ newsletterTable: res.data[0] });
  }

  render() {
    // déconstruction du state et alias du this.state
    const { newsletterTable } = this.state;

    return (
      <div className="newsletterglobal container">

        <h3 className="center-align titreblog1">NEWSLETTER</h3>

        <div className="row newsletterblock grey lighten-5">
          <div className="col s12 m6">
            <p className="titledownloadlivretblanc">
              {newsletterTable.title}
            </p>
            <hr />
            <p className="left-align">
              {newsletterTable.short_content}
            </p>
          </div>


          <form className="col s12 m4 offset-m2">

            <label className="row input-field col s12 active" htmlFor="first_name2">
              Prénom
              <input value="" id="first_name2" type="text" className="validate" />
            </label>

            <label className="input-field col s12" htmlFor="row email">
              Email
              <input id="email" type="email" className="validate newsletter-input" />
            </label>

            <div className="row input-field col s12 boutonenvoienewsletter">
              <button className="btn waves-effect waves-light blue darken-1" type="submit" name="action">
              Envoyer
                <i className="material-icons right">
                  send
                </i>
              </button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Newsletter;
