import React, { Component } from 'react';
import './LogOut.css';

class LogOut extends Component {
  setLogout = () => {

  }


  render() {
    return (
      <div>

        <button
          type="submit"
          onClick={this.setLogout}
          className="btn-floating btn-medium grey darken-4 tooltipped logoutboutton"
          data-position="bottom"
          data-tooltip="Déconnexion"
          exitdelay="2"
        >
          <i className="material-icons">
            exit_to_app
          </i>
        </button>
      </div>
    );
  }
}

export default LogOut;
