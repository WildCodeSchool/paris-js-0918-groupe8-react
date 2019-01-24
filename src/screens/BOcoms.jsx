import React, { Component } from 'react';
import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoCommentaire from '../components/bocommentaire/BoCommentaire';
import AuthVerif from '../containers/AuthVerif';

import './BOgrids.css';

class BOcoms extends Component {
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
        <BoCommentaire />
      </div>
    );
  }
}

export default BOcoms;
