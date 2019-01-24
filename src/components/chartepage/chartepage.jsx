import React, { Component } from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';

import './chartepage.css';

class Chartepage extends Component {
  state = {
    chartePageTable: [],
    isLoading: true,
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getChartePage();
  }

  // REQUETE DE L'ARTICLE 3 - CHARTE LONGUE
  getChartePage = async () => {
    const res = await axios.get('/api/articles/charte-long');
    this.setState({ chartePageTable: res.data[0] });
  }

  render() {
    // déconstruction du state et alias du this.state
    const { chartePageTable } = this.state;

    return (
      <div className="chartepageglobal">
        <div className="container">

          {/* image */}
          <div>
            <img src={chartePageTable.main_picture} alt="Anais et Mathias" className="fitimage-article2" />
          </div>

          {/* article */}
          <br />
          <div className="titre-article">
            { chartePageTable.title }
          </div>

          <div className="blog-article">
            <p>
              {renderHTML(`${chartePageTable.content}`) }
            </p>
          </div>

          <div className="bouttondevischarte">
            <a href="/#contact" className="waves-effect waves-light btn blue darken-1">Demande devis</a>
          </div>

        </div>
      </div>
    );
  }
}

export default Chartepage;
