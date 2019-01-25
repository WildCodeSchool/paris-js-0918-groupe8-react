import React, { Component } from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

import './bioMathias.css';


import twitterlogo from '../../assets/svg/twitter1.svg';
import maillogo from '../../assets/svg/close-envelope1.svg';
import linkedinlogo from '../../assets/svg/linkedin-logo1.svg';


class Biomathias extends Component {
  state = {
    bioMathiasTable: [],
    isLoading: true,
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getbioMathiasTable();
  }

  // REQUETE DE L'ADMIN 1
  getbioMathiasTable = async () => {
    const res = await axios.get('/api/admin');
    this.setState({ bioMathiasTable: res.data });
    this.setState({ isLoading: false });
  }

  render() {
    // déconstruction du state et alias du this.state
    const { bioMathiasTable, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>

        <Navbar />

        <div className="biopageglobal">
          <div className="container">

            <img src={bioMathiasTable[1].bio_picture} alt="Mathias Savary" className="biomathiasimg z-depth-4" />

            <p className="TitleMathias">
              {`${bioMathiasTable[1].firstname} ${bioMathiasTable[1].lastname}`}
            </p>

            <div className="reseau">
              <a href={`mailto:${bioMathiasTable[2].mail}`}>
                <img src={maillogo} alt="" width="60" height="60" className="maillogoabout hide-on-med-and-down" />
              </a>

              <a href={bioMathiasTable[1].twitter} target="_blank" rel="noopener noreferrer">
                <img src={twitterlogo} alt="" width="60" height="60" className="maillogoabout hide-on-med-and-down" />
              </a>

              <a href={bioMathiasTable[1].linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinlogo} alt="" width="60" height="60" className="maillogoabout hide-on-med-and-down" />
              </a>
            </div>

            {/* <p className="soustitrebio">
              {renderHTML(`${bioMathiasTable[1].bio_content_short}`) }
            </p> */}

            <p>
              {renderHTML(`${bioMathiasTable[1].bio_content}`) }

            </p>
            <br />
            <br />
            <div className="bouttondevischarte">
              <a href="/#contact" className="waves-effect waves-light btn blue darken-1">Demande devis</a>
            </div>
          </div>
        </div>
        <Footer />

      </div>

    );
  }
}

export default Biomathias;
