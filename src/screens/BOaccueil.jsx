import React, { Component } from 'react';
import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoAccueil from '../components/boaccueil/BoAccueil';
import AuthVerif from '../containers/AuthVerif';
import LogOut from '../components/buttons/Logout';

import './BOgrids.css';

class BOaccueil extends Component {
  componentWillMount() {
    AuthVerif.protectedRoute(this.props);
  }

  render() {
    return (
      <div className="grid-container">
        <header className="grid-item">
          <GoToSite />
          <LogOut />
        </header>
        <aside className="grid-item BoNavbar">
          <BoNavbar />
        </aside>
        <main className="grid-item">
          <BoAccueil />
        </main>
      </div>
    );
  }
}


export default BOaccueil;
