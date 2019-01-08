import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Biomathias from '../components/biomathias/biomathias';
import Bioanais from '../components/bioanais/bioanais';

const Bio = () => (
  <div>
    <Navbar />
    <Biomathias />
    <Bioanais />
    <Footer />
  </div>
);

export default Bio;
