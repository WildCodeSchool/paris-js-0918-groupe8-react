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
      <div className="newsletterglobal">

        <div className="container">
          <h3 className="center-align titreblog1">{newsletterTable.title}</h3>

          <div className="row newsletterblock grey lighten-5">
            <div className="col s12 m6">
              <p className="titledownloadlivretblanc">
                {newsletterTable.short_content}
              </p>
              <hr />
              <p className="left-align">
                {newsletterTable.content}
              </p>
              <br />
            </div>

            <form className="col s12 m4 offset-m2">
              <div className="row">
                <div className="input-field col s12">
                  <input id="first_name2" type="text" className="validate" />
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
  }
}

export default Newsletter;
