import React, { Component } from 'react';
import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import BoChartePageEdit from '../components/bocharte/BoChartePageEdit';
import AuthVerif from '../containers/AuthVerif';

class BOeditarticle extends Component {
  componentWillMount() {
    AuthVerif.protectedRoute(this.props);
  }

  render() {
    const { match: { params: { content } } } = this.props;
    return (
      <div className="grid-container">
        <header className="grid-item">
          <GoToSite />
        </header>
        <aside className="grid-item BoNavbar">
          <BoNavbar />
        </aside>
        <main className="grid-item">
          <BoChartePageEdit content={content} />
        </main>
      </div>
    );
  }
}

export default BOeditarticle;
