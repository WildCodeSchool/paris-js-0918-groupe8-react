import React, { Component } from 'react';
import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoEditGlobal from '../components/boEditionAcceuil/BoEditGlobal';
import AuthVerif from '../containers/AuthVerif';

import './BOgrids.css';

class BOEditionAccueil extends Component {
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
          <div>
            <BoEditGlobal />
          </div>
        </main>
      </div>
    );
  }
}

export default BOEditionAccueil;
