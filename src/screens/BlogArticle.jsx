import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Article from '../components/article/article';

// réception des props du navlink du composant "cardBody" pour les donner à "Article"
const BlogArticle = props => (
  <div>
    <Navbar />
    <Article {...props.location.state} />
    <Footer />
  </div>
);

export default BlogArticle;
