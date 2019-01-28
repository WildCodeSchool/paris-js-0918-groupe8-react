import React, { Component } from 'react';
import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import Bobio from '../components/bobio/Bobio';
import AuthVerif from '../containers/AuthVerif';

import './BOgrids.css';

class BObio extends Component {
  componentWillMount() {
    AuthVerif.protectedRoute(this.props);
  }

  render() {
    return (
      <div className="grid-container">
        <header className="grid-item">
          <GoToSite />
        </header>
        <aside className="grid-item BoNavbar">
          <BoNavbar />
        </aside>
        <main className="grid-item">
          <Bobio {...this.props} />
        </main>
      </div>
    );
  }
}

export default BObio;
