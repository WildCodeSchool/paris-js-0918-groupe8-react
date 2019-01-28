import React, { Component } from 'react';
import Editarticle from '../components/boarticle/Editarticle';
import BoNavbar from '../components/boNavbar/BoNavbar';
import AuthVerif from '../containers/AuthVerif';


class BOeditarticle extends Component {
  componentWillMount() {
    AuthVerif.protectedRoute(this.props);
  }

  render() {
    const { match: { params: { id_article } } } = this.props;
    return (
      <div className="grid-container">
        <aside className="grid-item BoNavbar">
          <BoNavbar />
        </aside>
        <main className="grid-item">


          <Editarticle id_article={id_article} />
        </main>
      </div>
    );
  }
}

export default BOeditarticle;
