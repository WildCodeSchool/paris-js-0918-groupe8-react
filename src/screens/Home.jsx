
import React, { Component } from 'react';

import Navbar from '../components/navbar/navbar';
import Coverimage from '../components/cover/cover';
import Card from '../components/blog/card';
import Charte from '../components/charte/charte';
import Newsletter from '../components/newsletter/newsletter';
import Service from '../components/Service/service';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

class Home extends Component {
  render() {
    return (

      <div className="Homehome">

        <Navbar />
        <Coverimage />
        <Card />
        <Charte />
        <Newsletter />
        <Service />
        <About />
        <Contact />
        <Footer />


      </div>
    );
  }
}

export default Home;
