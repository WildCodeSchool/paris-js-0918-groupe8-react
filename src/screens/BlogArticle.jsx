import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Article from '../components/article/article';

const BlogArticle = ({ match: { params: { article } } }) => (
  <div>
    <Navbar />
    <p>{ article }</p>
    <Article />
    <Footer />
  </div>
);

BlogArticle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      article: PropTypes.string.isRequired
    })
  })
};

export default BlogArticle;
