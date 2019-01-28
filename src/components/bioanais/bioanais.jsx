import React, { Component } from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

import './bioAnais.css';

import Imganais from '../../assets/img/logoanais.png';
import maillogo from '../../assets/svg/close-envelope1.svg';
import linkedinlogo from '../../assets/svg/linkedin-logo1.svg';
import Sitelogo from '../../assets/img/global1.svg';


class Bioanais extends Component {
  state = {
    bioAnaisTable: [],
    isLoading: true,
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getBioAnaisTable();
  }

  // REQUETE DE L'ADMIN 1
  getBioAnaisTable = async () => {
    const res = await axios.get('/api/admin');
    this.setState({ bioAnaisTable: res.data });
    this.setState({ isLoading: false });
  }

  render() {
    // déconstruction du state et alias du this.state
    const { bioAnaisTable, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>

        <Navbar />

        <div className="chartepageglobal">
          <div className="container">


            <img src={bioAnaisTable[0].bio_picture} alt="Anais Jaunay" className="biomathiasimg z-depth-4" />

            <p className="TitleMathias">
              {`${bioAnaisTable[0].firstname} ${bioAnaisTable[0].lastname}`}
            </p>

            <div className="reseau">
              <a href={`mailto:${bioAnaisTable[2].mail}`}>
                <img src={maillogo} alt="" width="60" height="60" className="maillogoabout hide-on-med-and-down" />
              </a>

              <a href={bioAnaisTable[0].instagram} target="_blank" rel="noopener noreferrer">
                <img src={Sitelogo} alt="" width="60" height="60" className="maillogoabout hide-on-med-and-down" />
              </a>

              <a href={bioAnaisTable[0].linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinlogo} alt="" width="60" height="60" className="maillogoabout hide-on-med-and-down" />
              </a>
            </div>

            {/* <p className="soustitrebio">
              {renderHTML(`${bioAnaisTable[0].bio_content_short}`) }
            </p> */}
            <p>
              {renderHTML(`${bioAnaisTable[0].bio_content}`) }
            </p>
            <br />
            <br />
            <center>
              <img src={Imganais} alt="" width="200" height="200" />
            </center>
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

export default Bioanais;
