import React, { Component } from 'react';
import axios from 'axios';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

import './bioMathias.css';

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
    console.log(bioMathiasTable);

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
                  {`${bioMathiasTable[1].firstname} ${bioMathiasTable[1].lastname}`}
                </p>
              </div>
            </div>

            <br />
            <br />

            <p className="soustitrebio">
              { bioMathiasTable[1].bio_content_short }
            </p>

            <p>
              {bioMathiasTable[1].bio_content}
            </p>

            <br />
            <br />

            <div className="bouttondevischarte">
              <NavLink exact smooth to="/#contact" className="waves-effect waves-light btn blue darken-1">
                Demander devis
              </NavLink>
            </div>

          </div>
        </div>

        <Footer />

      </div>

    );
  }
}

export default Biomathias;
