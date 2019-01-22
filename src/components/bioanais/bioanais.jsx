import React, { Component } from 'react';
import axios from 'axios';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

import './bioAnais.css';

import Imganais from '../../assets/img/logoanais.png';


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
    console.log(bioAnaisTable);

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>

        <Navbar />

        <div className="chartepageglobal">
          <div className="container">

            <div className="coverimg">
              <div className="transbox">
                <p className="black">
                  {`${bioAnaisTable[0].firstname} ${bioAnaisTable[0].lastname}`}
                </p>
              </div>
            </div>
            <br />
            <br />
            <p className="soustitrebio">
              { bioAnaisTable[0].bio_content_short }
            </p>
            <p>
              {bioAnaisTable[0].bio_content}
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
