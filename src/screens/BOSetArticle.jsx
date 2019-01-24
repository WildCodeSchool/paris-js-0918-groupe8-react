import React, { Component } from 'react';
import GoToSite from '../components/buttons/GoToSite';
import BoNavbar from '../components/boNavbar/BoNavbar';
import SetArticle from '../components/boarticle/SetArticle';
import AuthVerif from '../containers/AuthVerif';

class BOSetArticle extends Component {
  componentDidMount() {
    AuthVerif.protectedRoute(this.props);
  }

  render() {
    const { match: { params: { id_article }, url } } = this.props;
    return (
      <div className="grid-container">
        <header className="grid-item">
          <GoToSite />
        </header>
        <aside className="grid-item BoNavbar">
          <BoNavbar />
        </aside>
        <main className="grid-item">
          <SetArticle id_article={id_article} url={url} />
        </main>
      </div>
    );
  }
}

export default BOSetArticle;
