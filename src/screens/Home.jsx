
import React, { Component } from 'react';

import Navbar from '../components/navbar/navbar';
import Coverimage from '../components/cover/cover';
import Card from '../components/blog/card';
import Charte from '../components/charte/charte';
import Newsletter from '../components/newsletter/newsletter';

class Home extends Component {
  render() {
    return (

      <div className="Homehome">
      
        <Navbar />
        <Coverimage />
        <Charte />
        <Card />
        <Newsletter />

     
      </div>
    );
  }
}

export default Home;
