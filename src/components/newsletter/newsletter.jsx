import React, { Component } from 'react';
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
          <h3 className="center-align">{newsletterTable.title}</h3>

          <div className="row newsletterblock grey lighten-5">
            <div className="col s12">
              <p className="titledownloadlivretblanc center-align">
                {newsletterTable.short_content}
              </p>
              
              <p className="center-align">
                {newsletterTable.content}
              </p>
              <br />
            </div>
                    
              <div className="row">
                <div className="input-field col s12 boutonenvoienewsletter">
                <a href="http://eepurl.com/geH-AD" target="_blank" rel="noopener noreferrer" className="btn waves-effect waves-light red darken-1">
                    Abonnement
                    <i className="material-icons right">
                    account_circle
                    </i>
                  </a>
                </div>
              </div>

           
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
