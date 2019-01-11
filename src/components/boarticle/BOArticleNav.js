import React, { Component } from 'react';

// import './BOArticleNav.css';

class BOArticleNav extends Component {

  render() {

    return (
      <nav className="nav" style={{ background: '#003F5F', color: '#FFFFFF' }}>
        <ul className="tabs tabs-transparent ">
          <li className="tab waves-effect waves-light"><a href="#tous">Tous <span className="badge">x</span></a></li>
          <li className="tab waves-effect waves-light"><a href="#publies">Publiés <span className="badge">x</span></a></li>
          <li className="tab waves-effect waves-light"><a href="#brouillon">Brouillon <span className="badge">x</span></a></li>
          <li className="tab waves-effect waves-light"><a href="#supprime">Supprimé <span className="badge">x</span></a></li>
        </ul>
      </nav>
    );
  }
}

export default BOArticleNav;
