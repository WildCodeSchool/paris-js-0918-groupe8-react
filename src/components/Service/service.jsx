import React, { Component } from 'react';
import axios from 'axios';

import './service.css';

class Service extends Component {
  state = {
    serviceTable: [],
    isLoading: true,
  }

  // APPEL DE LA REQUETE
  componentDidMount() {
    this.getServiceTable();
  }

  // REQUETE DES ARTICLES 5 - 6 - 7 - SERVICES
  getServiceTable = async () => {
    const res = await axios.get('/api/articles/services');
    this.setState({ serviceTable: res.data });
    this.setState({ isLoading: false });
  };


  render() {
    // déconstruction du state et alias du this.state
    const { serviceTable, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="cardglobal">
        <div className="container">

          <h3 className="center-align titreblog1">SERVICES</h3>
          <div className="row">


            {/* Service1 */}
            <div className="col s12 m6 l4">
              <div className="card hoverable">

                <div className="card-image">
                  <img src={serviceTable[0].main_picture} alt="" width="100" height="100" />
                </div>

                <div className="card-content updatetextcard">
                  <h5 className="left-align"><b>{serviceTable[0].title}</b></h5>
                  <hr />
                  <p className="left-align service-text">{serviceTable[0].short_content}</p>
                  <br />
                </div>

              </div>
            </div>


            {/* Service2 */}
            <div className="col s12 m6 l4">
              <div className="card hoverable">

                <div className="card-image">
                  <img src={serviceTable[1].main_picture} alt="" width="100" height="100" />
                </div>

                <div className="card-content">
                  <h5 className="left-align"><b>{serviceTable[1].title}</b></h5>
                  <hr />
                  <p className="left-align service-text">{serviceTable[1].short_content}</p>
                  <br />
                </div>

              </div>
            </div>


            {/* Service3 */}
            <div className="col s12 m6 l4">
              <div className="card hoverable">

                <div className="card-image">
                  <img src={serviceTable[2].main_picture} alt="" width="100" height="100" />
                </div>

                <div className="card-content ">
                  <h5 className="left-align"><b>{serviceTable[2].title}</b></h5>
                  <hr />
                  <p className="left-align service-text">{serviceTable[2].short_content}</p>
                  <br />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Service;
