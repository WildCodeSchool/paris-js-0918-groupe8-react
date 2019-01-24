import React, { Component } from 'react';
import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoAdmin from '../components/boadmin/BoAdmin';
import AuthVerif from '../containers/AuthVerif';

import './BOgrids.css';

class BOadmin extends Component {
  componentDidMount() {
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
        <BoAdmin />
      </div>
    );
  }
}

export default BOadmin;
